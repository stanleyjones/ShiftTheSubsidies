/**
 *	Globe functions
 *	(requires D3.js)
 */

function draw_globe() {

	var size = size_element('#globe');

	var initial_scale = size.h / 3.333,
		zoom_scale = size.h / 1.0,
		initial_rotate = [30,-10];

	var projection = d3.geo.orthographic()
		.scale(initial_scale)
		.translate([size.w / 2,size.h / 2])
		.precision(0.5)
		.clipAngle(90)

		.rotate(initial_rotate);

	var path = d3.geo.path().projection(projection);

	var globe = d3.select('#globe').append('svg')
		.attr('width', size.w)
		.attr('height', size.h)
		.on('mousedown', globe_mousedown);

	$('#globe').on('reset',globe_reset);

	var countries;

	draw_globe_shadow( globe,projection );
	draw_globe_shading( globe,projection );
	draw_globe_graticule( globe,path );

	var viewmode;

	// INTERACTIONS

	d3.select(window)
		.on('mousemove', globe_mousemove)
		.on('mouseup', globe_mouseup);

	var m0 = null;

	function globe_mousedown() {
		m0 = [d3.event.pageX, d3.event.pageY];
		o0 = projection.rotate();
		d3.event.preventDefault();
		globe_rotate('stop');
	}

	function globe_mousemove() {
		if (m0) {
			var m1 = [d3.event.pageX, d3.event.pageY],
				o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
			projection.rotate(o1);
			globe_refresh();
		}
	}

	function globe_mouseup() {
		if (m0) {
			globe_mousemove();
			m0 = null;
		}
	}

	function globe_refresh() {
		globe.selectAll('path').attr('d', path);
		globe.selectAll('.globe_shading').attr('r', projection.scale());
	}

	function globe_reset() {
		d3.transition().duration(1000)
			.tween('rotate',function() {
				var r = d3.interpolate(projection.rotate(), initial_rotate),
					z = d3.interpolate(projection.scale(), initial_scale);
				return function(t) {
					projection.rotate(r(t));
					projection.scale(z(t));
					globe_refresh();
				};
			})
		.each('end',function() {
			globe_rotate();
		});
		d3.selectAll('.countries').classed('active',false);
	}
	function globe_rotate(state) {
		var rotations = 2,
			seconds = 120;
		switch( state || 'start' ) {
			case 'start':
				d3.transition().ease('linear').duration(seconds*1000)
					.tween('rotate',function() {
						var current = projection.rotate();
							r = d3.interpolate(current, [current[0] + (rotations*360), current[1]]);
						return function(t) {
							projection.rotate(r(t));
							globe_refresh();
						};
					});
					break;
			case 'stop':
				d3.transition().duration(0);
				break;
		}
	}
	function country_click(d) {
		var dataView = $('#wrapper').data('view');
		if (d3.select('.countries#'+d.id).classed('disabled') === false) {
			globe_rotate('stop');
			switch( dataView ) {
				case 'national':
					country_zoom(d);
					regionInfo(d.id,countries,ntnl_data);
					break;
				case 'international':
					country_zoom(d);
					popRegion(d.id,countries,intl_data);
					break;
			}
		}
	}
	function country_zoom(d) {
		var dataView = $('#wrapper').data('view'),
			country_view = '#' + dataView + '-' + d.id;
		window.location.hash = country_view;

		d3.selectAll('.countries').classed('active',false);
		if (target_country = find_country(d.id,countries)) {
			d3.select('.countries'+'#'+d.id).classed('active',true);
			d3.transition().duration(1000)
				.tween('rotate',function() {
					var p = d3.geo.centroid( target_country ),
						r = d3.interpolate(projection.rotate(), [-p[0],-p[1]+15]),
						z = d3.interpolate(projection.scale(), zoom_scale);
					return function(t) {
						projection.rotate(r(t));
						projection.scale(z(t));
						globe_refresh();
					};
				});
		}
	}

	// SHORTCUT TIPS

	function distributeTips() {
		var fields = $('#tips a'), container = $('#content'),
			width = container.width(), height = container.height(),
			radius = container.height() / 2.6,
			angle = 0, step = (2*Math.PI) / 6;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle -= step;
		});
	}
	$('#tips a').click(function(){
		var target_country = $(this).data('region');
		var country = find_country(target_country,countries);
		country_click(country);
	});

	// LOAD WORLD MAP

	d3.json('/assets/world.json', function( err, json ) {
		countries = topojson.feature(json, json.objects.countries).features;
		globe.selectAll('.countries')
			.data(countries)
			.enter().append('path')
				.attr('class', 'countries')
				.attr('id', function(d) { return d.id; })
				.attr('d', path)
				.on('click', function(d) { country_click(d); });

	});

	// LOAD DATA

	var intl_data = [],
		ntnl_data = [];

	var intl_cached = JSON.parse(localStorage.getItem('INTL'));
	if (intl_cached && (Date.now() - intl_cached.last_retrieved < (1000 * 3600 * 24))) {
		data_loaded(intl_cached,'international');
	} else {
		$.getJSON('/projects.json', function(data) {
			data_loaded(data,'intl');
			data.last_retrieved = Date.now();
			localStorage.setItem('INTL',JSON.stringify(data));
		});
	}

	var ntnl_cached = JSON.parse(localStorage.getItem('NTNL'));
	if (ntnl_cached && (Date.now() - ntnl_cached.last_retrieved < (1000 * 3600 * 24))) {
		data_loaded(ntnl_cached,'national');
	} else {
		Tabletop.init({
			key: '0AlSpzNcXJg6WdHR1Z1VNN3pLQzBJdV9kM2xXelkyVmc',
			callback: function(data) {
				data_loaded(data,'ntnl');
				data.last_retrieved = Date.now();
				localStorage.setItem('NTNL',JSON.stringify(data));
			}
		});
	}

	function data_loaded(data,dataset) {
		var dataView = $('#wrapper').data('view') || '',
			dataCC = $('#wrapper').data('cc') || '';

		switch (dataset) {

		case 'international':
			$.each(data.projects, function(index, proj) {
				if ( typeof intl_data[proj.cc] == "undefined" ) {
					intl_data[proj.cc] = {'total': 0, 'clean': 0, 'fossil': 0, 'access': 0};
				}
				if (proj.category == 'Clean') {
					intl_data[proj.cc].clean += proj.received.all;
				}
				if (proj.category == 'Fossil Fuel') {
					intl_data[proj.cc].fossil += proj.received.all;
				}
				intl_data[proj.cc].total += proj.received.all;
				intl_data[proj.cc].color = intl_data[proj.cc].clean / Math.max(intl_data[proj.cc].total,1);
				intl_data[proj.cc].color2 = (intl_data[proj.cc].clean - intl_data[proj.cc].fossil) / Math.max(intl_data[proj.cc].total,1);
			});
			break;

		case 'national':
			var max = 0,
				mult = 1000000; // Spreadsheet has data in Ms
			$.each( data['Totals'].elements, function( index, row ) {
				var cc = String(row.code);
				if ( typeof ntnl_data[cc] == 'undefined' ) {
					ntnl_data[cc] = {
						'total': 0, 
						'totalusd': 0,
						'description': row.description, 
						'currency': row.currency,
						'actionurl': row.actionurl,
						'xr': {}
					};
					for (var y = 2005; y < 2012; y++) {
						ntnl_data[cc].xr['y'+y] = row['y'+y+'xr'] || 1;
					}
				}
				ntnl_data[cc].total += parseInt(row.total * mult);
				ntnl_data[cc].totalusd += parseInt(row.totalusd * mult);

				if (parseInt(row.totalusd) > max) { max = parseInt(row.totalusd * mult); }

				if ( data[row.name] ) {

					// First fuels (oil, gas, coal, etc.)
					var fuels = [];
					$.each( data[row.name].elements, function( index,row ) {
						if ( typeof fuels[row.industry] == 'undefined' ) {
							fuels[row.industry] = {};
							for (var y = 2005; y < 2012; y++) {
								fuels[row.industry]['y'+y] = 0;
							}
						}
						for (var y = 2005; y < 2012; y++) {
							fuels[row.industry]['y'+y] += parseInt(row['y'+y] * ntnl_data[cc].xr['y'+y]) * mult || 0;
						}
					});
					var fuel_data = [];
					for ( var fuel in fuels ) {
						for (var y = 2005; y < 2012; y++) {
							fuel_data.push({'fuel': fuel, 'year': y, 'amount': fuels[fuel]['y'+y]});
						}
					}
					ntnl_data[cc].fuel_data = fuel_data;

					// Then targets (production, consumption, etc.)

					var targets = [];
					$.each( data[row.name].elements, function( index,row ) {
						if ( typeof targets[row.target] == 'undefined' ) {
							targets[row.target] = {};
							for (var y = 2005; y < 2012; y++) {
								targets[row.target]['y'+y] = 0;
							}
						}
						for (var y = 2005; y < 2012; y++) {
							targets[row.target]['y'+y] += parseInt(row['y'+y] * ntnl_data[cc].xr['y'+y]) * mult || 0;
						}
					});
					var target_data = [];
					for ( var target in targets ) {
						for (var y = 2005; y < 2012; y++) {
							target_data.push({'target': target, 'year': y, 'amount': targets[target]['y'+y]});
						}
					}
					ntnl_data[cc].target_data = target_data;
				}
			});
			$.each( data['Totals'].elements, function( index, row ) {
				var cc = String(row.code);
				ntnl_data[cc].color = parseInt(row.totalusd * mult) / max * 1.0;
			});
			break;
		}
		setTimeout(function() {
			$('.data-select.'+dataset).attr('disabled',false).click(function() {
				show_dataset(dataset);
			});
			$('#globe').addClass(dataset+'-ready');
	
			if (dataView && dataView.split('-')[0] === dataset) {
				show_dataset(dataset);		
				if (country = find_country(dataCC,countries)) {
					country_click(country);
				}
			}
		},2000);
	}

	function show_dataset(dataset) {
		switch(dataset) {
			case 'national':
				color_countries( globe, ntnl_data, 'ntnl' );
				$('#ntnl-nav').show().siblings().hide();
				break;
			case 'international':
				color_countries( globe, intl_data, 'intl' );
				$('#intl-nav').show().siblings().hide();
				break;
		}
		$('.'+dataset+'-tips').show().siblings().hide();
		distributeTips();
		view('#'+dataset);
	}
}

function color_countries( globe, data, mode ) {
	globe.selectAll('.countries')
		.classed('disabled',true);
	globe.selectAll('.countries')
		.filter(function(d) { if (data[d.id]) return true; })
		.classed('disabled',false)
		.transition(500)
		.style('fill', function(d) {
			if (data[d.id]) { return (mode == 'ntnl') ? spectrum_ntnl( data[d.id].color ) : spectrum_intl( data[d.id].color2 ); }
		});
}

function draw_globe_shadow( globe, projection ) {
	var globe_shadow = globe.append('defs').append('radialGradient')
		.attr('cx', '50%').attr('cy', '50%')
		.attr('id', 'globe_shadow');
	globe_shadow.append('stop')
		.attr('offset','20%')
		.attr('stop-color', '#000')
		.attr('stop-opacity','.5');
	globe_shadow.append('stop')
		.attr('offset','100%')
		.attr('stop-color', '#000')
		.attr('stop-opacity','0');
	globe.append('ellipse')
		.attr('cx', '50%').attr('cy', '75%')
		.attr('rx', projection.scale() * 0.90)
		.attr('ry', projection.scale() * 0.25)
		.style('fill', 'url(#globe_shadow)');
}

function draw_globe_shading( globe, projection ) {
	var globe_shading = globe.append('defs').append('radialGradient')
		.attr('cx', '50%').attr('cy', '40%')
		.attr('id', 'globe_shading');
		globe_shading.append('stop')
			.attr('offset','50%').attr('stop-color', '#eef');
		globe_shading.append('stop')
			.attr('offset','100%').attr('stop-color', '#bbc');
	globe.append('circle').attr('class','globe_shading')
		.attr('cx', '50%').attr('cy', '50%')
		.attr('r', projection.scale())
		.attr('fill','url(#globe_shading)');
}

function draw_globe_graticule( globe, path ) {
	var graticule = d3.geo.graticule();
	globe.append('path')
		.datum(graticule)
		.attr('class', 'graticule')
		.attr('d', path);
}