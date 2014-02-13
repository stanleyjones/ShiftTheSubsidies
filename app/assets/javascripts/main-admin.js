/**
 *	Admin functions
 */

$("#subsidy_exchange_rate").change(function() {
	var amount_original = $('#subsidy_amount_original').val();
	var exchange_rate = $('#subsidy_exchange_rate').val();

	$('#subsidy_amount_usd').val(Math.round( amount_original * exchange_rate * 1.0 ));
});