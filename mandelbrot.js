var canvasHeight = 4000;
var canvasWidth = 4000;

// var canvasHeight = window.innerHeight - 1;
// var canvasWidth = window.innerWidth - 1;

// var minReal =
// var maxReal =
// var minImaginary =
// var minReal =

var minReal = -2.5;
var maxReal = 1.0;
var minImaginary = -1.5;
var maxImaginary = 1.5;
var realFactor = (maxReal - minReal)/(canvasWidth-1);
var imaginaryFactor = (maxImaginary - minImaginary)/(canvasHeight-1);
var iterations = 1;

var canDraw = true;

var cyanColor = new EscapePercentColor(0.08, "rgb(110, 228, 203)")
var greenColor = new EscapePercentColor(0.1, "rgb(73, 228, 144)");
var purpleColor = new EscapePercentColor(0.2, "rgb(123, 140, 230)");
//var cyanColor = new EscapePercentColor(0.8, "rgb(0, 252, 194"))

var escapePercentColorList = [cyanColor, greenColor, purpleColor];

var escapeColorPicker = new EscapeColorPicker(escapePercentColorList);

window.onload = function(){
  mainDiv = document.getElementById("main");
  mainDiv.innerHTML += "<canvas id='mandelbrotCanvas' height='" + canvasHeight + "px' width='" + canvasWidth +" px'></canvas>";

  iterateMandelbrot();
}

function iterateMandelbrot(){
  canvas = document.getElementById("mandelbrotCanvas");
  ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  iterations = document.getElementById("iterations").value;

  for(var x = 0; x < canvasWidth; x++){
    for(var y = 0; y < canvasHeight; y++){
      iterations = document.getElementById("iterations").value;
      var realPart = minReal + x * realFactor;
      var imaginaryPart = minImaginary + y * imaginaryFactor;
      var complex = new Complex(realPart, imaginaryPart);

      pickPixelColor(complex);

      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function pickPixelColor(complex){
  var zComplex = new Complex(complex.getRealPart(), complex.getImaginaryPart());
  ctx.fillStyle = "white";
  for(var iteration = 0; iteration < iterations; iteration++){

    if(isOutOfBounds(zComplex)){
      ctx.fillStyle = escapeColorPicker.getEscapeColor(iterations, iteration);
      break;
    }

    zComplex = zComplex.getSquare().add(complex);
  }
}

function isOutOfBounds(complex){
  var eval = square(complex.getRealPart()) + square(complex.getImaginaryPart());
  return ((eval) > 4);
}

function square(number){
  return number*number;
}
