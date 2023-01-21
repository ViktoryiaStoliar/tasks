// 5. Найдите максимальное значение в статичном массиве используя цикл'

const a = [1, 4, -5, 6, 8];
let max = a[0];


for (let i = 0; i < a.length; i++) {
if ([i] > max[i]) {
    max = a[i]
}
}
console.log(max);