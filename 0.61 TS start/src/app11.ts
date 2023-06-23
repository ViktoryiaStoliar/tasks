// 11. Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.

const anagram: string | string[] = 'карп'.split('')

for (let i = 0; i < anagram.length; i++){
    if(anagram.sort().length === anagram.length){
        console.log(true);
        
    }
}

