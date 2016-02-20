exports.method = function(currentRound, opHistory, myHistory){
    if (currentRound==0){
        return true
    }
    if (currentRound>14){
        return false
    }
    else{
        if (opHistory[opHistory.length-1] == 0 && myHistory[myHistory.length-1] == 0){
            if (opHistory[opHistory.length-2]==0){
                return false
            }
            if (opHistory[opHistory.length-2]==1){
                return true
            }
        }
        if (opHistory[opHistory.length-1] == 0 && myHistory[myHistory.length-1] == 1){
            return false
        }
        if (opHistory[opHistory.length-1] == 1 && myHistory[myHistory.length-1] == 1){
            return true
        }
        if (opHistory[opHistory.length-1] == 1 && myHistory[myHistory.length-1] == 0){
            return true
        }
        else{
            return true
        }
    }
}