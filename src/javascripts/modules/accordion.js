(function() {
	'use strict';
	var accordionItem = $('.accordion__item'),
		accordionTrigger = $('.accordion-item__header'),
		openaccordion = function() {
			accordionItem.removeClass('accordion__item--selected');
			$(this).parent().addClass('accordion__item--selected');
		};
	// events
	accordionTrigger.on('click', openaccordion);
})();