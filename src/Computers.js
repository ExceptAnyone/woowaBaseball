const MissionUtils = require("@woowacourse/mission-utils");

class Computers {
    numberList = [];
    static generateNumbers(){ //static을 안붙이면 실행이 안됌. 왜??
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); //얘를 가져다 써야하는데... 흠 
    
    
    return numberList.push(randomNumber);
    }

        
    
    
}

module.exports = Computers;