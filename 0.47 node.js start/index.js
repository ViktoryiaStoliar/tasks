const express = require('express');

const app = express();

// 5. Изменить функционал роута get “/”. На сервере хранится массив из чисел.
// Необходимо вернуть клиенту только уникальные значения
app.get('/', (request, response) => {
    const array = [0, 1, 2, 2];
    const unicArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!unicArray.includes(array[i])) {
            unicArray.push(array[i])
        }
    }
    response.send(unicArray)
})

// 6. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и
// отправить клиенту. (Для того чтобы получить значение из url необходимо
// воспользоваться деструктуризацией из request.params)
// app.get('/:id', (req, res) => {
//     const {id} = req.params
//     res.send(`Вы попали в роут с динамич. id: ${id}`)
// })

// 3. Добавить 3 обработчика маршрута get с url: "/ “, "/about“, "/contact"
app.get('/about', (request, response) => {
    response.send('Hi everybody! This is about route')
})

app.get('/contact', (request, response) => {
    response.send('Hi everybody! My name is Vika')
})

// 7. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id.
// На сервере хранится массив из чисел. Напишите функцию, которая разделяет
// массив на части заданного размера. Необходимо вернуть клиенту массив
app.get('/:id', (request, response) => {
    const { id } = request.params
    const arr = [1, 2, 3, 4, 5];
    const res = [];
    let item = [];
    for (let i = 0; i < arr.length; i++) {
        item.push(arr[i])
        if (id == item.length) {
            res.push(item);
            item = [];
        }
    }
    response.send(res)
})

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port 3000');
})

