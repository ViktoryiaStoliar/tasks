// 2. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    middleware() {

        document.querySelector('button').addEventListener('click', () => {
            try {
                const inp = document.querySelector('input');
                if (!/^[\w\-\.]+\@[a-z]+\.[a-z]{2,6}$/gm.test(inp.value)) throw new Error('неправильный формат')
                alert(true)
            } catch (er) {
                alert(er.message)
            }
        })
    }
}


const domHtml = new DomHtml()
domHtml.middleware()