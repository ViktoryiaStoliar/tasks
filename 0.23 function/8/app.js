// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве 
// только строки. Вторая для получения суммы всех строчных элементов массива. 
// Если результат функции проверки – true, то вызывать новую функцию, 
// возвращающую конкатенацию всех строчных элементов массива

const array = [1, 2, 3];

function f1(str) {
    let a = 0;
    for (let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            a++
        }
    }
    
    if( a > 1) {
        return false
    } else {
        return true
    }
}
const proverka = f1(array);
console.log(proverka);


function canct(sum) {
    let s = '';
    for (let i = 0; i < sum.length; i++){
        s += sum[i] + ' '
    } return s
} 

const result = canct(array);
console.log(result);
