Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Men Enrollment at UCSD 2005 - 2018'
    },
    xAxis: {
      categories: [
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of People'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'fulltime_men_applied',
      data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]  
    }, {
        name: 'fulltime_men_admitted',
        data: [7580, 9210, 8419, 8517, 7816, 8365, 8707, 10917, 11866, 11758, 12748, 14103, 13981, 13781]
  
    }, {
      name: 'fulltime_men_enrolled',
      data: [
        1607,
        2031,
        1838,
        1893,
        1695,
        1858,
        1583,
        2328,
        2616,
        2538,
        2711,
        2669,
        2725,
        3220
      ]
    }]
 });
  