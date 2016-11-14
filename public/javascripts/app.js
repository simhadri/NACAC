webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	
	//USING production variables
	// if(process.env.NODE_ENV === 'development'){
	// 	var dev_var = 'url/to/dev';
	
	// }
	// if(process.env.NODE_ENV === 'production'){
	// 	var dev_var = 'url/to/prod';
	
	// }
	// console.log(dev_var)
	
	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(22);
	
	__webpack_require__(12);
	
	__webpack_require__(15);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Add Custom style for #EpiserverEditMode if use is in View Mode
	
	// FUNCTION
	'use strict';
	
	(function () {
		if (document.body.id === 'EpiserverEditMode') {
			var head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('link');
			style.setAttribute('rel', 'stylesheet');
			style.setAttribute('href', '/stylesheets/episerver-edit-mode.css');
			head.appendChild(style);
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(4);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libCountUpJs = __webpack_require__(5);
	
	var _libCountUpJs2 = _interopRequireDefault(_libCountUpJs);
	
	// FUNCTION
	(function () {
		// RAF SHIM
		// https://gist.github.com/paulirish/1579671
		window.requestAnimFrame = (function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		})();
	
		// For Hero Jump link
		var scrollToButton = document.getElementById('js_scroll-to');
		if (scrollToButton) {
			(function () {
				var jumpLink = document.getElementById('js_jump');
				var jumpLocation = jumpLink.offsetTop;
				scrollToButton.addEventListener('click', function () {
					btAnimateTo(jumpLocation, 2500);
				});
			})();
		}
	
		// add or remove BackToTop (bt) Element
		var btElement = function btElement() {
			this.addBackToTop = function () {
				if (!document.getElementById('back-top')) {
					var backToTop = document.createElement('div'),
					    mainElement = document.getElementsByTagName('main')[0];
					mainElement.appendChild(backToTop);
					backToTop.setAttribute('id', 'back-top');
					backToTop.setAttribute('class', 'back-top');
					backToTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';
	
					setTimeout(function () {
						backToTop.classList.add('back-top--scrolled');
						backToTop.addEventListener('click', function () {
							btAnimateTo(0, 2500);
						});
					}, 5);
				}
			}, this.removeBackToTop = function () {
				if (document.getElementById('back-top')) {
					document.getElementById('back-top').outerHTML = '';
				}
			};
		};
		// MAIN FUNCTION
		// function scrollToY(scrollTargetY, speed) {...}
		// scrollTargetY: the target scrollY property of the window
		// speed: time in pixels per second
		var btAnimateTo = function btAnimateTo(scrollTargetY, speed) {
			var scrollY = window.scrollY || document.documentElement.scrollTop,
			    scrollTargetY = scrollTargetY || 0,
			    speed = speed || 2000,
			    easing = function easeInOutQuint(pos) {
				if ((pos /= 0.5) < 1) {
					return 0.5 * Math.pow(pos, 5);
				}
				return 0.5 * (Math.pow(pos - 2, 5) + 2);
			},
			    currentTime = 0;
	
			// min time .1, max time .8 seconds
			var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
	
			// add animation loop
			function tick() {
				currentTime += 1 / 60;
				var p = currentTime / time;
				var t = easing(p);
				if (p < 1) {
					requestAnimFrame(tick);
					window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
				} else {
					window.scrollTo(0, scrollTargetY);
				}
			}
			// call it once to get started
			tick();
		};
		// INITIATE BT
		// bodyTop is goofy due to IE document.body.scrollTop bug
		var btInit = function btInit() {
			var bt = new btElement();
			var bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
			var countCards = document.querySelectorAll('.number-block__numerals');
			var bumper = 600;
			if (bodyTop > 200) {
				bt.addBackToTop();
			} else {
				bt.removeBackToTop();
				return false;
			}
	
			var countInit = function countInit() {
				for (var i = 0; i < countCards.length; i++) {
					var counter = new _libCountUpJs2['default'](countCards[i].getAttribute('id'), 0, countCards[i].getAttribute('data-counter'), 0, 3.6);
					counter.start();
				}
			};
			if (countCards.length && countCards[0].innerHTML == '0' && countCards[0].offsetTop - bumper <= bodyTop) {
				countInit();
			}
		};
	
		// Throttle btInit on scroll
		window.addEventListener('scroll', function () {
			(0, _libThrottledJs2['default'])(btInit(), 400);
		});
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	// Throttled is borrowed (stolen) from underscore. It thottles
	// how many times a function can be fired. used mainly for scroll
	"use strict";
	
	var Throttled = function Throttled(func, wait, options) {
		var now = Date.now || function () {
			return new Date().getTime();
		};
		var context, args, result;
		var timeout = null;
		var previous = 0;
		if (!options) options = {};
		var later = function later() {
			previous = options.leading === false ? 0 : now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		};
		return function () {
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
	module.exports = Throttled;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	    countUp.js
	    (c) 2014-2015 @inorganik
	    Licensed under the MIT license.
	*/
	// target = id of html element or var of previously selected html element where counting occurs
	// startVal = the value you want to begin at
	// endVal = the value you want to arrive at
	// decimals = number of decimal places, default 0
	// duration = duration of animation in seconds, default 2
	// options = optional object of options (see below)
	
	'use strict';
	
	var CountUp = function CountUp(target, startVal, endVal, decimals, duration, options) {
	    // make sure requestAnimationFrame and cancelAnimationFrame are defined
	    // polyfill for browsers without native support
	    // by Opera engineer Erik Möller
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz', 'ms', 'o'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	    if (!window.requestAnimationFrame) {
	        window.requestAnimationFrame = function (callback, element) {
	
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	    if (!window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    }
	
	    // default options
	    this.options = {
	        useEasing: true, // toggle easing
	        useGrouping: true, // 1,000,000 vs 1000000
	        separator: ',', // character to use as a separator
	        decimal: '.' // character to use as a decimal
	    };
	    // extend default options with passed options object
	    for (var key in options) {
	        if (options.hasOwnProperty(key)) {
	            this.options[key] = options[key];
	        }
	    }
	    if (this.options.separator === '') this.options.useGrouping = false;
	    if (!this.options.prefix) this.options.prefix = '';
	    if (!this.options.suffix) this.options.suffix = '';
	
	    this.d = typeof target === 'string' ? document.getElementById(target) : target;
	    this.startVal = Number(startVal);
	    this.endVal = Number(endVal);
	    this.countDown = this.startVal > this.endVal;
	    this.frameVal = this.startVal;
	    this.decimals = Math.max(0, decimals || 0);
	    this.dec = Math.pow(10, this.decimals);
	    this.duration = Number(duration) * 1000 || 2000;
	    var self = this;
	
	    this.version = function () {
	        return '1.6.0';
	    };
	
	    // Print value to target
	    this.printValue = function (value) {
	        var result = !isNaN(value) ? self.formatNumber(value) : '--';
	        if (self.d.tagName == 'INPUT') {
	            this.d.value = result;
	        } else if (self.d.tagName == 'text' || self.d.tagName == 'tspan') {
	            this.d.textContent = result;
	        } else {
	            this.d.innerHTML = result;
	        }
	    };
	
	    // easeOutQuint
	    this.easeOutQuint = function (t, b, c, d) {
	        // return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    };
	    this.count = function (timestamp) {
	
	        if (!self.startTime) self.startTime = timestamp;
	
	        self.timestamp = timestamp;
	
	        var progress = timestamp - self.startTime;
	        self.remaining = self.duration - progress;
	
	        // easeOutQuint
	        self.frameVal = self.startVal - self.easeOutQuint(progress, 0, self.startVal - self.endVal, self.duration);
	
	        // don't go past endVal since progress can exceed duration in the last frame
	        if (self.countDown) {
	            self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
	        } else {
	            self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
	        }
	
	        // decimal
	        self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
	
	        // format and print value
	        self.printValue(self.frameVal);
	
	        // whether to continue
	        if (progress < self.duration) {
	            self.rAF = requestAnimationFrame(self.count);
	        } else {
	            if (self.callback) self.callback();
	        }
	    };
	    // start your animation
	    this.start = function (callback) {
	        self.callback = callback;
	        self.rAF = requestAnimationFrame(self.count);
	        return false;
	    };
	    this.formatNumber = function (nStr) {
	        nStr = nStr.toFixed(self.decimals);
	        nStr += '';
	        var x, x1, x2, rgx;
	        x = nStr.split('.');
	        x1 = x[0];
	        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
	        rgx = /(\d+)(\d{3})/;
	        if (self.options.useGrouping) {
	            while (rgx.test(x1)) {
	                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
	            }
	        }
	        return self.options.prefix + x1 + x2 + self.options.suffix;
	    };
	
	    // format startVal on initialization
	    self.printValue(self.startVal);
	};
	
	module.exports = CountUp;
	// Example:
	// var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
	// numAnim.start();
	// numAnim.update(135);
	// with optional callback:
	// numAnim.start(someMethodToCallOnComplete);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	;(function () {
		var initBlazy = function initBlazy() {
			var bLazy = new Blazy({
				breakpoints: [{ width: 640, src: 'data-src-sm' }
				//{width: 767, src: 'data-src-sm'}
				],
				success: function success(element) {
					setTimeout(function () {
						var parent = element.parentNode;
						parent.className = parent.className.replace(/\bloading\b/, '');
					}, 2000);
				}
			});
			setTimeout(bLazy.revalidate(), 200);
		};
		document.addEventListener('load', initBlazy());
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libHeadStyleJs = __webpack_require__(8);
	
	var _libHeadStyleJs2 = _interopRequireDefault(_libHeadStyleJs);
	
	var _libThrottledJs = __webpack_require__(4);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libScreenJs = __webpack_require__(9);
	
	var _libScreenJs2 = _interopRequireDefault(_libScreenJs);
	
	// FUNCTION
	(function () {
		var headStyle = new _libHeadStyleJs2['default'](),
		    screen = new _libScreenJs2['default'](),
		    navTrigger = $('.primary-nav__trigger'),
		    primaryNav = $('.primary-nav'),
		    body = $('body'),
		    navItemLinks = $('.primary-nav--children'),
		    browserViewport = $(window).height() - 70,
		    isOpen = 0,
		    filterOpen = $('.btn__filter-menu');
	
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
			$('.utility-search__trigger').removeClass('pointer--disabled');
			$('.selected').removeClass('selected');
			body.off('click', clickAnywhereToCloseEverything);
			screen.turnScreenOff();
		};
		var openNavInterior = function openNavInterior(selected) {
			$('.utility-search__trigger').addClass('pointer--disabled');
			screen.turnScreenOn('soft');
			body.on('click', clickAnywhereToCloseEverything);
			if (!selected.parent().hasClass('selected')) {
				$('.selected').removeClass('selected');
				setTimeout(function () {
					selected.parent().addClass('selected');
				}, 200);
	
				selected.next().addClass('nav__menu--visible');
			} else {
				$('.selected').removeClass('selected');
			}
		};
	
		function clickAnywhereToCloseEverything(event) {
			if (!$(event.target).closest('.primary-nav').length) {
				closeNavInterior();
			}
		}
	
		function addPaddingToHero() {
			if (!$('.hero__wrapper').hasClass('hero--interior')) {
				$('.hero__wrapper').css({ 'margin-top': '7rem' });
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
	
		navTrigger.on("click", function () {
			if (isOpen === 1) {
				closeMobileNav();
				isOpen = 0;
			} else {
				openMobileNav();
				isOpen = 1;
			}
		});
	
		filterOpen.on("click", function () {
			openSearchFilterNav();
		});
	
		$('.search-filter__close').on('click', function () {
			closeSearchFilterNav();
		});
	
		// This is weird but there is a min-height to the hero
		// we need to redraw the floating nav
		var placeNavWhenShortWindow = function placeNavWhenShortWindow() {
			var windowHeight = window.innerHeight;
			if (windowHeight < 770 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')) {
				headStyle.addRules({ '.primary-nav': 'transform: translateY(700px);transition: none' });
			} else {
				headStyle.removeRules();
			}
		};
	
		navItemLinks.on("click", function (event) {
			event.preventDefault();
			var selected = $(this);
			if ($(window).scrollTop() > 0 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')) {
				var place = $(window).scrollTop() + 50 + 'px';
				// have to wrtie to heade since jquery writes inline and it hard to override
				headStyle.addRules({ '.primary-nav': 'transform: translateY(' + place + ');transition: all 300ms ease-in-out' });
				setTimeout(function () {
					headStyle.addRules({ '.primary-nav': 'position: fixed;transform: translateY(-2rem);transition: none' });
					// Offset Nav position change
					addPaddingToHero();
					primaryNav.addClass('primary-nav--inanimate');
				}, 360);
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
		window.addEventListener('scroll', function () {
			(0, _libThrottledJs2['default'])(navScrollDependencies(), 50);
		});
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	// Jquery adds inline styles and these need to be overwritten.
	// HeadStyle writes styles to the head tag and destorys them as well
	'use strict';
	
	var headStyle = function headStyle() {
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
			style.setAttribute('class', 'customHeadStyle');
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
		}, this.removeRules = function () {
			if (document.getElementsByClassName('customHeadStyle')) {
				var customHeadStyle = document.getElementsByClassName('customHeadStyle');
				for (var i = 0; i < customHeadStyle.length; i++) {
					customHeadStyle[i].outerHTML = '';
				}
			}
		};
	};
	module.exports = headStyle;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// Just creates a screen element and fades it in, then destroys it.
	// CSS for this resides in partials/_main.scss
	'use strict';
	
	var Screen = function Screen() {
		this.turnScreenOn = function (modifier) {
			if (!document.getElementById('screen__overlay')) {
				(function () {
					var screenOverlay = document.createElement('div'),
					    mainElement = document.getElementsByTagName('main')[0];
					mainElement.appendChild(screenOverlay);
					screenOverlay.setAttribute('id', 'screen__overlay');
					screenOverlay.setAttribute('class', 'screen__overlay');
					setTimeout(function () {
						screenOverlay.classList.add('screen__overlay--on');
						if (modifier) {
							screenOverlay.classList.add('screen__overlay--' + modifier);
						}
					}, 10);
				})();
			}
		};
		this.turnScreenOff = function () {
			var screenOverlay = document.getElementById('screen__overlay');
			screenOverlay.classList.remove('screen__overlay--on');
			setTimeout(function () {
				screenOverlay.outerHTML = '';
			}, 400);
		};
	};
	module.exports = Screen;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libScreenJs = __webpack_require__(9);
	
	var _libScreenJs2 = _interopRequireDefault(_libScreenJs);
	
	// FUNCTION
	(function () {
		var screenOverlay = new _libScreenJs2['default'](),
		    morphSearch = $('.utility-search'),
		    searchInput = $('input.utility-search__input'),
		    seachInputWrapper = $('.utility-nav__search'),
		    isOpen = false,
		   
		// show/hide search area
		toggleSearch = function toggleSearch(evt) {
			// return if open and the input gets focused
			if (evt.type.toLowerCase() === 'focus' && isOpen) return false;
	
			//var offsets = morphSearch.getBoundingClientRect();
			if (isOpen) {
				morphSearch.removeClass('utility-search--open');
				seachInputWrapper.removeClass('utility-nav__search--on');
				screenOverlay.turnScreenOff();
				searchInput.val('').blur();
			} else {
				setTimeout(function () {
					searchInput.focus();
				}, 800);
				morphSearch.addClass('utility-search--open');
				seachInputWrapper.addClass('utility-nav__search--on');
				screenOverlay.turnScreenOn('hard');
			}
			isOpen = !isOpen;
		};
		// events
		$('.utility-search__trigger').on('click', toggleSearch);
	
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
/* 11 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function tabsAndAccordions() {
		// a temp value to cache *what* we're about to show
		var target = null;
	
		// collect all the triggers
		var triggers = $('.trigger__button');
	
		function triggerClickHandler() {
			target = $(this.hash).removeAttr('id');
			$('.trigger__button').removeClass('trigger__button--active');
			$(this).addClass('trigger__button--active');
			// if the URL isn't going to change, then hashchange
			// event doesn't fire, so we trigger the update manually
			if (location.hash === this.hash) {
				// but this has to happen after the DOM update has
				// completed, so we wrap it in a setTimeout 0
				setTimeout(update, 0);
			}
		}
	
		// get an array of the panel ids (from the anchor hash)
		var targets = triggers.map(function () {
			return this.hash;
		}).get();
	
		function update() {
	
			var hash = window.location.hash;
	
			if (target) {
				target.attr('id', target.data('old-id'));
				target = null;
			}
	
			if (targets.indexOf(hash) !== -1) {
				$('.trigger__button').removeClass('trigger__button--active');
				$('a[href*="' + hash + '"]').addClass('trigger__button--active');
				show(hash);
			}
		}
	
		function show(id) {
			// if no value was given, let's take the first panel
			if (!id) {
				id = targets[0];
				if ($('.tab__button.trigger__button--active').length === 0) {
					$('.trigger__button.tab__button:first').addClass('trigger__button--active');
				}
			}
			// remove the trigger__content--active class from the triggers,
			// and add it back to the one the user selected
			$('.trigger__content').removeClass('trigger__content--active');
	
			// now hide all the panels, then filter to
			// the one we're interested in, and show it
	
			$('.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active');
		}
	
		// initialise
		if (targets.indexOf(window.location.hash) !== -1) {
			update();
		} else {
			show();
		}
	
		function shadowAnimation() {
			var triggerButton = $('.trigger__button');
			var tabBlock = $('.tab__block');
			var totalWidth = triggerButton.length * triggerButton.outerWidth();
			var scrollLocation = $(this).scrollLeft() + $(this).width() + 10;
	
			if (totalWidth >= scrollLocation) {
				tabBlock.removeClass('no--shadow');
			} else {
				tabBlock.addClass('no--shadow');
			}
		}
	
		$(window).on('hashchange', update);
		$('.tab__navigation').on('scroll', shadowAnimation);
		triggers.on('click', triggerClickHandler);
	})();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// This is dummy Local Data
	// will look something like:
	// https://api.twitter.com/1.1/statuses/user_timeline.json? <- queries
	// screen_name=NACACFairs&count=6
	// Note count is completed first, if we filter out replies/rt
	// our for loop will have to accomidate for i ... if i > 6 etc
	// More info at https://dev.twitter.com/rest/reference/get/statuses/user_timeline
	
	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libTweetParseJs = __webpack_require__(13);
	
	var _libTweetParseJs2 = _interopRequireDefault(_libTweetParseJs);
	
	var _libEnvVarJs = __webpack_require__(14);
	
	var _libEnvVarJs2 = _interopRequireDefault(_libEnvVarJs);
	
	// FUNCTION
	(function () {
		var tweetDeck = document.getElementById('tweetDeck');
		if (document.getElementById('tweetDeck')) {
			(function () {
				var handle = tweetDeck.dataset.feed;
				var cleanHandle = handle.replace('@', '');
				var tweetParse = new _libTweetParseJs2['default']();
				// DEV/PROD consts
				var TweetController = (0, _libEnvVarJs2['default'])({ development: '/javascripts/data/twitter-' + cleanHandle + '.json', production: '/Static/JS/twitter-' + cleanHandle + '.json' });
	
				$.ajax({
					url: TweetController,
					type: 'GET',
					dataType: 'json',
					success: function success(data) {
						for (var i = 0; i < data.length; i++) {
							var tweetText = data[i].text;
							// Clean up tweet, add links
							tweetText = tweetParse.UrlUserHashtag(tweetText);
							tweetDeck.innerHTML = tweetDeck.innerHTML + ('<div class="col-sm col-xs-12">\n\t\t\t\t\t\t\t<div class="tweet-wrap">\n\t\t\t\t\t\t\t\t<div class="tweet"> \n\t\t\t\t\t\t\t\t\t' + tweetText + ' \n\t\t\t\t\t\t\t\t\t<div class="tweet-meta">\n\t\t\t\t\t\t\t\t\t\t<a href="' + data[i].user.url + '"><img class="tweet__profile-pic" src="' + data[i].user.profile_image_url_https + '"></a>\n\t\t\t\t\t\t\t\t\t\t<a href="' + data[i].user.url + '">' + data[i].user.screen_name + '</a><br>\n\t\t\t\t\t\t\t\t\t\t<a href="#">' + tweetParse.parseTimeAgo(data[i].created_at) + '</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>');
						}
					}
				});
			})();
		}
	})();

/***/ },
/* 13 */
/***/ function(module, exports) {

	// Tweet Parse!
	// 'Borrowed' and tweeked from:
	// http://www.simonwhatley.co.uk/examples/twitter/prototype/
	// http://stackoverflow.com/questions/6549223/javascript-code-to-display-twitter-created-at-as-xxxx-ago
	"use strict";
	
	var TweetParse = function TweetParse() {
	    this.UrlUserHashtag = function (n_string) {
	        String.prototype.parseURL = function () {
	            return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function (url) {
	                return url.link(url);
	            });
	        };
	        String.prototype.parseUsername = function () {
	            return this.replace(/[@]+[A-Za-z0-9-_]+/g, function (u) {
	                var username = u.replace("@", "");
	                return u.link("http://twitter.com/" + username);
	            });
	        };
	
	        String.prototype.parseHashtag = function () {
	            return this.replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {
	                var tag = t.replace("#", "%23");
	                return t.link("https://twitter.com/search?q=" + tag);
	            });
	        };
	        return n_string.parseURL().parseUsername().parseHashtag();
	    }, this.parseTimeAgo = function (n_string) {
	        var K = (function () {
	            var a = navigator.userAgent;
	            return {
	                ie: a.match(/MSIE\s([^;]*)/)
	            };
	        })();
	        var user_date = new Date(),
	            system_date = new Date(Date.parse(n_string));
	        if (K.ie) {
	            system_date = Date.parse(n_string.replace(/( \+)/, ' UTC$1'));
	        }
	        var diff = Math.abs((user_date - system_date) / 1000);
	        if (diff <= 1) {
	            return "just now";
	        }
	        if (diff < 20) {
	            return diff + " seconds ago";
	        }
	        if (diff < 40) {
	            return "half a minute ago";
	        }
	        if (diff < 60) {
	            return "less than a minute ago";
	        }
	        if (diff <= 90) {
	            return "one minute ago";
	        }
	        if (diff <= 3540) {
	            return Math.round(diff / 60) + " minutes ago";
	        }
	        if (diff <= 5400) {
	            return "1 hour ago";
	        }
	        if (diff <= 86400) {
	            return Math.round(diff / 3600) + " hours ago";
	        }
	        if (diff <= 129600) {
	            return "1 day ago";
	        }
	        if (diff < 604800) {
	            return Math.round(diff / 86400) + " days ago";
	        }
	        if (diff <= 777600) {
	            return "1 week ago";
	        }
	        var t_month = system_date.getUTCMonth() + 1,
	            t_day = system_date.getUTCDate(),
	            t_year = system_date.getUTCFullYear(),
	            newdate = t_month + "/" + t_day + "/" + t_year;
	
	        return "on " + newdate;
	    };
	};
	module.exports = TweetParse;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Usage:
	// var dev_var = envVar({
	// 	production:'myProductionURL',
	// 	development: 'myDevelopmentURL'
	// });
	"use strict";
	
	var envVar = function envVar(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop) && ("development") === prop) {
				return obj[prop];
			}
		}
	};
	module.exports = envVar;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	var resizeAccordionImages = function resizeAccordionImages() {
		var accordion = document.querySelector('.accordion');
		if (accordion) {
			var accordionItemAsideSet = document.querySelectorAll('.accordion-item__aside img');
			for (var i = 0; i < accordionItemAsideSet.length; i++) {
				var imageElement = accordionItemAsideSet[i];
				var imageElementWidth = imageElement.offsetWidth;
				var imageElementHeight = imageElement.offsetHeight;
				var imageRatio = imageElementWidth / imageElementHeight;
				var n = imageElementWidth / 2 - imageElementHeight / 2;
				if (imageRatio > 1) {
					imageElement.style.marginLeft = '-' + n + 'px';
				}
				if (imageRatio < 1) {
					imageElement.style.marginTop = n + 'px';
					imageElement.style.height = 'auto';
					imageElement.style.width = imageElementHeight + 'px';
				}
			}
		}
	};
	window.addEventListener('onload', resizeAccordionImages());

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	navigator.sayswho = function () {
	    var ua = navigator.userAgent,
	        tem,
	        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    if (/trident/i.test(M[1])) {
	        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	        return 'IE-' + (tem[1] || '');
	    }
	    if (M[1] === 'Chrome') {
	        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
	        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	    }
	    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	    return M.join('-');
	};
	document.querySelector('html').className += ' ' + navigator.sayswho().replace(' ', '-');

/***/ }
]);
//# sourceMappingURL=app.js.map