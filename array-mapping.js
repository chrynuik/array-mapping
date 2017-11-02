var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(currentValue){
  var x = currentValue['x'];
  var y = currentValue['y'];
  var zSquare = x * x + y * y;
  return Math.sqrt(zSquare);

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);