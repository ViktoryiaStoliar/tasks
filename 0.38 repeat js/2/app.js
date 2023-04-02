// const n = 5;

// function doArr(n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(prompt(''))
//     }
//     return arr
// }

// function isValid(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i])) throw new Error('not a number')
//     }
// }

// function main(arr) {
//     try {
//         isValid(arr)
//         const newArr = arr.reduce(function (sum, el) {
//             return sum + +el
//         }, 0)
//         return newArr
//     } catch (error) {
//         return error.message
//     }
// }

// const array = doArr(n);

// const res = main(array);
// console.log(res);

// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]\

const n = 3;
function doArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('elements'))
    }
    return arr
}

function isValid(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) throw new Error ('числа')
   }
}

function main(arr) {
    try {
        isValid(arr)
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push('#' + arr[i])
        }
        return newArr
    } catch (er) {
        return er.message
    }

}

const arr = doArr(n)
const res = main(arr)
console.log(res);