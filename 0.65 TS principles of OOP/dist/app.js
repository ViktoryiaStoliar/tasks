// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class StringManipulator {
    constructor() {
        this.str = 'TENET';
    }
    reverseString() {
        const reversed = this.str.split(' ').reverse().join(' ');
        return reversed;
    }
    isPalindrome() {
        const reversed = this.str.split(' ').reverse().join(' ');
        if (this.str === reversed) {
            return 'палиндром';
        }
    }
    countVowels() {
        let count = 0;
        for (let i = 0; i < this.str.length; i++) {
            if (this.str[i].toLowerCase().includes("a" || "e" || "u" || "i" || "o")) {
                count += 1;
            }
        }
        return count;
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString());
console.log(stringManipulator.isPalindrome());
console.log(stringManipulator.countVowels());
// 8. Создайте класс PasswordGenerator, который будет иметь метод
// generatePassword(length: number), позволяющий генерировать случайные
// безопасные пароли заданной длины.
// 9. Создать интерфейс iValidation. Создайте класс Validation, который содержит
// приватные методы isValidEmail, isValidDate, isValidPath, вызывающиеся через
// конструктор класса Validation. Конструктор принимает поля email, date, path и
// инициализирует их как поля класса. В каждом методе напишите соответствующую
// проверку.
// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console
