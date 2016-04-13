var Screen = function() {



	this.turnScreenOn = function(modifier) {
		let screenOverlay = document.createElement('div');
		let mainElement = document.getElementById('main');
		mainElement.appendChild(screenOverlay)
		screenOverlay.setAttribute('id', 'screen__overlay');
		screenOverlay.setAttribute('class', 'screen__overlay');
		setTimeout(function() {
			screenOverlay.classList.add('screen__overlay--on');
			if (modifier) {
				screenOverlay.classList.add('screen__overlay--' + modifier);
			}
		}, 10)

	}
	this.turnScreenOff = function() {
		let screenOverlay = document.getElementById('screen__overlay')
		screenOverlay.classList.remove('screen__overlay--on');
		setTimeout(function() {
			screenOverlay.outerHTML = '';

		}, 400)
	}
}
module.exports = Screen;
