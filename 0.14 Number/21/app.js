// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

const str = prompt(`Введите строку`);

if (isNaN(str)) {
    console.log(str.split(""));
} else {
    console.log(`некорректный ввод`);
}

isNaN(str) ? console.log(str.split('')) : console.log(`error`);