// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

let str1 = 'string'.toLowerCase();
let str2 = 'StRiNg'.toLowerCase();

if (str1 === str2) console.log(true);
else console.log(false);