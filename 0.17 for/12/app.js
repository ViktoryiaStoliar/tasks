// 12. Найдите минимальное значение в массиве используя цикл

const arr = [25, 95, 456, 1];
let min = arr[0];

for (i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
      min = arr[i]
   }
}
console.log(min);