// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.

class Validator {

    isEmail(str) {
        try {
            if (!/^[\w]{8,}@[a-z]+.[a-z]{1,5}$/gm.test(str)) throw new Error('некорректный пароль');
            return true;
        } catch (er) {
            return er.message;
        }
    }

    isURL(str) {
        try {
            if (!/^(https)\:\/\/[\w]+\.(ru|com|by)\/[\w]+$/gm.test(str)) throw new Error('некорректный URL');
            return true
        } catch (er) {
            return er.message;
        }
    }

    isDate(str) {
        try {
            if (!/^[0-3][0-9]\.[0-1][0-9|0-2]\.[1-2][9|0][0-9][0-9]$/gm.test(str)) throw new Error('this is not date');
            return true
        } catch (er) {
            return er.message
        }
    }

}

const validator = new Validator();

const bool = validator.isEmail('vikynyshka@mail.ru');
const bool2 = validator.isURL('https://github.com/ViktoryiaStoliar');
const bool3 = validator.isDate('17.09.1988')
console.log(bool);
console.log(bool2);
console.log(bool3);

