// 3. Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

const arr = JSON.parse(`[1, 2, 3]`);

function isValid(arr_) {
    try {
        if (!Array.isArray(arr_)) {
            throw new Error('Это не массив')
        }
        for (let i = 0; i < arr_.length; i++) {
            if (!isNaN(arr_)) throw new Error('не числа')
        }
        const res = arr_.filter(function (el) {
            return el % 3 == 0 ? true : false
        })
        return res
    } catch (error) {
        return error.message
    }
}

let res = isValid(arr);
console.log(res);