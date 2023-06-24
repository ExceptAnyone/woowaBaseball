const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");


class Computers {
    #numberList
    constructor(numberList){
            this.#numberList = numberList;
        }
        
    
    static generateNumbers(){ 
        const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); //얘를 가져다 써야하는데... 
        let numberList =[];
    // numberList = randomNumber ;
        for(let i=0; i<3; i++){
            numberList.push(randomNumber[i]);
        }

    console.log(numberList);
    }
    
    // static checkAnswer(value){
    //     let strike = 0, ball = 0;
    //     value.split('').forEach((e,index) => {
    //         if(value.indexOf(e) === index) strike ++;
    //         if(value.split('').include(e)) ball ++;
    //        });
    // }
    

        
    
    
}

module.exports = Computers;