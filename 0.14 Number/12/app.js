// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

let num = prompt(`введите значение`);

if (!isNaN(num) && num > 0) {
    console.log(`Сумма цифр = ${+num[0] + +num[1] + +num[2]}`);
    console.log(`Произведение цифр = ${+num[0] * +num[1] * +num[2]}`);
} else {
    console.log(`некорректный воод`);
}

let res = 0;
let b = 1;
for(let i = 0; i < num.length; i++){
    res += +num[i];
    b *= +num[i];
}
console.log(res);
console.log(b); 