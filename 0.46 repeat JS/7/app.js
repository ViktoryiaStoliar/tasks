// 7. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо вывести все числа кратные 3 
const array = [];

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const arr = document.querySelector('.arr');
    const res = document.querySelector('.res')
    array.push(input.value);
    arr.innerHTML = array;
    input.value = '';

    res.innerHTML = array.filter((el) => el % 3 == 0)
})