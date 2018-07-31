$(function() {
  var canvas = document.getElementById("MyCanvas");
  var context = canvas.getContext("2d");

  function hexagon(x, y) {
    var size = 40;

    context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

    for (side = 0; side < 7; side++) {
      context.lineTo(
        x + size * Math.cos((side * 2 * Math.PI) / 6),
        y + size * Math.sin((side * 2 * Math.PI) / 6)
      );
      context.strokeStyle = "#ffa100";
      context.stroke();
    }
  }

  hexagon(240, 180);
  context.fillStyle = "#ffa100";
  context.fill();
  hexagon(100, 180);
  hexagon(170, 60);
  hexagon(170, 140);
  hexagon(170, 220);
  hexagon(240, 100);
  hexagon(100, 100);
});
