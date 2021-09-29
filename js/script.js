 $(document).ready(function(){
 // Slick Slider jq
      $('.autoplay').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1500,
          responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
       // Aos Js
      AOS.init({
        offset: 120,
        duration: 1000,
      });

});
