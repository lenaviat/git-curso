var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');
console.log(lienzo);

var color = 'red';
var xInicial = 50;
var yInicial = 0;
var xFinal = 50;
var yFinal = 300;

for (var i = 0; i < 30 ; i++) {
  dibujarLinea(color, xInicial, yInicial, xFinal, yFinal);
  yInicial = yInicial + 10;
  xFinal = xFinal + 10;
}

var color = 'blue';
var xInicial = 350;
var yInicial = 0;
var xFinal = 350;
var yFinal = 300;
for (var i = 0; i < 30 ; i++) {
  dibujarLinea(color, xInicial, yInicial, xFinal, yFinal);
  yFinal = yFinal -10;
  xInicial = xInicial - 10;
}

dibujarLinea(color, xInicial, yInicial, xFinal, yFinal);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
