// 12. Найдите минимальное значение в массиве используя цикл

const arr = [1, 123, 456, -123];
let min = 0;

for (let i = 0; i < arr.length; i++){
    if (min > arr[i]){
        min = arr[i]
    }
}
console.log(min);











// const arr = [25, 95, 456, 1];
// let min = arr[0];

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] < min) {
//       min = arr[i]
//    }
// }
// console.log(min);