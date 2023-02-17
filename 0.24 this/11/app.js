// 11. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
    1 : '123',
    2 : '123',
    3 : '123',
    4 : 123,
    5 : 123,
    6 : 'gfkhg',
    7 : 'khgckh'
};

(function (obj_) {
    let newObj = {};

    for (let key in obj_) {
        if (typeof(obj_[key]) === 'number'){
            newObj[key] = obj_[key]
        }
    }
console.log(newObj);

} (obj))