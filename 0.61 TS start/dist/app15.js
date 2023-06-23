// 15. Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
const _word_ = 'hschool javaScript typeScript'.split(' ');
let _newWord_ = [];
console.log(_word_);
for (let i = 0; i < _word_.length; i++) {
    _newWord_.push(_word_[i][0].toUpperCase() + _word_[i].slice(1));
}
console.log(_newWord_);
