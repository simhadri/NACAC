webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
		$(window).load(function () {
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
		});
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// MODULES
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesHeadStyleJs = __webpack_require__(4);
	
	var _modulesHeadStyleJs2 = _interopRequireDefault(_modulesHeadStyleJs);
	
	var _modulesThrottledJs = __webpack_require__(5);
	
	var _modulesThrottledJs2 = _interopRequireDefault(_modulesThrottledJs);
	
	var _modulesScreenJs = __webpack_require__(6);
	
	var _modulesScreenJs2 = _interopRequireDefault(_modulesScreenJs);
	
	(function () {
		'use strict';
		var headStyle = new _modulesHeadStyleJs2['default'](),
		    screen = new _modulesScreenJs2['default'](),
		    navTrigger = $('.primary-nav__trigger'),
		    primaryNav = $('.primary-nav'),
		    body = $('body'),
		    navItemLinks = $('.primary-nav--children'),
		    browserViewport = $(window).height() - 70,
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
			$('.selected').removeClass('selected');
			screen.turnScreenOn('soft');
			body.on('click', clickAnywhereToCloseEverything);
			var selectedId = selected.attr('data-id');
			$.ajax({
				url: '/javascripts/data/interiorNavData_' + selectedId + '.json',
				dataType: 'json',
				cache: true,
				success: function success(data) {
					selected.next().empty();
					for (var i = 0; i < data.length; i++) {
						if (data[i].type !== null && data[i].type === 'link') {
							selected.next().append('<li>' + '<a href="' + data[i].content + '">' + data[i].name + '</a>' + '</li>');
						}
						if (data[i].type !== null && data[i].type === 'link_set') {
							selected.next().append('<li>' + '<h4>' + data[i].name + '</h4>' + '<ul id="interior__links_' + i + '" class="interior__links"></ul>' + '</li>');
							for (var n = 0; n < data[i].content.length; n++) {
								$('#interior__links_' + [i]).append('<li><a href=' + data[i].content[n].url + '>' + data[i].content[n].text + '</a></li>');
							}
						}
						if (data[i].type !== null && data[i].type === 'feature') {
							selected.next().append('<li class="nav__feature">' + '<h4>' + data[i].name + '</h4>' + '<img src="' + data[i].content.url + '"/>' + '<p>' + data[i].content.text + '</p>' + '</li>');
						}
					}
				}
			});
			setTimeout(function () {
				selected.parent().addClass('selected');
			}, 200);
	
			selected.next().addClass('nav__menu--visible');
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
			if ($('.trigger__icon').hasClass('trigger--x')) {
				closeMobileNav();
			} else {
				openMobileNav();
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
		$(window).scroll((0, _modulesThrottledJs2['default'])(navScrollDependencies, 50));
	})();

/***/ },
/* 4 */
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
/* 5 */,
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modulesScreenJs = __webpack_require__(6);
	
	var _modulesScreenJs2 = _interopRequireDefault(_modulesScreenJs);
	
	(function () {
		'use strict';
		var screenOverlay = new _modulesScreenJs2['default'](),
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
/* 8 */
/***/ function(module, exports) {

	// a temp value to cache *what* we're about to show
	'use strict';
	
	var target = null;
	
	// collect all the tabs
	var tabs = $('.tab__button').on('click', function () {
		target = $(this.hash).removeAttr('id');
	
		$('.tab__button').removeClass('tab__button--active');
		$(this).addClass('tab__button--active');
		// if the URL isn't going to change, then hashchange
		// event doesn't fire, so we trigger the update manually
		if (location.hash === this.hash) {
			// but this has to happen after the DOM update has
			// completed, so we wrap it in a setTimeout 0
			setTimeout(update, 0);
		}
	});
	
	// get an array of the panel ids (from the anchor hash)
	var targets = tabs.map(function () {
		return this.hash;
	}).get();
	
	function update() {
	
		if (target) {
			target.attr('id', target.data('old-id'));
			target = null;
		}
	
		var hash = window.location.hash;
		if (targets.indexOf(hash) !== -1) {
			$('.tab__button').removeClass('tab__button--active');
			$('a[href*="' + hash + '"]').addClass('tab__button--active');
			show(hash);
		}
	}
	
	function show(id) {
		// if no value was given, let's take the first panel
		if (!id) {
			id = targets[0];
		}
		// remove the tab__content--active class from the tabs,
		// and add it back to the one the user selected
		$('.tab__content').removeClass('tab__content--active');
	
		// now hide all the panels, then filter to
		// the one we're interested in, and show it
		$('.tab__content[data-tab="' + id + '"]').addClass('tab__content--active');
	}
	
	$(window).on('hashchange', update);
	
	// initialise
	if (targets.indexOf(window.location.hash) !== -1) {
		update();
	} else {
		show();
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Vendor scirpts
	// *********************
	// import $ from 'vendor/jquery-2.1.4.min.js';
	// import CountUp from 'vendor/countUp.js';
	
	// *********************
	//    Modules scripts
	// *********************
	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(10);

/***/ },
/* 10 */
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
	
	    center: new google.maps.LatLng(39.8282, -98.5795),
	
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