/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Init
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(document).ready(function() {

	// HOME PAGE
	
	if ($('#page.home').length) {
		drawGraph(data);
		$('#caption').fadeToggle(3000);
	}
	
	// MAP/GRAPH/TABLE PAGES
	
	if (typeof dataURL != 'undefined') {
		loader();
		$.getJSON(dataURL+'?s='+s+'&e='+e, function(json){
			if (typeof drawMap		=== 'function') { var map = set_map('#map'); drawMap(map,json); }
			if (typeof drawGraph	=== 'function') { var graph = set_graph('#graph'); drawGraph(graph,json); }
			if (typeof drawTable	=== 'function') { drawTable(json); }
			loader();
			$('#info').fadeToggle(3000);
			$('#caption').fadeToggle(3000);
		});
	}

	// PROJECT PAGES
		
	if ($('#page.project').length) {
		drawMiniMap();
	}

	// MENUBAR
	
	if ($('#graph').length || $('#map').length) { viewmode('graph'); }
	if ($('body.admin').length) { viewmode('table'); }

	$('#start_year, #end_year').change(function(){
		popover('range');
		
		var s = $('#start_year').val();
		var e = $('#end_year').val();

		loader();
		$.getJSON(dataURL+'?s='+s+'&e='+e, function(json) {
			if (typeof drawMap		=== 'function') { var map = set_map('#map'); drawMap(map,json); }
			if (typeof drawGraph	=== 'function') { var graph = d3.select('#graph'); drawGraph(graph,json); }
			if (typeof drawTable	=== 'function') { drawTable(json); }
			$('.legend_start_year').text( s );
			if (s != e) { $('.legend_end_year').text( '-'+e ); } else { $('.legend_end_year').text( '' ); }
			loader();
		});
		
	});
	
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Helper Functions
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

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

var scale = d3.scale.linear().domain([1,1E9]).range([25,500]);
var spectrum = function(d){ return d3.interpolateRgb('#333','#3f3')( d3.scale.pow().exponent(2)(d) ); }

function bubblize(d) {
	var bubbles = [];	
	for (var b in d) {
		var bubble = d[b];
		bubbles.push(bubble);
	}
	return {children: bubbles};
}

function set_graph(e) {
	var w = $('#wrapper').width(), h = $('#wrapper').height()-135; // OCI header + navbar + menubar = 135px
	var graph = d3.select(e).style("width", w+'px').style("height", h+'px');
	return graph;
}

function set_map(e) {
	var w = $('#wrapper').width(), h = $('#wrapper').height()-135; // OCI header + navbar + menubar = 135px
	$(e).width(w); $(e).height(h);
	return e;
}

function bubble_graph(e,v) {
	var w = $(e).width(), h = $(e).height();
	var bubble = d3.layout.pack().sort(null).value(function(d) { return eval(v); }).size([w,h]);
	return bubble;
}

function make_bubbles( b,v,c,u,l,i ) {

	b.enter().append('div')
		.attr('class', function(d) { return 'bubble '+eval(c); })
		.html(function(d) { return '<span class="label">'+eval(l)+'</span>'; })
		.style('top', function(d) { return Math.floor(d.y)+'px'; })
		.style('left', function(d) { return Math.floor(d.x)+'px'; })
		.style('height', 0)
		.style('width', 0)
		.style('font-size',0)
		.on("click", function(d) { return window.location = eval(u); });
	
	b.transition().duration(1000)
		.style('top', function(d) { return Math.floor(d.y-d.r)+'px'; })
		.style('left', function(d) { return Math.floor(d.x-d.r)+'px'; })
		.style('height', function(d) { return Math.floor(d.r-1)*2+'px'; })
		.style('width', function(d) { return Math.floor(d.r-1)*2+'px'; })
		.style('font-size', function(d) { return Math.floor(d.r/3)+'px'; })
		.style('background-image', function(d) { if (i) {return 'url('+eval(i)+')'; } })
		.style('background-color', function(d) { return spectrum( eval(v) ) });
	
	b.exit()
		.transition().duration(1000)
		.style('opacity', 0)
		.style('height', 0)
		.style('width', 0)
		.style('font-size', 0)
		.remove();
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Maps (using jVectorMap)
	http://jvectormap.owl-hollow.net/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

	function popRegion(cc) {
		$('#popup').fadeIn();
		$.getJSON('/regions/'+cc+'/projects.json', function(json){
			var w = $('#popup').width(), h = $('#popup').height();
/* 			var graph = d3.select('#graph').append("svg:svg").attr("width", w).attr("height", h); */
			var graph = d3.select('#graph').style("width", w+'px').style("height", h+'px');
			drawPopupGraph(graph,json);
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

fnServerObjectToArray = function (aElements) {
	return function (sSource, aoData, fnCallback) {
		$.ajax({
			"dataType": "json", 
			"type": "POST",
			"url": sSource, 
			"data": aoData, 
			"success": function (json) {
				var a = [];
				for ( var i=0, iLen=json.aaData.length ; i<iLen ; i++ ) {
					var inner = [];
					for ( var j=0, jLen=aElements.length ; j<jLen ; j++ ) {	inner.push( json.aaData[i][aElements[j]] );	}
					a.push( inner );
				}
				json.aaData = a;
				fnCallback(json);
			}
		});
	}
}