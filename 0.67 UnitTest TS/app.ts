// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.
function isPalindrome(word: string | number): boolean {
    try {
        if (!word) throw new Error('empty');
        if (typeof word == "number") throw new Error('it can not be a number')
        return word.split('').reverse().join('') === word
    } catch (error) {
        return error.message
    }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: any): number {
    try {
        if (typeof n == 'string') throw new Error('n not be a string')
        let res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i
        }
        return res
    } catch (error) {
        return error.message
    }

}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: string): string {
    try {
        let strAr = str.split(' ');
        let res = '';
        for (let i = 0; i < strAr.length; i++) {
            res += strAr[i][0].toUpperCase() + strAr[i].slice(1) + ''
        }
        return res
    } catch (error) {
        return error.message
    }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
    array: string[] = ['ggs', 'ggs', 'sdfsdk', 'ksgfhjgljfgksjd'];

    getLongestWord(): string {
        try {
            let res: string = this.array[0]
            for (let i = 0; i < this.array.length; i++) {
                if (res.length < this.array[i].length) {
                    res = this.array[i]
                }
            }
            return res
        } catch (error) {
            return error.message
        }
    }

    getUniqueWords(): string[] {
        try {
            let uniq: string[] = []
            for (let i = 0; i < this.array.length; i++) {
                if (!uniq.includes(this.array[i])) {
                    uniq.push(this.array[i])
                }
            }
            return uniq
        } catch (error) {
            return error.message
        }
    }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
    arr: number[] = [1, 2, 3, 4, 5];

    getSum(): number {
        const sum: number = this.arr.reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum
    };

    getEvenNumbers(): number[] {
        let newArr: number[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % 2 === 0) {
                newArr.push(this.arr[i])
            }
        }
        return newArr
    }
}

// 11. Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.

class StringManipulator {
    text: string = 'Vika Stolyar';
    getCharacterCount(): number {
        let quntity: number = this.text.length;
        return quntity
    };
    getWords(): string[] {
        let array: string[] = [];
        let arr: string[] = this.text.split('')
        for (let i = 0; i < arr.length; i++) {
            array.push(arr[i])
        }
        return array
    };
    getReversedText(): string {
        let reverseText: string = this.text.split('').reverse().join('');
        return reverseText
    }
}

export { isPalindrome, calculateFactorial, capitalizeString, StringArray, NumberArray, StringManipulator }
