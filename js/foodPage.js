(function ($) {
    $('.slide_group').slick({
        slidesToShow: 1,
        arrows:false,
        centerMode: true,
        focusOnSelect:true,
        centerPadding: '150px',
        responsive:[
            {
                breakpoint:988,
                settings:{
                    slidesToShow: 3,
                    centerPadding:'50px'
                }
            }],
    })

    // $('.slick-slide.slick-current.slick-active.slick-center').hover
})(jQuery);
