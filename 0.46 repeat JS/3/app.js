// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

const array = [];

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const arr = document.querySelector('.arr');
    array.push(input.value);
    arr.innerHTML = array;
    input.value = '';
    const unic = document.querySelector('.unic');
    const unicArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!unicArray.includes(array[i])) {
            unicArray.push(array[i])
        }
    }
    unic.innerHTML = unicArray;
})