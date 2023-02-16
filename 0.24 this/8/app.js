// 8. Напишите функцию, принимающую массив в качестве параметра. Необходимо
// оставить в массиве символы без дубликатов. IIFE
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] = [1, 2, 3, 4, 5]

// const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];

// let arrNew = [];
// function bezDybl(arr_){
//     for(let i = 0; i < arr_.length; i++){
//         if(!arrNew.includes(arr_[i])){
//             arrNew.push(arr_[i])
//         }
//     }
// return arrNew
// }

// console.log(bezDybl(arr)); 


// function res() {
//     let arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];
//     function inner() {
//         const arrNew = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (!arrNew.includes(arr[i])) {
//                 arrNew.push(arr[i]);
//             }
//         };
//         console.log(arrNew);
//     };
//     return inner;
// };
// let fn = res();

(function (){
    const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];
    let arrNew = [];
    for(let i = 0; i < arr.length; i++){
        if(!arrNew.includes(arr[i])){
            arrNew.push(arr[i])
        }
    }
    console.log(arrNew);
}())