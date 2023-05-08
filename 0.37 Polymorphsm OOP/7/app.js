// 7. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
    controller(data) {
        try {
            const contr = this.service(data);
            return contr
        } catch (error) {
            return error.message
        }
    }
    service(data) {
        const serv = this.repository(data)
        return serv
    }
    repository(data) {
        const arr = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]

        const filtered = arr.filter((el) => el.email === data.email);
        if (filtered.length == 0) {
            arr.push({ id: arr.length + 1, ...data })
        }
        return arr
    }
}

class Client {
    sendRequest() {
        document.querySelector('button').addEventListener('click', () => {
            const email = document.querySelector('.email');
            const pwd = document.querySelector('.pwd');
            const div = document.querySelector('div');

            const server = new Server();
            const res = server.controller({ email: email.value, pwd:pwd.value});

            div.innerHTML = JSON.stringify(res)
        })
    }
}

МА5107940 с 07.07.22 по 06.07.23
+375172062014 пункт про данные контактные страховщика




const client = new Client();
client.sendRequest()


// const data = JSON.parse(`{"email":"asfgbkjasd","pwd":"asdfjhaksjd"}`)
// console.log(res);


