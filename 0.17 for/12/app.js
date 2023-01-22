// 12. Найдите минимальное значение в массиве используя цикл

const ar = [5, 10, -1, 359];
let res = [0];

for (let i = 0; i < ar.length; i++){
   if (ar[i] < res ) {
      res = ar[i]
   }
}
console.log(res);











// const arr = [25, 95, 456, 1];
// let min = arr[0];

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] < min) {
//       min = arr[i]
//    }
// }
// console.log(min);