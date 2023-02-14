// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = 5;
function doArr(n_) {
    const arr = [];
    for (let i = 0; i < n_; i++) {
        arr.push(prompt('Введите значение массива'))
    }
    return arr
};

function findMax(res_) {
    let maxLength = 0;
    let value = '';
    for (let i = 0; i < res_.length; i++) {
        if (res_[i].length > maxLength){
            maxLength = res_[i].length;
            value = res_[i]
        }
    }
    return value
};


const result = findMax(res)
const res = doArr(n)