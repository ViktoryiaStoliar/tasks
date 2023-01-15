// Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

const a = prompt();
if (isNaN (a)) {
    console.log(a.split('').join('-').toLowerCase());
    //  console.log(a.replace(/ /g, '').join('-').toLowerCase());
}