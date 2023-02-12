// 12. На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел


const obj = {};
const n = prompt('Введите колличество элементов массива')
const arr = [];
// const a = 0;

for(let i = 0; i < n; i++){
   let a = prompt('Введите значения массива')
    if(isNaN(a)){
        console.log('error');
        break
    } else {
        arr.push(a)
    }
}
console.log(arr);

const a = arr.reduce(function(sum,el){
    return sum + +el
}, 0)
console.log(a);
obj.sum = a;
console.log(obj);


// const obj = {};
// let arr = [];
// let n = 3;


// for(let i = 0; i < n; i++ ){
//     let pro = prompt();
//     if(!isNaN(pro)){
//         arr.push(+pro)
//     }
// }

// let result = arr.reduce(function(sum, el) {
//     return sum + +el
// }, 0)

// obj.sum = result;
// console.log(obj);
