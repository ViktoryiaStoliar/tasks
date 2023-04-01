// 12. Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
    email

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }
    IsEmail() {
        try {
            if (!/^[\w\.]+\@+[\w]+\.+[ru]$/gm.test(this.email)) throw new Error ('неправильный формат')
                return true
        } catch (error) {
            return error.message
        }

    }
}

const validator = new Validator();
validator.setEmail('vikynyshka@mail.ru')
const res = validator.IsEmail();
console.log(res);