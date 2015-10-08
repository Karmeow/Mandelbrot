//var canvasHeight = 5000;
//var canvasWidth = 5000;

var canvasHeight = window.innerHeight - 1;
var canvasWidth = window.innerWidth - 1;

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

var iterationColors = ["#0026ff", "#00bac8", "#00b768", "#00cb36", "#fff300"];

var canDraw = true;

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

      if(drawMandelbrot(complex)){
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

function drawMandelbrot(complex){
  canDraw = true;
  var zComplex = new Complex(complex.getRealPart(), complex.getImaginaryPart());
  ctx.fillStyle = "black";
  for(var iteration = 0; iteration < iterations; iteration++){

    if(isOutOfBounds(zComplex)){
      chooseEscapeColor(iteration);
      break;
    }

    zComplex = zComplex.getSquare().add(complex);
  }

  return canDraw;
}

function chooseEscapeColor(iteration){
  canDraw = true;

  if (isWithinIterationPercent(iteration, 0.5)){
    ctx.fillStyle = "orange";
  } else if (isWithinIterationPercent(iteration, 0.2)){
    ctx.fillStyle = "green";
  }

  else{
    canDraw = false;
  }
}

function isOutOfBounds(complex){
  var eval = square(complex.getRealPart()) + square(complex.getImaginaryPart());
  return ((eval) > 4);
}

function square(number){
  return number*number;
}

function isWithinIterationPercent(iteration, percent){
  return ((iteration/iterations) >= percent);
}
