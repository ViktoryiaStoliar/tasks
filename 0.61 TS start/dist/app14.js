// 14. Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке.
var str4 = "Hello everyone people".split(' ');
var maxLength = str4[0].length;
var newWord = '';
for (var i_1 = 0; i_1 < str4.length; i_1++) {
    if (str4[i_1].length > maxLength) {
        newWord = str4[i_1];
        maxLength = str4[i_1].length;
    }
}
console.log(newWord);
