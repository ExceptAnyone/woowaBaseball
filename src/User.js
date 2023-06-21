const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");


class User {
    UserNumber = [];

    readUserNumber(query, callback) {
        MissionUtils.Console.readLine(query, (answer) => {
            callback(Validator.userNumber(answer));
    })

    // static enterNumber(enterNumber) {

    //     return Array(3)
    //     .map((enterNumber) => {Number});
    // }

}
}

module.exports = User;