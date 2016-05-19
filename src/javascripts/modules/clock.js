import countDown from 'lib/countDown';

var getClock = document.getElementById('countdown-clock');
if (getClock) {
	var setTime = getClock.getAttribute('data-deadline');
	countDown('countdown-clock', setTime);
}