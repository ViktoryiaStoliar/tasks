// 20.Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

const num = `55639217`.split('');
let ar = [];

for (let i = 0; i < num.length; i++){
    if (i == 0){
        ar.push(num[i])
        continue;
    }
    let lastel = ar[ar.length - 1];

    if (num[i] % 2 != 0 && lastel % 2 != 0){
        ar.push(':', num[i])
        continue
    } 
    ar.push(num[i]) 
}
console.log(ar.join(''));
