const express = require('express');
const bodyParser = require('body-parser')
const { getAllEnvaroment, getEnvironmentById, createEnvironment, updateEnvironment, deleteData } = require('./service')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const data = getAllEnvaroment()
        res.status(200).send(data)
    } catch (er) {
        res.send(er.message)
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = getEnvironmentById(id);
        res.send(data)

    } catch (er) {
        res.status(404).send(er.message)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = createEnvironment(label, category, priority)
        res.status(201).send(data)
    } catch (er) {
        res.status(405).send(er.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body
        const data = updateEnvironment(id, label, category, priority);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteData(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})