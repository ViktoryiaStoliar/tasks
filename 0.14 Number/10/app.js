// Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом, если введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел


let a = prompt(`введите число`);

if (isNaN(a)) {
    console.log(`Некорректный ввод, введите число!`);
} else {
    if (a == 0) {
        console.log(`Обратного числа не существует`);
    } else {
        console.log(1 / a);
    }
}
