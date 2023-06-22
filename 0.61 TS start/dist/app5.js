// 5. Напишите программу, которая находит сумму всех чисел от 1 до 100 и выводит
// результат в консоль.
var count = 0;
// for (let i = 1; i <= 100; i++) {
//     count += i
// }
// console.log(count);
function sum(n) {
    if (n === 100)
        return 100;
    return n + sum(n + 1);
}
console.log(sum);
