// FUNCTION
(function tabsAndAccordions() {
	// a temp value to cache *what* we're about to show
	var target = null;

	// collect all the triggers
	var triggers = $('.trigger__button');

	function triggerClickHandler(){
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
	}

	// get an array of the panel ids (from the anchor hash)
	var targets = triggers.map(function() {
		return this.hash;
	}).get();

	function update() {

		var hash = window.location.hash;

		if (target) {
			target.attr('id', target.data('old-id'));
			target = null;
		}

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
			if($('.tab__button.trigger__button--active').length === 0){
				$('.trigger__button.tab__button:first').addClass('trigger__button--active');
				
			}
		
		}
		// remove the trigger__content--active class from the triggers,
		// and add it back to the one the user selected
		$('.trigger__content').removeClass('trigger__content--active');

		// now hide all the panels, then filter to
		// the one we're interested in, and show it

		$('.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active')
	}

	// Toggle All
	const toggleAll = (io) => {
		history.pushState('', document.title, window.location.pathname);
		if (io === 'collapse'){
			$('.trigger__content').removeClass('trigger__content--active');
		} else{
			$('.trigger__content').addClass('trigger__content--active');
		}
	}

	// initialise
	if (targets.indexOf(window.location.hash) !== -1) {
		update();
	}
	else {
		show();
	}
	

	function shadowAnimation(){
		var triggerButton = $('.trigger__button');
		var tabBlock = $('.tab__block');
		var totalWidth = triggerButton.length * triggerButton.outerWidth();
		var scrollLocation = $(this).scrollLeft() + $(this).width() + 10;

		if (totalWidth >= scrollLocation) {
			tabBlock.removeClass('no--shadow');
		}
		else {
			tabBlock.addClass('no--shadow');
		}
	}

	$(window).on('hashchange', update);
	var toggleButton = document.querySelectorAll('.js-accordion--toggle');
	for (var i = 0; i < toggleButton.length; i++) {
		// Should be expand/collapse
		toggleButton[i].addEventListener('click',(event) => {
			toggleAll(event.target.dataset.toggle);
		});
	}
	$('.tab__navigation').on('scroll', shadowAnimation);
	triggers.on('click', triggerClickHandler);
})();