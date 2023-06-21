class Validator {

    static userNumber(enterNumber) {
        //   return (enterNumber) => {                      //여기 리턴값이 없어도 되네. 이유는?
        if(enterNumber.length !==3){ //이거 배열로 받아야하는데 어케하지 흠.. Array()를 써야하나
            throw Error('잘못된 값입니다. 서로 다른 세자리 수를 입력해주세요');
        }

        if(isNaN(enterNumber)){
            throw Error('숫자로 입력해주세요');
        }
        
        // if(typeof answer !== "number"){      이건 왜 안될까 ㅠㅠ
        //     throw Error('숫자로 입력해주세요');
        // }

        if(enterNumber.length !== new Set(enterNumber).size){
            throw Error('중복된 숫자가 있습니다');
        }
        
        // answer(userNumber);
        
          }
}


module.exports = Validator ;