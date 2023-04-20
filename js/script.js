(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets

      $('#ads-b').hide();
      $('#ads-bx').hide();
      $('#ads-ba').hide();
      $('#ads-c1').hide();
      $('#ads-s1').hide();

      $('#ads-sd').hide();
      $('#ads-sdx').hide();
      $('#ads-sda').hide();
      $('#ads-c2').hide();
      $('#ads-s2').hide();

      setTimeout(function() {
        $('.lamcn').css("background-image","url('images/lamc1.jpg')");
      }, 2000);

      setTimeout(function() {
        $('#ads-b').show();
        $('#ads-bx').show();
      }, 3000);

      setTimeout(function() {
        $('#ads-sd').show();
        $('#ads-sdx').show();
      }, 3700);
    });

    function closeAd1() {
        $('#ads-b').hide();
        $('#ads-bx').hide();
        $('#ads-ba').show();
        $('#ads-s1').show();
        setTimeout(function() {
          $('#ads-s1').hide();
          $('#ads-c1').show();
        }, 1000);
    }

    function closeAd2() {
        $('#ads-sd').hide();
        $('#ads-sdx').hide();
        $('#ads-sda').show();
        $('#ads-s2').show();
        setTimeout(function() {
          $('#ads-s2').hide();
          $('#ads-c2').show();
        }, 1000);
    }

    $(function () {
      $('#ads-bx').click(function (e) {
        e.preventDefault();
        closeAd1();
      });
      $('#ads-sdx').click(function (e) {
        e.preventDefault();
        closeAd2();
      });
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })

    // PARALLAX EFFECT
    $.stellar();  

    // SMOOTHSCROLL
    $(function() {
      $('nav a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
