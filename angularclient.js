console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('BlocksController', function() {
  var blocks = this;
  console.log('ang sourced');

blocks.list = [];

console.log(blocks.list);

blocks.color = function(clr) {
console.log('button clicked, ', clr );
  blocks.list.push(clr);

}//end blocks.color funciton

console.log(blocks.list);
}); //end of controller
