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
	
	// import 'modules/episerverViewMode';
	// import 'modules/onScrolls';
	'use strict';
	
	__webpack_require__(4);
	
	// import 'modules/navigation';
	// import 'modules/search';
	// import 'modules/tabs';
	// import 'modules/browser';
	// import 'modules/tweetDeck';
	// import 'modules/resizeAccordionImage';

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
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

/***/ }
]);
//# sourceMappingURL=app.js.map