//Side nav for mobile device
$(".button-collapse").sideNav();

// Owl Carousel
$(document).ready(function() {

  $("#carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function() {

  $("#testimonials-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      singleItem : true
 
  });
 
});

// Header Scroll
$('.navigation').scrollToFixed();

$(document).scroll(function(){
	if($(document).scrollTop() > 120){
		$('.navigation').addClass('active');
	}else {
		$('.navigation').removeClass('active');
	}

});

// Simple Parallax
$(function(){               
    $(".parallax").simpleParallax();
})

// My Animation
new WOW().init();
wow = new WOW(
  {
    boxClass:     'myAnimation',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
)
wow.init();