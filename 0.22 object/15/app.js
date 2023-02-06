// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное 

const obj = {};
const arr = [0, 1, 2, 3, 4, 5];


const arr1 = arr.map(function (el) {
    if (el % 2 == 0) {
        return "true"
    } else {
        return "false"
    }
}
)
// console.log(arr1);



for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
    obj[i]= arr1[i];
}

console.log(obj);