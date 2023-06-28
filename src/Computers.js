const MissionUtils = require("@woowacourse/mission-utils");

class Computers {

    setUp(){
        this.randomNumList = this.generateNumbers().split("");
    }

    

    calcInit(){
        [this.ball, this.strike] = [0, 0];
    }
    
     countTotal(answer){ 

        this.calcInit();
        console.log('answer 인자 잘 받아와 지나 테스트 2:' + answer);
        console.log(typeof answer);
        let answerToString = answer.toString(); //answer의 type을 모르기 때문에 toString 후 배열로 만듬. 근데 그럴 필요가 없었네.
        let answerArray =  answer.split('')
        answerArray.forEach((number, index) => {
            this.countStrikeAndBall(number, index)
        })
        
        return [this.ball, this.strike];

     }

     // forEach(this.countStrikeAndBall.bind(this)); //bind 해주는 이유가 뭐지;

        
    

    countStrikeAndBall(number, index){
        if(this.countStrike(number, index)){
            this.strike +=1 ;
            console.log(this.strike);
        
          return ; // return으로 함수를 종료시키는 이유?
    }
        if(this.countBall(number)){
            this.ball +=1 ;
            console.log(this.ball);

            return ;
    }
    }

    

   countStrike(number, index){
    return this.randomNumList[index] === number //함수 인자로 number같은 것 주는 개념 부족... 이건 어떻게 공부해야 하는건가
   }

   countBall(number){
    return this.randomNumList.includes(number);
   }
    
   generateNumbers() {
    const randomNumList = [];
    while (randomNumList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    console.log(randomNumList);
    return randomNumList.join('');
  }



                //기존 코드
//   constructor() {
//     this.generateNumbersArray = [];
//   }


//   generateNumbersArrayFunction() {
//     this.generateNumbersArray = this.generateNumbers().split("").map(Number);
//     console.log(this.generateNumbersArray);
//   }

//   countStrikeAndBall(userInput, computerNum) {
//     const score = {
//         strike : 0,
//         ball : 0
//     }

//     for (let i = 0; i < 3; i++) {
//       if (Number(userInput[i]) === computerNum[i]) {
//         score.strike += 1;
//       }
//       if (computerNum.includes(userInput[i])) {
//         score.ball += 1;
//       }
//     }                                    //이거 왜 안되냐....

//     return score;
//   }


}

module.exports = Computers;
