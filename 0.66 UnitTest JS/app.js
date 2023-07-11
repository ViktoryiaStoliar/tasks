// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doDegree(a, b) {
    try {
        if (typeof (a) != "number" || typeof (b) != "number") throw new Error('arg are not number')
        return a ** b
    } catch (error) {
        return error.message
    }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function multiplay(array) {
    try {
        if (array.length === 0) throw new Error('array is empty')
        const res = array.every((el) => {
            if (typeof (el) != "number") {
                return false
            } else {
                return true
            }
        });

        if (res === false) throw new Error('elements array not a number')

        const result = array.reduce((sum, el) => {
            return sum + el
        }, 0)
        return result
    } catch (error) {
        return error.message
    }
}

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function doProduct(arr1) {
    try {
        let item = [];
        for (let i = 0; i < arr1.length; i++) {
            if (typeof arr1[i].count != 'number') throw new Error('count must be a number');
            if (typeof arr1[i].producer != 'string') throw new Error('producer must be a string')
            if (arr1[i].count > 10 && arr1[i].producer === 'Германия') {
                item.push(arr1[i])
            }
        }
        return item
    } catch (error) {
        return error.message
    }
}


module.exports = { doDegree, multiplay, doProduct }