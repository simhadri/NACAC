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
			var bottomOfNavigation = $(window).scrollTop() + 120;
			var asideNavigationLocation = $('.aside-navigation').offset().top;
			if (bottomOfNavigation > 610) {
				console.log('stick');
				$('.aside-navigation').addClass('aside-navigation--sticky');
			}
			if (bottomOfNavigation < 610) {
				$('.aside-navigation').removeClass('aside-navigation--sticky');
			}
			// THIS IS DUMB!
			var asideNavigationContainer = $(".aside-navigation").parent().parent();
			var asideNavigationHeight = $(".aside-navigation").height();
			console.log(asideNavigationContainer.height() + " and height is " + asideNavigationHeight);
		};
		$(window).scroll((0, _modulesThrottledJs2['default'])(asideNavigation, 100));
	})();

/***/ }

});
//# sourceMappingURL=interior.js.map