function arrowup() {
$(document).ready(function(){

	$('.icon-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.icon-up').slideDown(300);
		} else {
			$('.icon-up').slideUp(300);
		}
	});

});
}
arrowup();