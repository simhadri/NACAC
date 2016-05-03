(function() {
	'use strict';
	var accordianItem = $('.accordian__item'),
		accordianTrigger = $('.accordian__header'),
		openAccordian = function() {
			accordianItem.removeClass('accordian__item--selected');
			$(this).parent().addClass('accordian__item--selected');
		};
	// events
	accordianTrigger.on('click', openAccordian);
	var useless = "v";
})();