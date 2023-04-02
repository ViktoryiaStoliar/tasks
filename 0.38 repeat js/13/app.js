// // 13. Реализуйте класс Calculator, который будет содержать метод doSqrt,
// // возвращающий корень числа принимаемого в параметрах. 

// // {
// //     class Calculator {
// //         n;
// //         setN(n) {
// //             this.n = n
// //         }

// //         doSqrt() {
// //             const sqrt = Math.sqrt(this.n);
// //             return sqrt
// //         }
// //     }

// //     const calculator = new Calculator();
// //     calculator.setN(9)
// //     const res = calculator.doSqrt();
// //     console.log(res);
// // }

// {
//     class Calculator {
//         doSqrt(a) {
//             console.log(Math.sqrt(a));
//         }
//     }
//     const calculator = new Calculator();
//     calculator.doSqrt(9);
// }

// {
//     class Calculator {
//         constructor(a) {
//             this.a = a
//         }
//         doSqrt() {
//             console.log(Math.sqrt(this.a));
//         }

//     }
//     const calculator = new Calculator(9);
//     calculator.doSqrt();
// }

// {class Calculator {
//     a;
//     setA(a) {
//         this.a = a;
//     }
//     getA(){
//         return this.a
//     }
//     doSqrt(){
//         console.log(Math.sqrt(this.a));
//     }
// }

// const calculator = new Calculator();
// calculator.setA(9);
// calculator.doSqrt()};


class OOP {
    arr = [1,2,3]
    doSum(){
        const sum = this.arr.reduce(function(sum, el){
            return sum+el
        })
        return sum
    }
}
const oop = new OOP();
const res = oop.doSum();
console.log(res);