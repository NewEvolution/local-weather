define(["jquery"],function($) {
  return {
    
    //function to pull from weather app  //
    getForecast: function(cityName, numberDays) {
      var template=require("hbs!../templates/displayForecast");
///////////////////////////


      console.log("pulling from api");
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+",us&units=imperial&cnt="+numberDays,
        method: "GET"

      }).done(function(data) {
        console.log("data from cityName and numberDays", data);
        $("#forecastTarget").html(template(data));
      }).fail(function(xhr, status, error){
        console.log(error);
      });
      return data;
    }   
 };
});