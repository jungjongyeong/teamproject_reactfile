(function ($) {
    // 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
    $('body').on('click', '.modal button', function () {
        $('.modal').remove()
    })

    // 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기   
    $('body').on('click', '.back_form', function (e) {
        $('.modal').remove()
    })

})(jQuery);