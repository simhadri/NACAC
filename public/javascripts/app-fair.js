webpackJsonp([1,3],[function(t,e,n){t.exports=n(15)},,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(4),i=a(r),o=n(5),s=a(o);!function(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var t=function(){this.addBackToTop=function(){if(!document.getElementById("back-top")){var t=document.createElement("div"),n=document.getElementsByTagName("main")[0];n.appendChild(t),t.setAttribute("id","back-top"),t.setAttribute("class","back-top"),t.innerHTML='<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>',setTimeout(function(){t.classList.add("back-top--scrolled"),t.addEventListener("click",function(){e(0,2500)})},5)}},this.removeBackToTop=function(){document.getElementById("back-top")&&(document.getElementById("back-top").outerHTML="")}},e=function(t,e){function n(){i+=1/60;var e=i/o,s=r(e);1>e?(requestAnimFrame(n),window.scrollTo(0,a+(t-a)*s)):window.scrollTo(0,t)}var a=window.scrollY||document.documentElement.scrollTop,t=t||0,e=e||2e3,r=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},i=0,o=Math.max(.1,Math.min(Math.abs(a-t)/e,.8));n()},n=function(){var e=new t,n=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,a=document.querySelectorAll(".number-block__numerals"),r=600;if(!(n>200))return e.removeBackToTop(),!1;e.addBackToTop();var i=function(){for(var t=0;t<a.length;t++){var e=new s["default"](a[t].getAttribute("id"),0,a[t].getAttribute("data-counter"),0,3.6);e.start()}};a.length&&"0"==a[0].innerHTML&&a[0].offsetTop-r<=n&&i()};window.addEventListener("scroll",function(){(0,i["default"])(n(),400)})}()},function(t,e){"use strict";var n=function(t,e,n){var a,r,i,o=Date.now||function(){return(new Date).getTime()},s=null,u=0;n||(n={});var c=function(){u=n.leading===!1?0:o(),s=null,i=t.apply(a,r),s||(a=r=null)};return function(){u||n.leading!==!1||(u=o());var l=e-(o()-u);return a=this,r=arguments,0>=l||l>e?(s&&(clearTimeout(s),s=null),u=o(),i=t.apply(a,r),s||(a=r=null)):s||n.trailing===!1||(s=setTimeout(c,l)),i}};t.exports=n},function(t,e){"use strict";var n=function(t,e,n,a,r,i){for(var o=0,s=["webkit","moz","ms","o"],u=0;u<s.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[s[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[u]+"CancelAnimationFrame"]||window[s[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-o)),r=window.setTimeout(function(){t(n+a)},a);return o=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options={useEasing:!0,useGrouping:!0,separator:",",decimal:"."};for(var c in i)i.hasOwnProperty(c)&&(this.options[c]=i[c]);""===this.options.separator&&(this.options.useGrouping=!1),this.options.prefix||(this.options.prefix=""),this.options.suffix||(this.options.suffix=""),this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(n),this.countDown=this.startVal>this.endVal,this.frameVal=this.startVal,this.decimals=Math.max(0,a||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*Number(r)||2e3;var l=this;this.version=function(){return"1.6.0"},this.printValue=function(t){var e=isNaN(t)?"--":l.formatNumber(t);"INPUT"==l.d.tagName?this.d.value=e:"text"==l.d.tagName||"tspan"==l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},this.easeOutExpo=function(t,e,n,a){return n*(-Math.pow(2,-10*t/a)+1)*1024/1023+e},this.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easeOutExpo(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easeOutExpo(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},this.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},this.formatNumber=function(t){t=t.toFixed(l.decimals),t+="";var e,n,a,r;if(e=t.split("."),n=e[0],a=e.length>1?l.options.decimal+e[1]:"",r=/(\d+)(\d{3})/,l.options.useGrouping)for(;r.test(n);)n=n.replace(r,"$1"+l.options.separator+"$2");return l.options.prefix+n+a+l.options.suffix},l.printValue(l.startVal)};t.exports=n},function(t,e){"use strict";!function(){var t=function(){var t=new Blazy({breakpoints:[{width:640,src:"data-src-sm"}],success:function(t){setTimeout(function(){var e=t.parentNode;e.className=e.className.replace(/\bloading\b/,"")},2e3)}});setTimeout(t.revalidate(),200)};document.addEventListener("load",t())}()},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(8),i=a(r),o=n(4),s=a(o),u=n(9),c=a(u);!function(){function t(t){$(t.target).closest(".primary-nav").length||w()}function e(){$(".hero__wrapper").hasClass("hero--interior")||$(".hero__wrapper").css({"margin-top":"7rem"})}function n(t){var n=$(".utility-nav").height(),a=$(window).scrollTop();a>=n&&d.hasClass("primary-nav--up")&&(o.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky"),e()),a>=p-n&&!d.hasClass("primary-nav--up")&&(o.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky primary-nav--inanimate"),e()),a>=10?($(".utility-nav").addClass("utility-nav--scrolled"),d.hasClass("primary-nav--blue")||d.addClass("primary-nav--grey")):($(".utility-nav").removeClass("utility-nav--scrolled"),d.removeClass("primary-nav--grey"))}function a(){m.addClass("body--freeze"),$(".search-filter__menu").addClass("search-filter__menu--open")}function r(){m.removeClass("body--freeze"),$(".search-filter__menu").removeClass("search-filter__menu--open")}var o=new i["default"],u=new c["default"],l=$(".primary-nav__trigger"),d=$(".primary-nav"),m=$("body"),f=$(".primary-nav--children"),p=$(window).height()-70,h=0,v=$(".btn__filter-menu"),g=function(){m.addClass("body--freeze"),d.addClass("primary-nav--open"),$(".trigger__icon").addClass("trigger--x")},_=function(){m.removeClass("body--freeze"),$(".trigger__icon").removeClass("trigger--x"),d.removeClass("primary-nav--open"),$(".trigger__icon").on("click",function(){g()})},w=function(){$(".utility-search__trigger").removeClass("pointer--disabled"),$(".selected").removeClass("selected"),m.off("click",t),u.turnScreenOff()},y=function(e){$(".utility-search__trigger").addClass("pointer--disabled"),u.turnScreenOn("soft"),m.on("click",t),e.parent().hasClass("selected")?$(".selected").removeClass("selected"):($(".selected").removeClass("selected"),setTimeout(function(){e.parent().addClass("selected")},200),e.next().addClass("nav__menu--visible"))};l.on("click",function(){1===h?(_(),h=0):(g(),h=1)}),v.on("click",function(){a()}),$(".search-filter__close").on("click",function(){r()}),f.on("click",function(t){t.preventDefault();var n=$(this);if($(window).scrollTop()>0&&!d.hasClass("primary-nav--up primary-nav--sticky")){var a=$(window).scrollTop()+50+"px";o.addRules({".primary-nav":"transform: translateY("+a+");transition: all 300ms ease-in-out"}),setTimeout(function(){o.addRules({".primary-nav":"position: fixed;transform: translateY(-2rem);transition: none"}),e(),d.addClass("primary-nav--inanimate")},360),y(n)}else n.parent().hasClass("selected")===!0?w():(e(),d.addClass("primary-nav--up primary-nav--sticky"),y(n))}),n(),window.addEventListener("scroll",function(){(0,s["default"])(n(),50)})}()},function(t,e){"use strict";var n=function(){this.addRules=function(t){var e="",n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");for(var r in t)if(t.hasOwnProperty(r))var e=e+r+"{"+t[r]+"}";a.type="text/css",a.setAttribute("class","customHeadStyle"),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e)),n.appendChild(a)},this.removeRules=function(){if(document.getElementsByClassName("customHeadStyle"))for(var t=document.getElementsByClassName("customHeadStyle"),e=0;e<t.length;e++)t[e].outerHTML=""}};t.exports=n},function(t,e){"use strict";var n=function(){this.turnScreenOn=function(t){document.getElementById("screen__overlay")||!function(){var e=document.createElement("div"),n=document.getElementsByTagName("main")[0];n.appendChild(e),e.setAttribute("id","screen__overlay"),e.setAttribute("class","screen__overlay"),setTimeout(function(){e.classList.add("screen__overlay--on"),t&&e.classList.add("screen__overlay--"+t)},10)}()},this.turnScreenOff=function(){var t=document.getElementById("screen__overlay");t.classList.remove("screen__overlay--on"),setTimeout(function(){t.outerHTML=""},400)}};t.exports=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(9),i=a(r);!function(){var t=new i["default"],e=$(".utility-search"),n=$("input.utility-search__input"),a=$(".utility-nav__search"),r=!1,o=function(i){return"focus"===i.type.toLowerCase()&&r?!1:(r?(e.removeClass("utility-search--open"),a.removeClass("utility-nav__search--on"),t.turnScreenOff(),n.val("").blur()):(setTimeout(function(){n.focus()},800),e.addClass("utility-search--open"),a.addClass("utility-nav__search--on"),t.turnScreenOn("hard")),void(r=!r))};$(".utility-search__trigger").on("click",o),document.addEventListener("keydown",function(t){var e=t.keyCode||t.which;27===e&&r&&o(t)})}()},function(t,e){"use strict";!function(){function t(){r=$(this.hash).removeAttr("id"),$(".trigger__button").removeClass("trigger__button--active"),$(this).addClass("trigger__button--active"),location.hash===this.hash&&setTimeout(e,0)}function e(){var t=window.location.hash;r&&(r.attr("id",r.data("old-id")),r=null),-1!==o.indexOf(t)&&($(".trigger__button").removeClass("trigger__button--active"),$('a[href*="'+t+'"]').addClass("trigger__button--active"),n(t))}function n(t){t||(t=o[0],0===$(".tab__button.trigger__button--active").length&&$(".trigger__button.tab__button:first").addClass("trigger__button--active")),$(".trigger__content").removeClass("trigger__content--active"),$('.trigger__content[data-trigger="'+t+'"]').addClass("trigger__content--active")}function a(){var t=$(".trigger__button"),e=$(".tab__block"),n=t.length*t.outerWidth(),a=$(this).scrollLeft()+$(this).width()+10;n>=a?e.removeClass("no--shadow"):e.addClass("no--shadow")}var r=null,i=$(".trigger__button"),o=i.map(function(){return this.hash}).get();-1!==o.indexOf(window.location.hash)?e():n(),$(window).on("hashchange",e),$(".tab__navigation").on("scroll",a),i.on("click",t)}()},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(13),i=a(r),o=n(14),s=a(o);!function(){if(document.getElementById("tweetDeck")){var t=new i["default"],e=(0,s["default"])({development:"/javascripts/data/twitter-feed.json",production:"/Static/JS/twitter-feed.json"});$.ajax({url:e,type:"GET",dataType:"json",success:function(e){for(var n=document.getElementById("tweetDeck"),a=0;a<e.length;a++){var r=e[a].text;r=t.UrlUserHashtag(r),n.innerHTML=n.innerHTML+'<div class="col-sm col-xs-12"><div class="tweet-wrap"><div class="tweet">'+r+'<div class="tweet-meta"><a href="'+e[a].user.url+'"><img class="tweet__profile-pic" src="'+e[a].user.profile_image_url+'"></a><a href="'+e[a].user.url+'">'+e[a].user.screen_name+'</a><br><a href="#">'+t.parseTimeAgo(e[a].created_at)+"</a></div></div></div></div>"}}})}}()},function(t,e){"use strict";var n=function(){this.UrlUserHashtag=function(t){return String.prototype.parseURL=function(){return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,function(t){return t.link(t)})},String.prototype.parseUsername=function(){return this.replace(/[@]+[A-Za-z0-9-_]+/g,function(t){var e=t.replace("@","");return t.link("http://twitter.com/"+e)})},String.prototype.parseHashtag=function(){return this.replace(/[#]+[A-Za-z0-9-_]+/g,function(t){var e=t.replace("#","%23");return t.link("https://twitter.com/search?q="+e)})},t.parseURL().parseUsername().parseHashtag()},this.parseTimeAgo=function(t){var e=function(){var t=navigator.userAgent;return{ie:t.match(/MSIE\s([^;]*)/)}}(),n=new Date,a=new Date(Date.parse(t));e.ie&&(a=Date.parse(t.replace(/( \+)/," UTC$1")));var r=Math.abs((n-a)/1e3);if(1>=r)return"just now";if(20>r)return r+" seconds ago";if(40>r)return"half a minute ago";if(60>r)return"less than a minute ago";if(90>=r)return"one minute ago";if(3540>=r)return Math.round(r/60)+" minutes ago";if(5400>=r)return"1 hour ago";if(86400>=r)return Math.round(r/3600)+" hours ago";if(129600>=r)return"1 day ago";if(604800>r)return Math.round(r/86400)+" days ago";if(777600>=r)return"1 week ago";var i=a.getUTCMonth()+1,o=a.getUTCDate(),s=a.getUTCFullYear(),u=i+"/"+o+"/"+s;return"on "+u}};t.exports=n},function(t,e,n){"use strict";var a=function(t){for(var e in t)if(t.hasOwnProperty(e)&&"production"===e)return t[e]};t.exports=a},function(t,e,n){"use strict";n(6),n(3),n(7),n(10),n(11),n(12)}]);