// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let newarr = [];

 for (let i = 0; i < arr.length; i++){
    if (!newarr.includes(arr[i])){
        newarr.push(arr[i])
    }
 }
 console.log(newarr);

// for (let el of arr) {
//     if (!newarr.includes(arr)) {
//         newarr.push(arr)
//     }
// }
// console.log(newarr);