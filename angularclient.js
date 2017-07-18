console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('BlocksController', function() {
  var blocks = this;
  console.log('ang sourced');

blocks.list = [];

console.log(blocks.list);

blocks.countred = 0;
blocks.countblue = 0;
blocks.countyellow = 0;
blocks.countgreen = 0;



blocks.color = function(clr) {
console.log('button clicked, ', clr );
  blocks.list.push(clr);

switch(clr) {
  case 'red':
    blocks.countred += 1;
    break;
  case 'blue':
    blocks.countblue += 1;
    break;
  case 'yellow':
    blocks.countyellow += 1;
    break;
  case 'green':
    blocks.countgreen += 1;
    break;
}

console.log(blocks.countred);
}//end blocks.color funciton




}); //end of controller
