webpackJsonp([3,4],[function(e,t,i){e.exports=i(19)},,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";i(20),i(21),i(23),i(24)},function(e,t){"use strict";!function(){var e=function(e,t){document.getElementById("productForm").setAttribute("name",t);new FormValidator(t,e,function(e,i){var r=document.getElementById("error-box__"+t);r.innerHTML="";for(var n=0;n<i.target.length;n++)i.target[n].classList.remove("input--error");for(var a in e){for(var a in this.fields)this.fields[a].element.validity.valid?this.fields[a].element.classList.remove("input--error"):this.fields[a].element.classList.add("input--error");if(e.length>0){var r=document.getElementById("error-box__"+t);r.innerHTML="";for(var l=0;l<e[0].messages.length;l++)r.innerHTML=r.innerHTML+e[0].messages[l]+"<br>";return r.classList.add("error-box--display"),!1}}})};if(document.getElementById("productForm")){var t=[{name:"firstName",display:"first name",rules:"required|alpha"},{name:"lastName",display:"last name",rules:"required|alpha"},{name:"email",display:"email",rules:"required|valid_email"}];e(t,"productForm")}document.addEventListener("load",e)}()},function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=i(22),a=r(n);!function(){var e=document.getElementById("countdown-clock");if(e){var t=e.getAttribute("data-deadline");(0,a.default)("countdown-clock",t)}}()},function(e,t){"use strict";var i=function(e,t){function i(e){var t=Date.parse(e)-Date.parse(new Date),i=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),n=Math.floor(t/864e5);return{total:t,days:n,hours:r,minutes:i}}function r(){var e=i(t);c.innerHTML=e.days,u.innerHTML=("0"+e.hours).slice(-2),m.innerHTML=("0"+e.minutes).slice(-2),e.total<=0&&clearInterval(h)}for(var n=document.getElementById(e),a=["days","hours","minutes"],l=0;l<a.length;l++){var o=document.createElement("div"),s=document.createElement("div"),d=document.createElement("span");o.setAttribute("class","clock__segment"),s.setAttribute("class","segment__num "+a[l]),d.innerHTML=a[l],d.setAttribute("class","segment__label"),n.appendChild(o),o.appendChild(s),o.appendChild(d)}var c=n.querySelector(".days"),u=n.querySelector(".hours"),m=n.querySelector(".minutes");r();var h=setInterval(r,6e4)};e.exports=i},function(e,t){"use strict";document.getElementById("lightSlider")&&0!==document.getElementById("lightSlider").childElementCount&&$("#lightSlider").lightSlider({item:4,loop:!1,slideMove:4,pager:!1,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600,responsive:[{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:2,slideMove:1}}]})},function(e,t){"use strict";var i=function(){var e=document.querySelectorAll(".js_circle"),t=document.querySelectorAll(".js_bars"),i=function(e){if(0===e){var t="#3B488C";return t}var t="#00ACAD";return t},r=function(e,t,i,r){window.devicePixelRatio>1&&(e.width=i*window.devicePixelRatio,e.height=r*window.devicePixelRatio,e.setAttribute("style","width:"+i+"px;height:"+r+"px"),t.scale(window.devicePixelRatio,window.devicePixelRatio))};if(e)for(var n=0;n<e.length;n++){var a=e[n].dataset.percent,l=e[n].offsetWidth,o=l/2,s=o/4,d=document.createElement("canvas");d.width=l,d.height=l,e[n].appendChild(d);var c=d.getContext("2d");r(d,c,d.width,d.height),c.clearRect(0,0,d.width,d.height),c.beginPath(),c.arc(o,o,o-s,0,2*Math.PI),c.strokeStyle="#00ACAD",c.lineWidth=s,c.stroke(),c.closePath(),c.beginPath();var u=Math.PI/2,m=a/100,h=2*Math.PI*m;c.arc(o,o,o-s,u,u+h,!1),c.strokeStyle="#F28700",c.lineWidth=s,c.stroke();var v=document.createElement("div");v.className="circle__text",v.innerHTML=a+"<sup>%</sup>",e[n].appendChild(v)}if(t)for(var n=0;n<t.length;n++){var f=t[n].dataset.bars.split(","),p=f.length,g=t[n].offsetWidth,y=t[n].offsetHeight,d=document.createElement("canvas");d.width=g,d.height=y,t[n].appendChild(d);var c=d.getContext("2d");r(d,c,d.width,d.height);for(var w=0;w<f.length;w++){var b=f[w]/100,M=parseInt(g/p),E=parseInt(b*y),x=M*w,S=y-E;c.fillStyle=i(w%2),c.fillRect(x,S,M,E),c.fillStyle="white",c.font="16px sans-serif";var _=S+20;f[w]<=15&&(_=S-10),c.fillText(f[w],x+M/2-8,_)}}var L=document.querySelector(".chartSlider");L&&0!==L.childElementCount&&$(".chartSlider").lightSlider({item:1,loop:!1,slideMove:1,pager:!0,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:600})};document.addEventListener("DOMContentLoaded",i())}]);