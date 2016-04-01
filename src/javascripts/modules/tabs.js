import GetIdChangeClass from 'modules/getIdChangeClass';

	var getIdChangeClass = new GetIdChangeClass;
	//getClassByDataAttr.hideSelectedId('main', 'animated');
	$('.tab__button').on("click",function(){
		var tab_selected = $(this).attr('data-tab-selected');
		console.log('hey')
		$('.tab__content').removeClass('tab__content--active')
		getIdChangeClass.addClassToId('tab__content--active', tab_selected);
	})
	// getIdChangeClass.removeClassFromId('animated', 'main');
	// getIdChangeClass.addClassToId('barf', 'main');