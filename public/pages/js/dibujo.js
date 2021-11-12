var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
dibujarLinea(red, 10, 10, 100,100)
function dibujarLinea(red, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;
  while(l < lineas){
  //for(l = 0; l < lineas; l++){
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
    l = l +1;
  }
  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
}