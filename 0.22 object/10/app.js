// 10. На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
// объект соответствующими данными. Добавить проверки на ввод

const obj = {
    name: '',
    age: '',
    birthday: '',
};
for (let key in obj) {
    let a = prompt(`Введите ${key}`)
    obj[key] = a;
    // if (isNaN(key)) {
    //     obj[key] = prompt('');
    // }
}
console.log(obj);




// const obj = {
//     name: '',
//     age: '',
//     birthday: '',
// }

// for (let key in obj) {
//     let a = prompt(`Введите ${key}`);
//     obj[key] = a;
// }
// console.log(obj);