var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function render(){
  //UTILIDADES: de grado a radianes
  //var radians = Utils.degreeToRadian(45);
  
  //Almacena el estado del contexto
  //context.save();

  //Indica comienzo de trazado de figura/linea
  //context.beginPath();

  //Translada el cursor, cambiando el inicio de coordenadas 0,0 a x,y
  //context.translate(x, y);

  //Rota el canvas
  //context.rotate(anguloRadianes);

  //Dibuja un rectangulo
  //context.rect(x, y, width, height);

  //Dibuja un arco (circulo)
  //context.arc(x, y, radio, anguloOrigenRadianes, anguloDestinoRadianes)

  //Mueve el cursor, manteniendo el origen de coordenadas
  //context.moveTo(x, y);

  //Traza una linea
  //context.lineTo(x, y);

  //Color de linea
  //context.strokeStyle = COLOR o gradiente;

  //Color de relleno
  //contet.fillStyle = COLOR o gradiente;

  //Trazar linea
  //context.stroke();

  //Rellenar de color
  //context.fill();

  //Gradientes
  //var gradient = context.createLinearGradient(x, y, xFinal, yFinal)
  //var gradient = context.createRadialGradient(x, y, radioInterior, xFinal, yFinal, radioExterior)
  //gradient.addColorStop([0,0.01, ... 0.99, 1], COLOR)

  //Limpiar el canvas
  //context.clearRect(x, y, width, height);

  //Restaurar estado almacenado de canvas (coordenadas, escala)
  //context.restore();

}

render();