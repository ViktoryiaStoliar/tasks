// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

let factorial: number = 1;
let num: number = +prompt()

for (let i = 0; i < num; i++){
    factorial *=i
}
console.log(factorial);
