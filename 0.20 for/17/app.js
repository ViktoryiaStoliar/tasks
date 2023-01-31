const word = prompt('Введите предложение').split(' ');
let a = prompt('Введите число раз').split(' ');
let res = [].join('');
for (i = 0; i < word.length; i++){
    res += word[i]
}
console.log(res.repeat(a));