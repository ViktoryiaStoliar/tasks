// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута
function isValid(inp) {
    if (isNaN(inp)) throw new Error('value not a number');
    if (inp < 0) throw new Error('отрицат')
}


document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input');
    try {
        isValid(inp.value);

        const div = document.querySelector('div');
        div.innerHTML = inp.value;
        inp.value = '';
        inp.style = 'border:1px solid green'

    } catch (er) {
        alert(er.message);
        inp.value = '';
        inp.style = 'border:1px solid red'
    }
})