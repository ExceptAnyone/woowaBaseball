const MissionUtils = require("@woowacourse/mission-utils");

class Computers {

    static generateNumbers(){
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    
    return console.log(randomNumber) ;
    }

        
    
    
}

module.exports = Computers;