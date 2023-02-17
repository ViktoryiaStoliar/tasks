// 9. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11


// let arr = [1, 9, 45, 11, 10];
function doArr(n_) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(prompt('введите элементы массива'))
    } return arr
}

function isNewArr(arr_) {
    let n = 10;
    let NewArr = [];
    for (let i = 0; i < arr_.length; i++) {
        if (arr_[i] > n) {
            NewArr.push(arr_[i])
        }
    } return NewArr
};

let res = isNewArr(arr);
console.log(res);
let result = doArr(n)