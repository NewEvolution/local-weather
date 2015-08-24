define(function(require){
  var $ = require("jquery");
  
 
  return {
    convertDate: function(epochDate) {
      var myDate = new Date( epochDate * 1000);
      console.log(myDate.toLocaleString());
      var convertedDate = (myDate.toLocaleString());
      return convertedDate;
    }
  };
});

