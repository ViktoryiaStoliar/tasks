// 13. Создайте переменную str и присвойте ей строковое значение. 
// Используя метод replace и цикл while, замените все гласные символы в 
// строке на символ *
const str3 = 'dsdfjhgwetpqwiuegq';
let strNew = '';
let i = 0;
while (i < str3.length) {
    if (/[aAeEuUiIoO]+/gm.test(str3[i])) {
        strNew += '*';
    }
    else {
        strNew += str3[i];
    }
    i++;
}
console.log(strNew);
