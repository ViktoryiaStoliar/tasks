// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить до двух знаков после запятой)

const a = +prompt(`Введите число`);
const b = Math.sqrt(a);

if (b % 2 == 0) {
    console.log(b);
} else {
    console.log((b.toFixed(2)));
}

const c = +prompt(`Введите число`);
// const b = Math.sqrt(a);

if (Math.sqrt(c) % 2 == 0) {
    console.log(Math.sqrt(c));
} else {
    console.log((Math.sqrt(c).toFixed(2)));
}