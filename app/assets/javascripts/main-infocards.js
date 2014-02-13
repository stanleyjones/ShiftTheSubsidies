/**
 *	Infocards
 */

// Events

$('#info .close').click(closeInfocard);
$('#info .toggle').click(toggleInfocardChart);

// Functions

function openInfocard() {
	$('#tips').hide();
	$('#info').slideDown(500);
}

function closeInfocard() {
	view($('#wrapper').attr('data-view'));
	$('#globe').trigger('reset');
	$('#info').slideUp(500);
	$('#graph, #chart').html('');
	$('#tips').delay(1000).fadeIn(2000);
}

function toggleInfocardChart(ev) {
	$('#chart svg:visible').hide().siblings().show();
	$(ev.target).toggleClass('active');
}

function popRegion( cc,countries,intl_data ) {

	openInfocard();

	var country = find_country( cc, countries );

	$('#info .name').html(country.properties.name);
	$('#info .total').html('Has received $' + to_currency(intl_data[String(cc)].total) + ' in international energy subsidies since 2008.');
	$('#info .description').html('');

	$.getJSON('/regions/'+cc+'/projects.json', function(json) {
		draw_popup_graph(json);
	});

}

function regionInfo( cc,countries,ntnl_data ) {

	openInfocard();

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
	$('#info .action-link').html(function() { return ntnl_data[String(cc)].actionurl ? '<a class="action-link" href="'+ntnl_data[String(cc)].actionurl+'">Take Action</a>' : ''; });

	draw_bar_chart(cc, ntnl_data, 'fuel');
	draw_bar_chart(cc, ntnl_data, 'target');

	$('#chart .target').hide();
}