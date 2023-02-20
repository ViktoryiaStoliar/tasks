// 4. Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13

// function factorial(a){
// if(a == 1) return 1;
//     return a * factorial(a - 1)
// };

// const res = factorial(5)
// console.log(res);

const n = prompt('введите число')

function fobinache(n_){

    if (n_ <= 1) return n_;                  // крайний случай = 1 или 0
    return fobinache(n_-1) + fobinache(n_-2)
}

const res = fobinache(n);
console.log(res);


