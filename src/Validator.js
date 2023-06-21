class Validator {

    static userNumber(callback) {
        
        return (userNumber) => {
        if(userNumber.length !==3){
            throw Error('잘못된 값입니다. 어플리케이션 종료');
        }

        if(typeof userNumber !== Number){
            throw Error('잘못된 값입니다. 어플리케이션 종료');
        }

        if(userNumber.length !== new Set(userNumber).size){
            throw Error('중복된 숫자가 있습니다');
        }
        callback(userNumber);
    }
}
}
