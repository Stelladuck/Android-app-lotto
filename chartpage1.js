$(function () {
	// Bring context
	let ctx = document.getElementById('myChart1').getContext('2d');
	// Generate chart
	// Hand ctx in as argument
	let myChart1 = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['34', '43', '27', '18', '17', '12', '39', '14', '40', '20'],
			datasets: [
				{
					label: '가장 빈번한 숫자 10개',
					data: [146, 139, 137, 135, 135, 133, 133, 132, 132, 130],
					backgroundColor: ['rgba(255, 99, 132, 0.5)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)'],
					borderColor: ['rgba(255, 99,  132,1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64,1)'],
					borderWidth: 1,
				},
			],
		},
		options: {
			maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: false,
							min: 125,
						},
					},
				],
			},
			legend: {
				display: false,
				labels: {
					fontColor: 'rgba(255, 99, 132,0.5)',
					fillStyle: 'rgba(255, 99, 132,0.5)'
				}
			},
			title: {
				display: true,
				text: '빈도수가 높은 번호 10개',
				fontSize: 11
			}
		},
	});

	// Bring context
	let ctx2 = document.getElementById('myChart2').getContext('2d');
	// Generate chart
	// Hand ctx in as argument
	let myChart2 = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ['06', '28', '35', '41', '23', '29', '30', '32', '22', '09'],
			datasets: [
				{
					label: '가장 빈도가 낮은 숫자 10개',
					data: [117, 116, 114, 113, 112, 111, 111, 108, 105, 95],
					backgroundColor: ['rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 159, 64, 0.2)',
									  'rgba(255, 99, 132, 0.5)'],
					borderColor: ['rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 159, 64, 1)',
								  'rgba(255, 99,  132,1)'],
					borderWidth: 1,
				},
			],
		},
		options: {
			maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: false,
							min:90,
							borderSkipped: 'bottom'
						},
					},
				],
			},
			legend: {
				display: false,
				labels: {
					fontColor: 'rgba(255, 99, 132)',
					fillStyle: 'rgba(255, 99, 132,0.5)'
				}
			},
			title: {
				display: true,
				text: '빈도수가 낮은 번호 10개',
				fontSize: 11
			}
		},
	});
});