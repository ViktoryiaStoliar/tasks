// 1. Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12


const num = `1526`;
let res = 0;

for (let i = 0; i < num.length; i++) {
    res += num[i]++;
}
console.log(res);





























// const str = `123`;
// let a = 0;

// for (let i = 0; i < str.length; i++) {
//     a += +str[i]

// }
// console.log(a);