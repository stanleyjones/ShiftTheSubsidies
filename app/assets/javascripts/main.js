/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Init
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(document).ready(function() {

	// HOME

	if ($('#page.home').length) {
		draw_mini_graph(data);
		$('#caption').fadeToggle(3000);
	}

	// MAP/GRAPH/TABLE

	if ((typeof dataURL != 'undefined') && ($('#graph').length || $('#table').length || $('#map').length )) {
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
	if ($('#map').length   && typeof draw_map   === 'function') { draw_map( data ); }
	if ($('#graph').length && typeof draw_graph	=== 'function') { draw_graph( data ); }
	if ($('#table').length && typeof draw_table	=== 'function') { draw_table( data ); }
}

function size_element(e) {
	var c = $('#popup '+e).length ? '#popup' : '#wrapper';
	var w = $(c).width(), h = $(c).height();
	if (c == '#wrapper') { h -= 135; } // OCI header + navbar + menubar = 135px
	$(e).width(w).height(h);
	return {"w":w,"h":h};
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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Graphs (using d3.js)
	http://mbostock.github.com/d3/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var spectrum = function(d){ return d3.interpolateRgb('#333','#3f3')( d3.scale.pow().exponent(2)(d) ); };
var scale = function(d,max){ return d3.scale.linear().domain([0,max]).range([1,5000]).clamp(true).nice()(d); };

function draw_bubble_graph( graph,json ) {
	var size = size_element('#graph');

	var pack = d3.layout.pack().sort(null).size([size['w'],size['h']])
		.value(function(d) { return scale(eval('d.'+graph['value']),graph['max_value']); })
		.children(function(d) { return eval('d.'+graph['objects']); });

	// var flat = [];
	// json.forEach( function(i) { flat.push(i); });

	var bubbles = d3.select('#graph').selectAll("div.bubble")
		.data( pack( json ).filter(function(d) { return !d.children; }) );

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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Maps (using jVectorMap)
	http://jvectormap.owl-hollow.net/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function popRegion( cc ) {
	$('#popup').fadeIn();
	loader();
	$.getJSON('/regions/'+cc+'/projects.json', function( json ) {
		var size = size_element( '#graph','#popup' );
		draw_popup_graph( json );
		loader();
	});
}

$('button.close').click(function() {
	$('#popup').fadeOut();
	$('#popup #graph').html('');
});

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