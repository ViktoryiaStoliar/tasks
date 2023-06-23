// 10. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo"
let word = 'hello';
let newWord_ = '';
for (let i = 0; i < word.length; i++) {
    if (!newWord_.includes(word[i])) {
        newWord_ += word[i];
    }
}
console.log(newWord_);
