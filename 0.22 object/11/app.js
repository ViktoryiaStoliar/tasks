// 11. На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с клавиатуры чисел

const obj = {};


const n = 2;
const b = [];
let c = 0;
for (let i = 0; i < n; i++) {
    let a = prompt('Введите значение');
    if(!isNaN(a)){
        b.push(a);
    } else {
        console.log(false);   
    } 
    c += +b[i]/n
}

obj.avg = c;
console.log(obj);