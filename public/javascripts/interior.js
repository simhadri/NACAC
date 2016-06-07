webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var asideNavigation = function asideNavigation() {
			var asideNavigation = $(".aside-navigation"),
			    asideNavigationHeight = $(".aside-navigation").height(),
			    asideNavigationContainerHeight = $(".aside-navigation__row").height();
	
			if ($('.hero__wrapper').length === 0) {
				var interiorHeroHeight = 180,
				   
				// 340 is 180px form top +
				asideNavigationLocation = asideNavigation.offset().top + asideNavigationHeight,
				    bottomOfNavigation = $(window).scrollTop() + 120;
			} else {
				var interiorHeroHeight = $(".hero__wrapper").height() + $(".interior-hero__breadcrumb").height() + 220,
				    asideNavigationLocation = asideNavigation.offset().top,
				    bottomOfNavigation = $(window).scrollTop() + 120;
			}
	
			if (bottomOfNavigation > interiorHeroHeight) {
				$('.aside-navigation').addClass('aside-navigation--sticky');
			}
			if (bottomOfNavigation < interiorHeroHeight) {
				$('.aside-navigation').removeClass('aside-navigation--sticky');
			}
			// if location of aside-nav less its size
			// is greater than tge aside-navs container; hide
			if (asideNavigationLocation > asideNavigationContainerHeight) {
				$('.aside-navigation').addClass("aside-navigation--hide");
			} else {
				$('.aside-navigation').removeClass("aside-navigation--hide");
			}
		};
		if ($(".aside-navigation").length !== 0) {
			asideNavigation();
			$(window).scroll((0, _libThrottledJs2['default'])(asideNavigation, 20));
		}
	})();

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	if (document.getElementById('lightSlider')) {
		$('#lightSlider').lightSlider({
			item: 4,
			loop: false,
			slideMove: 4,
			pager: false,
			easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			speed: 600,
			responsive: [{
				breakpoint: 800,
				settings: {
					item: 3,
					slideMove: 1,
					slideMargin: 6
				}
			}, {
				breakpoint: 480,
				settings: {
					item: 2,
					slideMove: 1
				}
			}]
		});
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules Scripts
	// *********************
	'use strict';
	
	__webpack_require__(13);
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	__webpack_require__(16);

/***/ },
/* 18 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		var accordionItem = $('.accordion__item'),
		    toggleAccordion = function toggleAccordion(evt) {
			if ($(this).hasClass('accordion__item--selected')) {
				$(this).removeClass('accordion__item--selected');
			} else {
				accordionItem.removeClass('accordion__item--selected');
				$(this).addClass('accordion__item--selected');
			}
		};
		// events
		accordionItem.on('click', toggleAccordion);
	})();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var backTop = function backTop() {
			this.addBackTop = function () {
				if (!document.getElementById('back-top')) {
					(function () {
						var backTop = document.createElement('div'),
						    mainElement = document.getElementsByTagName('main')[0];
						mainElement.appendChild(backTop);
						backTop.setAttribute('id', 'back-top');
						backTop.setAttribute('class', 'back-top');
						backTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';
						setTimeout(function () {
							backTop.classList.add('back-top--scrolled');
							backTop.addEventListener('click', scrolltoTop);
						}, 10);
					})();
				}
			}, this.removeBackTop = function () {
				if (document.getElementById('back-top')) {
					document.getElementById('back-top').remove();
				}
			};
		};
		var scrolltoTop = function scrolltoTop() {
			$('html, body').animate({ scrollTop: 0 });
		};
	
		var backTopScroll = function backTopScroll() {
			var bt = new backTop(),
			    windowHeight = $(window).height(),
			    top = $(window).scrollTop();
			if (top > windowHeight) {
				bt.addBackTop();
			} else {
				bt.removeBackTop();
			}
		};
	
		$(window).scroll((0, _libThrottledJs2['default'])(backTopScroll, 100));
		$('.back-top').on('click', function () {
			$('html, body').animate({ scrollTop: 0 });
		});
	})();

/***/ },
/* 20 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		if (document.getElementById('productForm')) {
			var validator = new FormValidator('productForm', [{
				name: 'firstName',
				display: 'first name',
				rules: 'required|alpha'
			}, {
				name: 'lastName',
				display: 'last name',
				rules: 'required|alpha'
			}, {
				name: 'email',
				display: 'email',
				rules: 'required|valid_email'
			}], function (errors, evt) {
				// console.log(this.fields.lastName.element)
				for (var field in this.fields) {
					console.log("obj." + field, this.fields[field].element.validity.valid);
					if (this.fields[field].element.validity.valid) {
						this.fields[field].element.classList.remove('error');
					} else {
						this.fields[field].element.classList.add('error');
					}
					// this.fields[field].isValid;
				}
				if (errors.length > 0) {
					var errBox = document.getElementById('error-box');
					errBox.innerHTML = '';
	
					for (var n = 0; n < errors[0].messages.length; n++) {
						// errors[0].messages[n];
						errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
					}
					errBox.classList.add('error-box--display');
					return false;
				}
			});
		}
	})();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libCountUpJs = __webpack_require__(22);
	
	var _libCountUpJs2 = _interopRequireDefault(_libCountUpJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var countCard = function countCard() {
			$('.number-block__numerals').each(function () {
				if ($(this).text() == '0' && $(this).offset().top - 400 <= $(window).scrollTop()) {
					var counter = new _libCountUpJs2['default']($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 3.6);
					counter.start();
				}
			});
		};
		$(window).scroll((0, _libThrottledJs2['default'])(countCard, 100));
	})();

/***/ },
/* 22 */
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
	
	    // Robert Penner's easeOutExpo
	    this.easeOutExpo = function (t, b, c, d) {
	        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	    };
	    this.count = function (timestamp) {
	
	        if (!self.startTime) self.startTime = timestamp;
	
	        self.timestamp = timestamp;
	
	        var progress = timestamp - self.startTime;
	        self.remaining = self.duration - progress;
	
	        // to ease or not to ease
	        if (self.options.useEasing) {
	            if (self.countDown) {
	                self.frameVal = self.startVal - self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
	            } else {
	                self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
	            }
	        } else {
	            if (self.countDown) {
	                self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
	            } else {
	                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
	            }
	        }
	
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

/***/ }
]);
//# sourceMappingURL=interior.js.map