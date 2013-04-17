var DIR = '/javascripts/';

Modernizr.load([
	{	// JQuery from Google CDN with local fallback (1.7+ includes Sizzle)
		load: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
		complete: function () { if ( !window.jQuery ) { Modernizr.load(DIR+'jquery-1.9.1.min.js'); }}
	},
	{	// Libs dependent on JQuery
		load: [DIR+'rails.min.js',DIR+'d3.v3.min.js',DIR+'jquery.dataTables-1.9.4.min.js']
	},
	// {	// Pages with #graph
	// 	test: document.getElementById('graph'),
	// 	// yep: DIR+'d3-2.5.0/d3.layout.min.js'
	// 	yep: DIR+'d3.v3.min.js'
	// },
	{	// Pages with #map
		test: document.getElementById('map'),
		yep: [DIR+'jquery.vector-map-0.1.min.js', DIR+'jquery.vector-map.world.js']
	},
		// Finally, the application
		DIR+'application.js'
]);