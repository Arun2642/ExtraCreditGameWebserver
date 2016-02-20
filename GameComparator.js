//var TeamA = require("./TeamA")
//var TeamB = require("./TeamB")

var TeamList = new Array('Arya', 'Arun', 'Shaheen', 'TitForTat', 'TeamE', 'Tyler')
var TeamFunctions = new Array()
var scoreArray = new Array(0,0,0,0,0,0)

function requireStuff(TeamList){
    for (var team of TeamList){
        TeamFunctions.push(require("./" + team))   
    }
}

function main(TeamFunctions){
    var rounds = 20
    for (var team1 in TeamFunctions){
        for (var team2 in TeamFunctions){
            if (team1 == team2){
                break
            }
            console.log("A match will now begin between " + TeamList[team2] + " and " + TeamList[team1]) 
            var matchScore = Comparator(rounds, TeamFunctions[team2], TeamFunctions[team1])
            scoreArray[team1] += matchScore[1]
            scoreArray[team2] += matchScore[0]
            console.log(matchScore)
            //Yes, I know both of the above statements look like they have team 2 and team 1 in the wrong order, don't worry, it works, nd it enjoys not working, don't tempt it by changing anything about the five above lines.
        }
    }
    console.log(scoreArray)
}

function Comparator(rounds, Team1, Team2){
    TeamA = TeamFunctions[0]
    TeamB = TeamFunctions[1]
    console.log('The match has begun')
    var ATotal = 0
    var BTotal = 0
    var AMove = 0
    var BMove = 0
    var AScore = 0
    var BScore = 0
    var AHistory = new Array();
    var BHistory = new Array();
    //console.log(rounds)
    for (var i=0; i<rounds; i++){
        AMove = Team1.method(i, BHistory, AHistory)
        BMove = Team2.method(i, AHistory, BHistory)
        // The following 4 if statements are the payoff array, and also record the history of the 2 team's moves
        if (AMove && BMove){
            AScore = AScore + 2
            AHistory.push(1)
            BScore = BScore + 2
            BHistory.push(1)
        }
        if (AMove && !BMove){
            AScore = AScore + 0
            AHistory.push(1)
            BScore = BScore + 5
            BHistory.push(0)
        }
        if (!AMove && BMove){
            AScore = AScore + 5
            AHistory.push(0)
            BScore = BScore + 0
            BHistory.push(1)
        }
        if (!AMove && !BMove){
            AScore = AScore + 1
            AHistory.push(0)
            BScore = BScore + 1
            BHistory.push(0)
        }
        console.log('AScore : ' + AScore + ' and BScore : ' + BScore)
    }
    ATotal += AScore
    BTotal += BScore
    console.log('The match has ended')
    return [ATotal, BTotal]
}

requireStuff(TeamList)
main(TeamFunctions)
