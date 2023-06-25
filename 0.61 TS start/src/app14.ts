// 14. Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке.

// const str4: string[] = "Hello everyone people".split(' ')
// let maxLength: number = str4[0].length
// let newWord: string = ''

// for (let i = 0; i < str4.length; i++) {
//     if (str4[i].length > maxLength) {
//         newWord = str4[i]
//         maxLength = str4[i].length
//     }
// }
// console.log(newWord);


{const str: string | string[] = 'Vuyilu Jhfljgfls ljfkhgdkyfsitrsj'.split(' ')
let strFirst = str[0]
console.log(strFirst);

let res = ''
for (let i = 0; i < str.length; i++) {
    if (str[i].length > strFirst.length) {
        strFirst = str[i]
    } else {
        res += str[i]
    }
}
console.log(strFirst);}