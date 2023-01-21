// 13. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

const arr = [2, 3, 4, 5];
let res = arr[0];

for (i = 0; i < arr.length; i++) {
   res *= arr[i]
}
console.log(res);