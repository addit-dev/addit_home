AOS.init();
$('header .hamburger-button').click(function(){
  $(this).toggleClass('active');
  $('header nav>.menu').toggleClass('overflow');

});


$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('#top_btn').fadeIn(400);
      $('header .hamburger-button span').addClass('scroll');
  } else {
      $('#top_btn').fadeOut(400);
      $('header .hamburger-button span').removeClass('scroll');
  }
  });

  $('#top_btn').click(function (event) {
  $('html, body').animate({ scrollTop: 0 }, 300);
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
  },
});


var swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  navigation: {
    nextEl: ".swNext",
    prevEl: ".swPrev",
  },
});

   

 


