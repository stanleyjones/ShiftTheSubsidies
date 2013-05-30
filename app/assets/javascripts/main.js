/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Init
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(document).ready(function() {

	// HOME

	if ($('#globe').length) {
		$('#navbar').hide();
		draw_globe();
	}

	// MAP/GRAPH/TABLE

	if ((typeof dataURL !== 'undefined') && ($('#graph').length || $('#table').length || $('#map').length )) {
		draw_elements();
	}

	$('#start_year, #end_year, #r').change(function(e){
		popover('range');
		r = $('#r').val();
		draw_elements();
	});

	// PROJECT

	if ($('#page.project').length) {
		draw_mini_map();
	}

	// MENUBAR

	if ($('#graph').length || $('#map').length) { viewmode('graph'); }
	if ($('body.admin').length) { viewmode('table'); }

});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Helper Functions
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function draw_elements() {
	if (typeof data == 'undefined' || data === '') {
		loader();
		$.getJSON(dataURL, function( json ) {
			data = json;
			draw_elements_from_data( data );
			loader();
			update_legend( r );
		});
	} else {
		draw_elements_from_data( data );
		update_legend( r );
	}
}

function draw_elements_from_data( data ) {
	var graphdata = $.extend(true, {}, data);
	if ($('#map').length   && typeof draw_map   === 'function') { draw_map( data ); }
	if ($('#graph').length && typeof draw_graph	=== 'function') { draw_graph( graphdata ); }
	if ($('#table').length && typeof draw_table	=== 'function') { draw_table( data ); }
}

function size_element(e) {
	var w = $(e).parent().width(),
		h = $(e).parent().height();
	$(e).width(w).height(h);
	return {'w':w,'h':h};
}

function update_legend( r ) {
	if (r == 'all') { $('.legend_start_year').text( '2008-2012' ); } else { $('.legend_start_year').text( r ); }
	$('.legend_end_year').text( '' );
	$('#info, #caption').fadeIn(3000);
}

function loader() {
	if ($('#loader').length) {
		$('#loader').fadeToggle();
	} else {
		$('#wrapper').append('<div id="loader">Loading...</div>');
	}
}

function viewmode(v) {
	$('div.view').hide();
	$('#mode button').removeClass('active');
	$('#'+v+'view').show();
	$('button.'+v).addClass('active');
}

function popover(e) {
	$('#'+e).slideToggle();
}

function to_currency(n) {
	n += '';
	var x = n.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2');	}
	return x1;
}

function to_short(n) {
	var sizes = ' KMBT';
	if (n <= 0) return '0';
	var t2 = Math.min(Math.floor(Math.log(n)/Math.log(1000)), 12);
	return (Math.round(n * 100 / Math.pow(1000, t2)) / 100) + sizes.charAt(t2).replace(' ', '');
}

function find_country(id,countries) {
	var country = countries.filter(function(c) { if (c.id === id) { return true; }});
	return country[0];
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Graphs (using d3.js)
	http://mbostock.github.com/d3/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var spectrum = function(d){ return d3.interpolateRgb('#333','#3f3')( d3.scale.pow().exponent(2)(d) ); };
var scale = function(d,max){ return d3.scale.linear().domain([0,max]).range([1,5000]).clamp(true).nice()(d); };

function draw_bubble_graph( graph,data ) {
	var size = size_element('#graph');

	var pack = d3.layout.pack().sort(null).size([size['w'],size['h']])
		.value(function(d) { return scale(eval('d.'+graph['value']),graph['max_value']); })
		.children(function(d) { return eval('d.'+graph['objects']); });

	var bubbles = d3.select('#graph').selectAll("div.bubble")
		.data( pack( data ).filter(function(d) { return !d.children; }) );

	draw_bubbles( bubbles,graph['label'],graph['color'] );
}

function draw_bubbles( bubbles,label,color ) {
  bubbles.enter().append('div')
    .attr('class', function(d) { if (d.category) { return 'bubble '+d.category; } else { return 'bubble'; }})
    .html(function(d) { return '<span class="label">'+eval(label)+'</span>'; })
    .on("click", function(d) { if (d.url) { window.location = d.url; }})
    .style('top', function(d) { return Math.floor(d.y)+'px'; })
    .style('left', function(d) { return Math.floor(d.x)+'px'; })
	.style('opacity', 0)
    .style('height', 0)
    .style('width', 0)
    .style('font-size',0);

  bubbles.transition().duration(1000)
    .style('background-image', function(d) { if (d.icon) {return 'url('+d.icon+')'; }})
    .style('background-color', function(d) { if (color) { return spectrum( eval(color) ); }})
	.style('opacity', 1)
    .style('top', function(d) { return Math.floor(d.y-d.r)+'px'; })
    .style('left', function(d) { return Math.floor(d.x-d.r)+'px'; })
    .style('height', function(d) { return Math.floor(d.r-1)*2+'px'; })
    .style('width', function(d) { return Math.floor(d.r-1)*2+'px'; })
    .style('font-size', function(d) { return Math.floor(d.r/3)+'px'; });

	bubbles.filter(function(d) { return d.value == 1; })
		.transition().duration(1000)
		.style('opacity', 0)
		.style('height', 0)
		.style('width', 0)
		.style('font-size', 0);
}

function draw_bar_chart( cc ) {

	var size = size_element('#chart'),
		margin = 30;
		w = size['w']-margin*3;
		h = size['h']/2 - margin;

	var x = d3.scale.linear().range([0, w]),
		y = d3.scale.linear().range([h, 0]),
		z = d3.scale.category20c();

	var area = d3.svg.area()
		.interpolate('cardinal')
		.x(function(d) { return x(d.year); })
		.y0(function(d) { return y(d.y0); })
		.y1(function(d) { return y(d.y0 + d.y); });

	var stack = d3.layout.stack()
		.values(function(d) { return d.values; })
		.x(function(d) { return d.year; })
		.y(function(d) { return d.amount; });

	var chart = d3.select('#chart').append('svg')
		.attr('height', h+margin*2).attr('width', size['w']);

	var nest = d3.nest()
		.key(function(d) { return d.fuel; });

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom')
		.ticks(7)
		.tickFormat( d3.format('2000') );

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient('left')
		.ticks(3)
		.tickFormat( d3.format('1s'));

	Tabletop.init({
		key: '0AlSpzNcXJg6WdHR1Z1VNN3pLQzBJdV9kM2xXelkyVmc',
		parseNumbers: true,
		callback: function(data, tabletop) {

			var fuel_data = [];
			$.each( data[cc].elements, function( index,row ) {
				fuel_data.push(
					{'fuel': row.fuel, 'year': 2005, 'amount': row.y2005},
					{'fuel': row.fuel, 'year': 2006, 'amount': row.y2006},
					{'fuel': row.fuel, 'year': 2007, 'amount': row.y2007},
					{'fuel': row.fuel, 'year': 2008, 'amount': row.y2008},
					{'fuel': row.fuel, 'year': 2009, 'amount': row.y2009},
					{'fuel': row.fuel, 'year': 2010, 'amount': row.y2010},
					{'fuel': row.fuel, 'year': 2011, 'amount': row.y2011}
					// {'fuel': row.fuel, 'year': 2012, 'amount': row.y2012},
					// {'fuel': row.fuel, 'year': 2013, 'amount': row.y2013}
				);
			});

			var fuels = stack(nest.entries( fuel_data ));

			x.domain(d3.extent(fuel_data, function(d) { return d.year; }));
			y.domain([0, d3.max(fuel_data, function(d) { return d.y0 + d.y; })]);

			var fuel = chart.selectAll('.fuel')
				.data(fuels)
				.enter().append('g')
					.attr('class','fuel')
					.attr('transform','translate('+margin*2+',0)');

			fuel.append('path')
				.attr('class',function(d) { return 'area ' + d.key.replace(/\s/g,'').toLowerCase(); })
				.attr('d', function(d) { return area(d.values); });

			fuel.append('text')
				.attr('class','label')
				.datum(function(d) { return {key: d.key, value: d.values[parseInt(d.values.length / 2)]}; })
				.text(function(d) { return d.key; })
				.attr('transform', function(d) { return 'translate('+(w / 2)+','+y(d.value.y/2 + d.value.y0)+')'; });

			chart.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate('+margin*2+',' + h + ')')
				.call(xAxis);

			chart.append('g')
				.attr('class', 'y axis')
				.attr('transform', 'translate('+margin*2+',0)')
				.call(yAxis);
		}
	});
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Maps (using jVectorMap)
	http://jvectormap.owl-hollow.net/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function popRegion( cc,countries,intl_data ) {

	$('#masthead, #info #chart').hide();

	var country = find_country( cc, countries );

	$('#info .name').html(country.properties.name);
	$('#info .total').html( '$' + to_currency(intl_data[String(cc).toLowerCase()].total) + ' in international subsidies' );
	$('#info .description').html('');

	$.getJSON('/regions/'+cc+'/projects.json', function( json ) {
		draw_popup_graph( json );
		// loader();
		$('#info #graph').show();
		$('#info').slideDown(500);
		$('#masthead').fadeOut('fast');
	});

}

$('.close').click(function() {
	$('#info').slideUp(500);
	$('#graph').html('');
	$('#chart').html('');
	$('#masthead').fadeIn(1000);
	window.location.hash = '';
});

$('#info').hide();

function regionInfo( cc,countries,ntnl_data ) {

	$('#masthead, #info #graph').hide();

	var info = $('#info'),
		country = find_country( cc, countries );

	$('#info .name').html(country.properties.name);
	$('#info .total').html( '$' + to_currency(ntnl_data[String(cc).toLowerCase()].total) + ' in domestic subsidies' );
	$('#info .description').html(ntnl_data[String(cc).toLowerCase()].description);

	draw_bar_chart( cc );

	info.slideDown(500);
	$('#masthead').fadeOut('fast');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Globe (using d3.js)
	http://mbostock.github.com/d3/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function draw_globe() {

	var size = size_element('#globe');

	var initial_scale = size['h']/2.5,
		zoom_scale = size['h']/1.0,
		initial_rotate = [30,-10];

	var viewmode;

	var projection = d3.geo.orthographic()
		.scale(initial_scale)
		.translate([size['w']/2,size['h']/2])
		.clipAngle(90)
		.rotate(initial_rotate);

	var path = d3.geo.path().projection(projection);

	var globe = d3.select('#globe').append('svg')
		.attr('width', size['w'])
		.attr('height', size['h'])
		.on('mousedown', globe_mousedown);

	var countries;

	draw_globe_shadow( globe,projection );
	draw_globe_shading( globe,projection );
	draw_globe_graticule( globe,path );

	// INTERACTIONS

	d3.select(window)
		.on("mousemove", globe_mousemove)
		.on("mouseup", globe_mouseup);

	$(window).on('hashchange', function() {
		viewmode = window.location.hash;
		switch( viewmode ) {
			case '#domestic':
				$('#navbar').slideUp();
				globe_reset();
				color_countries( globe, ntnl_data );
				break;
			case '#international':
				$('#navbar').slideDown();
				globe_reset();
				color_countries( globe, intl_data );
				break;
			case '':
				globe_reset();
				color_countries( globe );
				break;
			default:
				break;
		}	
	});

	var m0 = null;

	function globe_mousedown() {
		m0 = [d3.event.pageX, d3.event.pageY];
		o0 = projection.rotate();
		d3.event.preventDefault();
	}

	function globe_mousemove() {
		if (m0) {
			var m1 = [d3.event.pageX, d3.event.pageY],
				o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
			// o1[1] = o1[1] > 30 ? 30 : o1[1] < -30 ? -30 : o1[1];
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
		globe.selectAll('.graticule').attr('d', path);
		globe.selectAll('.countries').attr('d', path);
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
				}
			});
	}
	function country_click(d) {
		switch( viewmode ) {
			case '#domestic':
				country_zoom(d);
				regionInfo(d.id,countries,ntnl_data);
				break;
			case '#international':
				country_zoom(d);
				popRegion(d.id,countries,intl_data);
				break;
		}
	}
	function country_zoom(d) {
		window.location.hash = d.id;
		if (target_country = find_country(d.id,countries)) {
			d3.transition().duration(1000)
				.tween('rotate',function() {
					var p = d3.geo.centroid( target_country ),
						r = d3.interpolate(projection.rotate(), [-p[0],-p[1]+15])
						z = d3.interpolate(projection.scale(), zoom_scale);
					return function(t) {
						projection.rotate(r(t));
						projection.scale(z(t));
						globe_refresh();
					}
				});
		}
	}

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

	d3.json('/projects.json', function( json ) {
		$.each(json.projects, function(index, proj) {
			if ( typeof intl_data[proj.cc] == "undefined" ) {
				intl_data[proj.cc] = {'total': 0, 'clean': 0, 'access': 0};
			}
			if (proj['clean?'])    { intl_data[proj.cc].clean += proj['received']['all']; }
			intl_data[proj.cc].total += proj['received']['all'];
			intl_data[proj.cc].color = intl_data[proj.cc].clean / Math.max(intl_data[proj.cc].total,1);
		});
	});

	Tabletop.init({
		key: '0AlSpzNcXJg6WdHR1Z1VNN3pLQzBJdV9kM2xXelkyVmc',
		callback: function(data, tabletop) {
			var max = 0;
			$.each( data['Country Totals'].elements, function( index, row ) {
				var cc = String(row.countrycode).toLowerCase();
				if ( typeof ntnl_data[cc] == 'undefined' ) {
					ntnl_data[cc] = {'total': 0, 'description': row.description};
				}
				ntnl_data[cc].total += parseInt(row.total);
				if (parseInt(row.total) > max) { max = parseInt(row.total); }
			});
			$.each( data['Country Totals'].elements, function( index, row ) {
				var cc = String(row.countrycode).toLowerCase();
				ntnl_data[cc].color = parseInt(row.total) / max * 1.0;
			});
		}
	});
}

function color_countries( globe, data ) {
	globe.selectAll('.countries')
		.transition(500)
		.style('fill', function(d) {
			if ( data ) {
				var cc = String(d.id).toLowerCase();
				if (data[cc]) { return spectrum( data[cc].color ); }
			} else {
				return '#999';
			}
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
		.attr('cx', '50%').attr('cy', '90%')
		.attr('rx', projection.scale()*.90)
		.attr('ry', projection.scale()*.25)
		.style('fill', 'url(#globe_shadow)');
}

function draw_globe_shading( globe, projection ) {
	var globe_shading = globe.append('defs').append('radialGradient')
		.attr('cx', '50%').attr('cy', '40%')
		.attr('id', 'globe_shading');
	globe_shading.append('stop')
		.attr('offset','50%').attr('stop-color', '#fff');
	globe_shading.append('stop')
		.attr('offset','100%').attr('stop-color', '#ccc');
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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Tables (using dataTables jQuery plugin)
	http://datatables.net/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

jQuery.fn.dataTableExt.oSort['percent-asc']  = function(a,b) {
	var x = (a == "-") ? 0 : a.replace( /%/, "" );
	var y = (b == "-") ? 0 : b.replace( /%/, "" );
	x = parseFloat( x );
	y = parseFloat( y );
	return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};

jQuery.fn.dataTableExt.oSort['percent-desc'] = function(a,b) {
	var x = (a == "-") ? 0 : a.replace( /%/, "" );
	var y = (b == "-") ? 0 : b.replace( /%/, "" );
	x = parseFloat( x );
	y = parseFloat( y );
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};

jQuery.fn.dataTableExt.oSort['currency-asc'] = function(a,b) {
	var x = a == "-" ? 0 : a.replace( /,/g, "" );
	var y = b == "-" ? 0 : b.replace( /,/g, "" );
	x = x.substring( 1 );	y = y.substring( 1 );
	x = parseFloat( x );	y = parseFloat( y );
	return x - y;
};

jQuery.fn.dataTableExt.oSort['currency-desc'] = function(a,b) {
	var x = a == "-" ? 0 : a.replace( /,/g, "" );
	var y = b == "-" ? 0 : b.replace( /,/g, "" );
	x = x.substring( 1 );	y = y.substring( 1 );
	x = parseFloat( x );	y = parseFloat( y );
	return y - x;
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Currency Conversion (using money.js/fx)
	http://josscrowcroft.github.com/money.js/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function autoconvert() {
	var amount_original = $('#subsidy_amount_original').val();
	var original_currency = $('#subsidy_currency').val();

	fx.settings = { from: original_currency, to: 'USD' };
	var amount_usd = fx.convert( amount_original );

	$('#subsidy_amount_usd').val(Math.round( amount_usd ));
}