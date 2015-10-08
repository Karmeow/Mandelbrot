function EscapeColorPicker(escapeColorToleranceList){
  this.escapeColorToleranceList = escapeColorToleranceList;
  this.index = 0;
}

EscapeColorPicker.prototype.getEscapeColor(iterations, iteration){
  if ((iteration/iterations) > escapeColorToleranceList[index].getPercent()){

}
  escapeColorToleranceList[index]
}

incrementIndex = function() {
  return ((iteration/iterations) > escapeColorToleranceList[index].getPercent())
            && index != escapeColorToleranceList.size();
}

Complex.prototype.getSquare = function(){
  real = (this.real * this.real) - (this.imaginary * this.imaginary);
  imaginary = (2 * this.real * this.imaginary);
  return new Complex(real, imaginary);
}

Complex.prototype.add = function(complex){
  this.real += complex.getRealPart();
  this.imaginary += complex.getImaginaryPart();
  return this;
}

Complex.prototype.getRealPart = function(){
  return this.real;
}

Complex.prototype.getImaginaryPart = function(){
  return this.imaginary;
}
