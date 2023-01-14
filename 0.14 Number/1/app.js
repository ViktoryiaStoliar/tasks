// Найти максимальное число из 2 введенных (2 способа)
const a = +prompt();
const b = +prompt();

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

console.log( Math.max (a , b));  // второй способ вывода максимального числа


a > b ? console.log(a) : console.log(b);  // теринарный способ