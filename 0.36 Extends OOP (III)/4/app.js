// 4. Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {

    pi = 3.14;
    r; //radius
    a;  // side
    h; //height

    setPi = (pi) => this.pi = pi;
    setR = (r) => this.r = r;
    setA = (a) => this.a = a;
    setH = (h) => this.h = h;

}

class Circle extends Figure {

    name;
    getName = () => this.name;

    getPi = () => this.pi;
    getR = () => this.r;

    setName = (name) => this.name = name;
    getFullSquare = () => `Площадь круга: ${this.pi * this.r ** 2}`
}

class Triangle extends Figure {

    name;
    getName = () => this.name;

    getA = () => this.a;
    getH = () => this.h;

    setName = (name) => this.name = name;
    getFullSquare = () => `Площадь треугольника: ${0.5 * this.a * this.h}`;
}

class Square extends Figure {
    name;
    getName = () => this.name;

    getA = () => this.a;

    setName = (name) => this.name = name;
    getFullSquare = () => `Площадь квадрата: ${this.a ** 2}`
}

const circle = new Circle();
circle.setName('circle');
circle.setPi('3.14');
circle.setR('10')
const name = circle.getName();
const FullSquare = circle.getFullSquare();
console.log(name, FullSquare);

const triangle = new Triangle();
triangle.setName('triangle');
triangle.setA('20');
triangle.setH(15);
const name2 = triangle.getName();
const FullSquare2 = triangle.getFullSquare();
console.log(name2, FullSquare2);

const square = new Square();
square.setName('square');
square.setA('10');
const name3 = square.getName();
const FullSquare3 =square.getFullSquare();
console.log(name3, FullSquare3);
