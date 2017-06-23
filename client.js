$('document').ready(function() {
  console.log('document ready');

    //click "red" button to create a new red block.
    //var numRed counts how many red blocks we have.
    var numRed = 0;
    $('#redbtn').on('click', function(){
      numRed += 1;
      $('.colors').append('<div class="block redblock"></div> ');
      $('#redbtn').text('Red Blocks: ' + numRed);
      });
      //remove red blocks
      $('.colors').on('click', '.redblock', function() {
          $(this).remove();
      });




    //click button to create a new colored block.
    //var numBlue counts how many blue blocks we have.
    var numBlue = 1;
    $('#bluebtn').on('click', function(){
      numBlue += 1;
      $('.colors').append('<div class="block blueblock"></div> ');
      $('#bluebtn').text('Blue Blocks: ' + numBlue);


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
    var numGreen = 0;
    $('#greenbtn').on('click', function(){
      numGreen += 1;
      $('.colors').append('<div class="block greenblock"></div> ');
      $('#greenbtn').text('Green Blocks: ' + numGreen);
    });
    //remove green blocks
    $('.colors').on('click', '.greenblock', function() {
        $(this).remove();
    });
    //click button to create a new colored block.
    //var numYellow counts how many yellow blocks we have.
    var numYellow = 0;
    $('#yellowbtn').on('click', function(){
      numYellow += 1;
      $('.colors').append('<div class="block yellowblock"></div> ');
      $('#yellowbtn').text('Yellow Blocks: ' + numYellow);
    });
    //remove yellow blocks
    $('.colors').on('click', '.yellowblock', function() {
        $(this).remove();
    });







});
