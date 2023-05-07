const arr = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
];

const getArr = () => {
    return arr
}

function getById(id) {
    const filtered = arr.filter((el) => el.id == id)
    return filtered
}

function postData(name, age) {
    const obj = {
        "name": name,
        "age": age
    }
    arr.push(obj)
    return arr
}

function putData(id, name, age) {
    const filtered = arr.filter((el) => el.id != id)
    if (filtered.length === arr.length) return ('такого id нет')
    const obj =
    {
        "id": id,
        "name": name,
        "age": age
    }
    filtered.push(obj)
    return filtered
}

function deleteData(id) {
    const filtered = arr.filter((el) => el.id != id)
    if (filtered.length === arr.length) return ('такого id нет')
    return filtered
}

module.exports = { getArr, getById, postData, putData, deleteData }