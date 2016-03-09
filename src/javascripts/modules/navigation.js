import $ from '../vendor/jquery-2.1.4.min.js';
import Screen from 'modules/screen.js';

(function() {
	'use strict';
	var screenOverlay = new Screen();
	var navTrigger = $('.primary-nav__trigger'),
		primaryNav = $('.primary-nav'),
		body = $('body'),
		navScreen = $('.nav-screen'),
		toplevelChildrenOfPrimaryNav = primaryNav.children('li'),
		goBackButton = $('.go-back'),
		navItemLinks = $('.has-children'),
		mobileUtilityBarButtons = $('.mobile-utility-bar-buttons');

	var openNav = function() {
		body.addClass('body--freeze');
		primaryNav.addClass('primary-nav--open');
		navTrigger.addClass('morphStateX');
		screenOverlay.turnScreenOn();
		$('.morphStateX').on("click", function() {
			closeNav();
		});
	}
	var closeNav = function() {
		body.removeClass('body--freeze');
		primaryNav.removeClass('primary-nav--open');
		navTrigger.removeClass('morphStateX');
		screenOverlay.turnScreenOff();
		navTrigger.on("click", function() {
			openNav();
		});
	}
	var closeSubNav = function() {
		// $('.nav__menu--visible').removeClass('nav__menu--visible');
		// $('.selected').removeClass('selected');
		// $('.primary-nav').addClass('nav__menu--visible');
	}
	var openSubNav = function(selected) {
		// $('.selected').removeClass('selected');
		// $('.nav__menu--visible').removeClass('nav__menu--visible');
		// selected.parent().addClass('selected');
		// selected.next().addClass('nav__menu--visible');
	}

	function hasChildrenActions() {
		if ($(this).attr('href') === "#") {
			if (!$(this).parent().hasClass('selected')) {
				bfSelect($(this));
			} else {
				bfDeselect();
			}
		}
	}

	function removeSelected() {
		toplevelChildrenOfPrimaryNav.removeClass('selected');
	}

	function bfDeselect() {
		removeSelected();
		removeVisibleMenuLevel();
		restoreTopLevelVisibility();
	}

	function restoreTopLevelVisibility() {
		primaryNav.addClass('nav__menu--visible');
	}

	function removeVisibleMenuLevel() {
		$('.nav__menu--visible').removeClass('nav__menu--visible');
	}

	function bfSelect(theSelection) {
		removeSelected();
		removeVisibleMenuLevel();
		theSelection.parent('.has-children').addClass('selected').children('.nav-interior').addClass('nav__menu--visible');
	}

	function clickAnywhereToCloseEverything(event) {
		if (!$(event.target).closest('.primary-nav').length) {
			closeSubNav();

		}
	}
	body.click(clickAnywhereToCloseEverything);
	navTrigger.on("click", function() {
		openNav();
	});

	navItemLinks.on("click", function(event) {
		event.preventDefault();
		var selected = $(this);
		if (selected.parent().hasClass('selected') === true) {
			closeSubNav();
		} else {
			openSubNav(selected);
		}

	});
	goBackButton.on("click", function() {
		closeSubNav();
	});
	// function for nav depending
	// on where you are on the page
	function navScrollDependencies() {
		var heroHeight = $('.hero__wrapper').height() + $('.utility-nav').height();
		var bodyTop = $('body').scrollTop();
		if (bodyTop >= heroHeight) {
			$('.primary-nav').addClass('primary-nav--sticky')
		} else {
			$('.primary-nav').removeClass('primary-nav--sticky')
		}
	};
	$(window).scroll(function() {
		navScrollDependencies();
	});
})();
