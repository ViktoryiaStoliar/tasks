const express = require('express')
const { getData, getDataById, postData, uppdateData } = require('./servis')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// • GET “/” – получние всех элементов массива
app.get('/', (req, res) => {
    try {
        const data = getData()
        res.status(200).send(data)
    }
    catch (er) {
        res.status(404).send(er.message)
    }
})

// • GET “/:id” – получение отдельного элемента по id
app.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = getDataById(id)
        res.status(200).send(data)
    }
    catch (er) {
        res.status(404).send(er.message)
    }
})

// POST “/” – с клиента приходит объект вида {"label": "TypeScript", "category":
// "programmingLanguages", "priority": 1 }. Добавить в массив объект в том случае, если
// совпадений label.toLowerCase() с id массива нет. Вернуть клиенту массив и статус
app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = postData(label, category, priority)
        res.status(409).send(data)
    } catch (er) {
        res.status(409).send(er.message)
    }
})

// • PUT “/:id” – обновить в массиве объект только в том случае, если есть совпадения с
// id. Вернуть клиенту массив и статус
app.put('/:id', (req, res) => {
    const { label, category, priority } = req.body
    const { id } = req.params
    const data = uppdateData(id, label, category, priority)
    res.status(200).send(data)
})


app.listen(3000, () => {
    console.log('server is running');
})