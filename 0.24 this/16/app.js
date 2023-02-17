// 16. *Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5];

function sum() {
    let sum = 0;

    if (arr[i] === 5) return sum += arr[i]
    sum++;
    return sum()
}

console.log(sum(arr));