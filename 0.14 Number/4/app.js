// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false ( методом isNaN)

const a = prompt(`значение`);

if (isNaN(a)) {
    console.log(`false`);
} else {
    console.log(`true`);
}