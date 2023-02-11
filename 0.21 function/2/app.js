// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

const n = 7;
let arr = [];
let a = prompt();
let b = prompt();

for (let i = 0; i < n - 2; i++) {
    arr.push(prompt())
}

let res = [];
arr.forEach(function(el){
    if (!isNaN(el) && (el != a || el !=b)){
        res.push(el)
    }
});

if (res.length == 0){
    console.log('Массив пуст');
} else {
    console.log(res);
}