var chart = am4core.create("chartdiv2", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    


am4core.useTheme(am4themes_animated);

chart.data = [{
    "country": "Lithuania",
    "litres": 501
  }, {
    "country": "Czechia",
    "litres": 301
  }, {
    "country": "Ireland",
    "litres": 201
  }, {
    "country": "Germany",
    "litres": 165
  }, {
    "country": "Australia",
    "litres": 139
  }, {
    "country": "Austria",
    "litres": 128
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  }];


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.title.text = "Countries";
categoryAxis.fontSize = 20;

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 110;
    
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 600;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 20;
valueAxis.title.text = "Litres sold (M)";

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "litres";



series.name = "Sales";
series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
// series.columns.template.fill = am4core.color("#104547"); // fill

series.columns.template.tooltipY = 0; //tooltipY position
series.columns.template.strokeOpacity = 0;  //border color

series.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
});



