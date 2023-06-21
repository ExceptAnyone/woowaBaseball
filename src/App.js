const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const {MESSAGE} = require("./constants");
const Computers  = require("./Computers");
const Validator = require("./Validator");

class App {
  constructor(){
    this.user = new User;
  }


  play() {
    this.random();
    this.printGameStart();
    this.UserNumber()
  }

  exit(){
    MissionUtils.Console.close();
  }

  random(){
    Computers.generateNumbers();
  }

  printGameStart(){
    MissionUtils.Console.print(MESSAGE.START);
    MissionUtils.Console.print(MESSAGE.ENTER_NUMBER);
  }

  UserNumber(){
   this.user.readUserNumber(MESSAGE.ENTER_NUMBER, (number) => {
    this.user.UserNumber = //유저가 입력한 값을 빈 배열에 넣기 

   }
   )
  }
}



const app = new App();
app.play();
module.exports = App;
