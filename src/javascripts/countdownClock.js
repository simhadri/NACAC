// *********************
//    Modules scripts
// *********************
import Countdown from 'modules/countdown.js';

var countdown = new Countdown();
var setTime = document.getElementById('countdown-clock').dataset.deadline;
countdown.initializeClock('countdown-clock',setTime);