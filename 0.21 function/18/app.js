// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map, forEach

const n = prompt('кол-во элементов');
let arr = [];

for (let i = 0; i < n; i++) {
    let a = prompt('элементы');
    arr.push(a)
}
console.log(arr);

const result = arr.map(function (el) {
    return el ** 2
})
console.log(result);

let b = [];
arr.forEach(function (el) {
    b.push(el ** 2)
})
console.log(b);

let c = [];
for (let i = 0; i < n; i++) {
    c.push(arr[i] ** 2)
}
console.log(c);

i = 0;
let r = [];
while( i < n){
    r.push(arr[i] ** 2)
    i++
}
console.log(r);