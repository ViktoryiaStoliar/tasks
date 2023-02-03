// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = prompt('кол-во элементов');
let arr = [];
// let sum = 0; 

for (let i = 0; i < n; i++){
    let a = prompt('элементы массива')
    if(!isNaN(a))
        {
        arr.push(a);
    }
}
console.log(arr);

// i = 0;
// while( i < n){
//     if(i == 0) break
//     r.push(arr[i])
//     i++
// }
// console.log(r);


const result = arr.reduce(function(sum, el){
    if(el === 0) {break;} {
        return sum + +el }
    },0 ) 
console.log(result);