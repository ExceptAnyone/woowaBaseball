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
    this.generateRandomNumber();
    this.printGameStart();
    this.printEnterNumber();
    // this.UserNumber();
  }

  exit(){
    MissionUtils.Console.close();
  }

  generateRandomNumber(){
    Computers.generateNumbers(); //this.computers로 하면 왜 안될까 -> static을 썼기 때문
  }

  printMessage(message){
    MissionUtils.Console.print(message)
  }

  printGameStart(){
    this.printMessage(MESSAGE.START);
  }
  
  printEnterNumber(){
    this.user.readUserNumber(MESSAGE.ENTER_NUMBER, (enterNumber) =>{
      Validator.userNumber(enterNumber)});
  }

  checkAnswer(userInput, computerNumber) {
      let result = {
        strike : 0, ball : 0};

      for(let i=0; i<3; i++){
      if(userInput[i] === computerNumber[i]){
        strike ++;
      }
      if(computerNumber.includes(Number(userInput[i]))){
         ball ++;
      }
  }
  return result ;
  }

  }


  // 유저가 숫자 입력한 것을 컴퓨터가 생성한 숫자와 비교
  // - 순서와 숫자 둘 다 맞으면 스트라이크 
  // - 숫자만 맞으면 볼
  // - 둘다 틀리면 낫싱





const app = new App();
app.play();
module.exports = App;
