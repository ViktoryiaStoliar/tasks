// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!' 
const str = prompt(`Введите дату в формате х-х-х`);
console.log(str.replaceAll('-','!'));
console.log(str.split('').join('!'));



















console.log(isNaN(str) ? str.split("-").join ("!") : `error`); 