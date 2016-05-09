// MODULES
import Throttled from 'modules/throttled.js';

// FUNCTION
var asideNavigation = function() {
	var asideNavigation = $(".aside-navigation"),
		asideNavigationContainerHeight = $(".aside-navigation__row").height(),
		asideNavigationLocation = asideNavigation.offset().top;

		if ($('.hero__wrapper').length === 0){
			var interiorHeroHeight = 180,
				bottomOfNavigation = $(window).scrollTop() + 120;
		} else{
			var interiorHeroHeight = $(".hero__wrapper").height() +$(".interior-hero__breadcrumb").height() + 220,
				bottomOfNavigation = $(window).scrollTop() + 120;
		}

	if (bottomOfNavigation > interiorHeroHeight) {
		$('.aside-navigation').addClass('aside-navigation--sticky')
	}
	if (bottomOfNavigation < interiorHeroHeight) {
		$('.aside-navigation').removeClass('aside-navigation--sticky')
	}
	// if location of aside-nav less its size
	// is greater than tge aside-navs container; hide
	if( asideNavigationLocation  > asideNavigationContainerHeight){
		$('.aside-navigation').addClass("aside-navigation--hide");
	} else{
		$('.aside-navigation').removeClass("aside-navigation--hide");
	}
}
asideNavigation();
$(window).scroll(Throttled(asideNavigation, 20));