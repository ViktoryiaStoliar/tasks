// 11. Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

// class WordString {
//     constructor(str) {
//         this.str = str;
//     }

//     ReverseString() {
//         const revWord = this.str.split('').reverse().join('');
//         return revWord
//     }

// }

// const wordString = new WordString('Привет!');
// const res =wordString.ReverseString();
// console.log(res);


class WordString{
str;

    setStr (str) {
        this.str =str
    }
    getStr () {
        this.str
    }
    ReverseString() {
                const revWord = this.str.split('').reverse().join('');
                return revWord
            }
}

const wordString = new WordString();
wordString.setStr('Привет!')
const res =wordString.ReverseString();
console.log(res);
