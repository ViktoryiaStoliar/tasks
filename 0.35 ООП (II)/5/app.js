// 5. Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
// {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки 

class ServerPost {
    middleware(data) {
        if (!isNaN(data.name)) throw new Error('number');
        if (isNaN(data.age)) throw new Error('littera');
        if(!data.hasOwnProperty('name') || !data.hasOwnProperty('age')) throw new Error ('некорректные данные')
    }

    controller(data) {
        try {
            this.middleware(data)
            const serv = this.service(data);
            return serv
        } catch (error) {
            return error.message
        }
    }

    service(data) {
        const rep = this.repository(data);
        return rep
    }

    repository(data) {
        const arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ];
        const findEl = arr.filter(el => el.name === data.name)
        // console.log(findEl);
        if (findEl.length > 0) {
            throw new Error('coincidence')
        } else {
            arr.push({ 'id': arr.length + 1, ...data })
        }
        return arr;
    }
}

const data = JSON.parse(`{
    "name": "Test", "age": 1
    }`);

const serverPost = new ServerPost();
const result = serverPost.controller(data);
console.log(result);