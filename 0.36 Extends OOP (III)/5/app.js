// 1. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {

    isValid(inp1, inp2) {
        if (!/^[a-zA-Z0-9\_\.]+\@+[a-z]+\.+[a-z]+$/gm.test(inp1)) throw new Error('неправильный формат email')
        if (inp2.length < 8) throw new Error('пароль должен быть больше 8 символов')
    }

    sendRequest() {

        document.querySelector('button').addEventListener('click', () => {
            try {
                const inp1 = document.querySelector('.inp1');
                const inp2 = document.querySelector('.inp2');
                const div = document.querySelector('div');
                this.isValid(inp1.value, inp2.value)
                div.innerHTML = JSON.stringify({ email: inp1.value, pwd: inp2.value })
            } catch (er) {
                alert (er.message)
            }
        })
    }
}

const client = new Client();
client.sendRequest()
