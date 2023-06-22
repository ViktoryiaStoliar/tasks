// 10. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
var factorial = 1;
var num = +prompt();
for (var i = 0; i < num; i++) {
    factorial *= i;
}
console.log(factorial);
