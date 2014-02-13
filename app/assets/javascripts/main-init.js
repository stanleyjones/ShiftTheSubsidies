/**
 *	Init
 *	(requires main-*.js)
 */

$(function() {
	'use strict';

	if (window.location.hash) {
		view(window.location.hash);
	} else {
		if ($('body.admin').length) {
			view('#table');
		}
	}

	// HOME

	if ($('#globe').length) {
		$('#navbar, #tips').hide();
		draw_globe();
	}

	// MAP/GRAPH/TABLE

	if ((typeof dataURL !== 'undefined') && ($('#graph').length || $('#table').length || $('#map').length )) {
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

	// INSTITUTION / SECTOR

	if ($('#more').length) {
		$('#view_title, #more .close').click(function() {
			$('#more').slideToggle();
		});
	}

	// RESPONSIVE NAV

	$('#pull').click(function(e){
		$('#navlist').slideToggle();
		e.preventDefault();
	});

});
