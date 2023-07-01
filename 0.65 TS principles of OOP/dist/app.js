// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class ArrayAnalyzer {
    constructor(num) {
        this.array = [];
        for (let i = 0; i < num; i++) {
            this.array.push(Math.round(Math.random() * 10));
        }
    }
    getArray() {
        return this.array;
    }
    getAverage() {
        const aver = this.array.reduce((sum, el) => {
            return el + sum;
        }, 0);
        return aver / this.array.length;
    }
    getMax() {
        const max = Math.max(...this.array);
        return max;
    }
    getMin() {
        const min = Math.min(...this.array);
        return min;
    }
}
const arrayAnalyzer = new ArrayAnalyzer(10);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getArray());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str:
// string), isPalindrome(str: string), countVowels(str: string). Реализуйте функционал для
// разворота строки, проверки, является ли строка палиндромом, и подсчета
// гласных букв в строке. Использовать Generics
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
