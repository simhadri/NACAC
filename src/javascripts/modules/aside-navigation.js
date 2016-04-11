// MODULES
import Throttled from 'modules/throttled.js';
(function() {
	var asideNavigation = function() {
		var bottomOfNavigation = $(window).scrollTop() + 120;
		var asideNavigationLocation = $('.aside-navigation').offset().top;
		if (bottomOfNavigation > 610) {
			console.log('stick')
			$('.aside-navigation').addClass('aside-navigation--sticky')
		}
		if (bottomOfNavigation < 610) {
			$('.aside-navigation').removeClass('aside-navigation--sticky')
		}
		// THIS IS DUMB!
		var asideNavigationContainer = $(".aside-navigation").parent().parent();
		var asideNavigationHeight = $(".aside-navigation").height()
		console.log(asideNavigationContainer.height() + " and height is " + asideNavigationHeight)
	}
	$(window).scroll(Throttled(asideNavigation, 100));
})();
