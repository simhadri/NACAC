// MODULES
import Throttled from 'modules/throttled.js';

// FUNCTION
var asideNavigation = function() {
	var asideNavigation = $(".aside-navigation"),
		// Includes 180px utility nav + breadcrumb height offset; These are fixed
		bottomOfNavigation = $(window).scrollTop() + 120,
		asideNavigationContainerHeight = $(".aside-navigation__row").height(),
		asideNavigationHeight = asideNavigation.height(),
		// 170 off set
		interiorHeroHeight = $(".hero__wrapper").height() +$(".interior-hero__breadcrumb").height() + 220,
		// 40 is for its margins
		asideNavigationLocation = asideNavigation.offset().top,
		offsetOfFirstArticle = $('.article__row:first-child').offset();

	if (bottomOfNavigation >  interiorHeroHeight) {
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