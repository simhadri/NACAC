import Screen from 'modules/screen.js';
(function() {
	'use strict';
	var screenOverlay = new Screen(),
		morphSearch = $('.morphsearch'),
		searchInput = $('input.morphsearch__input'),
		seachInputWrapper = $('.utility-nav__search'),
		ctrlClose = $('span.morphsearch__close'),
		isOpen = false,
		// show/hide search area
		toggleSearch = function(evt) {
			// return if open and the input gets focused
			if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

			var offsets = morphsearch.getBoundingClientRect();
			if (isOpen) {
				morphSearch.removeClass('morphsearch--open');
				seachInputWrapper.removeClass('utility-nav__search--on');
				screenOverlay.turnScreenOff();
				// trick to hide input text once the search overlay closes 
				// todo: hardcoded times, should be done after transition ends
				if (searchInput.value !== '') {
					setTimeout(function() {
						morphSearch.addClass('morphsearch--hideInput');
						setTimeout(function() {
							morphSearch.removeClass('morphsearch--hideInput');
							searchInput.value = '';
						}, 300);
					}, 500);
				}
				searchInput.val('').blur();
			} else {
				morphSearch.addClass('morphsearch--open');
				seachInputWrapper.addClass('utility-nav__search--on');
				screenOverlay.turnScreenOn('hard');
			}
			isOpen = !isOpen;
		};
	// events
	searchInput.on('focus', toggleSearch);
	ctrlClose.on('click', toggleSearch);
	
	// esc key closes search overlay
	// keyboard navigation events
	document.addEventListener('keydown', function(ev) {
		var keyCode = ev.keyCode || ev.which;
		if (keyCode === 27 && isOpen) {
			toggleSearch(ev);
		}
	});
})();