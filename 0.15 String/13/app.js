// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

const str = prompt(`Введите дату в формате хxxx-хx-хx`);

console.log(isNaN(str) ? str.split("-").reverse().join("-") : `error`);