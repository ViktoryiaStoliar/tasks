// Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

const a = prompt(`hsChOoL`).trim().toLowerCase();
if (isNaN (a)) {
    console.log(a.split('').join('-'));
    //  console.log(a.replaceAll('' , '-'));
}