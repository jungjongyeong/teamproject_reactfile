
const refFood = (type) => {
    if (type == 1) {
        $('.wrap .slide1').attr("data-menu", "냉면")
        $('.wrap .slide2').attr("data-menu", "치킨")
        $('.wrap .slide3').attr("data-menu", "햄버거")
        $('.wrap .slide4').attr("data-menu", "해물탕")
        $('.wrap .slide5').attr("data-menu", "맛집")
        $('.wrap .slide_group').eq(0).addClass('on').siblings().removeClass('on')
    } else if (type == 2) {
        $('.wrap .slide1').attr("data-menu", "칼국수")
        $('.wrap .slide2').attr("data-menu", "짬뽕")
        $('.wrap .slide3').attr("data-menu", "국밥")
        $('.wrap .slide4').attr("data-menu", "부대찌개")
        $('.wrap .slide5').attr("data-menu", "맛집")
        $('.wrap .slide_group').eq(1).addClass('on').siblings().removeClass('on')
    } else {
        $('.wrap .slide1').attr("data-menu", "두부")
        $('.wrap .slide2').attr("data-menu", "부침개")
        $('.wrap .slide3').attr("data-menu", "우동")
        $('.wrap .slide4').attr("data-menu", "삼겹살")
        $('.wrap .slide5').attr("data-menu", "맛집")
        $('.wrap .slide_group').eq(2).addClass('on').siblings().removeClass('on')
    }
}

export default refFood;