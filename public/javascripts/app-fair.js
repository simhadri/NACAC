<<<<<<< HEAD
webpackJsonp([1,3],[function(e,t,n){e.exports=n(15)},,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(4),i=a(r),o=n(5),s=a(o);!function(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();var e=document.getElementById("js_scroll-to");e&&!function(){var t=document.getElementById("js_jump"),a=t.offsetTop;e.addEventListener("click",function(){n(a,2500)})}();var t=function(){this.addBackToTop=function(){if(!document.getElementById("back-top")){var e=document.createElement("div"),t=document.getElementsByTagName("main")[0];t.appendChild(e),e.setAttribute("id","back-top"),e.setAttribute("class","back-top"),e.innerHTML='<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>',setTimeout(function(){e.classList.add("back-top--scrolled"),e.addEventListener("click",function(){n(0,2500)})},5)}},this.removeBackToTop=function(){document.getElementById("back-top")&&(document.getElementById("back-top").outerHTML="")}},n=function(e,t){function n(){i+=1/60;var t=i/o,s=r(t);1>t?(requestAnimFrame(n),window.scrollTo(0,a+(e-a)*s)):window.scrollTo(0,e)}var a=window.scrollY||document.documentElement.scrollTop,e=e||0,t=t||2e3,r=function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)},i=0,o=Math.max(.1,Math.min(Math.abs(a-e)/t,.8));n()},a=function(){var e=new t,n=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,a=document.querySelectorAll(".number-block__numerals"),r=600;if(!(n>200))return e.removeBackToTop(),!1;e.addBackToTop();var i=function(){for(var e=0;e<a.length;e++){var t=new s["default"](a[e].getAttribute("id"),0,a[e].getAttribute("data-counter"),0,3.6);t.start()}};a.length&&"0"==a[0].innerHTML&&a[0].offsetTop-r<=n&&i()};window.addEventListener("scroll",function(){(0,i["default"])(a(),400)})}()},function(e,t){"use strict";var n=function(e,t,n){var a,r,i,o=Date.now||function(){return(new Date).getTime()},s=null,u=0;n||(n={});var c=function(){u=n.leading===!1?0:o(),s=null,i=e.apply(a,r),s||(a=r=null)};return function(){u||n.leading!==!1||(u=o());var l=t-(o()-u);return a=this,r=arguments,0>=l||l>t?(s&&(clearTimeout(s),s=null),u=o(),i=e.apply(a,r),s||(a=r=null)):s||n.trailing===!1||(s=setTimeout(c,l)),i}};e.exports=n},function(e,t){"use strict";var n=function(e,t,n,a,r,i){for(var o=0,s=["webkit","moz","ms","o"],u=0;u<s.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[s[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[u]+"CancelAnimationFrame"]||window[s[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime();console.log(n);var a=Math.max(0,16-(n-o)),r=window.setTimeout(function(){e(n+a)},a);return o=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),this.options={useEasing:!0,useGrouping:!0,separator:",",decimal:"."};for(var c in i)i.hasOwnProperty(c)&&(this.options[c]=i[c]);""===this.options.separator&&(this.options.useGrouping=!1),this.options.prefix||(this.options.prefix=""),this.options.suffix||(this.options.suffix=""),this.d="string"==typeof e?document.getElementById(e):e,this.startVal=Number(t),this.endVal=Number(n),this.countDown=this.startVal>this.endVal,this.frameVal=this.startVal,this.decimals=Math.max(0,a||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*Number(r)||2e3;var l=this;this.version=function(){return"1.6.0"},this.printValue=function(e){var t=isNaN(e)?"--":l.formatNumber(e);"INPUT"==l.d.tagName?this.d.value=t:"text"==l.d.tagName||"tspan"==l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},this.easeOutQuint=function(e,t,n,a){return n*((e=e/a-1)*e*e*e*e+1)+t},this.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.frameVal=l.startVal-l.easeOutQuint(t,0,l.startVal-l.endVal,l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},this.start=function(e){return l.callback=e,l.rAF=requestAnimationFrame(l.count),!1},this.formatNumber=function(e){e=e.toFixed(l.decimals),e+="";var t,n,a,r;if(t=e.split("."),n=t[0],a=t.length>1?l.options.decimal+t[1]:"",r=/(\d+)(\d{3})/,l.options.useGrouping)for(;r.test(n);)n=n.replace(r,"$1"+l.options.separator+"$2");return l.options.prefix+n+a+l.options.suffix},l.printValue(l.startVal)};e.exports=n},function(e,t){"use strict";!function(){var e=function(){var e=new Blazy({breakpoints:[{width:640,src:"data-src-sm"}],success:function(e){setTimeout(function(){var t=e.parentNode;t.className=t.className.replace(/\bloading\b/,"")},2e3)}});setTimeout(e.revalidate(),200)};document.addEventListener("load",e())}()},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(8),i=a(r),o=n(4),s=a(o),u=n(9),c=a(u);!function(){function e(e){$(e.target).closest(".primary-nav").length||w()}function t(){$(".hero__wrapper").hasClass("hero--interior")||$(".hero__wrapper").css({"margin-top":"7rem"})}function n(e){var n=$(".utility-nav").height(),a=$(window).scrollTop();a>=n&&d.hasClass("primary-nav--up")&&(o.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky"),t()),a>=p-n&&!d.hasClass("primary-nav--up")&&(o.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky primary-nav--inanimate"),t()),a>=10?($(".utility-nav").addClass("utility-nav--scrolled"),d.hasClass("primary-nav--blue")||d.addClass("primary-nav--grey")):($(".utility-nav").removeClass("utility-nav--scrolled"),d.removeClass("primary-nav--grey"))}function a(){m.addClass("body--freeze"),$(".search-filter__menu").addClass("search-filter__menu--open")}function r(){m.removeClass("body--freeze"),$(".search-filter__menu").removeClass("search-filter__menu--open")}var o=new i["default"],u=new c["default"],l=$(".primary-nav__trigger"),d=$(".primary-nav"),m=$("body"),f=$(".primary-nav--children"),p=$(window).height()-70,v=0,h=$(".btn__filter-menu"),g=function(){m.addClass("body--freeze"),d.addClass("primary-nav--open"),$(".trigger__icon").addClass("trigger--x")},_=function(){m.removeClass("body--freeze"),$(".trigger__icon").removeClass("trigger--x"),d.removeClass("primary-nav--open"),$(".trigger__icon").on("click",function(){g()})},w=function(){$(".utility-search__trigger").removeClass("pointer--disabled"),$(".selected").removeClass("selected"),m.off("click",e),u.turnScreenOff()},y=function(t){$(".utility-search__trigger").addClass("pointer--disabled"),u.turnScreenOn("soft"),m.on("click",e),t.parent().hasClass("selected")?$(".selected").removeClass("selected"):($(".selected").removeClass("selected"),setTimeout(function(){t.parent().addClass("selected")},200),t.next().addClass("nav__menu--visible"))};l.on("click",function(){1===v?(_(),v=0):(g(),v=1)}),h.on("click",function(){a()}),$(".search-filter__close").on("click",function(){r()}),f.on("click",function(e){e.preventDefault();var n=$(this);if($(window).scrollTop()>0&&!d.hasClass("primary-nav--up primary-nav--sticky")){var a=$(window).scrollTop()+50+"px";o.addRules({".primary-nav":"transform: translateY("+a+");transition: all 300ms ease-in-out"}),setTimeout(function(){o.addRules({".primary-nav":"position: fixed;transform: translateY(-2rem);transition: none"}),t(),d.addClass("primary-nav--inanimate")},360),y(n)}else n.parent().hasClass("selected")===!0?w():(t(),d.addClass("primary-nav--up primary-nav--sticky"),y(n))}),n(),window.addEventListener("scroll",function(){(0,s["default"])(n(),50)})}()},function(e,t){"use strict";var n=function(){this.addRules=function(e){var t="",n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");for(var r in e)if(e.hasOwnProperty(r))var t=t+r+"{"+e[r]+"}";a.type="text/css",a.setAttribute("class","customHeadStyle"),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t)),n.appendChild(a)},this.removeRules=function(){if(document.getElementsByClassName("customHeadStyle"))for(var e=document.getElementsByClassName("customHeadStyle"),t=0;t<e.length;t++)e[t].outerHTML=""}};e.exports=n},function(e,t){"use strict";var n=function(){this.turnScreenOn=function(e){document.getElementById("screen__overlay")||!function(){var t=document.createElement("div"),n=document.getElementsByTagName("main")[0];n.appendChild(t),t.setAttribute("id","screen__overlay"),t.setAttribute("class","screen__overlay"),setTimeout(function(){t.classList.add("screen__overlay--on"),e&&t.classList.add("screen__overlay--"+e)},10)}()},this.turnScreenOff=function(){var e=document.getElementById("screen__overlay");e.classList.remove("screen__overlay--on"),setTimeout(function(){e.outerHTML=""},400)}};e.exports=n},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(9),i=a(r);!function(){var e=new i["default"],t=$(".utility-search"),n=$("input.utility-search__input"),a=$(".utility-nav__search"),r=!1,o=function(i){return"focus"===i.type.toLowerCase()&&r?!1:(r?(t.removeClass("utility-search--open"),a.removeClass("utility-nav__search--on"),e.turnScreenOff(),n.val("").blur()):(setTimeout(function(){n.focus()},800),t.addClass("utility-search--open"),a.addClass("utility-nav__search--on"),e.turnScreenOn("hard")),void(r=!r))};$(".utility-search__trigger").on("click",o),document.addEventListener("keydown",function(e){var t=e.keyCode||e.which;27===t&&r&&o(e)})}()},function(e,t){"use strict";!function(){function e(){r=$(this.hash).removeAttr("id"),$(".trigger__button").removeClass("trigger__button--active"),$(this).addClass("trigger__button--active"),location.hash===this.hash&&setTimeout(t,0)}function t(){var e=window.location.hash;r&&(r.attr("id",r.data("old-id")),r=null),-1!==o.indexOf(e)&&($(".trigger__button").removeClass("trigger__button--active"),$('a[href*="'+e+'"]').addClass("trigger__button--active"),n(e))}function n(e){e||(e=o[0],0===$(".tab__button.trigger__button--active").length&&$(".trigger__button.tab__button:first").addClass("trigger__button--active")),$(".trigger__content").removeClass("trigger__content--active"),$('.trigger__content[data-trigger="'+e+'"]').addClass("trigger__content--active")}function a(){var e=$(".trigger__button"),t=$(".tab__block"),n=e.length*e.outerWidth(),a=$(this).scrollLeft()+$(this).width()+10;n>=a?t.removeClass("no--shadow"):t.addClass("no--shadow")}var r=null,i=$(".trigger__button"),o=i.map(function(){return this.hash}).get();-1!==o.indexOf(window.location.hash)?t():n(),$(window).on("hashchange",t),$(".tab__navigation").on("scroll",a),i.on("click",e)}()},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(13),i=a(r),o=n(14),s=a(o);!function(){if(document.getElementById("tweetDeck")){var e=new i["default"],t=(0,s["default"])({development:"/javascripts/data/twitter-feed.json",production:"/Static/JS/twitter-feed.json"});$.ajax({url:t,type:"GET",dataType:"json",success:function(t){for(var n=document.getElementById("tweetDeck"),a=0;a<t.length;a++){var r=t[a].text;r=e.UrlUserHashtag(r),n.innerHTML=n.innerHTML+'<div class="col-sm col-xs-12"><div class="tweet-wrap"><div class="tweet">'+r+'<div class="tweet-meta"><a href="'+t[a].user.url+'"><img class="tweet__profile-pic" src="'+t[a].user.profile_image_url+'"></a><a href="'+t[a].user.url+'">'+t[a].user.screen_name+'</a><br><a href="#">'+e.parseTimeAgo(t[a].created_at)+"</a></div></div></div></div>"}}})}}()},function(e,t){"use strict";var n=function(){this.UrlUserHashtag=function(e){return String.prototype.parseURL=function(){return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,function(e){return e.link(e)})},String.prototype.parseUsername=function(){return this.replace(/[@]+[A-Za-z0-9-_]+/g,function(e){var t=e.replace("@","");return e.link("http://twitter.com/"+t)})},String.prototype.parseHashtag=function(){return this.replace(/[#]+[A-Za-z0-9-_]+/g,function(e){var t=e.replace("#","%23");return e.link("https://twitter.com/search?q="+t)})},e.parseURL().parseUsername().parseHashtag()},this.parseTimeAgo=function(e){var t=function(){var e=navigator.userAgent;return{ie:e.match(/MSIE\s([^;]*)/)}}(),n=new Date,a=new Date(Date.parse(e));t.ie&&(a=Date.parse(e.replace(/( \+)/," UTC$1")));var r=Math.abs((n-a)/1e3);if(1>=r)return"just now";if(20>r)return r+" seconds ago";if(40>r)return"half a minute ago";if(60>r)return"less than a minute ago";if(90>=r)return"one minute ago";if(3540>=r)return Math.round(r/60)+" minutes ago";if(5400>=r)return"1 hour ago";if(86400>=r)return Math.round(r/3600)+" hours ago";if(129600>=r)return"1 day ago";if(604800>r)return Math.round(r/86400)+" days ago";if(777600>=r)return"1 week ago";var i=a.getUTCMonth()+1,o=a.getUTCDate(),s=a.getUTCFullYear(),u=i+"/"+o+"/"+s;return"on "+u}};e.exports=n},function(e,t,n){"use strict";var a=function(e){for(var t in e)if(e.hasOwnProperty(t)&&"production"===t)return e[t]};e.exports=a},function(e,t,n){"use strict";n(6),n(3),n(7),n(10),n(11),n(12)}]);
=======
webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(4);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libCountUpJs = __webpack_require__(5);
	
	var _libCountUpJs2 = _interopRequireDefault(_libCountUpJs);
	
	// FUNCTION
	(function () {
		// RAF SHIM
		// https://gist.github.com/paulirish/1579671
		window.requestAnimFrame = (function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		})();
	
		// For Hero Jump link
		var scrollToButton = document.getElementById('js_scroll-to');
		if (scrollToButton) {
			(function () {
				var jumpLink = document.getElementById('js_jump');
				var jumpLocation = jumpLink.offsetTop;
				scrollToButton.addEventListener('click', function () {
					btAnimateTo(jumpLocation, 2500);
				});
			})();
		}
	
		// add or remove BackToTop (bt) Element
		var btElement = function btElement() {
			this.addBackToTop = function () {
				if (!document.getElementById('back-top')) {
					var backToTop = document.createElement('div'),
					    mainElement = document.getElementsByTagName('main')[0];
					mainElement.appendChild(backToTop);
					backToTop.setAttribute('id', 'back-top');
					backToTop.setAttribute('class', 'back-top');
					backToTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';
	
					setTimeout(function () {
						backToTop.classList.add('back-top--scrolled');
						backToTop.addEventListener('click', function () {
							btAnimateTo(0, 2500);
						});
					}, 5);
				}
			}, this.removeBackToTop = function () {
				if (document.getElementById('back-top')) {
					document.getElementById('back-top').outerHTML = '';
				}
			};
		};
		// MAIN FUNCTION
		// function scrollToY(scrollTargetY, speed) {...}
		// scrollTargetY: the target scrollY property of the window
		// speed: time in pixels per second
		var btAnimateTo = function btAnimateTo(scrollTargetY, speed) {
			var scrollY = window.scrollY || document.documentElement.scrollTop,
			    scrollTargetY = scrollTargetY || 0,
			    speed = speed || 2000,
			    easing = function easeInOutQuint(pos) {
				if ((pos /= 0.5) < 1) {
					return 0.5 * Math.pow(pos, 5);
				}
				return 0.5 * (Math.pow(pos - 2, 5) + 2);
			},
			    currentTime = 0;
	
			// min time .1, max time .8 seconds
			var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
	
			// add animation loop
			function tick() {
				currentTime += 1 / 60;
				var p = currentTime / time;
				var t = easing(p);
				if (p < 1) {
					requestAnimFrame(tick);
					window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
				} else {
					window.scrollTo(0, scrollTargetY);
				}
			}
			// call it once to get started
			tick();
		};
		// INITIATE BT
		// bodyTop is goofy due to IE document.body.scrollTop bug
		var btInit = function btInit() {
			var bt = new btElement();
			var bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
			var countCards = document.querySelectorAll('.number-block__numerals');
			var bumper = 600;
			if (bodyTop > 200) {
				bt.addBackToTop();
			} else {
				bt.removeBackToTop();
				return false;
			}
	
			var countInit = function countInit() {
				for (var i = 0; i < countCards.length; i++) {
					var counter = new _libCountUpJs2['default'](countCards[i].getAttribute('id'), 0, countCards[i].getAttribute('data-counter'), 0, 3.6);
					counter.start();
				}
			};
			if (countCards.length && countCards[0].innerHTML == '0' && countCards[0].offsetTop - bumper <= bodyTop) {
				countInit();
			}
		};
	
		// Throttle btInit on scroll
		window.addEventListener('scroll', function () {
			(0, _libThrottledJs2['default'])(btInit(), 400);
		});
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	// Throttled is borrowed (stolen) from underscore. It thottles
	// how many times a function can be fired. used mainly for scroll
	"use strict";
	
	var Throttled = function Throttled(func, wait, options) {
		var now = Date.now || function () {
			return new Date().getTime();
		};
		var context, args, result;
		var timeout = null;
		var previous = 0;
		if (!options) options = {};
		var later = function later() {
			previous = options.leading === false ? 0 : now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		};
		return function () {
			if (!previous && options.leading === false) previous = now();
			var remaining = wait - (now() - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now();
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};
	module.exports = Throttled;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	    countUp.js
	    (c) 2014-2015 @inorganik
	    Licensed under the MIT license.
	*/
	// target = id of html element or var of previously selected html element where counting occurs
	// startVal = the value you want to begin at
	// endVal = the value you want to arrive at
	// decimals = number of decimal places, default 0
	// duration = duration of animation in seconds, default 2
	// options = optional object of options (see below)
	
	'use strict';
	
	var CountUp = function CountUp(target, startVal, endVal, decimals, duration, options) {
	    // make sure requestAnimationFrame and cancelAnimationFrame are defined
	    // polyfill for browsers without native support
	    // by Opera engineer Erik Möller
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz', 'ms', 'o'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	    if (!window.requestAnimationFrame) {
	        window.requestAnimationFrame = function (callback, element) {
	
	            var currTime = new Date().getTime();
	            console.log(currTime);
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	    if (!window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    }
	
	    // default options
	    this.options = {
	        useEasing: true, // toggle easing
	        useGrouping: true, // 1,000,000 vs 1000000
	        separator: ',', // character to use as a separator
	        decimal: '.' // character to use as a decimal
	    };
	    // extend default options with passed options object
	    for (var key in options) {
	        if (options.hasOwnProperty(key)) {
	            this.options[key] = options[key];
	        }
	    }
	    if (this.options.separator === '') this.options.useGrouping = false;
	    if (!this.options.prefix) this.options.prefix = '';
	    if (!this.options.suffix) this.options.suffix = '';
	
	    this.d = typeof target === 'string' ? document.getElementById(target) : target;
	    this.startVal = Number(startVal);
	    this.endVal = Number(endVal);
	    this.countDown = this.startVal > this.endVal;
	    this.frameVal = this.startVal;
	    this.decimals = Math.max(0, decimals || 0);
	    this.dec = Math.pow(10, this.decimals);
	    this.duration = Number(duration) * 1000 || 2000;
	    var self = this;
	
	    this.version = function () {
	        return '1.6.0';
	    };
	
	    // Print value to target
	    this.printValue = function (value) {
	        var result = !isNaN(value) ? self.formatNumber(value) : '--';
	        if (self.d.tagName == 'INPUT') {
	            this.d.value = result;
	        } else if (self.d.tagName == 'text' || self.d.tagName == 'tspan') {
	            this.d.textContent = result;
	        } else {
	            this.d.innerHTML = result;
	        }
	    };
	
	    // easeOutQuint
	    this.easeOutQuint = function (t, b, c, d) {
	        // return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    };
	    this.count = function (timestamp) {
	
	        if (!self.startTime) self.startTime = timestamp;
	
	        self.timestamp = timestamp;
	
	        var progress = timestamp - self.startTime;
	        self.remaining = self.duration - progress;
	
	        // easeOutQuint
	        self.frameVal = self.startVal - self.easeOutQuint(progress, 0, self.startVal - self.endVal, self.duration);
	
	        // don't go past endVal since progress can exceed duration in the last frame
	        if (self.countDown) {
	            self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
	        } else {
	            self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
	        }
	
	        // decimal
	        self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
	
	        // format and print value
	        self.printValue(self.frameVal);
	
	        // whether to continue
	        if (progress < self.duration) {
	            self.rAF = requestAnimationFrame(self.count);
	        } else {
	            if (self.callback) self.callback();
	        }
	    };
	    // start your animation
	    this.start = function (callback) {
	        self.callback = callback;
	        self.rAF = requestAnimationFrame(self.count);
	        return false;
	    };
	    this.formatNumber = function (nStr) {
	        nStr = nStr.toFixed(self.decimals);
	        nStr += '';
	        var x, x1, x2, rgx;
	        x = nStr.split('.');
	        x1 = x[0];
	        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
	        rgx = /(\d+)(\d{3})/;
	        if (self.options.useGrouping) {
	            while (rgx.test(x1)) {
	                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
	            }
	        }
	        return self.options.prefix + x1 + x2 + self.options.suffix;
	    };
	
	    // format startVal on initialization
	    self.printValue(self.startVal);
	};
	
	module.exports = CountUp;
	// Example:
	// var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
	// numAnim.start();
	// numAnim.update(135);
	// with optional callback:
	// numAnim.start(someMethodToCallOnComplete);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	;(function () {
		var initBlazy = function initBlazy() {
			var bLazy = new Blazy({
				breakpoints: [{ width: 640, src: 'data-src-sm' }
				//{width: 767, src: 'data-src-sm'}
				],
				success: function success(element) {
					setTimeout(function () {
						var parent = element.parentNode;
						parent.className = parent.className.replace(/\bloading\b/, '');
					}, 2000);
				}
			});
			setTimeout(bLazy.revalidate(), 200);
		};
		document.addEventListener('load', initBlazy());
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libHeadStyleJs = __webpack_require__(8);
	
	var _libHeadStyleJs2 = _interopRequireDefault(_libHeadStyleJs);
	
	var _libThrottledJs = __webpack_require__(4);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libScreenJs = __webpack_require__(9);
	
	var _libScreenJs2 = _interopRequireDefault(_libScreenJs);
	
	// FUNCTION
	(function () {
		var headStyle = new _libHeadStyleJs2['default'](),
		    screen = new _libScreenJs2['default'](),
		    navTrigger = $('.primary-nav__trigger'),
		    primaryNav = $('.primary-nav'),
		    body = $('body'),
		    navItemLinks = $('.primary-nav--children'),
		    browserViewport = $(window).height() - 70,
		    isOpen = 0,
		    filterOpen = $('.btn__filter-menu');
	
		var openMobileNav = function openMobileNav() {
			body.addClass('body--freeze');
			primaryNav.addClass('primary-nav--open');
			$('.trigger__icon').addClass('trigger--x');
		};
		var closeMobileNav = function closeMobileNav() {
			body.removeClass('body--freeze');
			$('.trigger__icon').removeClass('trigger--x');
			primaryNav.removeClass('primary-nav--open');
			$('.trigger__icon').on("click", function () {
				openMobileNav();
			});
		};
		var closeNavInterior = function closeNavInterior() {
			$('.utility-search__trigger').removeClass('pointer--disabled');
			$('.selected').removeClass('selected');
			body.off('click', clickAnywhereToCloseEverything);
			screen.turnScreenOff();
		};
		var openNavInterior = function openNavInterior(selected) {
			$('.utility-search__trigger').addClass('pointer--disabled');
			screen.turnScreenOn('soft');
			body.on('click', clickAnywhereToCloseEverything);
			if (!selected.parent().hasClass('selected')) {
				$('.selected').removeClass('selected');
				setTimeout(function () {
					selected.parent().addClass('selected');
				}, 200);
	
				selected.next().addClass('nav__menu--visible');
			} else {
				$('.selected').removeClass('selected');
			}
		};
	
		function clickAnywhereToCloseEverything(event) {
			if (!$(event.target).closest('.primary-nav').length) {
				closeNavInterior();
			}
		}
	
		function addPaddingToHero() {
			if (!$('.hero__wrapper').hasClass('hero--interior')) {
				$('.hero__wrapper').css({ 'margin-top': '7rem' });
			}
		}
	
		function navScrollDependencies(event) {
			var utilityHeight = $('.utility-nav').height(),
			    bodyTop = $(window).scrollTop();
			// If past than util nav and animation fired
			if (bodyTop >= utilityHeight && primaryNav.hasClass('primary-nav--up')) {
				headStyle.removeRules();
				if (!primaryNav.hasClass('primary-nav--inanimate')) {
					primaryNav.addClass('primary-nav--up primary-nav--sticky');
				}
				// Offset Nav position change
				addPaddingToHero();
			}
			// If past than util nav and animation NOT fired
			if (bodyTop >= browserViewport - utilityHeight && !primaryNav.hasClass('primary-nav--up')) {
				headStyle.removeRules();
				if (!primaryNav.hasClass('primary-nav--inanimate')) {
					primaryNav.addClass('primary-nav--up primary-nav--sticky primary-nav--inanimate');
				}
	
				// Offset Nav position change
				addPaddingToHero();
			}
			//If NOT past util nav, unstick
			if (bodyTop >= 10) {
				$('.utility-nav').addClass('utility-nav--scrolled');
				if (!primaryNav.hasClass('primary-nav--blue')) {
					primaryNav.addClass('primary-nav--grey');
				}
			} else {
				$('.utility-nav').removeClass('utility-nav--scrolled');
				primaryNav.removeClass('primary-nav--grey');
			}
		}
	
		function openSearchFilterNav() {
			body.addClass('body--freeze');
			$('.search-filter__menu').addClass('search-filter__menu--open');
		}
	
		function closeSearchFilterNav() {
			body.removeClass('body--freeze');
			$('.search-filter__menu').removeClass('search-filter__menu--open');
		}
	
		navTrigger.on("click", function () {
			if (isOpen === 1) {
				closeMobileNav();
				isOpen = 0;
			} else {
				openMobileNav();
				isOpen = 1;
			}
		});
	
		filterOpen.on("click", function () {
			openSearchFilterNav();
		});
	
		$('.search-filter__close').on('click', function () {
			closeSearchFilterNav();
		});
	
		navItemLinks.on("click", function (event) {
			event.preventDefault();
			var selected = $(this);
			if ($(window).scrollTop() > 0 && !primaryNav.hasClass('primary-nav--up primary-nav--sticky')) {
				var place = $(window).scrollTop() + 50 + 'px';
				// have to wrtie to heade since jquery writes inline and it hard to override
				headStyle.addRules({ '.primary-nav': 'transform: translateY(' + place + ');transition: all 300ms ease-in-out' });
				setTimeout(function () {
					headStyle.addRules({ '.primary-nav': 'position: fixed;transform: translateY(-2rem);transition: none' });
					// Offset Nav position change
					addPaddingToHero();
					primaryNav.addClass('primary-nav--inanimate');
				}, 360);
				openNavInterior(selected);
			} else if (selected.parent().hasClass('selected') === true) {
				closeNavInterior();
			} else {
				// Offset Nav position change
				addPaddingToHero();
				primaryNav.addClass('primary-nav--up primary-nav--sticky');
				openNavInterior(selected);
			}
		});
		navScrollDependencies();
		window.addEventListener('scroll', function () {
			(0, _libThrottledJs2['default'])(navScrollDependencies(), 50);
		});
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	// Jquery adds inline styles and these need to be overwritten.
	// HeadStyle writes styles to the head tag and destorys them as well
	'use strict';
	
	var headStyle = function headStyle() {
		this.addRules = function (rules) {
			var css = '',
			    head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('style');
	
			for (var property in rules) {
				if (rules.hasOwnProperty(property)) {
					var css = css + property + '{' + rules[property] + '}';
				}
			}
			style.type = 'text/css';
			style.setAttribute('class', 'customHeadStyle');
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
		}, this.removeRules = function () {
			if (document.getElementsByClassName('customHeadStyle')) {
				var customHeadStyle = document.getElementsByClassName('customHeadStyle');
				for (var i = 0; i < customHeadStyle.length; i++) {
					customHeadStyle[i].outerHTML = '';
				}
			}
		};
	};
	module.exports = headStyle;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// Just creates a screen element and fades it in, then destroys it.
	// CSS for this resides in partials/_main.scss
	'use strict';
	
	var Screen = function Screen() {
		this.turnScreenOn = function (modifier) {
			if (!document.getElementById('screen__overlay')) {
				(function () {
					var screenOverlay = document.createElement('div'),
					    mainElement = document.getElementsByTagName('main')[0];
					mainElement.appendChild(screenOverlay);
					screenOverlay.setAttribute('id', 'screen__overlay');
					screenOverlay.setAttribute('class', 'screen__overlay');
					setTimeout(function () {
						screenOverlay.classList.add('screen__overlay--on');
						if (modifier) {
							screenOverlay.classList.add('screen__overlay--' + modifier);
						}
					}, 10);
				})();
			}
		};
		this.turnScreenOff = function () {
			var screenOverlay = document.getElementById('screen__overlay');
			screenOverlay.classList.remove('screen__overlay--on');
			setTimeout(function () {
				screenOverlay.outerHTML = '';
			}, 400);
		};
	};
	module.exports = Screen;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libScreenJs = __webpack_require__(9);
	
	var _libScreenJs2 = _interopRequireDefault(_libScreenJs);
	
	// FUNCTION
	(function () {
		var screenOverlay = new _libScreenJs2['default'](),
		    morphSearch = $('.utility-search'),
		    searchInput = $('input.utility-search__input'),
		    seachInputWrapper = $('.utility-nav__search'),
		    isOpen = false,
		   
		// show/hide search area
		toggleSearch = function toggleSearch(evt) {
			// return if open and the input gets focused
			if (evt.type.toLowerCase() === 'focus' && isOpen) return false;
	
			//var offsets = morphSearch.getBoundingClientRect();
			if (isOpen) {
				morphSearch.removeClass('utility-search--open');
				seachInputWrapper.removeClass('utility-nav__search--on');
				screenOverlay.turnScreenOff();
				searchInput.val('').blur();
			} else {
				setTimeout(function () {
					searchInput.focus();
				}, 800);
				morphSearch.addClass('utility-search--open');
				seachInputWrapper.addClass('utility-nav__search--on');
				screenOverlay.turnScreenOn('hard');
			}
			isOpen = !isOpen;
		};
		// events
		$('.utility-search__trigger').on('click', toggleSearch);
	
		// esc key closes search overlay
		// keyboard navigation events
		document.addEventListener('keydown', function (ev) {
			var keyCode = ev.keyCode || ev.which;
			if (keyCode === 27 && isOpen) {
				toggleSearch(ev);
			}
		});
	})();

/***/ },
/* 11 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function tabsAndAccordions() {
		// a temp value to cache *what* we're about to show
		var target = null;
	
		// collect all the triggers
		var triggers = $('.trigger__button');
	
		function triggerClickHandler() {
			target = $(this.hash).removeAttr('id');
			$('.trigger__button').removeClass('trigger__button--active');
			$(this).addClass('trigger__button--active');
			// if the URL isn't going to change, then hashchange
			// event doesn't fire, so we trigger the update manually
			if (location.hash === this.hash) {
				// but this has to happen after the DOM update has
				// completed, so we wrap it in a setTimeout 0
				setTimeout(update, 0);
			}
		}
	
		// get an array of the panel ids (from the anchor hash)
		var targets = triggers.map(function () {
			return this.hash;
		}).get();
	
		function update() {
	
			var hash = window.location.hash;
	
			if (target) {
				target.attr('id', target.data('old-id'));
				target = null;
			}
	
			if (targets.indexOf(hash) !== -1) {
				$('.trigger__button').removeClass('trigger__button--active');
				$('a[href*="' + hash + '"]').addClass('trigger__button--active');
				show(hash);
			}
		}
	
		function show(id) {
			// if no value was given, let's take the first panel
			if (!id) {
				id = targets[0];
				if ($('.tab__button.trigger__button--active').length === 0) {
					$('.trigger__button.tab__button:first').addClass('trigger__button--active');
				}
			}
			// remove the trigger__content--active class from the triggers,
			// and add it back to the one the user selected
			$('.trigger__content').removeClass('trigger__content--active');
	
			// now hide all the panels, then filter to
			// the one we're interested in, and show it
	
			$('.trigger__content[data-trigger="' + id + '"]').addClass('trigger__content--active');
		}
	
		// initialise
		if (targets.indexOf(window.location.hash) !== -1) {
			update();
		} else {
			show();
		}
	
		function shadowAnimation() {
			var triggerButton = $('.trigger__button');
			var tabBlock = $('.tab__block');
			var totalWidth = triggerButton.length * triggerButton.outerWidth();
			var scrollLocation = $(this).scrollLeft() + $(this).width() + 10;
	
			if (totalWidth >= scrollLocation) {
				tabBlock.removeClass('no--shadow');
			} else {
				tabBlock.addClass('no--shadow');
			}
		}
	
		$(window).on('hashchange', update);
		$('.tab__navigation').on('scroll', shadowAnimation);
		triggers.on('click', triggerClickHandler);
	})();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// This is dummy Local Data
	// will look something like:
	// https://api.twitter.com/1.1/statuses/user_timeline.json? <- queries
	// screen_name=NACACFairs&count=6
	// Note count is completed first, if we filter out replies/rt
	// our for loop will have to accomidate for i ... if i > 6 etc
	// More info at https://dev.twitter.com/rest/reference/get/statuses/user_timeline
	
	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libTweetParseJs = __webpack_require__(13);
	
	var _libTweetParseJs2 = _interopRequireDefault(_libTweetParseJs);
	
	var _libEnvVarJs = __webpack_require__(14);
	
	var _libEnvVarJs2 = _interopRequireDefault(_libEnvVarJs);
	
	// FUNCTION
	(function () {
		if (document.getElementById('tweetDeck')) {
			var tweetParse = new _libTweetParseJs2['default']();
			// DEV/PROD vars
			var TweetController = (0, _libEnvVarJs2['default'])({ development: '/javascripts/data/twitter-feed.json', production: '/Static/JS/twitter-feed.json' });
	
			$.ajax({
				url: TweetController,
				type: 'GET',
				dataType: 'json',
				success: function success(data) {
					var tweetDeck = document.getElementById('tweetDeck');
					for (var i = 0; i < data.length; i++) {
						var tweetText = data[i].text;
						// Clean up tweet, add links
						tweetText = tweetParse.UrlUserHashtag(tweetText);
						tweetDeck.innerHTML = tweetDeck.innerHTML + '<div class="col-sm col-xs-12">' + '<div class="tweet-wrap">' + '<div class="tweet">' + tweetText + '<div class="tweet-meta">' + '<a href="' + data[i].user.url + '"><img class="tweet__profile-pic" src="' + data[i].user.profile_image_url + '"></a>' + '<a href="' + data[i].user.url + '">' + data[i].user.screen_name + '</a><br>' + '<a href="#">' + tweetParse.parseTimeAgo(data[i].created_at) + '</a>' + '</div>' + '</div>' + '</div>' + '</div>';
					}
				}
			});
		}
	})();

/***/ },
/* 13 */
/***/ function(module, exports) {

	// Tweet Parse!
	// 'Borrowed' and tweeked from:
	// http://www.simonwhatley.co.uk/examples/twitter/prototype/
	// http://stackoverflow.com/questions/6549223/javascript-code-to-display-twitter-created-at-as-xxxx-ago
	"use strict";
	
	var TweetParse = function TweetParse() {
	    this.UrlUserHashtag = function (n_string) {
	        String.prototype.parseURL = function () {
	            return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function (url) {
	                return url.link(url);
	            });
	        };
	        String.prototype.parseUsername = function () {
	            return this.replace(/[@]+[A-Za-z0-9-_]+/g, function (u) {
	                var username = u.replace("@", "");
	                return u.link("http://twitter.com/" + username);
	            });
	        };
	
	        String.prototype.parseHashtag = function () {
	            return this.replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {
	                var tag = t.replace("#", "%23");
	                return t.link("https://twitter.com/search?q=" + tag);
	            });
	        };
	        return n_string.parseURL().parseUsername().parseHashtag();
	    }, this.parseTimeAgo = function (n_string) {
	        var K = (function () {
	            var a = navigator.userAgent;
	            return {
	                ie: a.match(/MSIE\s([^;]*)/)
	            };
	        })();
	        var user_date = new Date(),
	            system_date = new Date(Date.parse(n_string));
	        if (K.ie) {
	            system_date = Date.parse(n_string.replace(/( \+)/, ' UTC$1'));
	        }
	        var diff = Math.abs((user_date - system_date) / 1000);
	        if (diff <= 1) {
	            return "just now";
	        }
	        if (diff < 20) {
	            return diff + " seconds ago";
	        }
	        if (diff < 40) {
	            return "half a minute ago";
	        }
	        if (diff < 60) {
	            return "less than a minute ago";
	        }
	        if (diff <= 90) {
	            return "one minute ago";
	        }
	        if (diff <= 3540) {
	            return Math.round(diff / 60) + " minutes ago";
	        }
	        if (diff <= 5400) {
	            return "1 hour ago";
	        }
	        if (diff <= 86400) {
	            return Math.round(diff / 3600) + " hours ago";
	        }
	        if (diff <= 129600) {
	            return "1 day ago";
	        }
	        if (diff < 604800) {
	            return Math.round(diff / 86400) + " days ago";
	        }
	        if (diff <= 777600) {
	            return "1 week ago";
	        }
	        var t_month = system_date.getUTCMonth() + 1,
	            t_day = system_date.getUTCDate(),
	            t_year = system_date.getUTCFullYear(),
	            newdate = t_month + "/" + t_day + "/" + t_year;
	
	        return "on " + newdate;
	    };
	};
	module.exports = TweetParse;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Usage:
	// var dev_var = envVar({
	// 	production:'myProductionURL',
	// 	development: 'myDevelopmentURL'
	// });
	"use strict";
	
	var envVar = function envVar(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop) && ("development") === prop) {
				return obj[prop];
			}
		}
	};
	module.exports = envVar;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	'use strict';
	
	__webpack_require__(6);
	
	__webpack_require__(3);
	
	__webpack_require__(7);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	__webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	$(window).load(function () {
		var markers = new Array();
		var iconSrc = {};
		iconSrc['National College Fairs'] = '/images/icons/marker-blue.svg';
		iconSrc['STEM College and Career Fairs'] = '/images/icons/marker-green.svg';
		iconSrc['Performing and Visual Arts College Fairs'] = '/images/icons/marker-red.svg';
		//Further down, in new google.maps.Marker, the icon line becomes:
		// icon: iconSrc[locations[i][2]]
		var locations = [['<a href="#"><strong>Dallas, TX</strong></a>', 'Loews Anatole', 'National College Fairs', 32.7766642, -96.79698789999998, 1], ['<a href="#"><strong>New York City</strong></a>', 'Hilton Times Square', 'STEM College and Career Fairs', 40.7127837, -74.00594130000002, 2], ['<a href="#"><strong>Anaheim, CA</strong></a>', 'Anaheim Convention Center', 'Performing and Visual Arts College Fairs', 33.8352932, -117.91450359999999, 3]];
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			scrollwheel: false,
			// center: new google.maps.LatLng(39.8282, -98.5795),
			center: new google.maps.LatLng(41.345783, -114.352139),
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var infowindow = new google.maps.InfoWindow();
		var marker, i;
		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][3], locations[i][4]),
				map: map,
				icon: iconSrc[locations[i][2]]
			});
			markers.push(marker);
			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					infowindow.setContent(locations[i][0] + "<br>" + locations[i][2] + "<br>" + locations[i][1]);
					infowindow.open(map, marker);
				};
			})(marker, i));
		}
		// == shows all markers of a particular category, and ensures the checkbox is checked ==
		function show(category) {
			for (var i = 0; i < locations.length; i++) {
				if (locations[i][2] == category) {
					markers[i].setVisible(true);
				}
			}
		}
		// == hides all markers of a particular category, and ensures the checkbox is cleared ==
	
		function hide(category) {
			for (var i = 0; i < locations.length; i++) {
				if (locations[i][2] == category) {
					markers[i].setVisible(false);
				}
			}
		}
		// == show or hide the categories initially ==
		hide("National College Fairs");
		hide("STEM College and Career Fairs");
		hide("Performing and Visual Arts College Fairs");
		$(".checkbox").click(function () {
			var cat = $(this).attr("value");
			// If checked
			if ($(this).is(":checked")) {
				show(cat);
			} else {
				hide(cat);
			}
		});
	}); //]]>

/***/ }
]);
//# sourceMappingURL=app-fair.js.map
>>>>>>> develop
