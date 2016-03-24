// MODULES
import Screen from 'modules/screen.js';
import HeadStyle from 'modules/headStyle.js';
(function() {
	'use strict';
	var screenOverlay = new Screen(),
		headStyle = new HeadStyle(),
		navTrigger = $('.primary-nav__trigger'),
		primaryNav = $('.primary-nav'),
		primaryNavItem = $('.primary-nav__item'),
		body = $('body'),
		navScreen = $('.nav-screen'),
		toplevelChildrenOfPrimaryNav = primaryNav.children('li'),
		goBackButton = $('.go-back'),
		navItemLinks = $('.primary-nav--children'),
		mobileUtilityBarButtons = $('.mobile-utility-bar-buttons'),
		browserViewport = $(window).height() - 70;

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
		$('.selected').removeClass('selected');
	}
	var openNavInterior = function(selected) {
		$('.selected').removeClass('selected');
		let selectedId = selected.attr('data-id');
		$.ajax({
			url: '/javascripts/data/interiorNavData_' + selectedId + '.json',
			dataType: 'json',
			cache: true,
			success: function(data) {
				selected.next().empty();
				for (let i = 0; i < data.length; i++) {
					if (data[i].type !== null && data[i].type === 'link') {
						selected.next().append(
							'<li>' +
							'<h4><a href="' + data[i].content + '">' + data[i].name + '</a></h4>' +
							'</li>'
						);
					}
					if (data[i].type !== null && data[i].type === 'link_set') {
						selected.next().append(
							'<li>' +
							'<h4>' + data[i].name + '</h4>' +
							'<ul id="interior__links_' + i + '" class="interior__links"></ul>' +
							'</li>'
						);
						for (let n = 0; n < data[i].content.length; n++) {
							$('#interior__links_' + [i]).append(
								'<a href=' + data[i].content[n].url + '>' + data[i].content[n].text + '</a>'
							);
						}

					}
					if (data[i].type !== null && data[i].type === 'feature') {
						selected.next().append(
							'<li class="nav__feature">' +
							'<h4>' + data[i].name + '</h4>' +
							'<img src="' + data[i].content.url + '"/>' +
							'<p>' + data[i].content.text + '</p>' +
							'</li>'
						);
					}
				}

			}
		})
		setTimeout(function() {
			selected.parent().addClass('selected');
		}, 200)

		selected.next().addClass('nav__menu--visible');
	}

	function hasChildrenActions() {
		if ($(this).attr('href') === "#") {
			if (!$(this).parent().hasClass('selected')) {
				bfSelect($(this));
			} else {
				removeSelected();
			}
		}
	}

	function restoreTopLevelVisibility() {
		primaryNav.addClass('nav__menu--visible');
	}

	function removeVisibleMenuLevel() {
		$('.nav__menu--visible').removeClass('nav__menu--visible');
	}

	function removeSelected() {
		toplevelChildrenOfPrimaryNav.removeClass('selected');
	}

	function bfSelect(theSelection) {
		removeSelected();
		theSelection.parent('.primary-nav--children').addClass('selected').children('.nav-interior').addClass('nav__menu--visible');
	}

	function clickAnywhereToCloseEverything(event) {
		if (!$(event.target).closest('.primary-nav').length) {
			closeNavInterior();

		}
	}

	function navScrollDependencies(event) {
		var utilityHeight = $('.utility-nav').height(),
			heroHeight = $('.hero__wrapper').height() + $('.utility-nav').height(),
			bodyTop = $('body').scrollTop(),
			navToTopOffset = $('.primary-nav__interior').offset().top - bodyTop;
		// If past than util nav and animation fired
		if (bodyTop >= utilityHeight && primaryNav.hasClass('primary-nav--up')) {
			primaryNav.addClass('primary-nav--up primary-nav--sticky');
			$('main').css({ 'padding-top': '7rem' })
		}
		// If past than util nav and animation NOT fired
		if (bodyTop >= browserViewport - utilityHeight && !primaryNav.hasClass('primary-nav--up')) {
			primaryNav.addClass('primary-nav--up primary-nav--sticky no-transitions');
			$('main').css({ 'padding-top': '7rem' })
		}
		//If NOT past util nav, unstick
		if (bodyTop >= 10) {
			$('.utility-nav').addClass('utility-nav--scrolled');
		} else{
			$('.utility-nav').removeClass('utility-nav--scrolled');
		}
	}

	navTrigger.on("click", function() {
		if ($('.trigger__icon').hasClass('trigger--x')) {
			closeMobileNav();
		} else {
			openMobileNav();
		}

	});

	navItemLinks.on("click", function(event) {
		event.preventDefault();
		var selected = $(this);
		if (selected.parent().hasClass('selected') === true) {
			closeNavInterior();
		} else {
			$('main').css({ 'padding-top': '7rem' })
			primaryNav.addClass('primary-nav--up primary-nav--sticky');
			openNavInterior(selected);
		}

	});
	
	body.click(clickAnywhereToCloseEverything);
	navScrollDependencies();
	$(window).scroll(function() {
		navScrollDependencies();
	});
})();