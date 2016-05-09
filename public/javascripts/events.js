webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Vendor scirpts
	// *********************
	
	// *********************
	//    Modules scripts
	// *********************
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesCountdownClock = __webpack_require__(12);
	
	var _modulesCountdownClock2 = _interopRequireDefault(_modulesCountdownClock);
	
	__webpack_require__(13);
	
	var getClock = document.getElementById('countdown-clock');
	if (getClock) {
		var setTime = getClock.getAttribute('data-deadline');
		(0, _modulesCountdownClock2['default'])('countdown-clock', setTime);
	}
	
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

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	var initializeClock = function initializeClock(id, endtime) {
		var clock = document.getElementById(id),
		    seg = ["days", "hours", "minutes"];
		for (var i = 0; i < seg.length; i++) {
			var wrap = document.createElement('div'),
			    div = document.createElement('div'),
			    span = document.createElement('span');
			wrap.setAttribute('class', 'clock__segment');
			div.setAttribute('class', 'segment__num ' + seg[i]);
			span.innerHTML = seg[i];
			span.setAttribute('class', 'segment__label');
			clock.appendChild(wrap);
			wrap.appendChild(div);
			wrap.appendChild(span);
		}
	
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			//var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor(t / 1000 / 60 % 60);
			var hours = Math.floor(t / (1000 * 60 * 60) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes
				// ,
				//'seconds': seconds
			};
		}
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		//var secondsSpan = clock.querySelector('.seconds');
	
		function updateClock() {
			var t = getTimeRemaining(endtime);
			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			//secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	};
	module.exports = initializeClock;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// MODULES
	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	// FUNCTION
	var asideNavigation = function asideNavigation() {
		var asideNavigation = $(".aside-navigation"),
		    asideNavigationContainerHeight = $(".aside-navigation__row").height(),
		    asideNavigationLocation = asideNavigation.offset().top;
	
		if ($('.hero__wrapper').length === 0) {
			var interiorHeroHeight = 180,
			    bottomOfNavigation = $(window).scrollTop() + 120;
		} else {
			var interiorHeroHeight = $(".hero__wrapper").height() + $(".interior-hero__breadcrumb").height() + 220,
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
	asideNavigation();
	$(window).scroll((0, _modulesThrottledJs2["default"])(asideNavigation, 20));

/***/ }
]);
//# sourceMappingURL=events.js.map