// 17. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“
const stroka: string | string[] = 'Hello Woord'.split(' ')
let newStr: string = ''
for (let i = 0; i < stroka.length; i++) {
    let a = stroka[i][0];
    let b = stroka[i][stroka[i].length - 1]
    a = b;
    console.log(a + stroka[i].slice(1));
}