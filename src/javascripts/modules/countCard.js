// IMPORTS
import Throttled from 'lib/throttled.js';
import CountUp from 'lib/countUp.js';

// FUNCTION
(function() {
	'use strict';
	var countCard = function() {
		// When to fire above cars in PX
		var bumper = 600
		$('.number-block__numerals').each(function() {
			if ($(this).text() == '0' && $(this).offset().top - bumper <= $(window).scrollTop()) {
				var counter = new CountUp($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 3.6);
				counter.start();
			}
		});
	}
	$(window).scroll(Throttled(countCard, 100));
})();