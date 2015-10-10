function EscapePercentColor(percent, color){
  this.percent = percent;
  this.color = color
}

EscapePercentColor.prototype.getPercent = function(){
  return this.percent;
}

EscapePercentColor.prototype.getColor = function(){
  return this.color;
}
