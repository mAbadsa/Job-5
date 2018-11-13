var owl = $('.upSlide');
owl.owlCarousel({
//    autoplay:true,
//    autoplayTimeout:1000,
    autoplayHoverPause:true,
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
});