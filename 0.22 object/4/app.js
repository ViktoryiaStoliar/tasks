// 4. На входе статичный объект. Необходимо вывести все четные значения объекта.
const obj = {
    4 : 'sdjlk',
    djflskd : 456,
    ksjdfk : 123,
    4 : 121
}

for (let key in obj){
    if (obj[key] % 2 == 0){
        console.log(obj[key]);
    }
}