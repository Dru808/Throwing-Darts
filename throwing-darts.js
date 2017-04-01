/* jshint esversion: 6 */

var throwingDarts = function(threw) {
  var score = 0;
  var bonusPoints = 100;
  var bonus = [];

  for(var i = 0; i < threw.length; i++) {
    if(threw[i] > 10) {
      score += 0;
    } else if(threw[i] >= 5 && threw[i] <= 10) {
        score += 5;
    } else if(threw[i] < 5) {
      score += 10;
    }

    if(threw[i] < 5){
      bonus.push(true);
    } else {
      bonus.push(false);
    }
  }

    if(threw.length === 0) {
      return -1;
    }

  //checks if qualified for bonus
  for(var b = 0; b < bonus.length; b++) {
    if(bonus[b] === false) {
      bonusPoints = 0;
    }
  }

  score += bonusPoints;
  return score;
};

module.exports = throwingDarts;
