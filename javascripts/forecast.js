define(function(require){
  var $ = require("jquery");
  var searchForecast = require("forecastAPI");
  var search = require("searchAPI");



  $(document).on("click", "#forecast3d", function(){
    var zipInput = $('#zipCodeIn').val();
    searchForecast((search.getWeather(zipInput)).name, 3);
  });

  $(document).on("click", "#forecast7d", function(){
    var zipInput = $('#zipCodeIn').val();
    searchForecast((search.getWeather(zipInput)).name, 7);
  });
});