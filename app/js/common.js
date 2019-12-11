$( document ).ready(function() {

		$('.owl-carousel').owlCarousel({
			items : 1,
			loop : true,
			dots: false,
			nav: true,
			responsiveClass:true,
			navText : ["<i class='fas fa-long-arrow-alt-left'>","<i class='fas fa-long-arrow-alt-right'></i>"],
			responsive:{
				968:{
					items: 3,

				},
				768:{
					items: 2
				}
			}
		});

	$('.hamburger').click(function (){
		$('.hamburger').toggleClass('is-active')
		if($('.hamburger').hasClass('is-active')) $('.navigation').css({'left' : '0%', 'transition' : '.3s ease-out'})
		else $('.navigation').css({'left' : '-100%', 'transition' : '.3s ease-out'})
	});


// 	if($(this).scrollTop() > 100) $('.header__top').css({'box-shadow' : '0 0 10px #D9D9D9'})

	$(window).resize(function(){
		if ($('.hamburger').hasClass('is-active')) $('.hamburger').click()
	});


// 	var wow = new WOW(
// 		{
// 		  boxClass:     'wow',
// 		  animateClass: 'animated',
// 		  offset:       0,
// 		  mobile:       true,
// 		  live:         true,
// 		  callback:     function(box) {},
// 		  scrollContainer: null
// 		}
// 	  );
// 	  wow.init();







});

// var a = 0;
// $(window).scroll(function(){

// 	var oTop = $('.achivements__item').offset().top - window.innerHeight;
// 	if (a == 0 && $(window).scrollTop() > oTop) {
// 		$('.counter').each(function() {
// 		var $this = $(this),
// 			countTo = $this.attr('data-count');
// 		$({
// 			countNum: $this.text()
// 		}).animate({
// 			countNum: countTo
// 			},

// 			{

// 			duration: 1500,
// 			easing: 'swing',
// 			step: function() {
// 				$this.text(Math.floor(this.countNum));
// 			},
// 			complete: function() {
// 				$this.text(this.countNum);
// 			}

// 			});
// 		});
// 		a = 1;
// 	}

// 	if($(this).scrollTop() > 100) $('.header__top').css({'box-shadow' : '0 0 10px #D9D9D9', 'transition' : '.5s'})
// 	else $('.header__top').css({'box-shadow' : '0 0 0 #D9D9D9', 'transition' : '.5s'})

// });
