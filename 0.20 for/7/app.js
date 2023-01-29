// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const el = [1, 2, 3, 4, 5];
let res = 0;

// for (let i = 0; i < el.length; i++){
//     res += el[i];
// }
// console.log(res);

// let i = 0;
// while (i < el.length) {
//     res += el[i];
//     i++
// }
// console.log(res);

// let i = 0;
// do {
//     res += el[i];
//     i++;
// } while (i < el.length);
// console.log(res);

for (let i of el) {
    res += i;
}
console.log(res);