// /3. Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива

// class NumberArray {
//     sumArr() {
//         let arr = [];
//         for (let i = 0; i < 5; i++) {
//             arr.push(Math.round(Math.random() * 10))
//         }
//         return arr
//     }
// }

// class ConsoleArray extends NumberArray {
//     sumArr() {
//         const res = super.sumArr();
//         const sum = res.reduce((sum, el) => sum + el, 1)
//         return sum
//     }
// }

// const consoleArray = new ConsoleArray();
// const result = consoleArray.sumArr();
// console.log(result);

class NumberArray {
    n = 5;
    sumArr() {
        const arr = [];
        for (let i = 0; i < this.n; i++) {
            arr.push(Math.round(Math.random() * 10))
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    sumArr() {
        const a = super.sumArr();
        const newArr = a.reduce(function (sum, el) {
            return sum + el
        }, 0);
        return newArr;
    }
}
const consoleArray = new ConsoleArray();
console.log(consoleArray.sumArr())