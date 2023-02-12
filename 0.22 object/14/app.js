// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { 1 : 1,     { 1 : 1,
//   2 : 2,       2 : 2,
//   3 : 2,       3 : 3,
//   4 : 3,   ->  4 : 4,
//   5 : 4,       5 : 5}
//   6 : 4 
//   7 : 5
//  }

const obj = {
    1: 1,
    2: 2,
    3: 2,
    4: 3,
    5: 4,
    6: 4,
    7: 5
}
let arr = [];
for (let i in obj){
    arr.push(obj[i])
}
console.log(arr);

let arr1 = [];
for (let i = 0; i < arr.length; i++)
if (!arr1.includes(arr[i])){
    arr1.push(arr[i])
}
console.log(arr1);


obj1 = {};
for(let i = 0; i <arr1.length; i++){
    obj1[i] = arr1[i]
}
console.log(obj1);






// const obj = {
//     1: 1,
//     2: 2,
//     3: 2,
//     4: 3,
//     5: 4,
//     6: 4,
//     7: 5
// }

// let arr = [];
// for (let key in obj) {
//     arr.push(obj[key])
// }
// // console.log(arr);

// arr = arr.sort();
// let unic = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!unic.includes(arr[i])) {
//         unic.push(arr[i])
//     }
// }
// console.log(unic);

// let newObj = {};
// for (let i = 0; i < unic.length; i++) {
//     newObj[i] = unic[i]
// }
// console.log(newObj)