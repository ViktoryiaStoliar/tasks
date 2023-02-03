// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt('кол-во эл-тов');
let arr = [];

for (let i = 0; i < n; i++) {
    let b = prompt();
    arr.push(b);
}

let arr2 = [];
arr.forEach(function (el) {
    arr2.push('#' + el)
})
console.log(arr2);


let result = arr.map(function (el) {
    return '#' + el
})
console.log(result);

i = 0;
let result2 = [];
while (i < n) {
    result2.push('#' + arr[i])
    i++
}
console.log(result2);

