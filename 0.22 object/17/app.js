// 17. Найти значение массива, повторяющееся в нем наибольшее количество раз
// Массив объектов из приложения – воображаемая база данных (БД)
// На входе объект – воображаемое тело запроса от пользователя
// Работа по CRUD: Create, Read, Update, Delete
// Использовать методы перебора массива
// Возможно применение spread оператора
// 1. Read
// Вывести в консоль массив объектов
// 2. Create
// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка
// 3. Update
// На входе объект вида
// {"id" : "test" , "label": "Test", "category": "test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих
// ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента. В результативный массив запушить клиентский, тем самым
// обновить объект БД
// Если совпадения по id нет – ошибка
// 4. Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка
// [
// { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
// { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
// { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
// { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
// { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]

const arrDB = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
];

let a = {"label": "test", "category": "test", "priority": 1 };   // 2. Create

let result = arrDB.find(i => i.label == "Test");  //метод find
// console.log(result);

if (arrDB != result) {
    arrDB.push(a)
}
console.log(arrDB);

let resultFilter = arrDB.filter(el => el.label == a.label); //методом Filter
if (resultFilter.length === 0) arrDB.push(a)
else console.log('ошибка');
// console.log(resultFilter);
console.log(arrDB);   // 1. Read

let b = {id :'test' };
let c = {...b, ...a};
// console.log(c);
console.log(arrDB.push(c));

// let d = {"id" : "test" , "label": "Test", "category": "test", "priority": 1 }   // 3. Update

// let resFilter = arrDB.filter((i) {
//     return i.id === 'test'
// });

//      if (resFilter.includes(d['id'])) arrDB.push(d['id'])
//      else console.log("ошибка");
//      console.log(arrDB);
const arrDB = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
];

let a = {"label": "test", "category": "test", "priority": 1 };   // 2. Create

let result = arrDB.find(i => i.label == "Test");  //метод find
if (arrDB != result) {
    arrDB.push(a)
}
console.log(arrDB);

console.log(arrDB);     //объекты
for (let key in arrDB){
    console.log(key);
    console.log(arrDB[key]);
}

let resultFilter = arrDB.filter(el => el.label === a.label); //методом Filter
if (resultFilter.length === 0) arrDB.push(a)
else console.log('ошибка');
// console.log(resultFilter);
console.log(arrDB);   // 1. Read

let b = {id :'test' };
let c = {...b, ...a};
// console.log(c);
console.log(arrDB.push(c));

// let d = {"id" : "test" , "label": "Test", "category": "test", "priority": 1 }   // 3. Update

// let resFilter = arrDB.filter((i) {
//     return i.id === 'test'
// });

//      if (resFilter.includes(d['id'])) arrDB.push(d['id'])
//      else console.log("ошибка");
//      console.log(arrDB);

let arr = arrDB.filter(i => i.id == "java")  // 4. Delate
// for (let i in arrDB){
//     if(arrDB[i].id == "java") {
//         arrDB.splice(i, 1);
//         break
//     }
// }
delete arrDB["id"];
console.log(arrDB);