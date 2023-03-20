// 7. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки 

class ServerDelete {

    controller(data) {
        try {
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
            { "id": 5, "name": "Maria", "age": 27 },
        ];
        const findEl = arr.filter(el => el.id != data.id)
        // console.log(findEl);
        if (findEl.length === 0) {
            arr.push(data)
        } else {
            throw new Error('coincidence')
        }
        return arr;
    }
}

const data = JSON.parse(`{
    "id": 1
    }`);

const serverDelete = new ServerDelete();
const result = serverDelete.controller(data);
console.log(result);