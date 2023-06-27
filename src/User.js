const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");


class User {

    readUserNumber(query, callback) {        
        MissionUtils.Console.readLine(query, (answer) => {
         callback(Validator.userNumber(answer));
            });
    }

    readFlag(query, callback) {
        MissionUtils.Console.readLine(query, (flag) => {
          callback(Validator.flag(flag));
        });
      }

    // static enterNumber(enterNumber) {

    //     return Array(3)
    //     .map((enterNumber) => {Number});
    // }

}


module.exports = User;