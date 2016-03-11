// VENDOR
import $ from '../vendor/jquery-2.1.4.min.js';
// MODULES
import Screen from 'modules/screen.js';

(function() {
	'use strict';
	var screenOverlay = new Screen();
	var navTrigger = $('.primary-nav__trigger'),
		primaryNav = $('.primary-nav'),
		primaryNavItem = $('.primary-nav__item'),
		body = $('body'),
		navScreen = $('.nav-screen'),
		toplevelChildrenOfPrimaryNav = primaryNav.children('li'),
		goBackButton = $('.go-back'),
		navItemLinks = $('.primary-nav--children'),
		mobileUtilityBarButtons = $('.mobile-utility-bar-buttons');

	var openMobileNav = function() {
		body.addClass('body--freeze');
		primaryNav.addClass('primary-nav--open');
		$('.trigger__icon').addClass('trigger--x');
		// screenOverlay.turnScreenOn();
	}
	var closeMobileNav = function() {
		body.removeClass('body--freeze');
		primaryNav.removeClass('primary-nav--open');
		navTrigger.removeClass('trigger--x');
		// screenOverlay.turnScreenOff();
		navTrigger.on("click", function() {
			openMobileNav();
		});
	}
	var closeNavInterior = function() {
		$('.nav__menu--visible').removeClass('nav__menu--visible');
		$('.selected').removeClass('selected');
		primaryNav.addClass('nav__menu--visible');
	}
	var openNavInterior = function(selected) {
		$('.selected').removeClass('selected');
		$('.nav__menu--visible').removeClass('nav__menu--visible');
		let selectedId = selected.attr('data-id');
		$.ajax({
			url: '/javascripts/data/interiorNavData_' + selectedId + '.json',
			dataType: 'json',
			cache: true,
			success: function(data) {
				selected.next().empty();
				for (let i = 0; i < data.length; i++) {
					if (data[i].interiorLink !== null && typeof data[i].interiorLink === 'string') {
						selected.next().append(
							'<li>' +
							'<h3><a href="' + data[i].interiorLink + '">' + data[i].interiorTitle + '</a></h3>' +
							'</li>'
						);
					}
					if (data[i].interiorTitle == 'feature' && !data[i].interiorLink){
						selected.next().append(
						'<li>'+
							'<h3>'+data[i].featuredContent.featureTitle+'</h3>'+
							'<img src="'+data[i].featuredContent.featureImage+'"/>'+
							'<p>'+data[i].featuredContent.featureText+'</p>'+
						'</li>'
						);
					}
					if (data[i].interiorLink !== null && typeof data[i].interiorLink === 'object') {		
						selected.next().append(
							'<li>' +
							'<h3>' + data[i].interiorTitle + '</h3>' +
							'<ul id="interior__links_' + i + '" class="interior__links"></ul>' +
							'</li>'
						);
						for (let n = 0; n < data[i].interiorLink.length; n++) {
							$('#interior__links_' + [i]).append(
								'<a href=' + data[i].interiorLink[n].linkHref + '>' + data[i].interiorLink[n].linkName + '</a>'
							);
						}

					}
				}

			}
		})
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
		theSelection.parent('.primary-nav--children').addClass('selected').children('.nav-interior').addClass('nav__menu--visible');
	}

	function clickAnywhereToCloseEverything(event) {
		if (!$(event.target).closest('.primary-nav').length) {
			closeNavInterior();

		}
	}

	function navScrollDependencies() {
		var heroHeight = $('.hero__wrapper').height() + $('.utility-nav').height();
		var bodyTop = $('body').scrollTop();
		var navToTopOffset = $('.primary-nav__interior').offset().top - bodyTop;

		if ( bodyTop >= heroHeight ) {
			//if nav hits top -> STICK
			primaryNav.removeClass('primary-nav--up').addClass('primary-nav--sticky primary-nav--down');
		} else {
			// else -> UNSTICK
			primaryNav.removeClass('primary-nav--sticky primary-nav--down').addClass('primary-nav--up');
		} 
		if( primaryNav.hasClass('primary-nav--up') && navToTopOffset <= 400 ){
			// else if nav gets to close to top of screen, close
			primaryNavItem.removeClass('selected');
			primaryNav.removeClass('primary-nav--up').addClass('primary-nav--down');
		}
	}

	body.click(clickAnywhereToCloseEverything);
	navTrigger.on("click", function() {
		console.log($('.trigger__icon').hasClass('trigger--x'))
		if ($('.trigger__icon').hasClass('trigger--x')){
			console.log("close")
			closeMobileNav();
		}else{
			openMobileNav();
		}
		
	});

	navItemLinks.on("click", function(event) {
		event.preventDefault();
		var selected = $(this);
		if (selected.parent().hasClass('selected') === true) {
			closeNavInterior();
		} else {
			openNavInterior(selected);
		}

	});
	goBackButton.on("click", function() {
		closeNavInterior();
	});
	// function for nav depending
	// on where you are on the page
	
	navScrollDependencies();
	$(window).scroll(function() {
		navScrollDependencies();
	});






















})();
