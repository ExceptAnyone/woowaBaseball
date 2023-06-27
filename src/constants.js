const MESSAGE = Object.freeze({
    START: "숫자야구를 시작합니다",
    ENTER_NUMBER: "숫자를 입력해주세요: ",
    EXIT: "게임을 종료합니다",

    BALL: {
        0:"낫싱",
        1:"1볼",
        2:"2볼",
        3:"3볼",
    },

    STRIKE: {
        0:"",
        1:"1스트라이크",
        2:"2스트라이크",
        3:"3스트라이크",
    }   
})

const FLAG = Object.freeze({
    REPLAY: "1",
    EXIT: "2",

}) 

module.exports = {MESSAGE, FLAG} ;