// Подается строка из нескольких слов. Необходимо добавить тире между словами

const str = prompt(`Введите строку`);

console.log(str.split(` `).join(`-`));

console.log(str.replaceAll(" ", "-"));
