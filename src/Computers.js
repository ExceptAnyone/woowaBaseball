const MissionUtils = require("@woowacourse/mission-utils");

class Computers {
  constructor() {
    this.generateNumbersArray = [];
  }

  generateNumbers() {
    const randomNumList = [];
    while (randomNumList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    return randomNumList.join("");
  }

  generateNumbersArrayFunction() {
    this.generateNumbersArray = this.generateNumbers().split("").map(Number);
    console.log(this.generateNumbersArray);
  }

  countStrikeAndBall(userInput, computerNum) {
    const score = {
        strike : 0,
        ball : 0
    }

    for (let i = 0; i < 3; i++) {
      if (Number(userInput[i]) === computerNum[i]) {
        score.strike += 1;
      }
      if (computerNum.includes(userInput[i])) {
        score.ball += 1;
      }
    }                                    //이거 왜 안되냐....

    return score;
  }
}

module.exports = Computers;
