// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const arr = ['ann', 'school', 'hschool', 'borabora'];
// let neWarr = arr.filter(function(el){
//     if ((isNaN(el)) && (el[0] == 'h' || el[0] == 'a')){
//         return true 
//       }  else {
//                 return false
//             }
// })
// console.log(neWarr);
// let arr2 = [];
// arr.forEach(function(el){
// if(el[0] == 'h' || el[0] == 'a')
//     arr2.push(el)
// })
// console.log(arr2);


let arr2 = [];
let i = 0;
while (i < arr.length) {
    if (arr[i][0] == 'h' || arr[i][0] == 'a') {
        arr2.push(arr[i])
    }
    i++
}
console.log(arr2);