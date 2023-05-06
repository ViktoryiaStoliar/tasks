const express = require('express');
const { getAllData, getById, createData, upDateData } = require('./service.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// 3. Добавить 2 обработчика маршрута: get, post
app.get('/', (request, response) => {
    const data = getAllData();
    response.send(data)
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const data = getById(id);
    response.send(data)
});

app.post('/', (request, response) => {
    const { name, age } = request.body;
    const data = createData(name, age);
    response.send(data)
})

app.put('/:id', (request, response) => {
    const {id} = request.params;
    const {name, age} = request.body;
    const data = upDateData(id, name, age);
    response.send(data)
} )

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



// 4. На сервере есть файл сервисов. В нем глобально хранится массив. Прописать
// логику так, чтобы при get запросе отправлялся ответ клиенту с массивом внутри
// тела

