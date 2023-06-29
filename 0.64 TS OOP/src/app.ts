// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.
// {interface iStudent {
//     name: string;
//     age: number
// }

//  class Student {
//     public name: string = 'Vika';
//     public age: number = 25;
// }
// const student: iStudent = new Student();
// console.log(student.name, student.age);}


// 2. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Инициализация свойств name, surname происходит с
// помощью экземпляра класса. Создайте несколько экземпляров класса Student и
// выведите их свойства.
// {interface iStudent {
//     name: string;
//     age: string;

// }
// class Student {
//     name: string;
//     age: string;
// }
// const student: iStudent = new Student();
// student.name = 'Vika';
// student.age = '23'
// console.log(student.name, student.age);}

// 3. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в конструкторе класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.
// {interface iStudent {
//     name: string;
//     age: number;
// }

// class Student {
//     public name: string;
//     public age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }
// }
// const student: iStudent = new Student('Vika', 25);
// console.log(student.name, student.age);}

// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.
// {interface iStudent {
//     name: string;
//     age: number;
//     getName(): string;
//     getAge():number;
//     setName(name:string):void;
//     setAge(age:number):void
// }

// class Student {
//     public name: string;
//     public age: number;

//     getName(): string {
//         return this.name
//     }

//     getAge(): number {
//         return this.age
//     }

//     setName(name: string): void {
//         this.name = name
//     }

//     setAge(age: number): void {
//         this.age = age
//     }
// }
// const student: iStudent = new Student()
// student.setAge(25);
// student.setName('Vika');
// console.log(student.getAge(), student.getName());}



// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
// {interface iRectangle {
//     getArea(width: number, height: number): number
// }

// class Rectangle {
//     getArea(width: number, height: number) {
//         return width * height
//     }
// }
// const rectangle: iRectangle = new Rectangle();
// console.log(rectangle.getArea(5, 12));}

// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// {interface iCalculator {
//     add(a: number, b: number): number;
//     subtract(a: number, b: number): number;
//     multiply(a: number, b: number): number;
//     divide(a: number, b: number): number;
// }

// class Calculator {
//     add(a: number, b: number) {
//         return a + b
//     };
//     subtract(a: number, b: number) {
//         return a - b
//     };
//     multiply(a: number, b: number) {
//         return a * b
//     };
//     divide(a: number, b: number) {
//         return a / b
//     }
// }
// const calculator: iCalculator = new Calculator()
// console.log(calculator.add(2, 3));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(2, 2));
// console.log(calculator.divide(9, 3));}


// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
// {interface iTodoList {
//     tasks: string[];
//     addTask(newTask: string): void;
//     removeTask(): void;
//     getTasks(): string[];
// }

// class TodoList {
//     public tasks: string[] = ['Погулять', 'Покушать']

//     addTask(newTask: string) {
//         this.tasks.push(newTask)
//     };

//     removeTask() {
//         this.tasks.pop()
//     };

//     getTasks() {
//         return this.tasks
//     }
// }
// const todoList: iTodoList = new TodoList();
// todoList.addTask('Посмотреть');
// todoList.removeTask()
// console.log(todoList.getTasks());}


// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2
// {interface iCircleR {
//     radius: number;
//     getArea(): void;
// }

// class CircleR {
//     public radius: number;

//     getArea() {
//         return 3.14 * this.radius ** 2
//     }
// }
// const circleR: iCircleR = new CircleR();
// circleR.radius = 11
// console.log(circleR.getArea());}

// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

// {interface iCircleC {
//     radius: number;
//     setRadius<R>(radius:R): void;
//     getCircumference(): number;
// }

// class CircleC {
//     public radius: number;

//     setRadius<R>(radius: R) {
//         if (typeof (radius) === 'number')
//             this.radius = radius
//     }

//     getCircumference() {
//         return 2 * 3.14 * this.radius
//     }
// }
// const circleC: iCircleC = new CircleC();
// circleC.radius = 15;
// circleC.setRadius<number>(15)
// console.log(circleC.getCircumference());}

// 10. Создайте класс Product, который содержит свойства name (название продукта) и
// price (цена продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите
// метод displayProductInfo().
// {interface iProduct {
//     name: string;
//     price: number;
// };

// interface iPrice {
//     product: iProduct[];
//     displayProductInfo(): iProduct[]
// }

// class Product {
//     product: iProduct[] = [{ name: 'tv', price: 10 }, { name: 'tj', price: 21 }, { name: 'tp', price: 25 }]

//     displayProductInfo() {
//         const filtered: iProduct[] = this.product.filter((el:iProduct) => {
//             if (el.price > 20) {
//                 return true
//             }
//         })
//         return filtered
//     }
// }
// const product: iPrice = new Product();
// console.log(product.displayProductInfo());}