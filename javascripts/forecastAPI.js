define(["jquery"],function($) {
  return {
    
    //function to pull from weather app  //
    getForecast: function(cityName, numberDays) {
      console.log("pulling from api");
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+",us&units=imperial&cnt="+numberDays,
        method: "POST"

        }).done(function(data) {
 
          console.log("data from cityName and numberDays", data);
          return data;
         
      });
    }   
 };
});