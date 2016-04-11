// MODULES
import Throttled from 'modules/throttled.js';
(function() {
	//$(window).scroll(Throttled(console.log('fire'), 100));
	var asideNavigation = function() {
		// var asideNavigation = ;
		var bottomOfNavigation = $(window).scrollTop() + 120;
		console.log(bottomOfNavigation)
		var asideNavigationLocation = $('.aside-navigation').offset().top;
		console.log(asideNavigationLocation);
		// if ($('.aside-navigation').hasClass('aside-navigation--sticky')) {
		// 	asideNavigationLocation = 0;
		// }
		if (bottomOfNavigation > 610) {
			console.log('stick')
			$('.aside-navigation').addClass('aside-navigation--sticky')
		}
		if (bottomOfNavigation < 610) {
			$('.aside-navigation').removeClass('aside-navigation--sticky')
		}


	}
	$(window).scroll(Throttled(asideNavigation, 200));
})();
