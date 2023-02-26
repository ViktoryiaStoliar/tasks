// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и 
// максимальное числа соответственно. Добавить проверки на ввод и если значения 
// массива не соответствуют условию задания, вывести сообщение об ошибке. 

const n = 5;

function isValid(arr_) {
    let a = arr_.every((el) =>
        (typeof el === 'number' ? true : false));
    return a
}

function doArr(n_) {
    const arr = [];
    for (let i = 0; i < n_; i++) {
        let pr = +prompt('Введите значения массива');
        arr.push(pr);
    }
    return arr;
}

function maxMinNumber(arr_) {
    let Valid = isValid(arr_);
    if (Valid == true) {
        let result = ``;
        let max = 0;
        let min = 0;
        for (let i = 0; i < arr_.length; i++) {
            if (max < arr_[i]) {
                max = arr_[i]}
            
            if (min > arr_[i]) {
                min = arr_[i]
                console.log(min);
            }
        } return result = (`макс = ${max}; мин = ${min}`) 
    } else return 'error'
}

let arr = doArr(n);
const result = maxMinNumber(arr);
console.log(result);