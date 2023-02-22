// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 5;

function doArr(n_) {
    let arr = [];
    for (let i = 0; i < n_; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr
};

function isValid(arr_){
    for(let i = 0; i < arr_.length; i++){
        if (isNaN(arr_[i])) throw new Error ('Есть буква')
    }
}

function main(arr_) {
    try {
        let newArr = [];
        for (let i = 0; i < arr_.length; i++) {
            if (arr_[i] < 100 && arr_[i] > 10) newArr.push(arr_[i]);
        }
        return newArr
    } catch (error) {
        return error.message
    }
}

let array = doArr(n);
let res = main(array);
console.log(res);
