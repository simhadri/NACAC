// IMPORTS
import HeadStyle from 'lib/headStyle.js';
import Throttled from 'lib/throttled.js';
import Screen from 'lib/screen.js';

// FUNCTION
(function() {
	var headStyle = new HeadStyle(),
		screen = new Screen(),
		navTrigger = $('.primary-nav__trigger'),
		primaryNav = $('.primary-nav'),
		body = $('body'),
		navItemLinks = $('.primary-nav--children'),
		browserViewport = $(window).height() - 70,
		isOpen = 0,
		filterOpen = $('.btn__filter-menu');

	var openMobileNav = function() {
		body.addClass('body--freeze');
		primaryNav.addClass('primary-nav--open');
		$('.trigger__icon').addClass('trigger--x');
	}
	var closeMobileNav = function() {
		body.removeClass('body--freeze');
		$('.trigger__icon').removeClass('trigger--x');
		primaryNav.removeClass('primary-nav--open');
		$('.trigger__icon').on("click", function() {
			openMobileNav();
		});
	}
	var closeNavInterior = function() {
		$('.utility-search__trigger').removeClass('pointer--disabled');
		$('.selected').removeClass('selected');
		body.off('click', clickAnywhereToCloseEverything);
		screen.turnScreenOff();
	}
	var openNavInterior = function(selected) {
		$('.utility-search__trigger').addClass('pointer--disabled');
		screen.turnScreenOn('soft');
		body.on('click', clickAnywhereToCloseEverything);
		if (!selected.parent().hasClass('selected')) {
			$('.selected').removeClass('selected');
			setTimeout(function() {
				selected.parent().addClass('selected');
			}, 200);

			selected.next().addClass('nav__menu--visible');
		} else {
			$('.selected').removeClass('selected');
		}

	}

	function clickAnywhereToCloseEverything(event) {
		if (!$(event.target).closest('.primary-nav').length) {
			closeNavInterior();
		}
	}

	function addPaddingToHero() {
		if (!$('.hero__wrapper').hasClass('hero--interior')) {
			$('.hero__wrapper').css({ 'margin-top': '7rem' })
		}
	}

	function navScrollDependencies(event) {
		var utilityHeight = $('.utility-nav').height(),
			bodyTop = $(window).scrollTop();
		// If past than util nav and animation fired
		if (bodyTop >= utilityHeight && primaryNav.hasClass('primary-nav--up')) {
			headStyle.removeRules();
			if (!primaryNav.hasClass('primary-nav--inanimate')) {
				primaryNav.addClass('primary-nav--up primary-nav--sticky');
			}
			// Offset Nav position change
			addPaddingToHero();
		}
		// If past than util nav and animation NOT fired
		if (bodyTop >= browserViewport - utilityHeight && !primaryNav.hasClass('primary-nav--up')) {
			headStyle.removeRules();
			if (!primaryNav.hasClass('primary-nav--inanimate')) {
				primaryNav.addClass('primary-nav--up primary-nav--sticky primary-nav--inanimate');
			}

			// Offset Nav position change
			addPaddingToHero();
		}
		//If NOT past util nav, unstick
		if (bodyTop >= 10) {
			$('.utility-nav').addClass('utility-nav--scrolled');
			if (!primaryNav.hasClass('primary-nav--blue')) {
				primaryNav.addClass('primary-nav--grey');
			}
		} else {
			$('.utility-nav').removeClass('utility-nav--scrolled');
			primaryNav.removeClass('primary-nav--grey');
		}
	}

	function openSearchFilterNav() {
		body.addClass('body--freeze');
		$('.search-filter__menu').addClass('search-filter__menu--open');
	}

	function closeSearchFilterNav() {
		body.removeClass('body--freeze');
		$('.search-filter__menu').removeClass('search-filter__menu--open');
	}

	navTrigger.on("click", function() {
		if (isOpen === 1) {
			closeMobileNav();
			isOpen = 0;
		} else {
			openMobileNav();
			isOpen = 1;
		}

	});

	filterOpen.on("click", function() {
		openSearchFilterNav();
	});

	$('.search-filter__close').on('click', function() {
		closeSearchFilterNav();
	});

	// This is weird but there is a min-height to the hero
	// we need to redraw the floating nav 
	var placeNavWhenShortWindow = function(){
		let windowHeight = window.innerHeight;
		if( windowHeight< 770 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')){
			headStyle.addRules({ '.primary-nav': 'transform: translateY(700px);transition: none' });
		} else {
			headStyle.removeRules();
		}
	}
	
	navItemLinks.on("click", function(event) {
		event.preventDefault();
		var selected = $(this);
		if ($(window).scrollTop() > 0 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')) {
			var place = $(window).scrollTop() + 50 + 'px';
			// have to wrtie to heade since jquery writes inline and it hard to override
			headStyle.addRules({ '.primary-nav': 'transform: translateY(' + place + ');transition: all 300ms ease-in-out' });
			setTimeout(function() {
				headStyle.addRules({ '.primary-nav': 'position: fixed;transform: translateY(-2rem);transition: none' });
				// Offset Nav position change
				addPaddingToHero();
				primaryNav.addClass('primary-nav--inanimate');
			}, 360)
			openNavInterior(selected);
		} else if (selected.parent().hasClass('selected') === true) {
			closeNavInterior();
		} else {
			// Offset Nav position change
			addPaddingToHero();
			primaryNav.addClass('primary-nav--up primary-nav--sticky');
			openNavInterior(selected);
		}
	});
	navScrollDependencies();
	placeNavWhenShortWindow();

	window.addEventListener('resize', placeNavWhenShortWindow);
	window.addEventListener('scroll', function(){Throttled(navScrollDependencies(), 50)});
})();
