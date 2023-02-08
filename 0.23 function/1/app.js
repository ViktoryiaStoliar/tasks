// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const name = prompt('Введите имя');
const surname = prompt('Введите фамилия');

function show_result(name_, surname_){
    return `Привет, ${name_} ${surname_}`;
};

let result = show_result(name, surname);

console.log(result);
