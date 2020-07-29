$(function(){
	$(function(){
		$('.header-btn').on('click', function(){
			$('.menu__list').slideToggle();
		});
	});
	new WOW().init();
});