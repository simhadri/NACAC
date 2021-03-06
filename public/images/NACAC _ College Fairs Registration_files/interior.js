webpackJsonp([2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules Scripts
	// *********************
	// import 'modules/asideNavigation';
	'use strict';
	
	__webpack_require__(17);
	
	__webpack_require__(18);
	
	__webpack_require__(20);

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libCountDown = __webpack_require__(19);
	
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
/* 19 */
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
/* 20 */
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