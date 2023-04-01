// 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах. 

class Calculator {
    n;
    setN(n) {
        this.n = n
    }

    doSqrt() {
        const sqrt = Math.sqrt(this.n);
        return sqrt
    }
}

const calculator = new Calculator();
calculator.setN(9)
const res = calculator.doSqrt();
console.log(res);