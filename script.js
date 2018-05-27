<<<<<<< HEAD
=======
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'book'],
        menu: '#menu',
        css3: true,
        // onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
        //     if ($(this).attr("class").includes("homePage1")) {
        //         $("body").css("background","linear-gradient(270deg, #EB5757, #AD00B0)").fadeIn(2000);
        //     }
        //     if ($(this).attr("class").includes("aboutPage1")) {
        //         $("body").css("background","linear-gradient(150deg, #EB5757, #F2994A)").fadeIn(2000);
        //     }
        //     if ($(this).attr("class").includes("skillsPage1")) {
        //         $("body").css("background","linear-gradient(150deg, #AD00B0, #F2994A)").fadeIn(2000);
        //     }
        // }
    });
});
>>>>>>> 80906fa11d7ef8b7dc472e212cb21966bdeaa346

$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut(200);
});

$(document).on('click', '#moveRight', function(){
    $.fn.fullpage.moveSlideRight();
  });

  $( document ).ready(function() {
	$(".buttom-btn").click(function(){
		$(".top-btn").addClass('top-btn-show');
        $(".contact-form-page").addClass('show-profile');
        $(".header").addClass('displayNoneMobile');
		$(this).addClass('buttom-btn-hide')
	});

	$(".top-btn").click(function(){
        $(".buttom-btn").removeClass('buttom-btn-hide');
        $(".header").removeClass('displayNoneMobile');
		$(".contact-form-page").removeClass('show-profile');
	});
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });