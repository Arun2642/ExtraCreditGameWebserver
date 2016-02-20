exports.method = function(currentRound, opHistory, myHistory){
    if (currentRound == 0){
        return false  
    }
    if (opHistory[opHistory.length-1] == 1){
        return false
    }
    if (opHistory[opHistory.length-1] == 0){
        return true
    }
}