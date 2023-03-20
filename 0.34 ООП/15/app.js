// 15. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {
    controller(data) {
        try {
            const serv = this.service(data)
            return serv
        } catch (er) {
            return er.message
        }
    }

    service(data) {
        const rep = this.repository(data)
        return rep
    }

    repository(data) {
        const arr = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];

        const filtered = arr.filter(el => data.id != el.id)
        if (filtered.length === arr.length) {
            throw new Error('нет совпадений по id')
        } 
        return filtered
    }
}

const data = JSON.parse(`{"id": "javascript"}`);
const serverDelete = new ServerDelete();
const deleteID = serverDelete.controller(data);
console.log(deleteID);