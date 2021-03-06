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

/*$( document ).ready(function() {
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
});*/

/* SLIDER FEATURED */

/*$( document ).ready(function() {
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
});*/

/* INFO */

$( document ).ready(function(){
    
    $(".info-single-prop").show();
    $(".gallery-single-prop").hide();
    
    $(".info-link").click(function(){
        $(".info-single-prop").show();
        $(".gallery-single-prop").hide();
    });
    
    $(".gall-link").click(function(){
        $(".info-single-prop").hide();
        $(".gallery-single-prop").show();
    });
    
});

/* CAPTCHA CONTACT */

var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 120;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Reservation successfully sent !")
  }else{
    alert("Invalid Captcha. try Again !");
    createCaptcha();
  }
}

/* LOGIN / REG */

$( document ).ready(function(){
    
    $('.login').addClass('active-log');
    
    /*$('#myModal').modal('show');*/
    $('.login').click(function(){
        $('.login').addClass('active-log');
        $('.register').removeClass('active-log');
    });
    
    $('.register').click(function(){
        $('.login').removeClass('active-log');
        $('.register').addClass('active-log');
    });
    
});


