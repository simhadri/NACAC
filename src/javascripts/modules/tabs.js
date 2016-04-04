import GetIdChangeClass from 'modules/getIdChangeClass';
var getIdChangeClass = new GetIdChangeClass;
$('.tab__button').on("click",function(){
	var tab_selected = $(this).attr('data-tab-selected');
	$('.tab__button').removeClass('tab__button--active');
	$(this).addClass('tab__button--active');
	$('.tab__content').removeClass('tab__content--active');
	getIdChangeClass.addClassToId('tab__content--active', tab_selected);
});