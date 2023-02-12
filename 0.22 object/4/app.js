// 4. На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
    id : 456,
    sdf : 4445,
    zdjhkkf: 'xkjfkjgk',
    5 : undefined,
    564: null
};
for (let key in obj){
    if(obj[key] % 2 != 0){
        console.log(+obj[key]);
    }
}




// const obj = {
//     4 : 'sdjlk',
//     djflskd : 456,
//     ksjdfk : 123,
//     4 : 121
// }

// for (let key in obj){
//     if (obj[key] % 2 == 0){
//         console.log(obj[key]);
//     }
// }