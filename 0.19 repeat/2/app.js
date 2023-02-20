// 2. Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt (где значение число)

let str = '';

for (let i = 0; i <5; i++){
    str += +prompt()
}
console.log(str);





// let res = '';
// for (let i = 0; i < 5; i++){
//     let newValue = prompt();

//     if(isNaN(newValue)){
//         re += newValue
//     }
// }
// console.log(res);