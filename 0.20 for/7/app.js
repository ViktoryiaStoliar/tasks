// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const arr = [1, 2, 3, 4, 5];
let res = 0;

// for (let i = 0; i < arr.length; i++){
//     res += arr[i];
// }
// console.log(res);

// let i = 0;arr
// while (i < arr.length) {
//     res += arr[i];
//     i++
// }
// console.log(res);

// let i = 0;
// do {
//     res += arr[i];
//     i++;
// } while (i < arr.length);
// console.log(res);

for (let i of arr) {
    res += i;
}
console.log(res);