// На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений

const str =  prompt(`введите строку`).toLowerCase().trim();

if (isNaN(str)) {
    console.log(str.repeat(3));
} else console.log(`error`);

console.log(isNaN(str) ? str.repeat(3) : `error`);