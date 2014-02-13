/**
 *	Graph functions
 *	(requires D3.js)
 */

var spectrum_intl = function(d){ return d3.interpolateRgb('#333','#3f3')( d3.scale.pow().exponent(2)(d) ); };
var spectrum_ntnl = function(d){ return d3.interpolateRgb('#cc9','#333')( d3.scale.pow().exponent(1)(d) ); };
var scale = function(d,max){ return d3.scale.linear().domain([0,max]).range([1,5000]).clamp(true).nice()(d); };

function draw_bubble_graph( graph,data ) {
	var size = size_element('#graph'),
		margin = 20,
		w = size.w - margin * 2,
		h = size.h - margin * 2;

	var pack = d3.layout.pack().sort(null).size([w,h])
		.value(function(d) { return scale(eval('d.'+graph.value),graph.max_value); })
		.children(function(d) { return eval('d.'+graph.objects); });

	var bubbles = d3.select('#graph').selectAll("div.bubble")
		.data( pack( data ).filter(function(d) { return !d.children; }) );

	draw_bubbles( bubbles,graph.label,graph.color );
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
	.delay(function(d,i){ return i*25; })
	.style('background-image', function(d) { if (d.icon) {return 'url('+d.icon+')'; }})
	.style('background-color', function(d) { if (color) { return spectrum_intl( eval(color) ); }})
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

function draw_bar_chart( cc,ntnl_data,data_field ) {

	// Set up the chart

	var size = size_element('#chart'),
		margin = 20;
		w = size.w - margin * 3;
		h = size.h * 0.66 - margin;
		console.log(size);

	var x = d3.scale.ordinal().rangeRoundBands([0, w], 0.1),
		y = d3.scale.linear().rangeRound([h, 0]);

	var chart = d3.select('#chart').append('svg')
		.attr('class',data_field)
		.attr('height', h+margin*2).attr('width', size.w);

	var field = data_field || 'fuel';

	// Raw data
	var fuel_data = ntnl_data[cc][field+'_data'];

	// Nest by fuel type
	var fuels_nested = d3.nest()
		.key(function(d){ return d[field]; })
		.entries(fuel_data);

	// Remap to x,y preparing for stack
	var fuels_mapped = fuels_nested.map(function(d,i){
		return {
			name: d.key,
			values: d.values.map(function(dd,ii){ return {x: dd.year, y: dd.amount}; })
		};
	});

	var stack = d3.layout.stack()
		.values(function(d) { return d.values; })
		.offset('zero');

	var fuels_stacked = stack(fuels_mapped);

	// Layout

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom')
		.tickFormat( d3.format('2000') );

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient('left')
		.ticks(3)
		.tickFormat( function(d) { return '$' + to_short(d); });

	x.domain(fuels_stacked[0].values.map(function(d) { return d.x; }));
	y.domain([0, d3.max(fuels_stacked[fuels_stacked.length - 1].values, function(d) { return d.y0 + d.y; })]);

	var fuels = chart.selectAll('g.fuels')
		.data(fuels_stacked)
		.enter().append('g')
			// .style('fill',function(d,i){ return (field == 'fuel') ? z(i) : z2(i); })
			.attr('class',function(d) { return 'bar ' + to_dash(d.name); });

	var bars = fuels.selectAll('rect')
		.data(function(d){ return d.values; });

		bars.enter()
			.append('rect')
			.attr('x', function(d) { return 2 * margin + x(d.x); })
			.attr('y', h)
			.attr('height', 0)
			.attr('width', x.rangeBand());

		bars.transition()
			.delay(function(d,i){ return 1000 + i*100; })
			.duration(1000)
			.attr('y', function(d) { return y(d.y0) - (h - y(d.y)); })
			.attr('height', function(d) { return h - y(d.y); });

		bars.exit()
			.transition()
				.duration(200)
				.attr('height', 0)
				.remove();

	chart.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate('+margin*2+',' + h + ')')
		.call(xAxis);
	chart.append('g')
		.attr('class', 'y axis')
		.attr('transform', 'translate('+margin*2+',0)')
		.call(yAxis);

	var legend = chart.selectAll(".legend")
		.data(fuels_stacked);

		legend.enter()
			.append("g")
			.attr("class", "legend")
			.attr("transform", function(d, i) { return "translate(" + 2 * margin + "," + (h + margin) + ")"; })
			.style('opacity',0);

		legend.transition()
			.delay(2000)
			.duration(500)
			.style('opacity',1);

		legend.exit()
			.transition()
			.duration(500)
			.style('opacity',0)
			.remove();

		legend.append("rect")
			.attr("x", function(d,i) { return i * 100; })
			.attr("width", 18)
			.attr("height", 18)
			.attr('class', function(d) { return 'legend ' + to_dash(d.name); });
			// .style('fill', function(d,i) { return (field == 'fuel') ? z(i) : z2(i); });

		legend.append("text")
			.attr("x", function(d,i) { return 24 + i * 100; })
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("text-anchor", "left")
			.text(function(d,i) { return d.name; });

}