// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = prompt('кол-во элементов');
let arr = [];

for (let i = 0; i < n; i++){
    let a = prompt('элементы массива');
    arr.push(a);
}


let neWarr=arr.filter(function(el){
    if(el > 0){
        return true
    }
})
console.log(neWarr);