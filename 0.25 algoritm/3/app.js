// const arr = [1, 2, 3];
// const i = 2;

// function sum(arr_, i) {
//     if (arr_[i] === 0) {
//         return arr_;
//     } else {
//         return arr_[i] + sum(arr_, i - 1);
//     }
// }
// console.log(sum(arr, i));


// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);


// function pow(x, n) {
//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         res *= x
//     }
//     return res;
// }

// console.log(pow(2, 2));

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2, 3));

// let arr = [1, 2, 3];
// let b = arr.length;

// // console.log(b);
// function sum(arr_, b_) {
//     if (b_ === 0) {
//         return arr_;
//     } else {
//         return b_ + sum(arr_, b_ - 1)
//     }
// }

// console.log(sum(arr, b));


const arr = [1, 2, 3, 4, 5];
function sum(arr_, a) {
    if (a == 1)
    return arr_[0]       //???????
    return (arr_[0] + sum(a - 1));
}
console.log(sum(arr, arr.length));
