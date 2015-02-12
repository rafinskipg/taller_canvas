var canvas = document.getElementById('canvas');
var particles = [], MAX_PARTICLES = 10;
var addingParticle;
var GRAVITY_CONSTANT = 0.1 ;

function addParticle(particle){
  particles.push(particle);
}

/**********************************************************
  Start
***********************************************************/
function start(context, canvas){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for(var i = 0; i < MAX_PARTICLES; i++){
    var newParticle = new ParticleWithMass({
      mass : Utils.randomInteger(5, 10),
      x : Utils.randomInteger(0, canvas.width),
      y : Utils.randomInteger(0, canvas.height)
    });

    addParticle(newParticle);
  }
  addEventListeners();
}

/**********************************************************
  Clear
***********************************************************/
function clear(context, canvas){
  context.globalAlpha = 1;
  context.globalCompositeOperation = "source-over";
  
  context.save();
    
  //context.fillStyle = "#102";
  context.fillStyle = "rgba(17, 0, 34, 0.50)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.globalCompositeOperation = "lighter";
}
/**********************************************************
  Loop methods
***********************************************************/
function update(dt, context, canvas){
  particles = particles.map(function(particle){
    particle.update(dt);
    return particle;
  });

  particles.map(function(particle){
    particle.calculateNewForce(particles, GRAVITY_CONSTANT, context);
    return particle;
  });

  particles.map(function(particle){
    particle.updateForce(particles, GRAVITY_CONSTANT, context);
    return particle;
  });

  if(addingParticle){
    addingParticle.update(dt);
  }
}


function render(context){
  particles.forEach(function(particle){
    particle.render(context);
  });

  if(addingParticle){
    addingParticle.render(context);
  }
}

/**************************************************
 Event listeners
***************************************************/
function addEventListeners(){
  canvas.addEventListener('mousedown', handleMouseDown, false);
  canvas.addEventListener('mousemove', handleMouseMove, false);
  canvas.addEventListener('mouseup', handleMouseUp, false);
}

function handleMouseDown(e){
  var mouse = Utils.getMouseCoords(canvas, e);
  
  addingParticle = new ParticleWithMass({
    x : mouse.x,
    y : mouse.y,
    mass : 1, 
    autoIncrement : true
  });
}

function handleMouseMove(e){
  if(addingParticle){
    var mouse = Utils.getMouseCoords(canvas, e);
    addingParticle.pos.x = mouse.x;
    addingParticle.pos.y = mouse.y;
  }
}

function handleMouseUp(e){
  var newParticle = new ParticleWithMass({
    x : addingParticle.pos.x,
    y : addingParticle.pos.y,
    mass : addingParticle.mass
  });

  addParticle(newParticle);
  addingParticle = null;
}

/**********************************************************
  Init engine
***********************************************************/
var myEngine = new Engine(canvas);
myEngine.setClearingMethod(clear);
myEngine.addStartCallback(start);
myEngine.addUpdateCallback(update);
myEngine.addRenderCallback(render);
myEngine.start();