// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

const str = `135`;


if (!isNaN(str)) {
    console.log(`сумма всех чисел в строке: ${+str[0] + +str[1] + +str[2]}`);
}

const str1 = `135`;
let a = 0;
for (let i = 0; i < str1.length; i++) {
    a += +str1[i];
}
console.log(a);
