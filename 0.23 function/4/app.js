// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const str = ['by', 'belarus', 'de', 'ru', 'germany'];

// const result = str.filter(function (el){
//     if(el.length <= 2){
//         return true
//     } else false
// })
// console.log(result);

function showRes (str_) {
    const result = str_.filter(function (el){
    if(el.length <= 2){
        return true
    } else false
})
return result
}

const result = showRes(str);
console.log(result);
