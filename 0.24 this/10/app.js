// 10. Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const str = 'khgckhgckhgckhg khgcdkhgckh vlhjlj';
const letter = 'k';

function isValid(a, b) {
    console.log(typeof (a) === 'string' && typeof (b) === 'string' ? true : false);
    return (a, b)
};

function quantity(a, b) {
    const bool = isValid(a,b);
    if (bool === true) {
        const total = 0;
        for (let i = 0; i < a.lenghth; i++);
        if (a.includes(b)) {
            total++
        }
    } return total 
}

const total = quantity(str, letter)
console.log(total);
