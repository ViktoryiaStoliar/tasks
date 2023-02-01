// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach


const n = prompt('Введите кол-во эл-ов');
const arr = [];

for (i = 0; i < n; i++) {
    let a = prompt();
    arr.push(a)
}
console.log(arr);

// const result = arr.every(function (el) {
//     if (!isNaN(el)) {
//         return true
//     } else {
//         return false
//         }
//     })
// console.log(result);

arr.forEach(function (elem) {
    if (!isNaN(elem)) {
        alert(true)
    } else {
        alert(false)
    }

})

