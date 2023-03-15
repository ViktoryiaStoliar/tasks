// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки

class WordString {

    isValid(str) {
        if (!isNaN(str)) throw new Error('it\'s number')
    }

    reverseString(str) {
        try {
            this.isValid(str);
            return str.split('').reverse().join('')
        } catch (error) {
            return error.message
        }
    }

    upperFirst(str) {
        try {
            this.isValid(str);
            let res = str[0].toUpperCase() + str.slice(1)
            return res
        } catch (error) {
            return error.message
        }
    }

    upperEvery(str) {
        try {
            this.isValid(str);
            let words = str.split(' ');
            let newWords = '';
            for (let i = 0; i < words.length; i++) {
                newWords += words[i][0].toUpperCase() + words[i].slice(1) + ' ';
            }
            return newWords
        } catch (error) {
            return error.message
        }
    }
}

const wordstring = new WordString();
const str = wordstring.reverseString(12);
console.log(str);

const strUpper = wordstring.upperFirst('hello');
console.log(strUpper);

const upperF = wordstring.upperEvery('hello word');
console.log(upperF);


// class WordString {

//     reverseString(str) {
//         let reverse = str.split('').reverse().join('');
//         return reverse
//     }

// }

// const wordString = new WordString();
// const res = wordString.reverseString ('test');
// console.log(res);