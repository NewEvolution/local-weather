define(["jquery"],function($) {
  return {
    
    //function to pull from weather app  //
    getForecast: function(cityName, numberDays) {
      console.log("pulling from api");
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+",us&units=imperial&cnt="+numberDays,
        method: "GET"

        }).done(function(data) {
 
          console.log("data from cityName and numberDays", data);
         
      }).fail(function(xhr, status, error){
        console.log(error);
      });
          return data;
    }   
 };
});