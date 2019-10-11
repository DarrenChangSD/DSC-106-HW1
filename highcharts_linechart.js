// Data of the line chart
var series = [
    {
       name: 'fulltime_men_applied',
       data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
    }, 
    {
       name: 'fulltime_men_admitted',
       data: [7580, 9210, 8419, 8517, 7816, 8365, 8707, 10917, 11866, 11758, 12748, 14103, 13981, 13781]
    }, 
    {
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
       ]}
 ];

 // Configuration about the plot
 var title = {
    text: 'Men Enrollment at UCSD 2005 - 2018'   
 };
 var xAxis = {
    categories: ['2005 ', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
 };
 var yAxis = {
    title: {
       text: 'Number of People'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  
 var tooltip = {
    valueSuffix: '\xB0C'    // /xB0C is basically degrees
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);