// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.

const str = `kjgl g;ihg; gkhgj`.split(' ');
let res = ``;

for (i = 0; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}
console.log(res);