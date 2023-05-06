// 6. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении\

class Server {
    middleware() {

    }

    controller(obj) {
        try {
            const serv = this.service(obj);
            return serv;
        } catch (error) {
            return error.message
        }
    }

    service(obj) {
        const rep = this.repository(obj);
        return rep
    }

    repository(obj) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];

        const filtered = data.filter((el) => el.email === obj.email)
        if (filtered.length > 0) throw new Error('совпадение');
        const objToArr = { id: data.length + 1, ...obj }
        data.push(objToArr);

        return data;
    }
}

const obj = JSON.parse(`{ "email": "hanna", "pwd": "pwdffff" }`);

const server = new Server();

console.log(server.controller(obj));