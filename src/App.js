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
  
  // generateRandomNumber(){
  //   this.computers.generateNumbers();
  // }

   gameStart(){
    this.printStart();

    this.user.readUserNumber(MESSAGE.ENTER_NUMBER,  (answer) =>  { 
      // validator 검사한 후 (나중에 작업)
      console.log('1 :'  + answer);
      const correct = this.checkAnswer(answer);
      
      correct ? this.checkReplay() : this.gameStart();

    })
    
  }
  
  replay() {
    this.setUp();
    this.play();
  }
        
   checkAnswer(answer){
    const [ball,strike] = this.computers.countTotal(answer);
    console.log(ball, strike);
    this.printResult(ball, strike);

    if (strike === 3) {
      this.printExit();
      return true;
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

  // checkRetry(strike, ball){
  //   if(strike ===3){
  //     this.printMessage('정답입니다. 게임을 종료합니다');
  //   }
  //   else{
  //     this.userEnterNumberAndCheck()
  //   };
  // }

  // printResult(result) {
  //   this.printMessage(`${result.strike}스트라이크 ${result.ball}볼`);
  // }
 
//다음 재시작 여부 확인



const app = new App();
app.play();
module.exports = App;
