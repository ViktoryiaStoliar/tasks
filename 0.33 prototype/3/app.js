// 3. По условию задачи даны инпут и кнопка.Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив.Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
//     0: 11,
//         1: 2,
//             2: 13
// }

const btn = document.querySelector('button');
const inp = document.querySelector('input')
const arr = [];

function isValid(inp) {
    if (inp.value.trim() === '') throw new Error('empty')
}

btn.addEventListener('click', function () {
    try {
        const div1 = document.querySelector('.array');
        const div2 = document.querySelector('.object');

        isValid(inp)

        arr.push(inp.value);
        div1.innerHTML = arr;
        inp.value = '';

        const obj = {};

        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i]
        }

        div2.innerHTML =JSON.stringify(obj);

    } catch (er) {
        alert(er.message)
    }
})
