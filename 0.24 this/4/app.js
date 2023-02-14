// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке. 

const arr = [456, 456, 123, 943];

function maxEl(arr_) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr_.length; i++) {
        if (arr_[i] > max) {
            max = arr_[i];
        } if (min < arr_[i]) {
            min = arr_[i]
        }
    }
    return min, max
}


const max = maxEl(arr);
console.log(max);
console.log(min);