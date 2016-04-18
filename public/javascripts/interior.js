webpackJsonp([2,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	
	'use strict';
	
	__webpack_require__(11);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// MODULES
	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	// FUNCTION
	var asideNavigation = function asideNavigation() {
		var asideNavigation = $(".aside-navigation"),
		   
		// Includes 180px utility nav + breadcrumb height offset; These are fixed
		bottomOfNavigation = $(window).scrollTop() + 180,
		    asideNavigationContainerHeight = $(".aside-navigation__row").height(),
		    asideNavigationHeight = asideNavigation.height(),
		   
		// 170 off set
		interiorHeroHeight = $(".hero__wrapper").height() + $(".interior-hero__breadcrumb").height() + 170,
		   
		// 40 is for its margins
		asideNavigationLocation = asideNavigation.offset().top - 40,
		    offsetOfFirstArticle = $('.article__row:first-child').offset();
	
		if (bottomOfNavigation > interiorHeroHeight) {
			$('.aside-navigation').addClass('aside-navigation--sticky');
		}
		if (bottomOfNavigation < interiorHeroHeight) {
			$('.aside-navigation').removeClass('aside-navigation--sticky');
		}
		// if location of aside-nav less its size
		// is greater than tge aside-navs container; hide
		if (asideNavigationLocation > asideNavigationContainerHeight) {
			console.log('why');
			$('.aside-navigation').addClass("aside-navigation--hide");
		} else {
			$('.aside-navigation').removeClass("aside-navigation--hide");
		}
	};
	asideNavigation();
	$(window).scroll((0, _modulesThrottledJs2["default"])(asideNavigation, 20));

/***/ }
]);
//# sourceMappingURL=interior.js.map