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
interface iArray {
    array: number[];
    getAverage(): number;
    getMax(): number;
    getMin(): number;
    getArray(): number[];
}

class ArrayAnalyzer {
    public array: number[] = [];

    constructor(num: number) {
        for (let i = 0; i < num; i++) {
            this.array.push(Math.round(Math.random() * 10))
        }
    }
    getArray(): number[] {
        return this.array
    }

    getAverage(): number {
        const aver = this.array.reduce((sum, el) => {
            return el + sum
        }, 0)
        return aver / this.array.length
    }
    getMax(): number {
        const max = Math.max(...this.array)
        return max
    }
    getMin(): number {
        const min = Math.min(...this.array);
        return min
    }
}

const arrayAnalyzer: iArray = new ArrayAnalyzer(10);
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