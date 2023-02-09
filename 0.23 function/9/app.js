// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве 
// только числа. Вторая для получения массива с удвоенными значенями каждого 
// элемента. Если результат функции проверки – true, то вызывать новую функцию, 
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4];

function isValid(arr_){
    let a = 0;
    for(let i = 0; i < arr_.length; i++){
        if(!isNaN(arr_[i])){
            a ++
        }}

        if(a > 1) return true
        return false
    }
    
const result = isValid(arr);
console.log(result);

function doubling(array){
    let comp = array.map(function(el){
        return el ** 2
    })
    return comp
}
const res = doubling(arr);
console.log(res);
