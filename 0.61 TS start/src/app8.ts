// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

const str1: string = 'Vika'
let str2: string = ''

for (let i = 0; i < str1.length; i += 2) {
    str2 += str1[i] + ''
}
console.log(str2);