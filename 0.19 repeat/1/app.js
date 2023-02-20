// 1. Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt
const n = 5;
let str = '';

for (let i = 0; i < 5; i++){
        str += prompt('введите элементы массива')
}
console.log(str);




// let res = '';

// for (let i = 0; i < 5; i++){
//     res += prompt(``)
// }
// console.log(res);