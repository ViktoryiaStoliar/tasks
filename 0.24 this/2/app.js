// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = 5;
const arr = [];
function doArr(n_) {
    for (let i = 0; i < n_; i++) {
        arr.push(prompt('Введите значение массива'))
    }
    return arr
};

function findMax(arr_) {
    let maxLength = 0;
    let result = '';
    for (let i = 0; i < arr_.length; i++) {
        if (arr_[i].length > maxLength){
            maxLength = arr_[i].length;
            result = arr_[i]
        }
    }
    return result
};


console.log(findMax(arr)); 
const res = doArr(n);
