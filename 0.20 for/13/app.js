// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [-1, -53, 52, 0, 762];
let sum = 0;

for (let el of arr) {
    if (el > 0) {
        sum += el
    }
}
console.log(sum);


// for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         sum += arr[i];
//     }
// }
// console.log(sum);