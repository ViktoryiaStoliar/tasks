// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

const words = "A aa ggg".split(' ');

function showRes(words_){
   let res = words_.map(function(el,index){
    if(index % 2 == 0){
        return el.toLowerCase()
    } else return el.toUpperCase()
   })
   return res; 
}
let result = showRes(words)
console.log(result);
