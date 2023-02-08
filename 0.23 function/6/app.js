// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива


const n = 5;

function doArray(arr_){
    const arr = [];

    for (let i = 0; i < n; i++){
        let a = prompt();
        arr.push(a);
    } return arr;
}

function show_l(array_) {
    return array_ .length;
}

let array = doArray(n);
let result = show_l(array)
console.log(array);
console.log(result);
