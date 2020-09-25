angular.module('csvApp', []).controller('csvCtrl', function ($scope) {
    $scope.reports = [];
    var fileList = [
        {
            csvData: `"Example seq"
			"06 45 17 21"
			"11 01 85 67"
			"40 98 53 22"
			"71 55 56 25"
			"13 11 88 57"`
        },
    ];

    function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		// Exclude max, include min
		return Math.floor(Math.random() * (max - min)) + min;
	}

    angular.forEach(fileList, function (element, index) {
        var csvData = element.csvData;
        var rows = csvData.replace(/"/g, '').split(/\n/g);
		
        var sub_index = [0,1];
        var random_index = getRandomInt(1, Object.keys(rows).length);
        var report = { data: [] };
        angular.forEach(sub_index, function (element, sub_index) {
            // No need for header row
            if (sub_index !== 0) {
                var rowData = rows[random_index].split(/,/g);
                var tempReportData = {
                    Fst: rowData[0].trim(),
                    // Snd: rowData[1].trim(),
                };
                report.data.push(tempReportData);
            }
        });
        $scope.reports.push(report);
    });
});