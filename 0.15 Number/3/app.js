// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const str = prompt(`Введите строку`).trim().toLowerCase();

if (!isNaN(str)) {
    console.log(`ошибка ввода`);
} else {
console.log(str.length);
}

console.log(!isNaN(str) ? `ошибка ввода` : str.length);