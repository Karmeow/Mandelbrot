var canvasHeight = 5000;
var canvasWidth = 5000;

//var canvasHeight = window.innerHeight;
//var canvasWidth = window.innerWidth;

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

  canvas = document.getElementById("mandelbrotCanvas");
  ctx = canvas.getContext("2d");

  iterateMandelbrot();
}

function iterateMandelbrot(){
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
  if (iterationBetween(iteration, 40, 50)){
    ctx.fillStyle = "#b7ff86";
  } else if (iterationBetween(iteration, 20, 40)){
    ctx.fillStyle = "#c4ffa7";
  } else if (iterationBetween(iteration, 18, 20)){
    ctx.fillStyle = "#e9ffda";
  }
  // else if (iteration >= 12 && iteration < 15){
  //   canDraw = true;
  //   ctx.fillStyle = iterationColors[3];
  // }
  // else if (iteration >= 9 && iteration < 12){
  //   canDraw = true;
  //   ctx.fillStyle = iterationColors[2];
  // }
  // else if (iteration >= 6 && iteration < 9){
  //   canDraw = true;
  //   ctx.fillStyle = iterationColors[1];
  // }
  // else if (iteration > 1 && iteration < 6){
  //   canDraw = true;
  //   ctx.fillStyle = iterationColors[0];
  // }
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

function iterationBetween(iteration, lowIteration, highIteration){
  return (iteration >= lowIteration && iteration < highIteration);
}
