// var changeTab = function() {
// 	var tab_selected = $(this).attr('data-tab-selected');
// 	$('.tab__button').removeClass('tab__button--active');
// 	$(this).addClass('tab__button--active');
// 	$('.tab__content').removeClass('tab__content--active');
// 	$('#' + tab_selected).addClass('tab__content--active');
// }
// $('.tab__button').on("click", changeTab);


// a temp value to cache *what* we're about to show
var target = null;

// collect all the tabs
var tabs = $('.tab__button').on('click', function() {
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
var targets = tabs.map(function() {
	return this.hash;
}).get();

// use those ids to get a jQuery collection of panels
var panels = $(targets.join(',')).each(function() {
	// keep a copy of what the original el.id was
	$(this).data('old-id', this.id);
});

function update() {

	if (target) {
		target.attr('id', target.data('old-id'));
		target = null;
	}

	var hash = window.location.hash;
	if (targets.indexOf(hash) !== -1) {
		$('.tab__button').removeClass('tab__button--active');
		$('a[href*="'+hash+'"]').addClass('tab__button--active');
		show(hash);
	}
}

function show(id) {
	// if no value was given, let's take the first panel
	if (!id) {
		id = targets[0];
	}
	// remove the tab__content--active class from the tabs,
	// and add it back to the one the user tab__content--active
	tabs.removeClass('tab__content--active').filter(function() {
		return (this.hash === id);
	}).addClass('tab__content--active');

	// now hide all the panels, then filter to
	// the one we're interested in, and show it
	panels.hide().filter(id).show();
}

$(window).on('hashchange', update);

// initialise
if (targets.indexOf(window.location.hash) !== -1) {
	update();
} else {
	show();
}
