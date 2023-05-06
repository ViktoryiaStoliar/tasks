const express = require('express');

const app = express();


// app.get('/', (req, res) => {
//     const arr = [3, 5, 5, 1, 1, 2, 3];
//     let unicArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!unicArr.includes(arr[i])) {
//             unicArr.push(arr[i])
//         }
//     }
//     res.send(unicArr.sort())
// });

// 6. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id и
// отправить клиенту. (Для того чтобы получить значение из url необходимо
// воспользоваться деструктуризацией из request.params)
// app.get('/:id', (req, res) => {
//     const {id} = req.params;
//     res.json(`This is id: ${id}`)
// })

// 7. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id.
// На сервере хранится массив из чисел. Напишите функцию, которая разделяет
// массив на части заданного размера. Необходимо вернуть клиенту массив
// app.get('/:id', (req, res) => {
//     const { id } = req.params;
//     const arr = [1, 2, 3, 4, 5];
//     let item = [];
//     const resArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         item.push(arr[i])
//         if (id == item.length) {
//             resArr.push(item);
//             item = [];
//         }
//     }
//     res.send(resArr)
// })

// 8. Создать обработчик маршрута get с url: "/:id “. Необходимо получить значение id.
// На сервере хранится массив объектов, в каждом из которых есть поле id int.
// Напишите функцию, которая находит по id объект. Необходимо вернуть клиенту
// объект

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const arr = [
        { "id": 1, "name": "Yesenia", "age": 22 },
        { "id": 2, "name": "Hanna", "age": 22 },
        { "id": 3, "name": "Stanislau", "age": 25 },
        { "id": 4, "name": "German", "age": 18 },
        { "id": 5, "name": "Maria", "age": 27 }
    ];
    const filtered = arr.filter((el) => el.id == id)
    res.send(filtered)
})

app.listen(3000, () => {
    console.log('server is running');
})

