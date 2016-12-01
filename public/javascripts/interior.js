<<<<<<< HEAD
webpackJsonp([2,3],{0:function(e,t,r){e.exports=r(18)},18:function(e,t,r){"use strict";r(19),r(20),r(22)},19:function(e,t){"use strict";!function(){var e=function(e,t){document.getElementById("productForm").setAttribute("name",t);new FormValidator(t,e,function(e,r){var n=document.getElementById("error-box__"+t);n.innerHTML="";for(var i=0;i<r.target.length;i++)r.target[i].classList.remove("input--error");for(var a in e){for(var a in this.fields)this.fields[a].element.validity.valid?this.fields[a].element.classList.remove("input--error"):this.fields[a].element.classList.add("input--error");if(e.length>0){var n=document.getElementById("error-box__"+t);n.innerHTML="";for(var s=0;s<e[0].messages.length;s++)n.innerHTML=n.innerHTML+e[0].messages[s]+"<br>";return n.classList.add("error-box--display"),!1}}})};if(document.getElementById("productForm")){var t=[{name:"firstName",display:"first name",rules:"required|alpha"},{name:"lastName",display:"last name",rules:"required|alpha"},{name:"email",display:"email",rules:"required|valid_email"}];e(t,"productForm")}document.addEventListener("load",e)}()},20:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=r(21),a=n(i);!function(){var e=document.getElementById("countdown-clock");if(e){var t=e.getAttribute("data-deadline");(0,a["default"])("countdown-clock",t)}}()},21:function(e,t){"use strict";var r=function(e,t){function r(e){var t=Date.parse(e)-Date.parse(new Date),r=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24),i=Math.floor(t/864e5);return{total:t,days:i,hours:n,minutes:r}}function n(){var e=r(t);u.innerHTML=e.days,c.innerHTML=("0"+e.hours).slice(-2),m.innerHTML=("0"+e.minutes).slice(-2),e.total<=0&&clearInterval(f)}for(var i=document.getElementById(e),a=["days","hours","minutes"],s=0;s<a.length;s++){var l=document.createElement("div"),o=document.createElement("div"),d=document.createElement("span");l.setAttribute("class","clock__segment"),o.setAttribute("class","segment__num "+a[s]),d.innerHTML=a[s],d.setAttribute("class","segment__label"),i.appendChild(l),l.appendChild(o),l.appendChild(d)}var u=i.querySelector(".days"),c=i.querySelector(".hours"),m=i.querySelector(".minutes");n();var f=setInterval(n,6e4)};e.exports=r},22:function(e,t){"use strict";document.getElementById("lightSlider")&&0!==document.getElementById("lightSlider").childElementCount&&$("#lightSlider").lightSlider({item:4,loop:!1,slideMove:4,pager:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:2,slideMove:1}}]})}});
=======
webpackJsonp([2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules Scripts
	// *********************
	// import 'modules/asideNavigation';
	'use strict';
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	__webpack_require__(20);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	;(function () {
		// Validation Function
		var initValidate = function initValidate(rules, formId) {
			document.getElementById('productForm').setAttribute('name', formId);
			var validator = new FormValidator(formId, rules, function (errors, e) {
				// get <p id="error-box__FormId"></p> and clear it
				var errBox = document.getElementById('error-box__' + formId);
				errBox.innerHTML = '';
				// remove input--error is added previously
				for (var i = 0; i < e.target.length; i++) {
					e.target[i].classList.remove('input--error');
				}
				// add errors to error-box and error class to respective inputs
				for (var field in errors) {
					for (var field in this.fields) {
						if (this.fields[field].element.validity.valid) {
							this.fields[field].element.classList.remove('input--error');
						} else {
							this.fields[field].element.classList.add('input--error');
						}
					}
					if (errors.length > 0) {
						var errBox = document.getElementById('error-box__' + formId);
						errBox.innerHTML = '';
	
						for (var n = 0; n < errors[0].messages.length; n++) {
							errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
						}
						errBox.classList.add('error-box--display');
						return false;
					}
				}
			});
			// Custom Callbacks
			// validator.registerCallback('checkbox_list', function(value) {});
			// validator.setMessage('lastName', 'Custom Last Name Message');
		};
		if (document.getElementById('productForm')) {
			var formRules = [{
				name: 'firstName',
				display: 'first name',
				rules: 'required|alpha'
			}, {
				name: 'lastName',
				display: 'last name',
				rules: 'required|alpha'
			}, {
				name: 'email',
				display: 'email',
				rules: 'required|valid_email'
			}];
			initValidate(formRules, 'productForm');
		}
		document.addEventListener('load', initValidate);
	})();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libCountDown = __webpack_require__(18);
	
	var _libCountDown2 = _interopRequireDefault(_libCountDown);
	
	// FUNCTION
	(function () {
		var getClock = document.getElementById('countdown-clock');
		if (getClock) {
			var setTime = getClock.getAttribute('data-deadline');
			(0, _libCountDown2['default'])('countdown-clock', setTime);
		}
	})();

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	var countDown = function countDown(id, endtime) {
		var clock = document.getElementById(id),
		    seg = ["days", "hours", "minutes"];
		for (var i = 0; i < seg.length; i++) {
			var wrap = document.createElement('div'),
			    div = document.createElement('div'),
			    span = document.createElement('span');
			wrap.setAttribute('class', 'clock__segment');
			div.setAttribute('class', 'segment__num ' + seg[i]);
			span.innerHTML = seg[i];
			span.setAttribute('class', 'segment__label');
			clock.appendChild(wrap);
			wrap.appendChild(div);
			wrap.appendChild(span);
		}
	
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			//var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor(t / 1000 / 60 % 60);
			var hours = Math.floor(t / (1000 * 60 * 60) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes
				//'seconds': seconds
			};
		}
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		//var secondsSpan = clock.querySelector('.seconds');
	
		function updateClock() {
			var t = getTimeRemaining(endtime);
			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			//secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
		updateClock();
		var timeinterval = setInterval(updateClock, 60000);
	};
	module.exports = countDown;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	if (document.getElementById('lightSlider') && document.getElementById('lightSlider').childElementCount !== 0) {
		$('#lightSlider').lightSlider({
			item: 4,
			loop: false,
			slideMove: 4,
			pager: false,
			easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			speed: 600,
			responsive: [{
				breakpoint: 800,
				settings: {
					item: 3,
					slideMove: 1,
					slideMargin: 6
				}
			}, {
				breakpoint: 480,
				settings: {
					item: 2,
					slideMove: 1
				}
			}]
		});
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	var initChart = function initChart() {
		var circleSet = document.querySelectorAll('.js_circle');
		var chartSet = document.querySelectorAll('.js_bars');
	
		// Toggle Canvas Bar Colors
		var toggleColor = function toggleColor(toggle) {
			if (toggle === 0) {
				var color = '#3B488C';
				return color;
			} else {
				var color = '#00ACAD';
				return color;
			}
		};
	
		// Redraw (x2) for Retina Display
		var retinaResize = function retinaResize(canvas, ctx, canvasWidth, canvasHeight) {
			if (window.devicePixelRatio > 1) {
				canvas.width = canvasWidth * window.devicePixelRatio;
				canvas.height = canvasHeight * window.devicePixelRatio;
				canvas.setAttribute("style", 'width:' + canvasWidth + 'px;height:' + canvasHeight + 'px');
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		};
	
		// For Circle Charts
		if (circleSet) {
			//Will Need for More than one!
			for (var i = 0; i < circleSet.length; i++) {
				// get Params for Circle
				var percent = circleSet[i].dataset.percent;
				var circleSize = circleSet[i].offsetWidth;
				var circleRad = circleSize / 2;
				var circleLineWidth = circleRad / 4;
	
				// Create Canvas
				var canvas = document.createElement('canvas');
	
				// Get Chart Metrics, Dictated at charts.scss
				canvas.width = circleSize;
				canvas.height = circleSize;
				circleSet[i].appendChild(canvas);
	
				// ctx is Canvas Context
				var ctx = canvas.getContext('2d');
	
				// For Retina
				retinaResize(canvas, ctx, canvas.width, canvas.height);
	
				// Draw Underlying Full Circle
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.beginPath();
				ctx.arc(circleRad, circleRad, circleRad - circleLineWidth, 0, 2 * Math.PI);
				ctx.strokeStyle = '#00ACAD';
				ctx.lineWidth = circleLineWidth;
				ctx.stroke();
				ctx.closePath();
	
				// Draw Percentage of Total Circle
				ctx.beginPath();
	
				// Starting point is the Bottom
				// A full Circle is Pi * 2
				// ----------------------
				// 0 || Pi*2: 3 o'clock; Start/End
				// Pi/2:      6 o'clock 
				// Pi:        9 o'clock
				// Pi*1.5:    12 o'clock
				var startingPoint = Math.PI / 2;
	
				// Get the entered amount and convert to real percent 42 -> 0.42
				var percentPoint = percent / 100;
	
				// Percent of Pi; Pi*2 == Full Circle
				// Let's say you want 25% of a full Circle
				// (Pi*2) * 0.25 = 1.570...
				var step = Math.PI * 2 * percentPoint;
				ctx.arc(circleRad, circleRad, circleRad - circleLineWidth, startingPoint, startingPoint + step, false);
				ctx.strokeStyle = '#F28700';
				ctx.lineWidth = circleLineWidth;
				ctx.stroke();
	
				// Add Percent Symbol
				var percentText = document.createElement('div');
				percentText.className = 'circle__text';
				percentText.innerHTML = percent + '<sup>%</sup>';
				circleSet[i].appendChild(percentText);
			}
		}
	
		// For Bars
		if (chartSet) {
			//Will Need for More than one!
			for (var i = 0; i < chartSet.length; i++) {
				// get Params for bars
				// barset String to Object
				var barSet = chartSet[i].dataset.bars.split(',');
				var barSetLength = barSet.length;
	
				// Get Chart Metrics, Dictated at charts.scss
				var chartWidth = chartSet[i].offsetWidth;
				var chartHeight = chartSet[i].offsetHeight;
	
				// Create Canvas
				var canvas = document.createElement('canvas');
	
				canvas.width = chartWidth;
				canvas.height = chartHeight;
				chartSet[i].appendChild(canvas);
	
				// ctx is Canvas Context
				var ctx = canvas.getContext('2d');
	
				// For Retina
				retinaResize(canvas, ctx, canvas.width, canvas.height);
	
				// Draw Underlying bar
				for (var _i = 0; _i < barSet.length; _i++) {
					var barDatum = barSet[_i] / 100;
	
					// canvas width / number of bars
					var blockWidth = parseInt(chartWidth / barSetLength);
					var blockHeight = parseInt(barDatum * chartHeight);
	
					var blockX = blockWidth * _i;
					var blockY = chartHeight - blockHeight;
	
					ctx.fillStyle = toggleColor(_i % 2);
					ctx.fillRect(blockX, blockY, blockWidth, blockHeight);
					ctx.fillStyle = 'white';
					ctx.font = '16px sans-serif';
	
					// Place the font 20px below top of bar
					var fontY = blockY + 20;
	
					// If the bar is too small (blockY), place it above
					if (barSet[_i] <= 15) {
						fontY = blockY - 10;
					}
	
					// Add Number to Bar
					ctx.fillText(barSet[_i], blockX + blockWidth / 2 - 8, fontY);
				}
			}
		}
	
		// If more than one Chart, Run Slider
		var cardSlider = document.querySelector('.chartSlider');
		if (cardSlider.childElementCount !== 0) {
			$('.chartSlider').lightSlider({
				item: 1,
				loop: false,
				slideMove: 1,
				pager: true,
				easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
				speed: 600
			});
		}
	};
	document.addEventListener('DOMContentLoaded', initChart());

/***/ }
]);
//# sourceMappingURL=interior.js.map
>>>>>>> develop
