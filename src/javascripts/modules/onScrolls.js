// IMPORTS
import Throttled from 'lib/throttled.js';
import CountUp from 'lib/countUp.js';
// FUNCTION
(function() {
	// RAF SHIM
	// https://gist.github.com/paulirish/1579671
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	// add or remove BackToTop (bt) Element
	const btElement = function() {
			this.addBackToTop = function() {
					if (!document.getElementById('back-top')) {
						var backToTop = document.createElement('div'),
							mainElement = document.getElementsByTagName('main')[0];
						mainElement.appendChild(backToTop)
						backToTop.setAttribute('id', 'back-top');
						backToTop.setAttribute('class', 'back-top');
						backToTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';

						setTimeout(function() {
							backToTop.classList.add('back-top--scrolled');
							backToTop.addEventListener('click', function() { btAnimateToTop(0, 2500) });
						}, 5)

					}
				},
				this.removeBackToTop = function() {
					if (document.getElementById('back-top')) {
						document.getElementById('back-top').outerHTML = '';
					}
				}
		}
		// MAIN FUNCTION
		// function scrollToY(scrollTargetY, speed) {...}
		// scrollTargetY: the target scrollY property of the window
		// speed: time in pixels per second
	const btAnimateToTop = function(scrollTargetY, speed) {
			var scrollY = window.scrollY || document.documentElement.scrollTop,
				scrollTargetY = scrollTargetY || 0,
				speed = speed || 2000,
				easing = function easeInOutQuint(pos) {
					if ((pos /= 0.5) < 1) {
						return 0.5 * Math.pow(pos, 5);
					}
					return 0.5 * (Math.pow((pos - 2), 5) + 2);
				},
				currentTime = 0;

			// min time .1, max time .8 seconds
			var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

			// add animation loop
			function tick() {
				currentTime += 1 / 60;
				var p = currentTime / time;
				var t = easing(p);
				if (p < 1) {
					requestAnimFrame(tick);
					window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
				} else {
					window.scrollTo(0, scrollTargetY);
				}
			}
			// call it once to get started
			tick();

		}
		// INITIATE BT
		// bodyTop is goofy due to IE document.body.scrollTop bug
	const btInit = function() {
		var bt = new btElement;
		var bodyTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		var countCards = document.querySelectorAll('.number-block__numerals');
		var bumper = 600;
		if (bodyTop > 200) {
			bt.addBackToTop();
		} else {
			bt.removeBackToTop();
			return false;
		}

		const countInit = function() {
			for (let i = 0; i < countCards.length; i++) {
				var counter = new CountUp(countCards[i].getAttribute('id'), 0, countCards[i].getAttribute('data-counter'), 0, 3.6);
				counter.start();
			}
		}
		if (countCards.length && countCards[0].innerHTML == '0' && countCards[0].offsetTop - bumper <= bodyTop) {
			countInit();
		}
	}

	// Throttle btInit on scroll
	window.addEventListener('scroll', function() { Throttled(btInit(), 400) });
})();
