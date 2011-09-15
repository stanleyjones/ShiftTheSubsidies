// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function viewmode(v) {
	$('div.view').hide();
	$('#mode button').removeClass('active');
	$('#'+v+'view').show();
	$('button.'+v).addClass('active');
}

function popover(e) {
	$('#'+e).slideToggle();
}

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