const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const {MESSAGE, FLAG} = require("./constants");
const Computers  = require("./Computers");
const Validator = require("./Validator");



class App {
  constructor(){
    this.user = new User();
    this.computers = new Computers();
    this.validator = new Validator();
    this.setUp(); //constructor에 넣어주는 이유?
  }

  setUp(){
    this.computers.setUp();
  };


  play() {
    this.gameStart();

  }

  exit(){
    MissionUtils.Console.close();
  }
  
   gameStart(){
    this.printStart();

    this.user.readUserNumber(MESSAGE.ENTER_NUMBER,  (answer) =>  { 
      console.log('answer 인자 잘 받아와 지나 테스트 2 :'  + answer);
      const correct = this.checkAnswer(answer);
      
      correct ? this.checkReplay() : this.gameStart();

    })
    
  }
  checkAnswer(answer){
   const [ball,strike] = this.computers.countTotal(answer);              //대괄호에 넣어줄 수 있다는 것도 몰랐다... 
   console.log(ball, strike);
   this.printResult(ball, strike);

   if (strike === 3) {
     this.printExit();
     return true;                                                         //기가막히다 정세연 진짜 ㅋㅋ
   }

   return false;
 }
  
 
 
 printResult(ball,strike){
   
   if(ball === 0 && strike>0){
     this.printMessage(MESSAGE.STRIKE[strike]);
    }
    
    else{
      this.printMessage(`${MESSAGE.BALL[ball]} ${MESSAGE.STRIKE[strike]}`);
    }
  }
  
  replay() {
    this.setUp();
    this.play();
  }
  
  checkReplay() {
    this.user.readFlag(FLAG.REPLAY, (flag) => {
      if (flag === FLAG.REPLAY) this.replay();
      if (flag === FLAG.EXIT) this.exit();
    })
  }

  printStart(){
    this.printMessage(MESSAGE.START);
  }

  printExit(){
    this.printMessage(MESSAGE.EXIT);
    
  }

  printMessage(message){
    MissionUtils.Console.print(message)
  }
  }

const app = new App();
app.play();
module.exports = App;
