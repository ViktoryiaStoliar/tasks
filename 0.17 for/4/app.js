// 4. Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел


const ar = [2, 4, 6, 8];
let a = 1;
let res = ``;
let sum = ar[i]++;

for (let i = 1; i < ar.length; i++){
    if (ar[i] == a){
        res = `Есть!`  
    } else {
        res += ar[i] / sum;
    }
}
console.log(res);

























// const el = [5, 6, 1, 2, 3];
// let a = 2;
// let sum = 0;
// let count = 0;


// for (let i = 0; i < el.length; i++) {
//     if (el[i] == a) {
//         break;
//     } else {
//         sum += el[i];
//         count += 1;

//     }
// }
// console.log(sum / count);

