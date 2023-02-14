// 1. На входе число n. Напишите функцию, которая переворачивает число

const n = "12";

function rev(n_){
    const a = n_.split('').reverse().join('')
    return a
};

const res = rev(n);
console.log(res);

