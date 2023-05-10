const e = require("express")

const arr =
    [
        { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
        { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
        { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
        { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
        { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
        { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
        { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
        { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
        { "id": "materialui", "label": "Material UI", "category": "webTechnologies", "priority": 1 },
        { "id": "git", "label": "Git", "category": "otherSkills", "priority": 2 },
        { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 }
    ]

function getData() {
    if (!arr.length) throw new Error('empty')
    return arr
}

function getDataById(id) {
    const filtered = arr.filter((el) => el.id == id)
    if (!filtered.length) throw new Error('Empty')
    return filtered
}

function postData(label, category, priority) {
    const filtered = arr.filter((el) => el.id == label.toUpperCase())
    const obj = {
        "id": "TypeScript",
        "label": "TypeScript",
        "category": "programmingLanguages",
        "priority": 1
    }
    if (filtered.length > 0) throw new Error('this label is exist')
    else {
        arr.push(obj)
    }
    return arr
}

function uppdateData(id, label, category, priority) {
    const filtered = arr.filter((el) => el.id != id)
    const obj = {
        "id": id,
        "label": label,
        "category": category,
        "priority": priority
    }
    if (filtered.length > 0) arr.push(obj)
    return arr
}

module.exports = { getData, getDataById, postData, uppdateData }