// 3. Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let res = 1;

// for (i = 0; i < arr.length; i++){
//     res *= arr[i]
// }
// console.log(res);

for (let el of arr) {
    res *= el;
}
console.log(res);



