exports.method = function(currentRound, opHistory, myHistory){
    if (currentRound==0){
        return true
    }
    if (currentRound>15){
        return false
    }
    else{
        if opHistory[opHistory.length-1] == 0{
            return false
        }
        else{
            return true
        }
    }
}