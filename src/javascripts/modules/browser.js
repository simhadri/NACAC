function browserSniff(){
	navigator.sayswho = function() {
		var ua = navigator.userAgent,
			tem,
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE-' + (tem[1] || '');
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
		return M.join('-');
	};
	document.querySelector('html').className += ' ' + navigator.sayswho().replace(' ', '-');
}
document.addEventListener('onload', browserSniff());

const animateCaps = function(element, factor) {
	setTimeout(function() { animation() }, 600+ factor*30);
	setTimeout(function() { animationDown() }, 1200 + factor*30);
	setTimeout(function() { removeCaps() }, 2600);

	function animation() {
		element.style.bottom = '80%';
		element.style.transform = `rotate(60deg)`;
	}

	function animationDown() {
		element.style.transition = 'all 800ms ease-in';
		element.style.bottom = '-20%';
		element.style.transform = 'rotate(120deg)';
	}
	function removeCaps(){
		if(document.querySelector('#imgCont')){
			document.querySelector('#imgCont').remove();
		}
	}
}
const pomp = function() {
	var imgCont = document.createElement('div');
	imgCont.setAttribute('id', 'imgCont');
	imgCont.style.width = '100%';
	imgCont.style.height = '100%';
	imgCont.style.position = 'fixed';
	imgCont.style.top = 0;
	imgCont.style.zIndex = 99;

	// Loop
	for (var i = 0; i < 8; i++) {
		let n = i + 1;
		var imgElm = document.createElement('img');
		imgElm.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Graduation_hat.svg';
		imgElm.style.position = 'absolute';
		imgElm.style.bottom = '-20%';
		imgElm.setAttribute('class','js-caps');
		imgElm.style.zIndex = 8;
		imgElm.style.left = `${20+Math.floor((Math.random() * 60) + 1)}%`;
		imgElm.style.width = `${(90)+n}px`;
		imgElm.style.transition = 'all 600ms ease-out';
		imgElm.style['-webkit-user-select'] = 'none';
		imgElm.style['-moz-user-select'] = 'none';
		imgElm.style['-ms-user-select'] = 'none';
		var mainElement = document.querySelector('body').appendChild(imgCont);
		var mainElement = document.querySelector('#imgCont').appendChild(imgElm);
	}
}

let clicks = 0;
const onClick = function() {
	clicks += 1;
	if (clicks === 1) {
		setTimeout(resetClicks, 8000);
	}
	if (clicks === 16) {
		//DO
		pomp();
		var getCaps = document.querySelectorAll('.js-caps')
		for (var x = 0; x < getCaps.length; x++) {
			animateCaps(getCaps[x], x);

		}
		clicks = 0;
	}
}
const resetClicks = function() {
	clicks = 0;
	return false;
}
if (document.querySelector('.breadcrumb')) {
	var elm = document.querySelector('.breadcrumb');
	elm.addEventListener('click', onClick);
}