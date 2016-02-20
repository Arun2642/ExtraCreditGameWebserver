exports.method = function(currentRound, opHistory, myHistory){
  if (currentRound == 0){
    return false
  }
  else {
    if (opHistory[opHistory.length-opHistory.length] == 1 && opHistory[opHistory.length-1] == 0 && myHistory[myHistory.length-1] == 0){
        return true
        }
    else {
      if (opHistory[opHistory.length-1] == 0){
      return false
    }
    if(Math.random() > 1.95){
      (opHistory[opHistory.length-1] == 1)
      return true
    }
    else {
      return false
    }
  }
}
}
