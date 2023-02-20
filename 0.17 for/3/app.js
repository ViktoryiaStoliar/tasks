// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 
const num = 15;
let res =``;

for (let i = 1; i <= num; i++){
    if (i % 3 == 0)
    res += i +`; `
}
console.log(res + ` `);

// const a = 9;
// for (let i = 0; i <= 3; i++) { 
//     if(i % 3 ==0 ) {
//         console.log(i);
//     }
//     i % 3 ==0 ? console.log(i) : null
// }