const {FLAG} = require("./constants");

class Validator {

    static userNumber(userNumber) {
        if(isNaN(parseInt(userNumber)))  {  //여기 리턴값이 없어도 되네. 이유는?
            throw new Error('잘못된 값입니다. 숫자로 입력해주세요,')
        }                   

        return userNumber ;}

    static flag(flag) {
            if (flag !== FLAG.REPLAY && flag !== FLAG.EXIT) {
              throw new Error('재시작 오류');
            }
        
            return flag;
          }
        //  if(userNumber.split(',').length !==3 ){     //3같은 것들을 상수화하는 습관
        //     throw new Error('잘못된 값입니다. 서로 다른 세자리인지 확인하시고, ","를 붙여 입력해주세요');
        // }

        // if(isNaN(userNumber-0)){ //숫자로 바꿔주는 로직 필요
        //     throw new Error('숫자로 입력해주세요');
        
        
        // if(typeof answer !== "number"){      이건 왜 안될까 ㅠㅠ -> 위에서 걸렸을 가능성 높음
        //     throw Error('숫자로 입력해주세요');
        // }

        // if(enterNumber.split(",").length !== new Set(enterNumber).size){
        //     throw new Error('중복된 숫자가 있습니다');
        // }

        // if(enterNumber.includes(parseInt(enterNumber))) {
        //     throw new Error('중복된 숫자가 있습니다');
        // }

//         if(enterNumber.split(",").some((number) => number < 1 || number > 9))
//             throw new Error('범위를 벗어난 값이 있습니다');
//         // answer(userNumber);
        
//         callback(enterNumber);
//           }

    }




module.exports = Validator ;