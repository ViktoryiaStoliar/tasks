// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

// const word = 'anna'.trim().toLowerCase();
// const revword = word.slip('').reverse().join('')
// if(word === revword)


const word = prompt(`Слово`);
a = word.split();
console.log(a ==a.reverse() ? true : false);
