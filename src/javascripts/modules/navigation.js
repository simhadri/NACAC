import $ from '../vendor/jquery-2.1.4.min.js';

(function() {
	'use strict';
	var navTrigger = $('.nav-trigger'),
		primaryNav = $('.primary-nav'),
		body = $('body'),
		navScreen = $('.nav-screen'),
		toplevelChildrenOfPrimaryNav = primaryNav.children('li'),
		goBackButton = $('.go-back'),
		navItemLinks = $('.has-children'),
		mobileUtilityBarButtons = $('.mobile-utility-bar-buttons');

	var openNav = function() {
		body.addClass('body--freeze');
		primaryNav.addClass('nav-is-visible');
		navTrigger.addClass('morphStateX');
		navScreen.removeClass('nav-screen--off').addClass('nav-screen--on');
		$('.morphStateX').on("click", function() {
			closeNav();
		});
	}
	var closeNav = function() {
		body.removeClass('body--freeze');
		primaryNav.removeClass('nav-is-visible');
		navTrigger.removeClass('morphStateX');
		navScreen.removeClass('nav-screen--on').addClass('nav-screen--off');
		navTrigger.on("click", function() {
			openNav();
		});
	}
	var closeSubNav = function() {
		$('.nav__menu--visible').removeClass('nav__menu--visible');
		$('.selected').removeClass('selected');
		$('.primary-nav').addClass('nav__menu--visible');
	}
	var openSubNav = function(selected) {
		$('.selected').removeClass('selected');
		$('.nav__menu--visible').removeClass('nav__menu--visible');
		selected.parent().addClass('selected');
		selected.next().addClass('nav__menu--visible');
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
	navScreen.on("click", function() {
		closeNav();
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
})();
