/* nav bar */

$( document ).ready(function() {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

/* slider */

$( document ).ready(function() {
  $('#slider').owlCarousel({
      loop:true,
      autoplay:true,
      smartSpeed: 2000,
      margin:0,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplayTimeout:4000,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              dots: false
          },
          768:{
              items:1,
              dots: false
          },
          992:{
              items:1,
              nav:true,
              dots: false
          },
          1200:{
              items:1,
              nav:true,
              dots: false
          }
      }
  });
});

/* SLIDER FEATURED */

$( document ).ready(function() {
$('#featured-listing').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 30,
		autoplay: true,
		dots:true,
    nav:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1,
				nav:true,
              	dots: false
			},
			768: {
				items: 2,
				nav:true,
              	dots: false
			},
			992:{
				  items:3,
				  nav:true,
              		dots: false
			  },
			1200: {
				items: 3,
				nav:true,
              	dots: false
			}
		}
	});
});


