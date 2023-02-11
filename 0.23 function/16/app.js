// 16. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = 5;

function doArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        let a = prompt('Введите значения массива');
        arr.push(a);
    } return arr;
}

function square(arr_) {
    const res_1 = [];
    for (let i = 0; i < arr_.length; i++) {
        if (arr_[i] % 2 == 1) {
            continue;
        } else {
            res_1.push(arr_[i] ** 2)
        }
    }
    return res_1
}

const arr = doArray(n);
console.log(arr);
const res_1 = square(arr);
console.log(res_1);