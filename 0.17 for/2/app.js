// 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

const el = [1, 2, 3, 4];
let res = 1;

for (let i = 0; i < el.length; i++) {
    res *= el[i]
}
console.log(res);