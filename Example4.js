exports.method = function(currentRound, opHistory, myHistory){
    if (currentRound == 0){
        if (Math.random() > .5){
            return true   
        }
        else{
            return false   
        }   
    }
    if (myHistory[myHistory.length-1] == 0){
        return false
    }
    if (myHistory[myHistory.length-1] == 1){
        return true
    }
}