// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt('Введите кол-во элементов массива');
const arr = [];

for (i = 0; i < n; i++) {
    let a = (prompt('Элементы массива'));
    arr.push(a)
}
console.log(arr);


let neWarr = 0;
arr.forEach(function (el) {
    console.log(neWarr += el);
})
console.log(neWarr);