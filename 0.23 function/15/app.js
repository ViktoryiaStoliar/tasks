// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const n = 3;

function isValid(arr_) {
    let isN = arr_.every((el) => 
    (typeof el === 'number' ? true :false));
    return isN;
}


function doArr(n_) {
    let arr = [];
    for (let i = 0; i < n_; i++){
    let pr = +prompt('Значения массива');
    arr.push(pr);
}
return arr;
}


function mulyiplay(arr_) {
    let Valid = isValid(arr_);
    if(Valid == true){
    let res = arr_.reduce((i, el) => i * el, 1)
    return res;}
    else return 'error'
}



let arr = doArr(n);
let result = mulyiplay(arr)
console.log(result);