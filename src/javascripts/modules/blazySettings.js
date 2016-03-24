$(function() {
	var bLazy = new Blazy({
		//breakpoints use max-width
		//don't always trump other loading factors
		breakpoints: [
			{ width: 640, src: 'data-src-sm' }
			//{width: 767, src: 'data-src-sm'}
		],
		success: function(element) {
			setTimeout(function() {
				// We want to remove the loader gif now.
				// First we find the parent container
				// then we remove the "loading" class which holds the loader image
				var parent = element.parentNode;
				parent.className = parent.className.replace(/\bloading\b/, '');
			}, 2000);
		}
	});
});