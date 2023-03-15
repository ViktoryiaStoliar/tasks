// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {

    isEmail(str) {
        try {
            if (!/^[\w]{8,}@[a-z]+.[a-z]{1,5}$/gm.test(str)) throw new Error('некорректный пароль')
            return true
        } catch (er) {
            return er.message
        }
    }
}

const validator = new Validator();

const bool = validator.isEmail('vikynyshka@mail.ru');
console.log(bool);