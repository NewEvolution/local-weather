define(function(require) {
  var $ = require("jquery");
  var template=require("hbs!../templates/displayForecast");
   var dateFunction = require("convertDate"); 
  return {
    
    //function to pull from weather app  //
    getForecast: function(cityName, numberDays) {
///////////////////////////


      console.log("pulling from api");
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+",us&units=imperial&cnt="+numberDays,
        method: "GET"

      }).done(function(data) {
        console.log("data from cityName and numberDays", data);
     
        for (var i = 0; i < data.list.length; i++) {
          data.list[i].dt = dateFunction.convertDate (data.list[i].dt);
        }
        
        $("#forecastTarget").html(template(data));
      }).fail(function(xhr, status, error){
        console.log(error);
      });
      return data;
    }   
 };
});