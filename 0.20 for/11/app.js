// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = [1, 55, `kjhkj`, null, undefined];
let newArr = [];
for( let i = 0; i < arr.length; i++){
    if (!isNaN(arr[i]) && arr[i] !=null && arr[i] !=undefined){
        newArr.push(arr[i]);
    }
}
console.log(newArr);