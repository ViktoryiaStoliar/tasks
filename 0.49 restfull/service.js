const arr = [
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
    { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 },
];

function getAllEnvaroment() {
    if (!arr.length) throw new Error('empty')
    return arr
}

function getEnvironmentById(id) {
    if (!filtered.length) throw new Error('empty')
    const filtered = arr.filter((el) => el.id == id)
    return filtered
}

function createEnvironment(label, category, priority) {
    const filtered = arr.filter((el) => el.label == label)
    if (filtered.length > 0) throw new Error('this label alresdy exsist')
    const obj = {
        id: arr.length + 1,
        label: label,
        category: category,
        priority: priority
    }
    arr.push(obj)
    return arr
}

function updateEnvironment(id, label, category, priority) {
    const filtered = arr.filter((el) => el.id != id)
    if (filtered.length == arr.length) throw new Error ('такой id уже есть')
    const obj = {
        id: id,
        label: label,
        category: category,
        priority: priority
    }
    filtered.push(obj)
    return filtered
}

function deleteData(id) {
    const filtered = arr.filter((el) => el.id != id)
    if(filtered.length = arr.length) throw new Error ('not found')
    return filtered
}

module.exports = { getAllEnvaroment, getEnvironmentById, createEnvironment, updateEnvironment, deleteData }