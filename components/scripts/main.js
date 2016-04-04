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

// Company Carousel
$(document).ready(function() {

  $("#company-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

// Testimonials Carousel
$(document).ready(function() {

  $("#testimonials-carousel").owlCarousel({
 
      autoPlay: 4000, //Set AutoPlay to 4 seconds
      singleItem : true
  });
 
});

// Recruters Carousel
$(document).ready(function() {
 
  $("#recruters").owlCarousel({
    items : 4,
    lazyLoad : true,
    autoPlay: 3000
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

//  Match height
$(function () {
    $('.sameHeight').matchHeight();
});

$(document).ready(function () {

    $(".player").mb_YTPlayer();

});
