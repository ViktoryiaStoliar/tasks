// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.

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

}

const validator = new Validator();

const bool = validator.isEmail('vikynyshka@mail.ru');
console.log(bool);
const bool2 = validator.isURL('https://github.com/ViktoryiaStoliar');
console.log(bool2);
