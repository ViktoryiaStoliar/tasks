// 9. Напишите программу, 
// которая проверяет, является ли заданная 
// строка палиндромом (без учета регистра и 
// пробелов.
var str = 'aga';
console.log(str === str.split('').reverse().join('') ? "\u0441\u043B\u043E\u0432\u043E ".concat(str, " - \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u043C") : "\u0441\u043B\u043E\u0432\u043E ".concat(str, " - \u043D\u0435 \u043F\u043E\u043B\u0438\u043D\u0434\u0440\u043E\u043C"));