webpackJsonp([0],[function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r(2),r(3),r(4),r(8),r(9),r(10)},function(e,t){"use strict";!function(){if("EpiserverEditMode"===document.body.id){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/stylesheets/episerver-edit-mode.css"),e.appendChild(t)}}()},function(e,t){"use strict";!function(){window.onload=function(){var e=new Blazy({breakpoints:[{width:640,src:"data-src-sm"}],success:function(e){setTimeout(function(){var t=e.parentNode;t.className=t.className.replace(/\bloading\b/,"")},2e3)}});setTimeout(e.revalidate(),200)}}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(5),i=n(a),s=r(6),o=n(s),c=r(7),u=n(c);!function(){function e(e){$(e.target).closest(".primary-nav").length||y()}function t(){$(".hero__wrapper").hasClass("hero--interior")||$(".hero__wrapper").css({"margin-top":"7rem"})}function r(e){var r=$(".utility-nav").height(),n=$(window).scrollTop();n>=r&&d.hasClass("primary-nav--up")&&(s.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky"),t()),n>=v-r&&!d.hasClass("primary-nav--up")&&(s.removeRules(),d.hasClass("primary-nav--inanimate")||d.addClass("primary-nav--up primary-nav--sticky primary-nav--inanimate"),t()),n>=10?($(".utility-nav").addClass("utility-nav--scrolled"),d.hasClass("primary-nav--blue")||d.addClass("primary-nav--grey")):($(".utility-nav").removeClass("utility-nav--scrolled"),d.removeClass("primary-nav--grey"))}function n(){f.addClass("body--freeze"),$(".search-filter__menu").addClass("search-filter__menu--open")}function a(){f.removeClass("body--freeze"),$(".search-filter__menu").removeClass("search-filter__menu--open")}var s=new i["default"],c=new u["default"],l=$(".primary-nav__trigger"),d=$(".primary-nav"),f=$("body"),m=$(".primary-nav--children"),v=$(window).height()-70,g=0,_=$(".btn__filter-menu"),p=function(){f.addClass("body--freeze"),d.addClass("primary-nav--open"),$(".trigger__icon").addClass("trigger--x")},h=function(){f.removeClass("body--freeze"),$(".trigger__icon").removeClass("trigger--x"),d.removeClass("primary-nav--open"),$(".trigger__icon").on("click",function(){p()})},y=function(){$(".utility-search__trigger").removeClass("pointer--disabled"),$(".selected").removeClass("selected"),f.off("click",e),c.turnScreenOff()},C=function(t){$(".utility-search__trigger").addClass("pointer--disabled"),c.turnScreenOn("soft"),f.on("click",e),t.parent().hasClass("selected")?$(".selected").removeClass("selected"):($(".selected").removeClass("selected"),setTimeout(function(){t.parent().addClass("selected")},200),t.next().addClass("nav__menu--visible"))};l.on("click",function(){1===g?(h(),g=0):(p(),g=1)}),_.on("click",function(){n()}),$(".search-filter__close").on("click",function(){a()}),m.on("click",function(e){e.preventDefault();var r=$(this);if($(window).scrollTop()>0&&!d.hasClass("primary-nav--up primary-nav--sticky")){var n=$(window).scrollTop()+50+"px";s.addRules({".primary-nav":"transform: translateY("+n+");transition: all 300ms ease-in-out"}),setTimeout(function(){s.addRules({".primary-nav":"position: fixed;transform: translateY(-2rem);transition: none"}),t(),d.addClass("primary-nav--inanimate")},360),C(r)}else r.parent().hasClass("selected")===!0?y():(t(),d.addClass("primary-nav--up primary-nav--sticky"),C(r))}),r(),$(window).scroll((0,o["default"])(r,50))}()},function(e,t){"use strict";var r=function(){this.addRules=function(e){var t="",r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");for(var a in e)if(e.hasOwnProperty(a))var t=t+a+"{"+e[a]+"}";n.type="text/css",n.setAttribute("class","customHeadStyle"),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),r.appendChild(n)},this.removeRules=function(){if(document.getElementsByClassName("customHeadStyle"))for(var e=document.getElementsByClassName("customHeadStyle"),t=0;t<e.length;t++)e[t].outerHTML=""}};e.exports=r},,function(e,t){"use strict";var r=function(){this.turnScreenOn=function(e){document.getElementById("screen__overlay")||!function(){var t=document.createElement("div"),r=document.getElementsByTagName("main")[0];r.appendChild(t),t.setAttribute("id","screen__overlay"),t.setAttribute("class","screen__overlay"),setTimeout(function(){t.classList.add("screen__overlay--on"),e&&t.classList.add("screen__overlay--"+e)},10)}()},this.turnScreenOff=function(){var e=document.getElementById("screen__overlay");e.classList.remove("screen__overlay--on"),setTimeout(function(){e.outerHTML=""},400)}};e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(7),i=n(a);!function(){var e=new i["default"],t=$(".utility-search"),r=$("input.utility-search__input"),n=$(".utility-nav__search"),a=!1,s=function(i){return"focus"===i.type.toLowerCase()&&a?!1:(a?(t.removeClass("utility-search--open"),n.removeClass("utility-nav__search--on"),e.turnScreenOff(),r.val("").blur()):(setTimeout(function(){r.focus()},800),t.addClass("utility-search--open"),n.addClass("utility-nav__search--on"),e.turnScreenOn("hard")),void(a=!a))};$(".utility-search__trigger").on("click",s),document.addEventListener("keydown",function(e){var t=e.keyCode||e.which;27===t&&a&&s(e)})}()},function(e,t){"use strict";!function(){function e(){r&&(r.attr("id",r.data("old-id")),r=null);var e=window.location.hash;-1!==a.indexOf(e)&&($(".trigger__button").removeClass("trigger__button--active"),$('a[href*="'+e+'"]').addClass("trigger__button--active"),t(e))}function t(e){e||(e=a[0],0===$(".tab__button.trigger__button--active").length&&$(".trigger__button.tab__button:first").addClass("trigger__button--active")),$(".trigger__content").removeClass("trigger__content--active"),$('.trigger__content[data-trigger="'+e+'"]').addClass("trigger__content--active")}var r=null,n=$(".trigger__button").on("click",function(){r=$(this.hash).removeAttr("id"),$(".trigger__button").removeClass("trigger__button--active"),$(this).addClass("trigger__button--active"),location.hash===this.hash&&setTimeout(e,0)}),a=n.map(function(){return this.hash}).get();$(window).on("hashchange",e),-1!==a.indexOf(window.location.hash)?e():t(),$(".trigger__navigation").scroll(function(){var e=$(".trigger__button").length*$(".trigger__button").outerWidth(),t=$(this).scrollLeft()+$(this).width();t<=e-$(".trigger__button").outerWidth()?$(".trigger__block").removeClass("no--shadow"):$(".trigger__block").addClass("no--shadow")})}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(11),i=n(a),s=r(12),o=n(s);!function(){if(document.getElementById("tweetDeck")){var e=new i["default"],t=(0,o["default"])({development:"/javascripts/data/twitter-feed.json",production:"/Static/JS/twitter-feed.json"});$.ajax({url:t,type:"GET",dataType:"json",success:function(t){for(var r=document.getElementById("tweetDeck"),n=0;n<t.length;n++){var a=t[n].text;a=e.UrlUserHashtag(a),r.innerHTML=r.innerHTML+'<div class="col-sm col-xs-12"><div class="tweet-wrap"><div class="tweet">'+a+'<div class="tweet-meta"><a href="'+t[n].user.url+'"><img class="tweet__profile-pic" src="'+t[n].user.profile_image_url+'"></a><a href="'+t[n].user.url+'">'+t[n].user.screen_name+'</a><br><a href="#">'+e.parseTimeAgo(t[n].created_at)+"</a></div></div></div></div>"}}})}}()},function(e,t){"use strict";var r=function(){this.UrlUserHashtag=function(e){return String.prototype.parseURL=function(){return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,function(e){return e.link(e)})},String.prototype.parseUsername=function(){return this.replace(/[@]+[A-Za-z0-9-_]+/g,function(e){var t=e.replace("@","");return e.link("http://twitter.com/"+t)})},String.prototype.parseHashtag=function(){return this.replace(/[#]+[A-Za-z0-9-_]+/g,function(e){var t=e.replace("#","%23");return e.link("https://twitter.com/search?q="+t)})},e.parseURL().parseUsername().parseHashtag()},this.parseTimeAgo=function(e){var t=function(){var e=navigator.userAgent;return{ie:e.match(/MSIE\s([^;]*)/)}}(),r=new Date,n=new Date(Date.parse(e));t.ie&&(n=Date.parse(e.replace(/( \+)/," UTC$1")));var a=Math.abs((r-n)/1e3);if(1>=a)return"just now";if(20>a)return a+" seconds ago";if(40>a)return"half a minute ago";if(60>a)return"less than a minute ago";if(90>=a)return"one minute ago";if(3540>=a)return Math.round(a/60)+" minutes ago";if(5400>=a)return"1 hour ago";if(86400>=a)return Math.round(a/3600)+" hours ago";if(129600>=a)return"1 day ago";if(604800>a)return Math.round(a/86400)+" days ago";if(777600>=a)return"1 week ago";var i=n.getUTCMonth()+1,s=n.getUTCDate(),o=n.getUTCFullYear(),c=i+"/"+s+"/"+o;return"on "+c}};e.exports=r},function(e,t,r){"use strict";var n=function(e){return e.production};e.exports=n}]);