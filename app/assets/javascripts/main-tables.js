/**
 *	Extensions for jQuery.dataTables.js plugin
 */

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