// На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false
 
let str = `строка 1`;
let str2 = `1`;

if (str.endsWith(str2)) {
    console.log(true);
} else console.log(false);