(function() {
	'use strict';
	var accordianItem = $('.accordian__item'),
		//accordianArticle = $('.accordian__article'),
		accordianTrigger = $('.accordian__trigger'),
		isOpen = false,
		openAccordian = function() {
			accordianItem.removeClass('accordian__item--selected');
			$(this).parent().addClass('accordian__item--selected');
		};
	// events
	accordianTrigger.on('click', openAccordian);
})();