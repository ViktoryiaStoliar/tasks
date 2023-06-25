// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

const num: number = 9;
console.log(factorial(num));


function factorial(num_: number) {
    if (num_ === 0) {
        return 1
    } else {
        return num_ * factorial(num_ - 1)
    }
}
console.log(factorial(9));
