// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

const obj = {
    id: 1,
    mail: 'vika@mail',
    Hi: 1
}

let str = 'Hi';

const bool = obj.hasOwnProperty(str)
console.log(bool);

