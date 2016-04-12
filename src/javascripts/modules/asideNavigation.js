// MODULES
import Throttled from 'modules/throttled.js';
(function() {
	var asideNavigation = function() {
		var asideNavigation = $(".aside-navigation"),
			bottomOfNavigation = $(window).scrollTop() + 180,
			asideNavigationContainer = asideNavigation.parent().parent(),
			asideNavigationHeight = asideNavigation.height(),
			asideNavigationLocation = asideNavigation.offset().top,
			offsetOfFirstArticle = $('.article__row:first-child').offset()
			console.log(offsetOfFirstArticle)


		if (bottomOfNavigation > $(".interior-hero__wrapper").height()) {
			$('.aside-navigation').addClass('aside-navigation--sticky')
		}
		if (bottomOfNavigation < 610) {
			$('.aside-navigation').removeClass('aside-navigation--sticky')
		}
		// THIS IS DUMB!
		if(asideNavigationContainer.height() < asideNavigationLocation){
			$('.aside-navigation').addClass("aside-navigation--hide");
		} else{
			$('.aside-navigation').removeClass("aside-navigation--hide");
		}
	}
	$(window).scroll(Throttled(asideNavigation, 100));
})();