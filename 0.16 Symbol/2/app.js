// . На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str1 = `1 строка`;
let str2 = `строка`;

if (str1.includes(str2)) console.log(true);
else console.log(false);