const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");


class User {
    UserNumber = [];

    readUserNumber(query, callback) {
        MissionUtils.Console.readLine(query, (callback) => {
            callback(Validator.UserNumber(callback));
    })

    // static enterNumber(enterNumber) {

    //     return Array(3)
    //     .map((enterNumber) => {Number});
    // }

}
}

module.exports = User;