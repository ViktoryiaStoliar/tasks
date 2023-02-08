// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 1, 123, 0];

function showRes(arr_){
let count = 0;
for (let i = 0; i <arr_.length; i++){
    if (!isNaN(arr_[i])){
        continue;
    } else {
        count += 1
    }
}
if (count > 0) {
    return false;
} else return true;
}

let result = showRes(arr);
console.log(result);