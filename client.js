$('document').ready(function() {
  console.log('document ready');

  //click "red" button to create a new red block.
  //var numRed counts how many red blocks we have.
  var numRed = 1;
  $('#redbtn').on('click', function(){
    numRed += 1;
    $('.colors').append('<div class="block redblock"></div> ');
    $('#redbtn').text('Red Blocks: ' + numRed);
  });
  //remove red blocks
  $('.colors').on('click', '.redblock', function() {
    $(this).remove();


    //This removes blocks and adjusts the counter down one.
    //It also restarts the counter at zero.
    //THE PROBLEM: when the counter reaches zero,
    // it shows a negative number. Other than that moment, it acts as expected.
    var numRedRemain = 0;
    $('.colors').on('click', '.redblock', function() {
      numRedRemain += 1;
      $(this).remove();
      if(numRed - numRedRemain === 1){
        $('#redbtn').text('Red');
        numRed = 0;
      } else {
        $('#redbtn').text('Red Blocks: ' + (numRed - numRedRemain));
      }
    });
  });




  //click button to create a new colored block.
  //var numBlue counts how many blue blocks we have.
  var numBlue = 1;
  $('#bluebtn').on('click', function(){
    numBlue += 1;
    $('.colors').append('<div class="block blueblock"></div> ');
    $('#bluebtn').text('Blue Blocks: ' + numBlue);

    //This removes blocks and adjusts the counter down one.
    //It also restarts the counter at zero.
    //THE PROBLEM: when the counter reaches zero,
    // it shows a negative number. Other than that moment, it acts as expected.
    var numBlueRemain = 0;
    $('.colors').on('click', '.blueblock', function() {
      numBlueRemain += 1;
      $(this).remove();
      if(numBlue - numBlueRemain === 0){
        $('#bluebtn').text('Blue');
        numBlue = 0;
      } else {
        $('#bluebtn').text('Blue Blocks: ' + (numBlue - numBlueRemain));
      }
    });

  });
  //remove blue blocks


  //click button to create a new colored block.
  //var numGreen counts how many green blocks we have.
  var numGreen = 1;
  $('#greenbtn').on('click', function(){
    numGreen += 1;
    $('.colors').append('<div class="block greenblock"></div> ');
    $('#greenbtn').text('Green Blocks: ' + numGreen);
  });
  //remove green blocks
  $('.colors').on('click', '.greenblock', function() {
    $(this).remove();

    var numGreenRemain = 0;
    $('.colors').on('click', '.greenblock', function() {
      numGreenRemain += 1;
      $(this).remove();
      if(numGreen - numGreenRemain === 0){
        $('#greenbtn').text('Green');
        numGreen = 0;
      } else {
        $('#greenbtn').text('Green Blocks: ' + (numGreen - numGreenRemain));
      }
    });



  });
  //click button to create a new colored block.
  //var numYellow counts how many yellow blocks we have.
  var numYellow = 1;
  $('#yellowbtn').on('click', function(){
    numYellow += 1;
    $('.colors').append('<div class="block yellowblock"></div> ');
    $('#yellowbtn').text('Yellow Blocks: ' + numYellow);
  });
  //remove yellow blocks
  $('.colors').on('click', '.yellowblock', function() {
    $(this).remove();
    $('#yellowbtn').text('Yellow Blocks ' + (numYellow -= 1));
});
    // var numYellowRemain = 0;
    // $('.colors').on('click', '.yellowblock', function() {
    //   numYellowRemain += 1;
    //   $(this).remove();
    //   if(numYellow - numYellowRemain === 1){
    //     $('#yellowbtn').text('Yellow');
    //     numYellow = 0;
    //   } else {
    //     $('#yellowbtn').text('Yellow Blocks: ' + (numYellow - numYellowRemain));
    //   }
    // });










});
