// IMPORTS
import Screen from 'lib/screen.js';

// FUNCTION
(function() {
	const screenOverlay = new Screen();
	const morphSearch = document.querySelector('.utility-search');
	const searchInput = document.querySelector('.utility-search__input');
	const searchTrigger = document.querySelector('.utility-search__trigger');
	const searchClose = document.querySelector('.utility-search__close');
	// show/hide search area
	const closeSearch = function(){
		morphSearch.classList.remove('utility-search--open');
		searchTrigger.classList.remove('trigger--open');
		screenOverlay.turnScreenOff();
		searchInput.value = '';
		searchInput.blur();
	}
	const openSearch = function(){	
		setTimeout(function(){searchInput.focus()}, 800);
		morphSearch.classList.add('utility-search--open');
		searchTrigger.classList.add('trigger--open');
		screenOverlay.turnScreenOn('hard');	
	}
	// events
	searchTrigger.addEventListener('click', function(event){
		if (!event.target.classList.contains('trigger--open')){
			openSearch();
		} else {
			closeSearch()
		}
	}, false);
	searchClose.addEventListener('click', function(event){
		closeSearch();
	}, false);
})();