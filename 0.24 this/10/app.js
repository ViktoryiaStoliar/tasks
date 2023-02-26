// 10. Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const str = 'khgckhgckhgckhg khgcdkhgckh vlhjlj';
const letter = 'k';

function isValid(a, b) {
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        return true
    }
    else return false
};

function quantity(a, b) {
    const bool = isValid(a, b);
    if (bool === true) {
        let total = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b) {
                total++
            }
        } return total
    } else return 'error'
}

let total = quantity(str, letter)
console.log(total);
