class App{

play(){
    this.createUserScore();
}

addScore(obj, position) {

    obj[position] += 1;
  }

  createUserScore(userInput, currentAnswer) {
    const score = {
      strike: 0,
      ball: 0,
    };
    for (let i = 0; i < 3; i++) {
      if (Number(userInput[i]) === currentAnswer[i]) {
        const changePosition = "스트라이크";
        this.addScore(score, changePosition);
      } else if (currentAnswer.includes(Number(userInput[i]))) {
        const changePosition = "볼";
        this.addScore(score, changePosition);
      }
    }
    console.log(score);
    return score;
  }
}
const app = new App;
app.play();