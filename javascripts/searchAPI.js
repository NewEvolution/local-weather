define(["jquery"],function($) {
  return {
    
    //function to pull from weather app  //
    getWeather: function(zipCode) {
      console.log("pulling from api");
      $.ajax({
        url: "api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us",
        method: "POST"

        }).done(function(data) {
 
          console.log("data from zipCode function", data);
          return data;
         
      });
    }   
 };
});