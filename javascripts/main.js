// Pull in all the various javascript libraries
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

// The main function requiring all our anciliary scripts
requirejs(["dependencies"], 
  function(dependencies){
  $('#submitButton').on("click", function(){
    var zipInput = $('#zipInput').val();
    console.log(zipInput);
    if(zipInput.length === 5){
      console.log("yes");
    }
    else{
      console.log("no");
      $('#message').html("Not zipcode. Please try again.");
    }
  });

});