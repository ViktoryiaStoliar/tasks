const n = prompt('введите число, с которого хотите получить факториал');

function factorial(n_){
if (n_ <= 1) {
    return 1
} else {
    return (n_ * factorial(n_-1));
}
}

console.log(factorial(n));