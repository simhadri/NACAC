// FUNCTION
(function() {
	'use strict';
	
	// a temp value to cache *what* we're about to show
	var target = null;

	// collect all the triggers
	var triggers = $('.trigger__button').each(function() {
		target = $(this.hash).removeAttr('id');
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

	function showFirstTab(){
		// $('.trigger__button.tab__button:first').addClass('trigger__button--active');
		// console.log($('.tab__button.trigger__button--active').length)
		if($('.tab__button.trigger__button--active').length === 0){
			console.log('b');
			$('.trigger__button.tab__button:first').addClass('trigger__button--active');
			
		}

		// for (var i = 0; i < document.getElementsByClassName('tab__button').length; i++) {
		// 	var is_false = 0;
		// 	if(document.getElementsByClassName('tab__button')[i].classList[2] == 'trigger__button--active' === false){
		// 		is_false++
		// 	}
		// }
		// console.log(is_false);
	}

	function show(id) {
		// if no value was given, let's take the first panel
		if (!id) {
			id = targets[0];
		}
		// remove the trigger__content--active class from the triggers,
		// and add it back to the one the user selected
		if (true) {}
		$('.trigger__content').removeClass('trigger__content--active');

		// now hide all the panels, then filter to
		// the one we're interested in, and show it
		$('.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active')
	}

	$(window).on('hashchange', update());

	// initialise
	if (targets.indexOf(window.location.hash) !== -1) {
		showFirstTab()
		update();
	} else {
		showFirstTab()
		show();
	}
	// button functions
	$('.trigger__button').on('click',function(){
		var id = $(this).attr('href')
		if($(this).hasClass('accordion-item__header')){
			$('.accordion-item__header').removeClass('trigger__button--active');
			$(this).addClass('trigger__button--active');
			$('.accordion__item.trigger__content').removeClass('trigger__content--active');
			$('.accordion__item.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active')

		}
		if($(this).hasClass('tab__button')){
			$('.tab__button').removeClass('trigger__button--active');
			$(this).addClass('trigger__button--active');
			$('.tab__content.trigger__content').removeClass('trigger__content--active');
			$('.tab__content.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active')

		}
	});
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
