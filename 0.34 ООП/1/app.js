// <!-- 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод -->


// class Calculator {

//     doPlus(num1, num2) {
//         console.log(num2 + num1);
//      }

//     doMinus(num1, num2) {
//         console.log(num2 - num1);
//      }

//     doMultiplay(num1, num2) {
//         console.log(num2 * num1);
//      }
// }

// const calculator = new Calculator();

// calculator.doPlus(1, 2);
// calculator.doMinus(2, 1);
// calculator.doMultiplay(1,113)

class Calculator {

    num1;
    num2;

    doPlus(){
        console.log(this.num1 + this.num2);
    };

    doMinus(){
        console.log(this.num2 - this.num1);
    };

    doMultiplay(){
        console.log(this.num1 * this.num2);
    };

}
const calculator = new Calculator()

calculator.num1 = 10;
calculator.num2 = 5;

calculator.doPlus();
calculator.doMinus();
calculator.doMultiplay();
