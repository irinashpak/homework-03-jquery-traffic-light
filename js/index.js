$(document).ready(function(){

  // goo to know, no quotes after click =)
  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  // got it. yes, we need # because it's an ID.

  function illuminateRed() {
  	clearLights ();
  	$('#stopLight').addClass('red');
  }

  function illuminateYellow() {
  	clearLights();
  	$('#slowLight').addClass('yellow');
  }

  function illuminateGreen() {
    clearLights();
  	$('#goLight').addClass('green')
    
  }

  function clearLights () {
  $('#stopLight').removeClass('red');
  $('#slowLight').removeClass('yellow');
  $('#goLight').removeClass('green');
  }


});