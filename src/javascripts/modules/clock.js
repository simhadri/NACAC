// IMPORTS
import countDown from 'lib/countDown';

// FUNCTION
(function() {
	var getClock = document.getElementById('countdown-clock');
	if (getClock) {
		var setTime = getClock.getAttribute('data-deadline');
		countDown('countdown-clock', setTime);
	}
})();