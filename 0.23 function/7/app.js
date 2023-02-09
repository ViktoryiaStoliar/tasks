// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве 
// только числа. Вторая для получения суммы всех элементов массива. Если 
// результат функции проверки – true, то вызывать новую функцию, возвращающую 
// сумму всех элементов массива

const arr = [1, 2, 3];

const result = proverka(arr);
function proverka (a){
    let b =  0;
    for (let i = 0; i < a.length; i++){
        if(!isNaN(a[i])){
        b++
        }
    }
    if(b == a.length){
        return true
    } else{
        return false
    }
};

function sum (b){
    let sum_ = 0;
    b.forEach(function(el){
        sum_ += +el
    }
    )
    return sum_
};

const res = sum(arr);
console.log(result);
console.log(sum (arr));