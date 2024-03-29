// 1. Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)

// {
//     abstract class Shape {
//         abstract calculateArea(height: number, wigth: number): number;
//     }

// class Rectangle extends Shape {            // 1-ый способ решения
//     height: number;
//     wigth: number;
//     calculateArea() {
//         return this.height * this.wigth
//     }
// }

// class Rectangle extends Shape {           // 2 - ой способ решения
//     calculateArea(height: number, wigth: number): number {
//         return wigth * height
//     }
// }

// class Rectangle extends Shape {           // 2 -ой способ решения с помощью дженериков
//     calculateArea<A>(height: A, wigth: A): number {
//         if (typeof (height) === "number" && typeof (wigth) === "number") {
//             return height * wigth
//         }
//     }
// }

// const rectangle = new Rectangle();
// rectangle.height = 10;
// rectangle.wigth = 5;
//     console.log(rectangle.calculateArea<number>(10, 5));
// }

// 2. Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

// {abstract class Animal {
//     abstract makeSound(): void
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log('gay');
//     }
// }
// class Cat extends Animal {
//     makeSound() {
//         console.log('myau');
//     }
// }

// const dog = new Dog();
// const cat = new Cat();
// cat.makeSound();
// dog.makeSound();}


// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

// {interface iFruit {
//     id: number,
//     title: string,
//     price: number
// }

// abstract class Fruit {
//     abstract array: iFruit[]
// };


// class Apple extends Fruit {
//     array: iFruit[] = [{ id: 1, title: "банан", price: 9 },
//     { id: 2, title: "яблоко", price: 5 },
//     { id: 3, title: "апельсин", price: 15 }];

//     public getAppleInfo(): iFruit[] {
//         const filtered: iFruit[] = this.array.filter((el) => {
//             if (el.title === "яблоко") {
//                 return true
//             }
//         })
//         return filtered
//     }
// }

// const apple = new Apple();
// console.log(apple.getAppleInfo());}

// 4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.


// {interface iAccount {
//     deposit(money: number): void;
//     withdraw(money: number): void;
// }

// class Account implements iAccount {
//     private balance = 0;

//     deposit(money: number) {
//         this.balance += money
//     };

//     withdraw(money:number): void {
//         if(this.balance > money)
//         this.balance -= money
//     };

//     getBalance (){
//         return this.balance
//     }
// }

// const account = new Account();
// account.deposit(522);
// account.withdraw(100);
// console.log(account.getBalance());}

// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

// {
//     abstract class Vehicle {
//         abstract start(): void;
//         abstract stop(): void;
//     }

//     class Car extends Vehicle {
//         start() {
//             console.log("start car");
//         };
//         stop() {
//             console.log("stop car");
//         }
//     }

//     class Motorcycle extends Vehicle {
//         start() {
//             console.log("start motorcycle");
//         };
//         stop() {
//             console.log("stop motorcycle");
//         }
//     }
//     const car = new Car()
//     const motorcycle = new Motorcycle();
//     car.start();
//     car.stop();
//     motorcycle.start();
//     motorcycle.stop();
// }


// 6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
// {interface iArray {
//     array: number[];
//     getAverage(): number;
//     getMax(): number;
//     getMin(): number;
//     getArray(): number[];
// }

// class ArrayAnalyzer {
//     public array: number[] = [];

//     constructor(num: number) {
//         for (let i = 0; i < num; i++) {
//             this.array.push(Math.round(Math.random() * 10))
//         }
//     }
//     getArray(): number[] {
//         return this.array
//     }

//     getAverage(): number {
//         const aver = this.array.reduce((sum, el) => {
//             return el + sum
//         }, 0)
//         return aver / this.array.length
//     }
//     getMax(): number {
//         const max = Math.max(...this.array)
//         return max
//     }
//     getMin(): number {
//         const min = Math.min(...this.array);
//         return min
//     }
// }

// const arrayAnalyzer: iArray = new ArrayAnalyzer(10);
// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getArray());

// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());}

// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str:
// string), isPalindrome(str: string), countVowels(str: string). Реализуйте функционал для
// разворота строки, проверки, является ли строка палиндромом, и подсчета
// гласных букв в строке. Использовать Generics
// {
//     interface iStringManipulator {
//         str: string;
//         reverseString(): string;
//         isPalindrome(): string;
//         countVowels(): string;
//     }

//     class StringManipulator {
//         str: string = 'TENET';
//         reverseString() {
//             const reversed = this.str.split(' ').reverse().join(' ')
//             return reversed
//         }

//         isPalindrome() {
//             const reversed = this.str.split(' ').reverse().join(' ')
//             if (this.str === reversed) {
//                 return 'палиндром'
//             }
//         }

//         countVowels() {
//             let count = 0;
//             for (let i = 0; i < this.str.length; i++) {
//                 if (this.str[i].toLowerCase().includes("a" || "e" || "u" || "i" || "o")) {
//                     count += 1
//                 }
//             }
//             return count
//         }
//     }
//     const stringManipulator = new StringManipulator();
//     console.log(stringManipulator.reverseString());
//     console.log(stringManipulator.isPalindrome());
//     console.log(stringManipulator.countVowels());
// }

// ||

// {class StringManipulator {
//     reverseString<MyType>(str: MyType): void {
//         if (typeof (str) === 'string')
//             console.log(str.split(' ').reverse().join(' '));
//     }

//     isPalindrome<MyType>(str: MyType): void {
//         if (typeof (str) === 'string')
//             console.log(str === str.split(' ').reverse().join(' ') ? true : false)
//     }

//     countVowels<MyType>(str: MyType) {
//         if (typeof (str) === 'string')
//             const word: string = 'eyioa';
//         let count: number = 0;
//         for (let i = 0; i < str.length; i++) {
//             if (str.includes(word[i])) {
//                 count += 1
//             }
//         }
//         return count
//     }
// }

// const stringManipulator = new StringManipulator();
// console.log(stringManipulator.reverseString<string>('палиндром'));
// console.log(stringManipulator.isPalindrome<string>('анна'));
// console.log(stringManipulator.countVowels<string>('sgfhgqwuoeiyppo'));}

// 8. Создайте класс PasswordGenerator, который будет иметь метод
// generatePassword(length: number), позволяющий генерировать случайные
// безопасные пароли заданной длины.

// {
//     class PasswordGenerator {
//         generatePassword<MyType>(pwdLength: MyType): string {
//             if (typeof (pwdLength) === "number") {
//                 const symbols: string = 'qwertyuiopasdfghjklzxcvbnm,./1234567890-=!@#$%^&&*()_+='
//                 let pwd: string = ''
//                 for (let i = 0; i < pwdLength; i++) {
//                     pwd += symbols[Math.round(Math.random() * symbols.length)]
//                 }
//                 return pwd
//             }
//         }
//     }

//     const passwordGenerator = new PasswordGenerator();
//     console.log(passwordGenerator.generatePassword<number>(10))
// }

// 9. Создать интерфейс iValidation. Создайте класс Validation, который содержит
// приватные методы isValidEmail, isValidDate, isValidPath, вызывающиеся через
// конструктор класса Validation. Конструктор принимает поля email, date, path и
// инициализирует их как поля класса. В каждом методе напишите соответствующую
// проверку.

// {interface iValidation {
//     email: string;
//     date: string;
//     path: string;
// }

// class Validation implements iValidation{
//     email: string;
//     date: string;
//     path: string;

//     constructor(email: string, date: string, path: string) {
//         this.email = email;
//         this.date = date;
//         this.path = path;

//         this.isValidEmail();
//         this.isValidDate();
//         this.isValidPath()
//     }

//     private isValidEmail(): void {
//         (/^[a-zA-z0-9\_]+\@[mail]+\.[a-z]{2}$/gm.test(this.email)) ?   console.log('хароший пароль' : 'плохой пароль');
//     };

//     private isValidDate(): void {
//         if (/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}$/gm.test(this.date)) {
//             console.log('good');
//         }
//     }

//     private isValidPath(): void {
//         if (/^[A-Z]{1}\:\\\\[a-zA-Z0-9\\а-яА-Я \.]+\.[a-z]{2,4}/gm.test(this.date)) {
//             console.log('good');
//         }
//     }
// }

// const validation: iValidation = new Validation('vikynyshka@mail.ru', '15.04.17', 'C:\Users\Dev\OneDrive\Рабочий стол\daily\Templates.typescript\app.js');}

// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console


// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

// {interface iServerGetAll{
//     controller():number[];
//     service():number[];
//     repository():number[]
// }

// class ServerGetAll implements iServerGetAll {
//     controller():number[] {
//         return this.service()
//     };

//     service():number[] {
//         return this.repository()
//     };

//     repository():number[] {
//         const arr:number[] = [1, 2, 3]
//         return arr
//     }
// }

// const serverGetAll = new ServerGetAll(); 
// console.log(serverGetAll.controller());}