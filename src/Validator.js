const {FLAG} = require("./constants");

class Validator {

    static userNumber(userNumber) {
        if(isNaN(parseInt(userNumber)))  {  //여기 리턴값이 없어도 되네. 이유는?
            throw new Error('잘못된 값입니다. 숫자로 입력해주세요,')
        }                   

        return userNumber ;}

    static flag(flag) {
            if (flag !== FLAG.REPLAY && flag !== FLAG.EXIT) {
              throw new Error('재시작 오류. 재시작을 원하면 1, 게임을 종료하려면 2를 입력해주세요.');
            }
        
            return flag;
          }
        //  if(userNumber.split(',').length !==3 ){     //3같은 것들을 상수화하는 습관?
       
    }




module.exports = Validator ;