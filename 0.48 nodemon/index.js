const express = require('express');
const { getArr, getById, postData, putData, deleteData } = require('./service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// 4. На сервере есть файл сервисов. В нем глобально хранится массив. Прописать
// логику так, чтобы при get запросе отправлялся ответ клиенту с массивом внутри
// тела
// app.get('/user/', (req, res) => {
//     const data = getArr();
//     res.json(data)
// });

// 5. На сервере есть файл сервисов. В нем глобально хранится массив объектов.
// Прописать логику так, чтобы при get запросе отправлялся ответ клиенту с
// массивом внутри тела и статус ответа
// app.get('/user/', (req, res) => {
//     const data = getArr();
//     res.status(200).json(data)
// });

// 6. Добавить 1 обработчик маршрута: get с url “/:id”. На сервере есть файл сервисов. В
// нем глобально хранится массив объектов. Прописать логику так, чтобы при get
// запросе отправлялся ответ клиенту с объектом, id которого совпадает с
// запрашиваемым id, статус ответа
// app.get('/user/:id', (req, res) => {
//     const {id} = req.params;
//     const data = getById(id);
//     res.status(200).json(data)
// })

// 7. Для post запроса добавить добавление тела запроса в массив и возвращать
// обновленный массив, статус ответа
// app.post('/user/', (req, res) => {
//     const { name, age } = req.body;
//     const data = postData(name, age);
//     res.status(200).json(data)
// })

// 8. Добавить 2 обработчика маршрута: put, delete
// 9. Для put с url “/:id” запроса добавить обновление массива по id и возвращать
// обновленный массив, статус ответа
// app.put('/user/:id', (req, res) => {
//     const { id } = req.params;
//     const {name, age} = req.body;
//     const newData = putData(id, name, age);
//     res.status(200).json(newData)
// })

// 10. Для delete с url “/:id” удалять по id элемент массива
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const data = deleteData(id);
    res.status(200).json(data)
})

app.listen(3000, () => {
    console.log('server is running');
})