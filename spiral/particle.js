function Particle(opts ){
  this.radius = opts.radius ;
  this.x = opts.x;
  this.y = opts.y;
  this.color = opts.color;
}

Particle.prototype.render = function(context){
  context.save();

  context.translate(this.x, this.y);

  context.beginPath();
  context.arc(0, 0, this.radius, 0, 2 * Math.PI);
  //context.closePath();

  context.fillStyle = this.color;
  context.fill();

  context.restore();
}
