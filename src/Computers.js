const MissionUtils = require("@woowacourse/mission-utils");

class Computers {

    static generateNumbers(){ //static을 안붙이면 실행이 안됌. 왜??
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    
    return console.log(randomNumber) ;
    }

        
    
    
}

module.exports = Computers;