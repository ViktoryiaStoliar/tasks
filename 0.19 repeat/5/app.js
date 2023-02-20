// 6. На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового ЧИСЛОВОГО значения (добавить
// проверку на число). Отобразить итоговую сумму всех элементов строки
// ‘12345’ -> 15

let n = +prompt();
let str = '';
let res = 0;
console.log(str);

for(let i = 0; i < n; i++){
    let a = prompt('значения');
    if(!isNaN(a)){
        str += a;

    }
}

for (let i = 0; i < str.length; i++) {
    res += +str[i];
    
}
console.log(res);


// const num = prompt();

// let str = ``;
// let res = 0;

// for(let i = 0; i < num; i++){
//     let value = prompt();
    
//     if(!isNaN(value)){
//         str += value;
//     }
// }

// for(let i = 0; i < str.length; i++){
//     res += +str[i];
// }
// console.log(res);