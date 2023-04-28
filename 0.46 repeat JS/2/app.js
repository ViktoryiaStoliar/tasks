// 2. Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные


const array = [];

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const arr = document.querySelector('.arr');
    const even = document.querySelector('.even');
    const not_even = document.querySelector('.not_even');

    array.push(input.value);
    arr.innerHTML = array;
    input.value = '';
    const even_ = [];
    const not_even_ = [];

    array.forEach((el) => el % 2 === 0 ? even_.push(el) : not_even_.push(el)
    )

    even.innerHTML = even_;
    not_even.innerHTML = not_even_
})