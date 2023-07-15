import { isPalindrome, calculateFactorial, capitalizeString, StringArray, NumberArray, StringManipulator } from './app'

describe('isPalindrome:', () => {
    test('', () => {
        const res = isPalindrome('anna');
        expect(res).toBe(true)
    });

    test('', () => {
        const res = isPalindrome('');
        expect(res).toBe('empty')
    });

    test('', () => {
        const res = isPalindrome(210);
        expect(res).toBe('it can not be a number')
    })
});

describe('calculateFactorial:', () => {
    test('', () => {
        const res = calculateFactorial(5);
        expect(res).toBe(120)
    });

    test('', () => {
        const res = calculateFactorial('5');
        expect(res).toBe('n not be a string')
    })
});

describe('capitalizeString:', () => {
    test('', () => {
        const res = capitalizeString('viktoriya stolyar');
        expect(res).toBe('ViktoriyaStolyar')
    })
})

describe('StringArray:', () => {
    test('', () => {
        const stringArray = new StringArray();
        const res = stringArray.getLongestWord();
        const res2 = stringArray.getUniqueWords();
        expect(res).toBe('ksgfhjgljfgksjd');
        expect(res2).toEqual(['ggs', 'sdfsdk', 'ksgfhjgljfgksjd'])
    })
});

describe('NumberArray:', () => {
    test('', () => {
        const numberArray = new NumberArray();
        const res = numberArray.getSum();
        const res2 = numberArray.getEvenNumbers();
        expect(res).toEqual(15);
        expect(res2).toEqual([2, 4]);
        // console.log(res, res2);
    });
})


describe('StringManipulator:', () => {
    test('', () => {
        const stringManipulator = new StringManipulator();
        const res1 = stringManipulator.getCharacterCount();
        const res2 = stringManipulator.getWords();
        const res3 = stringManipulator.getReversedText();
        expect(res1).toBe(12);
        expect(res2).toEqual([
            'V', 'i', 'k', 'a',
            ' ', 'S', 't', 'o',
            'l', 'y', 'a', 'r'
        ]);
        expect(res3).toBe('raylotS akiV');
    })
})

