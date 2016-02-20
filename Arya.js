    exports.method = function(currentRound, opHistory, myHistory){
    	hasRatted = 0;
    	if(hasRatted = 1){
    	 return false;
    	}
    	if((opHistory[opHistory.length-1] == 1 && currentRound <= 6)){
    		return true;
    	}
    	else if(opHistory[opHistory.length-1] == 0 && currentRound <= 6){
    		hasRatted = 1;
    		return false;
    	}
    	else {
    		return false;
    	}   
    }