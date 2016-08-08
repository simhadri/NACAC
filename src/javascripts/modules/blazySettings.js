// FUNCTION
;(function() {
	var initBlazy = function() {
		var bLazy = new Blazy({
			breakpoints: [
				{ width: 640, src: 'data-src-sm' }
				//{width: 767, src: 'data-src-sm'}
			],
			success: function(element) {
				setTimeout(function() {
					var parent = element.parentNode;
					parent.className = parent.className.replace(/\bloading\b/, '');
				}, 2000);
			}
		});
		setTimeout(bLazy.revalidate(), 200);
	}
	document.addEventListener('load', initBlazy());
})();