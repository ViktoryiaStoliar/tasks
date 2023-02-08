// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо 
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
    1 : '',
    2 : '',
    3 : '',
    4 : '',
    5 : '',
};

let arr = [];
for (let i = 0; i < 5; i++){
    let a  = prompt('Введите значения объекта')
    arr.push(a)
}
console.log(arr);

for(let key in obj){
    obj[key] = arr[key-1]
}
console.log(obj);

let arr1 = arr.filter(function(el){
    if(!isNaN(el)){
        return true
    }
})
console.log(arr1);







// let arr =[];
// for (let key in obj){
//     let a  = prompt('Введите значение объекта');
//     arr.push(a)
// }
// console.log(arr);

// for (i = 0; i < arr.length; i++){
//     obj[i] = arr[i]
// }
// console.log(obj);