webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	
	'use strict';
	
	__webpack_require__(10);

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	// MODULES
	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	(function () {
		var asideNavigation = function asideNavigation() {
			var asideNavigation = $(".aside-navigation"),
			   
			// Includes 180px utility nav + breadcrumb height offset; These are fixed
			bottomOfNavigation = $(window).scrollTop() + 180,
			    asideNavigationContainerHeight = $(".aside-navigation__row").height(),
			    asideNavigationHeight = asideNavigation.height(),
			   
			// 40 is for its margins
			asideNavigationLocation = asideNavigation.offset().top - 40,
			    offsetOfFirstArticle = $('.article__row:first-child').offset();
	
			if (bottomOfNavigation > $(".interior-hero__wrapper").height() + $(".interior-hero__breadcrumb").height() + 70) {
				$('.aside-navigation').addClass('aside-navigation--sticky');
			}
			if (bottomOfNavigation < 610) {
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
	})();

/***/ }

});
//# sourceMappingURL=interior.js.map