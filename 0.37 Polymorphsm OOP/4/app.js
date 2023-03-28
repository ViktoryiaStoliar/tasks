// /4. Реализуйте класс Pwd. Pwd хранит функцию showPwd, которая формирует и
// возвращает рандомно сгенерированный пароль из 8 чисел. Класс Validation
// является производным по отношению к базовому, родительскому Pwd и
// содержит функцию showPwd. Необходимо переопределить showPwd из базового
// класса и записать в переменную используя метод super. Далее дополняем
// переопределенный метод отображением результата в console

class Pwd {
    showPwd() {
        let arr = [];
        for (let i = 0; i < 8; i++) {
            arr.push(Math.round(Math.random() * 9))
        }
        return arr.join('')
    }
}

class Validation extends Pwd {
    isValid(pwd){
        if(isNaN(pwd)) throw new Error ('not a number')
    }

    showPwd() {
        try{
            const pwd = super.showPwd();
            this.isValid(pwd)
            console.log(pwd);
        } catch (er){
            console.log(er.message);
        }
    }
}

const validation = new Validation();
validation.showPwd()
