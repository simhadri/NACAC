// FUNCTION
var resizeAccordionImages = function(){
	var accordion = document.querySelector('.accordion');
	if (accordion){
		const accordionItemAsideSet = document.querySelectorAll('.accordion-item__aside img');
		for (var i = 0; i < accordionItemAsideSet.length; i++) {
			const imageElement = accordionItemAsideSet[i];
			const imageElementWidth = imageElement.offsetWidth;
			const imageElementHeight = imageElement.offsetHeight;
			const imageRatio = imageElementWidth / imageElementHeight;
			const n = (imageElementWidth/2) - (imageElementHeight/2);
			if (imageRatio > 1){
				imageElement.style.marginLeft = `-${n}px`;
			}
			if (imageRatio < 1){
				imageElement.style.marginTop = `${n}px`;
				imageElement.style.height = 'auto';
				imageElement.style.width= `${imageElementHeight}px`;
			}
		}
	}
}
window.addEventListener('onload', resizeAccordionImages());