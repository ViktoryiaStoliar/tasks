// 17. Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL
const str = 'hschool'.split('');
console.log(str);

function isValid(str_) {
    let result = [];
    for (let i = 0; i < str_.length; i++){
        if (str_[i] % 2 == 0) {
            result.push(str_[i].toUpperCase())
        } else {
            result.push(str_[i].toLowerCase())
        }
    }
return result
}


const result = isValid(str);
console.log(result.join(''));


