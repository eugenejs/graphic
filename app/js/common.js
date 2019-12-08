$( document ).ready(function() {

	// Menu

	$('.hamburger').click(function (){
		$('.hamburger').toggleClass('is-active')
		if($('.hamburger').hasClass('is-active')){
			$('.menu').css({'left' : '0%', 'transition' : '.5s'})
		}else{
			$('.menu').css({'left' : '-100%', 'transition' : '.5s'})
		}
	});

	$(window).scroll(function (){

		if($(this).scrollTop() > 100){
			$('.header__top').css({'box-shadow' : '0 0 10px #D9D9D9', 'transition' : '.5s'})
		}else{
			$('.header__top').css({'box-shadow' : '0 0 0 #D9D9D9', 'transition' : '.5s'})
		}

	});

	$(window).resize(function(){

		if ($('.hamburger').hasClass('is-active')) {

			$('.hamburger').click()

		}

	});
});
