// MODULES
import HeadStyle from 'modules/headStyle.js';
(function() {
	'use strict';
	var headStyle = new HeadStyle(),
		navTrigger = $('.primary-nav__trigger'),
		primaryNav = $('.primary-nav'),
		primaryNavItem = $('.primary-nav__item'),
		body = $('body'),
		navScreen = $('.nav-screen'),
		toplevelChildrenOfPrimaryNav = primaryNav.children('li'),
		goBackButton = $('.go-back'),
		navItemLinks = $('.primary-nav--children'),
		mobileUtilityBarButtons = $('.mobile-utility-bar-buttons'),
		browserViewport = $(window).height() - 70,
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

	// Shamelessly Stolen from Underscore
	// Throttles the function so its not 
	// fired 1000x on scroll
	var throttle = function(func, wait, options) {
		var now = Date.now || function() {
			return new Date().getTime();
		};
		var context, args, result;
		var timeout = null;
		var previous = 0;
		if (!options) options = {};
		var later = function() {
			previous = options.leading === false ? 0 : now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		};
		return function() {
			if (!previous && options.leading === false) previous = now();
			var remaining = wait - (now() - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now();
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	function navScrollDependencies(event) {
		var gate = false;
		var utilityHeight = $('.utility-nav').height(),
			heroHeight = $('.hero__wrapper').height() + $('.utility-nav').height(),
			bodyTop = $(window).scrollTop(),
			navToTopOffset = $('.primary-nav__interior').offset().top - bodyTop;
		// If past than util nav and animation fired
		if (bodyTop >= utilityHeight && primaryNav.hasClass('primary-nav--up')) {
			primaryNav.removeAttr('style').addClass('primary-nav--up primary-nav--sticky');
			$('main').css({ 'padding-top': '7rem' })
		}
		// If past than util nav and animation NOT fired
		if (bodyTop >= browserViewport - utilityHeight && !primaryNav.hasClass('primary-nav--up')) {
			primaryNav.removeAttr('style').addClass('primary-nav--up primary-nav--sticky no-transitions');
			$('main').css({ 'padding-top': '7rem' })
		}
		//If NOT past util nav, unstick
		if (bodyTop >= 10) {
			$('.utility-nav').addClass('utility-nav--scrolled');
		} else {
			$('.utility-nav').removeClass('utility-nav--scrolled');
		}
	}
	var throttled = throttle(navScrollDependencies, 100);
	$(window).scroll(throttled);
	//window.setTimeout(navScrollDependencies, 1000);

	function openSearchFilterNav() {
		body.addClass('body--freeze');
		$('.search-filter__menu').addClass('search-filter__menu--open');
	}

	function closeSearchFilterNav() {
		body.removeClass('body--freeze');
		$('.search-filter__menu').removeClass('search-filter__menu--open');
	}

	navTrigger.on("click", function() {
		if ($('.trigger__icon').hasClass('trigger--x')) {
			closeMobileNav();
		} else {
			openMobileNav();
		}

	});

	filterOpen.on("click", function() {
		openSearchFilterNav();
	});

	$('.search-filter__close').on('click', function() {
		closeSearchFilterNav();
	});

	navItemLinks.on("click", function(event) {
		event.preventDefault();
		var selected = $(this);
		if ($(window).scrollTop() > 0 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')) {
			console.log('doit!')
			
			var place = $(window).scrollTop() + 50 + 'px';
			primaryNav.css({
				'transform': 'translateY('+place+')',
				'transition': 'all 300ms ease-in-out'
			});
			setTimeout(function() {
				primaryNav.css({
					'position': 'fixed',
					'transform': 'translateY(-2rem)',
					'transition': 'none'
				});
				$('main').css({ 'padding-top': '7rem' })
			}, 360)
			openNavInterior(selected);
		} else if (selected.parent().hasClass('selected') === true) {
			closeNavInterior();
		} else {
			$('main').css({ 'padding-top': '7rem' })
			primaryNav.addClass('primary-nav--up primary-nav--sticky');
			openNavInterior(selected);
		}
	});
	navScrollDependencies;
	body.click(clickAnywhereToCloseEverything);

})();
