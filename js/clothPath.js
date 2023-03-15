import dataArr from "./EnglishName.js";

(function ($) {
    $('.slide_group').slick({
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    })

    let weathersuchi = "";

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

                // 날씨데이터 변수들
                let weather_Main = resp.weather[0].main;
                let weather_id = resp.weather[0].id;
                let weather_icon = resp.weather[0].icon;
                weathersuchi = weather_Main;

            }
        })
    }



    $('.Modal_page ul li .sect1').on('click', function () {
        $('body').append(`<div class="modal"></div>`)
        $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
        $('.imgbox').prepend(`<a></a>`)
        $('.imgbox a').after(`<button type="button">닫기</button>`)

        if (weathersuchi == 'Clear') {
            $('.oneModal').prepend(`<iframe src="/codyPage.html" style="width:100%; height:100%"></iframe>`)
            console.log(11)
        } else if (weathersuchi == 'Clouds' || weathersuchi == 'Rain') {
            $('.oneModal').prepend(`<iframe src="/codyPage2.html" style="width:100%; height:100%"></iframe>`)

        }else{
            $('.oneModal').prepend(`<iframe src="/codyPage.html" style="width:100%; height:100%"></iframe>`)
        }
        return false;

    })

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