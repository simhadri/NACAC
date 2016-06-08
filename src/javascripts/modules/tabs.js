// FUNCTION
(function() {
	'use strict';
	
	// a temp value to cache *what* we're about to show
	var target = null;

	// collect all the triggers
	var triggers = $('.trigger__button').on('click', function() {
		target = $(this.hash).removeAttr('id');

		$('.trigger__button').removeClass('trigger__button--active');
		$(this).addClass('trigger__button--active');
		// if the URL isn't going to change, then hashchange
		// event doesn't fire, so we trigger the update manually
		if (location.hash === this.hash) {
			// but this has to happen after the DOM update has
			// completed, so we wrap it in a setTimeout 0
			setTimeout(update, 0);
		}
	});

	// get an array of the panel ids (from the anchor hash)
	var targets = triggers.map(function() {
		return this.hash;
	}).get();

	function update() {

		if (target) {
			target.attr('id', target.data('old-id'));
			target = null;
		}

		var hash = window.location.hash;
		if (targets.indexOf(hash) !== -1) {
			$('.trigger__button').removeClass('trigger__button--active');
			$('a[href*="' + hash + '"]').addClass('trigger__button--active');
			show(hash);
		}
	}

	function show(id) {
		// if no value was given, let's take the first panel
		if (!id) {
			id = targets[0];
		}
		// remove the trigger__content--active class from the triggers,
		// and add it back to the one the user selected
		$('.trigger__content').removeClass('trigger__content--active');

		// now hide all the panels, then filter to
		// the one we're interested in, and show it
		$('.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active')
	}

	$(window).on('hashchange', update);

	// initialise
	if (targets.indexOf(window.location.hash) !== -1) {
		update();
	} else {
		show();
	}
	// shadow animation
	$('.trigger__navigation').scroll(

		function() {
			var totalWidth = $('.trigger__button').length * $('.trigger__button').outerWidth(),
				scrollLocation = $(this).scrollLeft() + $(this).width();
			if (scrollLocation <= totalWidth - $('.trigger__button').outerWidth()) {
				$('.trigger__block').removeClass('no--shadow');
			} else {
				$('.trigger__block').addClass('no--shadow');
			}
		}
	);
})();
