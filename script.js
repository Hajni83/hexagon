$(function(){

    var canvas = document.getElementById('MyCanvas');
    var context = canvas.getContext('2d');

    var side = 0;
    var size = 40;
    var x = 100;
    var y = 100;

   
context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
  context.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
}

context.strokeStyle = "#ffa100";
context.stroke();

});