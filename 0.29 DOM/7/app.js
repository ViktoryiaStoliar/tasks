// Записать в результат удвоенное
//  значение инпута. 
// Добавить проверки 

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input')
        const div = document.querySelector('div');
        if (isNaN(inp.value)) throw new Error('есть буква')
        div.innerHTML = `Результат: ${inp.value * 2}`;

    } catch (er) {
        alert (er.message)
    }

})
