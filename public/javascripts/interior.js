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
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	(function () {
		var asideNavigation = function asideNavigation() {
			var asideNavigation = $(".aside-navigation"),
			   
			// Includes 180px utility nav + breadcrumb height offset; These are fixed
			bottomOfNavigation = $(window).scrollTop() + 180,
			    asideNavigationContainer = asideNavigation.parent().parent(),
			    asideNavigationHeight = asideNavigation.height(),
			    asideNavigationLocation = asideNavigation.offset().top,
			    offsetOfFirstArticle = $('.article__row:first-child').offset();
	
			if (bottomOfNavigation > $(".interior-hero__wrapper").height()) {
				$('.aside-navigation').addClass('aside-navigation--sticky');
			}
			if (bottomOfNavigation < 610) {
				$('.aside-navigation').removeClass('aside-navigation--sticky');
			}
			// THIS IS DUMB!
			if (asideNavigationContainer.height() < asideNavigationLocation) {
				$('.aside-navigation').addClass("aside-navigation--hide");
			} else {
				$('.aside-navigation').removeClass("aside-navigation--hide");
			}
		};
		$(window).scroll((0, _modulesThrottledJs2['default'])(asideNavigation, 100));
	})();

/***/ }

});
//# sourceMappingURL=interior.js.map