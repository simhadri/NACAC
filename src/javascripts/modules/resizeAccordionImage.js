// FUNCTION
var resizeAccordionImages = function(){
	var accordion = document.querySelector('.accordion');
	if (accordion){
		const accordionItemAsideSet = document.querySelectorAll('.accordion-item__aside img');
		for (var i = 0; i < accordionItemAsideSet.length; i++) {
			const imageElement = accordionItemAsideSet[i];
			const imageElementWidth = imageElement.getBoundingClientRect().width;
			const imageElementHeight = imageElement.getBoundingClientRect().height;
			const imageRatio = imageElementWidth / imageElementHeight;
			const n = (imageElementWidth/2) - (imageElementHeight/2);

			console.log(imageRatio)
			if (imageRatio > 1){
				imageElement.style.marginLeft = `-${n}px`;
			}
			if (imageRatio < 1 && imageRatio !== 0){
				imageElement.style.marginTop = `${n}px`;
				imageElement.style.height = 'auto';
				imageElement.style.width= `${imageElementHeight}px`;
			}
			if (imageRatio === 0){
				console.log(imageElement.getBoundingClientRect())
			}
		}
	}
}
window.onload = function () {
    resizeAccordionImages();
};