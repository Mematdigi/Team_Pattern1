
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });


// About Section 

$('.our_team').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout:5000,
  
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

// Review Slider

$(".owl-carousel").owlCarousel({
  margin:10,
  responsiveClass:true,
  autoplay: true,
  autoplayTimeout:5000,
  responsive:{
    0:{
      items:1
    },
    680:{
      items:2
    },
    960:{
      items:3
    }
  }
});
