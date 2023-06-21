const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const {MESSAGE} = require("./constants");
const Computers  = require("./Computers");
const Validator = require("./Validator");

class App {
  constructor(){
    this.user = new User;
    this.computers = new Computers;
    this.validator = new Validator;
  }


  play() {
    this.random();
    this.printGameStart();
    // this.UserNumber();
  }

  exit(){
    MissionUtils.Console.close();
  }

  random(){
    Computers.generateNumbers(); //this.computers로 하면 왜 안될까
  }

  printMessage(message){
    MissionUtils.Console.print(message)
  }

  printGameStart(){
    this.printMessage(MESSAGE.START);
    this.printEnterNumber();
  }
  
  printEnterNumber(){
    this.user.readUserNumber(MESSAGE.ENTER_NUMBER, (enterNumber) =>{
      Validator.userNumber(enterNumber)});
  }}


  // UserNumber(){
  //  this.user.readUserNumber(MESSAGE.ENTER_NUMBER, (number) => {
  //   this.user.UserNumber = //유저가 입력한 값을 빈 배열에 넣기 
  //  )}
  // }




const app = new App();
app.play();
module.exports = App;
