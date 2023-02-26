// 13. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE



(function() {
    const obj = {
        1: 1,
        2: 2,
        3 : ''
    }
    let quantity = 0;
    for (let key in obj){
        quantity++
    }
    console.log(quantity);
} ())
