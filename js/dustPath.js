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

                // 위치( 위도 , 경도 )
                let latData = (resp.coord.lat);
                let lonData = (resp.coord.lon);

                // 한글 영어로 변환 기능
                let ddArrctBc = dataArr.filter((value) => {
                    return value.eng === area
                })

                let koreaAreaName = ddArrctBc[0].kor;

                // 미세먼지 데이터 입력(위도, 경도)
                dustData(latData, lonData)
            }
        })

        $('.Modal_page ul li .sect4').on('click', function () {
            $('body').append(`<div class="modal"></div>`)
            $('.modal').prepend(`<div class="imgbox oneModal"></div>`)
            $('.imgbox').prepend(`<a></a>`)
            $('.imgbox a').after(`<button type="button">닫기</button>`)
            $('.oneModal').prepend(`
                        <iframe src="/mise.html" style="width:100%; height:100%"></iframe>`)
            return false;
    
        })
    

        // 대기오염 api
        const dustData = (latData, lonData) => {
            $.ajax({
                type: "get",
                url: "http://api.openweathermap.org/data/2.5/air_pollution?country=KR&name=Republic of Korea&id=1835841&state=&lang=KR&appid=d5948ec3ace590812f0049bbdb822c43",
                dataType: 'json',
                data: { lat: latData, lon: lonData },
                success: function (data) {
                    dustVar(data.list[0].main.aqi);
                    // console.log(data)
                },
                error: function (xhr) {
                    alert(xhr.status)
                }
            })
        }
    }
    let span3 = '';
    // 대기오염 데이터 화면에 뿌려주는 코드
    const dustVar = (dvr) => {
        $('.dustSpan').remove()
        if (dvr == 1) {
            span3 = `<span class="dustSpan">`
            span3 += `Good</span>`
            $('.dust').append(span3)
        } else if (dvr == 2 || dvr == 3 || 4 == dvr) {
            span3 = `<span class="dustSpan">`
            span3 += `Normal</span>`
            $('.dust').append(span3)
        } else if (5 == dvr) {
            span3 = `<span class="dustSpan">`
            span3 += `Bad</span>`
            $('.dust').append(span3)
        }
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