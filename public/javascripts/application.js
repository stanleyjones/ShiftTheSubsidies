/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Init
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$(function() {

	// HOME PAGE
	
	if ($('#page.home').length) {
		check_for_svg();
		loader();
		drawGraph(data);
		loader();
		$('#caption').fadeToggle(3000);
	}
	
	// MAP/GRAPH/TABLE PAGES
	
	if (typeof dataURL != 'undefined') {
		check_for_svg();
		loader();
		$.getJSON(dataURL+'?s='+s+'&e='+e, function(json){
			if (typeof drawMap		=== 'function') { drawMap(json); }
			if (typeof drawGraph	=== 'function') { var graph = set_graph('#graph'); drawGraph(graph,json); }
			if (typeof drawTable	=== 'function') { drawTable(json); }
			loader();
			$('#info').fadeToggle(3000);
			$('#caption').fadeToggle(3000);
		});
	}

	// PROJECT PAGES
		
	if ($('#page.project').length) {
		check_for_svg();
		drawMiniMap();
	}
	
	// ENTITY PAGES
	
	if ($('#graph').length && !$('#table').length) {
		check_for_svg();
		loader();

		var graph = set_graph('#graph');

		$.getJSON(dataURL+'?s='+s+'&e='+e, function(json){
			drawGraph(graph,json);
			loader();
			$('#info').fadeToggle(3000);
			$('#caption').fadeToggle(3000);
		});
		
	}

	// ADMIN
	
	if ($('body.admin').length) { viewmode('table'); }
	
	// MENUBAR
/* 	if ($('#mode').length && $('#graph').length) { viewmode('graph'); } */

	$('#start_year, #end_year').change(function(){
		popover('range');
		
		s = $('#start_year').val();
		e = $('#end_year').val();

		$.getJSON(dataURL+'?s='+s+'&e='+e, function(json) {
			drawGraph(graph,json);
			drawTable(json);
			$('.legend_start_year').text( s );
			if (s != e) { $('.legend_end_year').text( '-'+e ); } else { $('.legend_end_year').text( '' ); }
		});
		
	});
	
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Helper Functions
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function check_for_svg() {
	if (Modernizr.svg && Modernizr.inlinesvg) {
 		$('#svgwarning').remove();
 		viewmode('graph');
	} else {
		$('#svgwarning').toggle();
		viewmode('table');
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
	x = n.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2');	}
	return x1;
}

function loader() {
	if ($('#loader').length) {
		$('#loader').fadeToggle();
	} else {
		$('#wrapper').append('<div id="loader">Loading...</div>');
	}
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	Graphs (using d3.js)
	http://mbostock.github.com/d3/
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var scale = d3.scale.linear().domain([1,1E9]).range([50,500]);
var pow = d3.scale.pow().exponent(2);
var color = d3.interpolateRgb("#630","#6f6");

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
	var graph = d3.select(e).append("svg:svg").attr("width", w).attr("height", h);
	return graph;
}

function bubble_graph(e,v) {
	var w = $(e).width(), h = $(e).height();
	var bubble = d3.layout.pack().sort(null).value(function(d) { return eval(v); }).size([w,h]);
	return bubble;
}

function make_labels(l,t) {
	l.enter().append("svg:text")
		.attr("class", "label")
		.text(function(d) { return eval('d.data.'+t); })
		.attr("x", function(d) { return d.x; })
		.attr("y", function(d) { return d.y; })
		.attr("style", "opacity:0; font-size:0;");
	
	l.transition().duration(1000)
		.attr("x", function(d) { return d.x; })
		.attr("y", function(d) { return d.y; })
		.attr("style", function(d) { return "opacity:1; font-size:"+(d.r / 3) + "px"; });

	l.exit().transition().duration(1000)
		.attr("style", "opacity:0; font-size:0;")
		.remove();
}

function make_nodes(n,c,u,f) {
	n.enter().append("svg:circle")
		.attr("class", function(d) { return "node "+eval('d.data.'+c); })
		.attr("cx", function(d) { return d.x; })
		.attr("cy", function(d) { return d.y; })
		.attr("r", 0)
		.on("click", function(d) { return window.location = eval(u); });

	n.transition().duration(1000)
		.attr("cx", function(d) { return d.x; })
		.attr("cy", function(d) { return d.y; })
		.attr("r", function(d) { return d.r; });
			
	n.exit()
		.transition().duration(1000)
		.attr("r", 0)
		.remove();	
}

function make_icons(i,s,u) {
	i.enter().append("svg:image")
		.attr("class", "circle")
		.attr("xlink:href", function(d) { return eval('d.data.'+s); })
		.attr("x", function(d) { return d.x - (d.r / 2) + "px"; })
		.attr("y", function(d) { return d.y - (d.r / 2) + "px"; })
		.attr("style", "opacity:0;")
		.on("click", function(d) { return window.location = eval(u); });
	
	i.transition().duration(1000)
		.attr("x", function(d) { return d.x - (d.r / 2) + "px"; })
		.attr("y", function(d) { return d.y - (d.r / 2) + "px"; })
		.attr("width", function(d) { return d.r + "px"; })
		.attr("height", function(d) { return d.r + "px"; })
		.attr("style", "opacity:1;");
		
	i.exit()
		.transition().duration(1000)
		.attr("style", "opacity:0;")
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
			var graph = d3.select('#graph').append("svg:svg").attr("width", w).attr("height", h);
			drawPopupGraph(graph,json);
		});
	}

	$('button.close').click(function() {
		$('#popup').fadeOut();
		$('#popup svg').remove();
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