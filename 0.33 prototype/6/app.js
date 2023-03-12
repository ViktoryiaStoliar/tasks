// 6. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const div = document.querySelector('div');
        const inpNum = +inp.value.trim()

        if (isNaN(inpNum)) throw new Error('it\'s not number')

        const obj = {};
        for (let i = 0; i < inpNum; i++) {
            obj[i] = i;
        }
        
        div.innerHTML = JSON.stringify(obj);

    } catch (er) {
        alert(er.message)
    }
})



