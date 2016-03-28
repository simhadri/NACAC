var Screen = function() {
	var screenOverlay = document.createElement('div');
	var mainElement = document.getElementById('main');
	mainElement.appendChild(screenOverlay)
	screenOverlay.setAttribute('id', 'screen__overlay');
	screenOverlay.setAttribute('class', 'screen__overlay');
	this.turnScreenOn = function() {
		screenOverlay.classList.add('screen__overlay--on');
	}
	this.turnScreenOff = function() {
		screenOverlay.classList.remove('screen__overlay--on');
	}
}
module.exports = Screen;