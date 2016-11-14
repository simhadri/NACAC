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

const pomp = function() {
	
	var imgCont = document.createElement('div');
	imgCont.setAttribute('id', 'imgCont');
	imgCont.style.width = '100%';
    imgCont.style.height = '100%';
    imgCont.style.position = 'fixed';
    imgCont.style.top = 0;
    imgCont.style.zIndex = 99;

	var imgElm = document.createElement('img');
	var i = 1;
	imgElm.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Graduation_hat.svg';
	imgElm.style.position = 'absolute';
	imgElm.style.bottom =  '-10%';
    imgElm.style.zIndex =  8;
	imgElm.style.width = `${(100 * i)/0.4}px`;
	imgElm.style.transition = 'all 600ms ease-out';
	var mainElement = document.querySelector('body').appendChild(imgCont);
	var mainElement = document.querySelector('#imgCont').appendChild(imgElm);

	setTimeout(function(){animation()}, 400);
	setTimeout(function(){animationDown()}, 900);
	function animation(){
		imgElm.style.bottom = '80%';
		imgElm.style.transform = 'rotate(90deg)';
	}
	function animationDown(){
		imgElm.style.transition = 'all 600ms ease-in';
		imgElm.style.bottom = '-10%';
		imgElm.style.transform = 'rotate(180deg)';
	}
	
}

document.addEventListener('onload', pomp());
