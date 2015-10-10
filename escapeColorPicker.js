function EscapeColorPicker(escapePercentColorList){
  this.escapePercentColorList = escapePercentColorList;
}

EscapeColorPicker.prototype.getEscapeColor = function(iterations, iteration){

  var arrayIndex = chooseArrayIndex(iterations, iteration, this.escapePercentColorList);
  var escapeColor = "white";

  if (arrayIndex > -1){
    escapeColor = escapePercentColorList[arrayIndex].getColor();
  }

  return escapeColor;
}

EscapeColorPicker.prototype.addEscapePercentColor = function(escapePercentColor){
  this.escapePercentColorList.push(escapePercentColor);
  this.escapePercentColorList.sort(escapePercentColorListComparator())
}

escapePercentColorListComparator = function(a,b){
  return b.getPercent() - a.getPercent();
}

chooseArrayIndex = function(iterations, iteration, escapePercentColorList) {
  percent = (iteration/iterations);

  if (percent < escapePercentColorList[0].getPercent()){
    return -1;
  }
  else {
    for(var i = 0; i < escapePercentColorList.length; i++){
      if (escapePercentColorList.length == i+1) {
        return i;
      }
      else if (!isWithinIterationPercent(iterations, iteration, this.escapePercentColorList[i+1].getPercent())){
        return i;
      }
    }
  }
}

isWithinIterationPercent = function(iterations, iteration, percent) {
  return ((iteration/iterations) >= percent);
}
