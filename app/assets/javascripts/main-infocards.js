/**
 *	Infocards
 */

// Events

$('#info .close').click(closeInfocard);
$('#info .toggle').click(toggleInfocardChart);

// Functions

function openInfocard(open) {
	$('#tips').hide();
	$('#graph, #chart').html('');
	$('#info').css('min-height',0).slideDown(500,function() {
		if (typeof open == 'function') { open(); }
	});
}

function closeInfocard() {
	view($('#wrapper').attr('data-view'));
	$('#info').css('min-height',0).slideUp(500);
	$('#globe').trigger('reset');
	$('#graph, #chart').html('');
	$('#tips').fadeIn(2000);
}

function toggleInfocardChart(ev) {
	$('#chart svg').toggle();
	$(ev.target).toggleClass('alt');
}

function popRegion( cc,countries,intl_data ) {

	openInfocard();

	var country = find_country( cc, countries );

	$('#info .name').html(country.properties.name);
	$('#info .total').html('$' + to_short(intl_data[String(cc)].total) + ' in international energy subsidies since 2008.');
	$('#info .description').html('');

	$.getJSON('/regions/'+cc+'/projects.json', function(json) {
		draw_popup_graph(json);
	});

}

function regionInfo( cc,countries,ntnl_data ) {

	var info = $('#info'),
		country = find_country( cc, countries );

	averageusd = ntnl_data[String(cc)].totalusd / (2012-2005+1.0);
	average = ntnl_data[String(cc)].total / (2012-2005+1.0);

	var	total = to_short(ntnl_data[String(cc)].totalusd / (2012-2005+1.0)) + ' USD';

	if (ntnl_data[String(cc)].currency != 'USD') {
		total += ' <small>(' + to_short(ntnl_data[String(cc)].total / (2012-2005+1.0)) + ' ' + ntnl_data[String(cc)].currency + ')</small>';
	}
		total += ' per year';

	$('#info .toggle, #info .source').show();
	$('#info .name').html(country.properties.name);
	$('#info .total').html(total);
	$('#info .description').html(ntnl_data[String(cc)].description);
	$('#info .action-link').html(function() { return ntnl_data[String(cc)].actionurl ? '<a href="'+ntnl_data[String(cc)].actionurl+'">Take Action</a>' : ''; });

	openInfocard(function() {
		$('#info').css('min-height','50%');
		draw_bar_chart(cc, ntnl_data, 'fuel');
		draw_bar_chart(cc, ntnl_data, 'target');		
		$('#chart .target').hide();
	});

}