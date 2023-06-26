const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");


class Computers {
    
    generateNumbers(){ 
        const randomNumList = [];
            while (randomNumList.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!randomNumList.includes(number)) {
            randomNumList.push(number);
  }
}
        return randomNumList.join('');
    }
    
    generateNumbersArrayFunction(){
        this.generateNumbersArray = this.generateNumbers().split("");
        console.log(this.generateNumbersArray); //일단은 콘솔로그 찍고 판별
    }

    countStrikeAndBall(answer, index){
        let strike = 0;
        let ball = 0; 
         
        for(let i=0; i<3; i++){
        if(this.generateNumbersArray[i] === answer[i]) {
            strike +=1 ;
        }
        if(this.generateNumbersArray.includes(answer[i])){
            ball +=1 ;
        };
        }
        return {strike, ball};
    }

    countResult(answer){      
        const result = {strike : 0, ball : 0};
        answer.toString().split('').forEach((num, index) => {
            const {strike, ball} = this.countStrikeAndBall(num, index)
            result.strike += strike;
            result.ball += ball;
        }
        
        )
        return result;
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