// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt('Введите количества элементов');
const arr = [];
let stat = 'javascript';

for (let i = 0; i < n; i++) {
    let b = prompt();
    if (isNaN(b))
    arr.push(b);
}

const newArr = arr.filter(function (el) {
    if (el.includes(stat)) {
        return true
    } else {
        return false
    }
});
console.log(newArr);

// let neWarr = [];

// arr.forEach(function(el){
//     if(el.includes(stat)){
//         neWarr.push(el)
//     }
// })
// console.log(neWarr);