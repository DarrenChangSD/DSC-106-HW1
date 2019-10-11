Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Men Application Number at UCSD 2005 - 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Year',
        colorByPoint: true,
        data: [{
            name: '2018',
            y: 11.16695622,
            sliced: true,
            selected: true
        }, {
            name: '2017',
            y: 10.17520249
        }, {
            name: '2016',
            y: 9.733770524
        }, {
            name: '2015',
            y: 9.055962023
        }, {
            name: '2014',
            y: 8.470893386
        }, {
            name: '2013',
            y: 7.828321139
        }, {
            name: '2012',
            y: 7.036973597
        }, {
            name: '2011',
            y: 6.141140774
        }, {
            name: '2010',
            y: 5.464555754
        }, {
            name: '2009',
            y: 5.316025155
        }, {
            name: '2008',
            y: 5.282991166
        }, {
            name: '2007',
            y: 5.032422248
        }, {
            name: '2006',
            y: 4.854283407
        }, {
            name: '2005',
            y: 4.440502117
        }]
    }]
});