var Screen = function() {
    var screenOverlay = document.getElementsByClassName('screen__overlay')[0];
    this.turnScreenOn = function() {
        screenOverlay.classList.add('screen__overlay--on');
    }
    this.turnScreenOff = function() {
        screenOverlay.classList.remove('screen__overlay--on');
    }
}
module.exports = Screen;