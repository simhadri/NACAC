<<<<<<< HEAD
webpackJsonp([2,3],[function(e,t,r){e.exports=r(17)},,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r(18),r(19),r(21)},function(e,t){"use strict";!function(){var e=function(e,t){document.getElementById("productForm").setAttribute("name",t);new FormValidator(t,e,function(e,r){var n=document.getElementById("error-box__"+t);n.innerHTML="";for(var i=0;i<r.target.length;i++)r.target[i].classList.remove("input--error");for(var a in e){for(var a in this.fields)this.fields[a].element.validity.valid?this.fields[a].element.classList.remove("input--error"):this.fields[a].element.classList.add("input--error");if(e.length>0){var n=document.getElementById("error-box__"+t);n.innerHTML="";for(var s=0;s<e[0].messages.length;s++)n.innerHTML=n.innerHTML+e[0].messages[s]+"<br>";return n.classList.add("error-box--display"),!1}}})};if(document.getElementById("productForm")){var t=[{name:"firstName",display:"first name",rules:"required|alpha"},{name:"lastName",display:"last name",rules:"required|alpha"},{name:"email",display:"email",rules:"required|valid_email"}];e(t,"productForm")}document.addEventListener("load",e)}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=r(20),a=n(i);!function(){var e=document.getElementById("countdown-clock");if(e){var t=e.getAttribute("data-deadline");(0,a["default"])("countdown-clock",t)}}()},function(e,t){"use strict";var r=function(e,t){function r(e){var t=Date.parse(e)-Date.parse(new Date),r=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24),i=Math.floor(t/864e5);return{total:t,days:i,hours:n,minutes:r}}function n(){var e=r(t);u.innerHTML=e.days,c.innerHTML=("0"+e.hours).slice(-2),m.innerHTML=("0"+e.minutes).slice(-2),e.total<=0&&clearInterval(f)}for(var i=document.getElementById(e),a=["days","hours","minutes"],s=0;s<a.length;s++){var o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("span");o.setAttribute("class","clock__segment"),l.setAttribute("class","segment__num "+a[s]),d.innerHTML=a[s],d.setAttribute("class","segment__label"),i.appendChild(o),o.appendChild(l),o.appendChild(d)}var u=i.querySelector(".days"),c=i.querySelector(".hours"),m=i.querySelector(".minutes");n();var f=setInterval(n,6e4)};e.exports=r},function(e,t){"use strict";document.getElementById("lightSlider")&&$("#lightSlider").lightSlider({item:4,loop:!1,slideMove:4,pager:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:2,slideMove:1}}]})}]);
=======
webpackJsonp([2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


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
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules Scripts
	// *********************
	// import 'modules/asideNavigation';
	'use strict';
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	__webpack_require__(21);

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libCountDown = __webpack_require__(20);
	
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
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	if (document.getElementById('lightSlider')) {
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

/***/ }
]);
//# sourceMappingURL=interior.js.map
>>>>>>> develop
