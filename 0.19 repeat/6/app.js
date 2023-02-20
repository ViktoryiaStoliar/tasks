// 7. На входе строка. Необходимо реализовать алгоритм, убирающий дублирующие
// символы в строке
// hschoolofficial -> hscolfia

let str = `hschoolofficial`;
let res = ``;

for (let i = 0; i < str.length; i++){
    if (!res.includes(str[i])){
    res += str[i]
    }
}
console.log(res);


// const str = 'hschoolofficial';
// let str1 = '';

// for (let i = 0; i < str.length; i++) {
//     if (!str1.includes(str[i])) {
//         str1 += str[i]
//     }
// }
// console.log(str1);