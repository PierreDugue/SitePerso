$(window).load(function () {
  // Animate loader off screen
  $(".loader").fadeOut(1000);
});


$(document).on('click', '#moveRight', function () {
  $.fn.fullpage.moveSlideRight();
});

$(document).ready(function () {
  $(".buttom-btn").click(function () {
    $(".top-btn").addClass('top-btn-show');
    $(".contact-form-page").addClass('show-profile');
    $(".header").addClass('displayNoneMobile');
    $(this).addClass('buttom-btn-hide')
  });

  $(".top-btn").click(function () {
    $(".buttom-btn").removeClass('buttom-btn-hide');
    $(".header").removeClass('displayNoneMobile');
    $(".contact-form-page").removeClass('show-profile');
  });

  $("#togglerButton").click(function () {
    $("#menu").slideToggle(600);
  });

  $(".menuItem").click(function () {
    $("#menu").slideToggle(600);
  });

})

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

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
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// var path = document.querySelectorAll('path'),
//   percentScroll;

// $(path).each(function () {
//   this.style.strokeDasharray = this.getTotalLength();
//   this.style.strokeDashoffset = this.getTotalLength();
// });

// window.onscroll = function () {
//   percentScroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)

//   $(path).each(function () {
//     this.style.strokeDashoffset = Math.floor(this.getTotalLength() * (1 - percentScroll));
//   });
// };

// var path = document.querySelectorAll('path'),
//   percentScroll;
// let sectionSize;

// $(path).each(function () {
//   this.style.strokeDasharray = this.getTotalLength();
//   sectionSize = $("#skills").innerHeight();
// });

// window.onscroll = function () {
//   percentScroll = window.pageYOffset / (document.body.offsetHeight - sectionSize);

//   $(path).each(function () {
//     this.style.strokeDashoffset = Math.floor(this.getTotalLength() * (1 - percentScroll));
//   });
// };

// var svg = document.querySelector('svg');

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   var isOutside = (rect.top >= window.innerHeight) || (rect.bottom <= 0);
//   return !isOutside;
// }

// window.addEventListener('scroll', function(e) {
//   svg.classList.toggle('in-view', isElementInViewport(svg));
// });