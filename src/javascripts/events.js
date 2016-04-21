// *********************
//    Vendor scirpts
// *********************

// *********************
//    Modules scripts
// *********************
import initializeClock from 'modules/countdownClock';
import 'modules/asideNavigation';

var getClock = document.getElementById('countdown-clock');
if (getClock) {
	var setTime = getClock.getAttribute('data-deadline');
	initializeClock('countdown-clock', setTime);
}