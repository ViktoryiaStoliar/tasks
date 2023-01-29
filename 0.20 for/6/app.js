// 6. С помощью цикла while найдите сумму чисел от 1 до 100.

let res = 0;
// for (i = 1; i <= 100; i++) {
//     res += i;
// }
// console.log(res);

// let i = 1;
// while (i <= 100) {
//     res += i;
//     i++
// }
// console.log(res);

let i = 1;
do {
    res +=i;
    i++
} while (i <= 100);
console.log(res);