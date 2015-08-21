define(["jquery"],function($) {
  return {
    
    //function to pull from weather app  //
    getWeather: function(zipCode) {
      console.log("pulling from api");
      console.log(zipCode);
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us",
        method: "GET"

        }).done(function(data) {
 
          console.log("data from zipCode function", data);
          return data;
         
      });
    }   
 };
});