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
		//primaryNav.removeClass('primary-nav--open');
		navTrigger.removeClass('trigger--x');
		// screenOverlay.turnScreenOff();
		navTrigger.on("click", function() {
			openMobileNav();
		});
	}
	var closeNavInterior = function() {
		
		$('.selected').removeClass('selected');
		
	}
	var openNavInterior = function(selected) {
		$('.selected').removeClass('selected');
		
		primaryNav.addClass('primary-nav--open');
		let selectedId = selected.attr('data-id');
		$.ajax({
			url: '/javascripts/data/interiorNavData_' + selectedId + '.json',
			dataType: 'json',
			cache: true,
			success: function(data) {
				selected.next().empty();
				for (let i = 0; i < data.length; i++) {
					if (data[i].content !== null && typeof data[i].content === 'string') {
						selected.next().append(
							'<li>' +
							'<h4><a href="' + data[i].content + '">' + data[i].title + '</a></h4>' +
							'</li>'
						);
					}
					if (data[i].title == 'feature' && typeof data[i].content != 'string'){
						selected.next().append(
						'<li>'+
							'<h4>'+data[i].content.featureTitle+'</h4>'+
							'<img src="'+data[i].content.featureImage+'"/>'+
							'<p>'+data[i].content.featureText+'</p>'+
						'</li>'
						);
					}
					if (data[i].content !== null && typeof data[i].content === 'object') {		
						selected.next().append(
							'<li>' +
							'<h4>' + data[i].title + '</h4>' +
							'<ul id="interior__links_' + i + '" class="interior__links"></ul>' +
							'</li>'
						);
						for (let n = 0; n < data[i].content.length; n++) {
							$('#interior__links_' + [i]).append(
								'<a href=' + data[i].content[n].linkHref + '>' + data[i].content[n].linkName + '</a>'
							);
						}

					}
				}

			}
		})
		setTimeout(function(){
			selected.parent().addClass('selected');	
		},300)
		
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
		
		
	}

	function bfSelect(theSelection) {
		removeSelected();
		
		//primaryNav.addClass('primary-nav-open');
		theSelection.parent('.primary-nav--children').addClass('selected').children('.nav-interior').addClass('nav__menu--visible');
	}

	function clickAnywhereToCloseEverything(event) {
		if (!$(event.target).closest('.primary-nav').length) {
			closeNavInterior();

		}
	}

	function navScrollDependencies() {
		var utilityHeight = $('.utility-nav').height();
		var heroHeight = $('.hero__wrapper').height() + $('.utility-nav').height();
		var bodyTop = $('body').scrollTop();
		var navToTopOffset = $('.primary-nav__interior').offset().top - bodyTop;
		if ( bodyTop >= utilityHeight ) {
			console.log('sticky')
			primaryNav.addClass('primary-nav--sticky');
			//if nav hits top -> STICK
			// primaryNav.removeClass('primary-nav--up').addClass('primary-nav--sticky primary-nav--down');
		}else{
			primaryNav.removeClass('primary-nav--sticky primary-nav--up').addClass('primary-nav--down');
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
	
	navScrollDependencies();
	$(window).scroll(function() {
		navScrollDependencies();
	});






















})();
