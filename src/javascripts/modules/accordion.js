(function() {
	'use strict';
	var accordionItem = $('.accordion__item'),
		accordionTrigger = $('.accordion-item__trigger'),
		isOpen = false,
		toggleAccordion = function(evt) {		
			if ($(this).hasClass('accordion__item--selected')) {
				$(this).removeClass('accordion__item--selected');
				console.log('thing')
			} else {
				accordionItem.removeClass('accordion__item--selected');
				$(this).addClass('accordion__item--selected');
			}
		};
	// events
	accordionItem.on('click', toggleAccordion);
})();