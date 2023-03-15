(function($){
    $(window).on('load', season())
    function season() {

    
        let today = new Date()
        let month = today.getMonth()+1 
        // let month = 6

        // let local = ''

        if (3<=month && month<=5) {
            season = 'spring'
        } else if (6<=month && month<=8) {
            season = 'summer'
        } else if (9<=month && month<=11) {
            season = 'fall'
        } else if (12<=month || month<=2) {
            season = 'winter'
        }
        console.log(season)
        // console.log(local)

        // 닫기버튼
        $('button#close').on('click', function(){
            $('#contBox').addClass('close')
        })

        // 버튼별 지역명을 클래스로 붙이기
        $('button#seoul').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close busan gangwon daejeon gwangju jeju').addClass('seoul')
        })
        $('button#busan').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close seoul gangwon daejeon gwangju jeju').addClass('busan')
        })
        $('button#gangwon').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close seoul busan daejeon gwangju jeju').addClass('gangwon')
        })
        $('button#daejeon').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close seoul busan gangwon gwangju jeju').addClass('daejeon')
        })
        $('button#gwangju').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close seoul busan gangwon daejeon jeju').addClass('gwangju')
        })
        $('button#jeju').on('click', function(){
            $('#map button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('close seoul busan gangwon daejeon gwangju').addClass('jeju')
        })

        // 월별 계절 변경
        if (season == 'spring') {
            $('#contBox').addClass('spring')
        } else if (season == 'summer') {
            $('#contBox').addClass('summer')
        } else if (season == 'fall') {
            $('#contBox').addClass('fall')
        } else if (season == 'winter') {
            $('#contBox').addClass('winter')
        }
        
    }
    $(window).on('resize', function(){
        if (innerWidth < 1024) {
            location.reload()
        }
    })

        
})(jQuery)


