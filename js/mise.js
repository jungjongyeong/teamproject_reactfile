$(document).ready(function () {
	setTimeout(function () {
		$(".loader").fadeOut(500);
		$(".wrapper").fadeIn(500);
	}, 2000);
});

$(document).ready(function () {
	var gdata = [];
	$.ajax({
		type: "GET",
		url: "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
		data: {
			serviceKey:
				"vDb2EVp9Q+ES37mSsmcEHxZ+ydtef5ex9X9Zw2OYTPcRZxdRJalPPZSuMGBzagcEZbG8B/Rl4cEl33c19P74Ug==",
			returnType: "json",
			numOfRows: 641,
			pageNo: 1,
			sidoName: "전국",
			ver: "1.0",
		},
		success: function (response) {
			var list = response.response.body.items;
			// console.log(list);
			gdata = list;

			useData(gdata);
		},
	});

	let sido = ["서울", "경기", "강원", "대전", "광주", "부산", "제주"];
	var sidoAvg = [];
	function useData(data) {
		let list = '<ul id="names-q1">';
		for (let i in sido) {
			let sidofilter = data.filter((value, index) => {
				return value.sidoName === sido[i];
			});
			// console.log(sidofilter);
			let sum = 0;
			sidofilter.map((value, index) => {
				// console.log(typeof value.pm10Value);
				if (value.pm10Value !== null && value.pm10Value !== "-") {
					sum += parseInt(value.pm10Value);
				}
			});

			let avg = Math.round(sum / sidofilter.length);
			sidoAvg.push(avg);
			list += `<li>${sido[i]} : ${avg}</li>`;
			// console.log(sidoAvg);
		}
		$(".box").append(list);

		chart.data.datasets[0].data = sidoAvg;
		chart.update();
	}

	var ctx = document.getElementById("list").getContext("2d");
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: "bar",

		// The data for our dataset
		data: {
			labels: ["서울", "경기", "강원", "대전", "광주", "부산", "제주"],
			datasets: [
				{
					label: "pm10Value",
					backgroundColor: [
						"rgba(255, 99, 132, 0.5)",
						"rgba(54, 162, 235, 0.5)",
						"rgba(255, 206, 86, 0.5)",
						"rgba(75, 192, 192, 0.5)",
						"rgba(153, 102, 255, 0.5)",
						"rgba(255, 159, 64, 0.5)",
						"rgba(201, 203, 207, 0.5)",
					],
					borderColor: [
						"rgb(255, 99, 132,1.5)",
						"rgba(54, 162, 235, 1.5)",
						"rgba(255, 206, 86, 1.5)",
						"rgba(75, 192, 192, 1.5)",
						"rgba(153, 102, 255, 1.5)",
						"rgba(255, 159, 64, 1.5)",
						"rgba(255, 159, 64, 1.5)",
					],
					data: [],
				},
			],
		},

		options: {
			responsive: false,
			title: {
				display: false,
				text: "",
				fontSize: 30,
				fontColor: "rgba(46, 49, 49, 1)",
			},
			legend: {
				labels: {
					display: false,
					fontColor: "rgba(83, 51, 237, 1)",
					fontSize: 18,
				},
			},
			scales: {
				xAxes: [
					{
						ticks: {
							fontColor: "rgba(27, 163, 156, 1)",
							fontSize: "16",
						},
					},
				],
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							fontColor: "rgba(246, 36, 89, 1)",
							fontSize: "18",
						},
					},
				],
			},
		},
	});
});
