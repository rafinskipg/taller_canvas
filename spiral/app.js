var canvas = document.getElementById('canvas');
var MAX_POINTS = 100;
var phi = ( 1 + Math.sqrt(5) ) / 2;
var golden_angle = phi * 2 * Math.PI;
var spiral_radius, centerX, centerY;


function render(context, canvas){
  context.beginPath();
  //var angle_incr = phi;
  //var angle_incr = Utils.degreeToRadian(1);

  var particles = [];
  var angleBetweenPoints = 360 / MAX_POINTS;
  var angle_incr = Utils.degreeToRadian(angleBetweenPoints);

  var distanceBetweenPoints = (spiral_radius/ MAX_POINTS)
  
  for (var i = 1; i <= MAX_POINTS; ++i) {
    var angle = i * angle_incr;
    var distanceFromCenter = i * distanceBetweenPoints;
    
    var x = centerX + Math.cos(angle) * distanceFromCenter;
    var y = centerY + Math.sin(angle) * distanceFromCenter;

    context.lineTo(x, y);
  }
  
  context.stroke();
}

function startCallback(context, canvas){
  spiral_radius = canvas.width / 3;
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  context.moveTo(centerX, centerY);
}

function updateCallback(dt){
  MAX_POINTS += dt/10;
}

var myEngine = new Engine(canvas, true, 1);
//myEngine.setStartDelay(1000);
myEngine.addStartCallback(startCallback);
myEngine.addUpdateCallback(updateCallback);
myEngine.addRenderCallback(render);
myEngine.start();