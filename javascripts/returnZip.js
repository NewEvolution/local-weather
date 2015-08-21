define(function(require){
  var $ = require("jquery");
  var search = require("searchAPI");
  
  $('#submitButton').on("click", function(){
    var zipInput = $('#zipInput').val();
    console.log(zipInput);
    if(zipInput.length === 5){
      console.log("yes");
      if(isNaN(zipInput)){
        console.log("not a num");
        $('#message').html("Not zipcode. Please try again.");
      } else{
        console.log("is a num");
        // return zipInput;
        search.getWeather(zipInput);
      }
    }
    else{
      console.log("no");
      $('#message').html("Not zipcode. Please try again.");
    }
  });
});