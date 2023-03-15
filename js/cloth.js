import dataArr from "./EnglishName.js";
(function ($) {

    const weatherApi = (area) => {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?country=KR&name=Republic of Korea&id=1835841&state=&lang=KR&appid=d5948ec3ace590812f0049bbdb822c43&units=metric",
            dataType: "json",
            data: { q: area },
            type: "GET",
            async: "false",
            success: function (resp) {
                let latData = (resp.coord.lat);
                let lonData = (resp.coord.lon);
                // let areaSp = area.split(",");
                // console.log(resp);
                // console.log(resp.weather[0].main)

                // 현재온도
                var $Temp = Math.floor(resp.main.temp);
                // console.log($Temp)

                // 한글 영어로 변환 기능
                let ddArrctBc = dataArr.filter((value) => {
                    return value.eng === area
                })

                // 날씨에 따른 배경화면 전환
                let weather_Main = resp.weather[0].main;

                // 날씨에 따른 옷추천 전환 ( 날씨에 따라 모달창 클래스값을 바꿔서 사용)
                $('.Modal_page ul li .sect1').on('click', function () {
                    if (weather_Main == 'Clear' || weather_Main == 'Haze') {
                        $('body').append(`<div class="modal"></div>`)
                        $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
                        $('.imgbox').prepend(`<a>Clear</a>`)
                        $('.imgbox a').after(`<button type="button">닫기</button>`)
                    } else if (weather_Main == 'Clouds') {

                        $('body').append(`<div class="modal"></div>`)
                        $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
                        $('.imgbox').prepend(`<a>Clouds</a>`)
                        $('.imgbox a').after(`<button type="button">닫기</button>`)

                    } else if (weather_Main == 'Rain') {

                        $('body').append(`<div class="modal"></div>`)
                        $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
                        $('.imgbox').prepend(`<a>Rain</a>`)
                        $('.imgbox a').after(`<button type="button">닫기</button>`)
                    } else if (weather_Main == 'Mist') {

                        $('body').append(`<div class="modal"></div>`)
                        $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
                        $('.imgbox').prepend(`<a>Clear</a>`)
                        $('.imgbox a').after(`<button type="button">닫기</button>`)
                    }
                    return false
                })

            }
        })
    }
    // ajax에서 보낸 값(한글)을 영어로 바꿔주는 폼
    $('form').on('submit', function () {
        // inputDataVal = $('#data1').val('서울');
        var inputDataVal = $('#data1').val();
        let ddArrct = dataArr.filter((value) => {
            return value.kor === inputDataVal
        })

        weatherApi(ddArrct[0].eng);
        return false
    })
    weatherApi('Seoul,KR')
})(jQuery);