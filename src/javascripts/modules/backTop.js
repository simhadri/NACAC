// MODULES
import Throttled from 'modules/throttled.js';

// FUNCTION
var backTop = function() {
	var windowHeight = $('body').height(),
		oneThirdPage = windowHeight / 3,
		top = $(window).scrollTop();
	
	if( top > oneThirdPage){
		$('.back-top').addClass('back-top--scrolled')
	} else{
		$('.back-top').removeClass('back-top--scrolled')
	}
}
backTop();
$(window).scroll(Throttled(backTop, 100));