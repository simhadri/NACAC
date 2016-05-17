// *********************
//    Modules Scripts
// *********************

import 'modules/asideNavigation';
import 'modules/accordion';
import 'modules/backTop';
import 'modules/formValidation';
import Throttled from 'modules/throttled.js';

// *********************
//    Vendor Scirpts
// *********************
import CountUp from 'vendor/countUp.js';

// *********************
//    Page Functions
// *********************
var countCard = function() {
	$('.number-block__numerals').each(function() {
		if ($(this).text() == '0' && $(this).offset().top >= $(window).scrollTop()) {
			var counter = new CountUp($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 2.5);
			counter.start();
		}
	});
}
$(window).scroll(Throttled(countCard, 100));