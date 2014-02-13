/**
 *	Helper functions
 */

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
	if (r == 'all') { $('.legend_start_year').text( '2008-2013' ); } else { $('.legend_start_year').text( r ); }
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

function view(v) {
	var new_hash = v || window.location.hash,
		new_view = new_hash.split('#')[1];

	$('#wrapper').attr('data-view',new_view);

	switch(new_hash) {
		case '#national':
		case '#international':
			if ($('#globe').hasClass(new_view+'-ready')) {
				$('#intro').slideUp();
				$('#navbar').slideDown();
				$('#tips').fadeIn(2000);
				$('#globe').addClass('ready').trigger('reset');
			}
			break;
		case '#graph':
		case '#table':
			$('.view'+new_hash+'view').show().siblings('.view').hide();
			$('.button.mode').removeClass('active');
			$('.button'+new_hash+'mode').addClass('active');
			break;
		default:
			var split_hash = new_hash.split('-');
			if (split_hash[0] == '#national' || split_hash[0] == '#international') {
				$('#wrapper').attr('data-cc',split_hash[1]);
				view(split_hash[0]);
			}
	}
	window.location.hash = new_hash;
	return new_hash;
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

function to_dash(s) {
	return s.replace(/\W+/g,'-').toLowerCase();
}

function find_country(id,countries) {
	var country = countries.filter(function(c) { if (c.id === id) { return true; }});
	return country[0];
}