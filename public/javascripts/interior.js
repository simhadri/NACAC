webpackJsonp([2],[function(t,e,n){t.exports=n(14)},,,,,,,,,,,,,,function(t,e,n){"use strict";n(15),n(16),n(17),n(19),n(21)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(6),r=a(i);!function(){var t=function(){this.addBackTop=function(){document.getElementById("back-top")||!function(){var t=document.createElement("div"),n=document.getElementsByTagName("main")[0];n.appendChild(t),t.setAttribute("id","back-top"),t.setAttribute("class","back-top"),t.innerHTML='<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>',setTimeout(function(){t.classList.add("back-top--scrolled"),t.addEventListener("click",e)},10)}()},this.removeBackTop=function(){document.getElementById("back-top")&&document.getElementById("back-top").remove()}},e=function(){$("html, body").animate({scrollTop:0})},n=function(){var e=new t,n=$(window).height(),a=$(window).scrollTop();a>n?e.addBackTop():e.removeBackTop()};$(window).scroll((0,r["default"])(n,100)),$(".back-top").on("click",function(){$("html, body").animate({scrollTop:0})})}()},function(t,e){"use strict";!function(){if(document.getElementById("productForm")){new FormValidator("productForm",[{name:"firstName",display:"first name",rules:"required|alpha"},{name:"lastName",display:"last name",rules:"required|alpha"},{name:"email",display:"email",rules:"required|valid_email"}],function(t,e){for(var n in this.fields)this.fields[n].element.validity.valid?this.fields[n].element.classList.remove("error"):this.fields[n].element.classList.add("error");if(t.length>0){var a=document.getElementById("error-box");a.innerHTML="";for(var i=0;i<t[0].messages.length;i++)a.innerHTML=a.innerHTML+t[0].messages[i]+"<br>";return a.classList.add("error-box--display"),!1}})}}()},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(6),r=a(i),o=n(18),s=a(o);!function(){var t=function(){var t=600;$(".number-block__numerals").each(function(){if("0"==$(this).text()&&$(this).offset().top-t<=$(window).scrollTop()){var e=new s["default"]($(this).attr("id"),0,$(this).attr("data-counter"),0,3.6);e.start()}})};$(window).scroll((0,r["default"])(t,100))}()},function(t,e){"use strict";var n=function(t,e,n,a,i,r){for(var o=0,s=["webkit","moz","ms","o"],l=0;l<s.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[s[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[l]+"CancelAnimationFrame"]||window[s[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-o)),i=window.setTimeout(function(){t(n+a)},a);return o=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options={useEasing:!0,useGrouping:!0,separator:",",decimal:"."};for(var u in r)r.hasOwnProperty(u)&&(this.options[u]=r[u]);""===this.options.separator&&(this.options.useGrouping=!1),this.options.prefix||(this.options.prefix=""),this.options.suffix||(this.options.suffix=""),this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(n),this.countDown=this.startVal>this.endVal,this.frameVal=this.startVal,this.decimals=Math.max(0,a||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*Number(i)||2e3;var c=this;this.version=function(){return"1.6.0"},this.printValue=function(t){var e=isNaN(t)?"--":c.formatNumber(t);"INPUT"==c.d.tagName?this.d.value=e:"text"==c.d.tagName||"tspan"==c.d.tagName?this.d.textContent=e:this.d.innerHTML=e},this.easeOutExpo=function(t,e,n,a){return n*(-Math.pow(2,-10*t/a)+1)*1024/1023+e},this.count=function(t){c.startTime||(c.startTime=t),c.timestamp=t;var e=t-c.startTime;c.remaining=c.duration-e,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.easeOutExpo(e,0,c.startVal-c.endVal,c.duration):c.frameVal=c.easeOutExpo(e,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(e/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},this.start=function(t){return c.callback=t,c.rAF=requestAnimationFrame(c.count),!1},this.formatNumber=function(t){t=t.toFixed(c.decimals),t+="";var e,n,a,i;if(e=t.split("."),n=e[0],a=e.length>1?c.options.decimal+e[1]:"",i=/(\d+)(\d{3})/,c.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+c.options.separator+"$2");return c.options.prefix+n+a+c.options.suffix},c.printValue(c.startVal)};t.exports=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(20),r=a(i);!function(){var t=document.getElementById("countdown-clock");if(t){var e=t.getAttribute("data-deadline");(0,r["default"])("countdown-clock",e)}}()},function(t,e){"use strict";var n=function(t,e){function n(t){var e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/1e3/60%60),a=Math.floor(e/36e5%24),i=Math.floor(e/864e5);return{total:e,days:i,hours:a,minutes:n}}function a(){var t=n(e);c.innerHTML=t.days,d.innerHTML=("0"+t.hours).slice(-2),m.innerHTML=("0"+t.minutes).slice(-2),t.total<=0&&clearInterval(f)}for(var i=document.getElementById(t),r=["days","hours","minutes"],o=0;o<r.length;o++){var s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("span");s.setAttribute("class","clock__segment"),l.setAttribute("class","segment__num "+r[o]),u.innerHTML=r[o],u.setAttribute("class","segment__label"),i.appendChild(s),s.appendChild(l),s.appendChild(u)}var c=i.querySelector(".days"),d=i.querySelector(".hours"),m=i.querySelector(".minutes");a();var f=setInterval(a,1e3)};t.exports=n},function(t,e){"use strict";document.getElementById("lightSlider")&&$("#lightSlider").lightSlider({item:4,loop:!1,slideMove:4,pager:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:2,slideMove:1}}]})}]);