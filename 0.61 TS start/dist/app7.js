// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
var factorial = 1;
var num = +prompt();
for (var i_1 = 0; i_1 < num; i_1++) {
    factorial *= i_1;
}
console.log(factorial);
