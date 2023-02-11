// 17. Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL
const str = 'hschool'.split('');

// function isValid(str_) {
//     let result = str_.map(function(el, i){
//         if(i % 2 ==0){
//             return el.toLowerCase()
//         } else return el.toUpperCase()
//     })

// return result
// }

function isValid(str_) {
    let result = str_.map((el, i) =>
        (i % 2 == 0 ? el.toLowerCase() : el.toUpperCase()))

    return result
}

let result = isValid(str);
console.log(result.join(''));


