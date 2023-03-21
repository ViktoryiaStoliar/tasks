// 8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна.

class DomHtml {
    middleware() {
        document.querySelector('button').addEventListener('click', () => {
            try {
                const inp = document.querySelector('input');
                if (!/^[a-z1-9]{8}\-+[a-z1-9]{4}\-+[a-z1-9]{4}\-+[a-z1-9]{4}\-+[a-z1-9]{12}$/gm.test(inp.value)) throw new Error ('непр формат')
                alert (true)
            } catch (er) {
                alert(er.message)
            }
        })
    }
}

const domHtml = new DomHtml()
domHtml.middleware()