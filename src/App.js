const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const {MESSAGE} = require("./constants");
const Computers  = require("./Computers");
const Validator = require("./Validator");

class App {
  constructor(){
    this.user = new User();
    this.computers = new Computers();
    this.validator = new Validator();
  }


  play() {
    this.printGameStart();
    this.generateRandomNumber();
    this.userEnterNumberAndCheck();
    // this.checkRetry();

  }

  exit(){
    MissionUtils.Console.close();
  }
  
  printGameStart(){
    this.printMessage(MESSAGE.START);
  }
  
  generateRandomNumber(){
    this.computers.generateNumbersArrayFunction();
  }

  userEnterNumberAndCheck(computerNum){
    MissionUtils.Console.readLine(MESSAGE.ENTER_NUMBER, (answer) => {
      // validator 검사한 후 
      // strike ball 조사하는 메소드
      this.computers.countStrikeAndBall(answer, computerNum);
    })
    
  }
  
  checkAnswer(answer) {
    this.computers.countResult(answer);
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

  printMessage(message){
    MissionUtils.Console.print(message)
  }
  }


const app = new App();
app.play();
module.exports = App;
