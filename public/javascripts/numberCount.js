webpackJsonp([3,4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ },

/***/ 5:
/***/ function(module, exports) {

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

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Vendor scirpts
	// *********************
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vendorCountUpJs = __webpack_require__(13);
	
	var _vendorCountUpJs2 = _interopRequireDefault(_vendorCountUpJs);
	
	// *********************
	//    Module scirpts
	// *********************
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	var countCard = function countCard() {
		$('.number-block__numerals').each(function () {
			if ($(this).text() == '0' && $(this).offset().top >= $(window).scrollTop()) {
				var counter = new _vendorCountUpJs2['default']($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 2.5);
				counter.start();
			}
		});
	};
	$(window).scroll((0, _modulesThrottledJs2['default'])(countCard, 100));

/***/ },

/***/ 13:
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
	    // toggles pause/resume animation
	    this.pauseResume = function () {
	        if (!self.paused) {
	            self.paused = true;
	            cancelAnimationFrame(self.rAF);
	        } else {
	            self.paused = false;
	            delete self.startTime;
	            self.duration = self.remaining;
	            self.startVal = self.frameVal;
	            requestAnimationFrame(self.count);
	        }
	    };
	    // reset to startVal so animation can be run again
	    this.reset = function () {
	        self.paused = false;
	        delete self.startTime;
	        self.startVal = startVal;
	        cancelAnimationFrame(self.rAF);
	        self.printValue(self.startVal);
	    };
	    // pass a new endVal and start animation
	    this.update = function (newEndVal) {
	        cancelAnimationFrame(self.rAF);
	        self.paused = false;
	        delete self.startTime;
	        self.startVal = self.frameVal;
	        self.endVal = Number(newEndVal);
	        self.countDown = self.startVal > self.endVal;
	        self.rAF = requestAnimationFrame(self.count);
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

});
//# sourceMappingURL=numberCount.js.map