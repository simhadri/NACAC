webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Vendor scirpts
	// *********************
	// import $ from 'vendor/jquery-2.1.4.min.js';
	// import CountUp from 'vendor/countUp.js';
	
	// *********************
	//    Modules scripts
	// *********************
	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	// SUPER LAME FADE IN
	$(document).ready(function () {
		$('main').addClass("fadeIn");
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// MODULES
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesHeadStyleJs = __webpack_require__(4);
	
	var _modulesHeadStyleJs2 = _interopRequireDefault(_modulesHeadStyleJs);
	
	(function () {
		'use strict';
		var headStyle = new _modulesHeadStyleJs2['default'](),
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
	
		var openMobileNav = function openMobileNav() {
			body.addClass('body--freeze');
			primaryNav.addClass('primary-nav--open');
			$('.trigger__icon').addClass('trigger--x');
		};
		var closeMobileNav = function closeMobileNav() {
			body.removeClass('body--freeze');
			$('.trigger__icon').removeClass('trigger--x');
			primaryNav.removeClass('primary-nav--open');
			$('.trigger__icon').on("click", function () {
				openMobileNav();
			});
		};
		var closeNavInterior = function closeNavInterior() {
			$('.selected').removeClass('selected');
		};
		var openNavInterior = function openNavInterior(selected) {
			$('.selected').removeClass('selected');
			var selectedId = selected.attr('data-id');
			$.ajax({
				url: '/javascripts/data/interiorNavData_' + selectedId + '.json',
				dataType: 'json',
				cache: true,
				success: function success(data) {
					selected.next().empty();
					for (var i = 0; i < data.length; i++) {
						if (data[i].type !== null && data[i].type === 'link') {
							selected.next().append('<li>' + '<h4><a href="' + data[i].content + '">' + data[i].name + '</a></h4>' + '</li>');
						}
						if (data[i].type !== null && data[i].type === 'link_set') {
							selected.next().append('<li>' + '<h4>' + data[i].name + '</h4>' + '<ul id="interior__links_' + i + '" class="interior__links"></ul>' + '</li>');
							for (var n = 0; n < data[i].content.length; n++) {
								$('#interior__links_' + [i]).append('<a href=' + data[i].content[n].url + '>' + data[i].content[n].text + '</a>');
							}
						}
						if (data[i].type !== null && data[i].type === 'feature') {
							selected.next().append('<li class="nav__feature">' + '<h4>' + data[i].name + '</h4>' + '<img src="' + data[i].content.url + '"/>' + '<p>' + data[i].content.text + '</p>' + '</li>');
						}
					}
				}
			});
			setTimeout(function () {
				selected.parent().addClass('selected');
			}, 200);
	
			selected.next().addClass('nav__menu--visible');
		};
	
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
				$('main').css({ 'padding-top': '7rem' });
			}
			// If past than util nav and animation NOT fired
			if (bodyTop >= browserViewport - utilityHeight && !primaryNav.hasClass('primary-nav--up')) {
				primaryNav.addClass('primary-nav--up primary-nav--sticky no-transitions');
				$('main').css({ 'padding-top': '7rem' });
			}
			//If NOT past util nav, unstick
			if (bodyTop >= 10) {
				$('.utility-nav').addClass('utility-nav--scrolled');
			} else {
				$('.utility-nav').removeClass('utility-nav--scrolled');
			}
		}
	
		navTrigger.on("click", function () {
			if ($('.trigger__icon').hasClass('trigger--x')) {
				closeMobileNav();
			} else {
				openMobileNav();
			}
		});
	
		navItemLinks.on("click", function (event) {
			event.preventDefault();
			var selected = $(this);
			if (selected.parent().hasClass('selected') === true) {
				closeNavInterior();
			} else {
				$('main').css({ 'padding-top': '7rem' });
				primaryNav.addClass('primary-nav--up primary-nav--sticky');
				openNavInterior(selected);
			}
		});
	
		body.click(clickAnywhereToCloseEverything);
		navScrollDependencies();
		$(window).scroll(function () {
			navScrollDependencies();
		});
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var Screen = function Screen() {
		var screenOverlay = document.createElement('div');
		var mainElement = document.getElementById('main');
		mainElement.appendChild(screenOverlay);
		screenOverlay.setAttribute('id', 'screen__overlay');
		screenOverlay.setAttribute('class', 'screen__overlay');
		this.turnScreenOn = function () {
			screenOverlay.classList.add('screen__overlay--on');
		};
		this.turnScreenOff = function () {
			screenOverlay.classList.remove('screen__overlay--on');
		};
	};
	module.exports = Screen;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var headStyle = function headStyle() {
		var head = document.getElementsByTagName('head')[0];
		this.addRules = function (rules) {
			var css = '',
			    head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('style');
	
			for (var property in rules) {
				if (rules.hasOwnProperty(property)) {
					var css = css + property + '{' + rules[property] + '}';
				}
			}
			style.type = 'text/css';
			style.setAttribute('id', 'customHeadStyle');
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
		}, this.removeRules = function () {
			var customHeadStyle = document.getElementById('customHeadStyle');
			customHeadStyle.remove();
		};
	};
	module.exports = headStyle;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesScreenJs = __webpack_require__(3);
	
	var _modulesScreenJs2 = _interopRequireDefault(_modulesScreenJs);
	
	(function () {
		'use strict';
		var screenOverlay = new _modulesScreenJs2['default'](),
		    morphSearch = $('.morphsearch'),
		    searchInput = $('input.morphsearch__input'),
		    seachInputWrapper = $('.utility-nav__search'),
		    ctrlClose = $('span.morphsearch__close'),
		    isOpen = false,
		   
		// show/hide search area
		toggleSearch = function toggleSearch(evt) {
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
					setTimeout(function () {
						morphSearch.addClass('morphsearch--hideInput');
						setTimeout(function () {
							morphSearch.removeClass('morphsearch--hideInput');
							searchInput.value = '';
						}, 300);
					}, 500);
				}
				searchInput.val('').blur();
			} else {
				morphSearch.addClass('morphsearch--open');
				seachInputWrapper.addClass('utility-nav__search--on');
				screenOverlay.turnScreenOn();
			}
			isOpen = !isOpen;
		};
		// events
		searchInput.on('focus', toggleSearch);
		ctrlClose.on('click', toggleSearch);
	
		// esc key closes search overlay
		// keyboard navigation events
		document.addEventListener('keydown', function (ev) {
			var keyCode = ev.keyCode || ev.which;
			if (keyCode === 27 && isOpen) {
				toggleSearch(ev);
			}
		});
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
		var bLazy = new Blazy({
			//breakpoints use max-width
			//don't always trump other loading factors
			breakpoints: [{ width: 640, src: 'data-src-sm' }
			//{width: 767, src: 'data-src-sm'}
			],
			success: function success(element) {
				setTimeout(function () {
					// We want to remove the loader gif now.
					// First we find the parent container
					// then we remove the "loading" class which holds the loader image
					var parent = element.parentNode;
					parent.className = parent.className.replace(/\bloading\b/, '');
				}, 2000);
			}
		});
	});

/***/ }
]);
//# sourceMappingURL=app.js.map