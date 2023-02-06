// 13. На входе пустой объект; n – количество элементов рандомно сгенерированного
// массива. Необходимо заполнить пустой объект, где ключи – циклично
// сгенерированная последовательность от 0 до n, значения – элемент рандомно
// сгенерированного массива. Math.random()
// 4 -> [34, 11, 43, 1] // 4 – n; элементы массива сгенерированы рандомно
// {
// 0 : 34,
// 1 : 11,
// 2 : 43,
// 3 : 1
// }


const obj ={};

let arr = [];
let n = 5;

for (let i = 0; i < n; i++) {
    let a = Math.round(Math.random() * 10);
    arr.push(a)
}

for(let i = 0; i < n; i++){
obj[i] = arr[i]
}
console.log(obj)