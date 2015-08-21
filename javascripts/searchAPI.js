define(function(require) {
  var $=require("jquery");
  var template=require("hbs!../templates/displayMain");
  var handlebars=require("hbs");
  var Q = require("q");
  var deferred = Q.defer();
  return {
    
    //function to pull from weather app  //
    getWeather: function(zipCode) {
      console.log("pulling from api");
      console.log(zipCode);
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us",
        method: "GET"

        }).done(function(data) {
          $("#weatherMain").html(template(data));
          console.log("data from zipCode function", data);
          deferred.resolve(data);
      });
          // return data;
          return deferred.promise;
    }   
 };
});