// FUNCTION
if(document.getElementById('lightSlider')){
	$('#lightSlider').lightSlider({
		item: 4,
		loop: false,
		slideMove: 4,
		pager: false,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 600,
		responsive: [{
			breakpoint: 800,
			settings: {
				item: 3,
				slideMove: 1,
				slideMargin: 6,
			}
		}, {
			breakpoint: 480,
			settings: {
				item: 2,
				slideMove: 1
			}
		}]
	});
}
