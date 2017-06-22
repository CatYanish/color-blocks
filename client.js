$('document').ready(function() {
  console.log('document ready');

    //click "red" button to create a new red block.
    //var numRed counts how many red blocks we have.
    var numRed = 0;
    $('#redbtn').on('click', function(){
      numRed += 1;
      $('.colors').append('<div class="block" id="red"></div> ');
      $('#redbtn').text('Red Blocks: ' + numRed);
      });
    //click button to create a new colored block.
    //var numBlue counts how many blue blocks we have.
    var numBlue = 0;
    $('#bluebtn').on('click', function(){
      numBlue += 1;
      $('.colors').append('<div class="block" id="blue"></div> ');
      $('#bluebtn').text('Blue Blocks: ' + numBlue);
    });
    //click button to create a new colored block.
    //var numGreen counts how many green blocks we have.
    var numGreen = 0;
    $('#greenbtn').on('click', function(){
      numGreen += 1;
      $('.colors').append('<div class="block" id="green"></div> ');
      $('#greenbtn').text('Green Blocks: ' + numGreen);
    });
    //click button to create a new colored block.
    //var numYellow counts how many yellow blocks we have.
    var numYellow = 0;
    $('#yellowbtn').on('click', function(){
      numYellow += 1;
      $('.colors').append('<div class="block" id="yellow"></div> ');
      $('#yellowbtn').text('Yellow Blocks: ' + numYellow);
    });






});
