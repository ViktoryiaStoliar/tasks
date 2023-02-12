// 2. На входе статичный объект. Необходимо вывести все числовые ключи.

const obj ={
    id: 2,
    name: "sgsdgs",
    sjkdhfk: 1234,
    sdhflsd: 4567,
    skdfkjsdk: 'sjkdbksjd',
    '456': 'sldfls'
}
for (let key in obj){
    if (!isNaN(key)){
        console.log(key);
    }
}
// console.log();












// const obj = {
// 1 : 'test',
// 2 : 'test 2',
// afdf : 356,
// }

// for (let key in obj){
//     if(!isNaN(key)){
//         console.log(key);
//     }
// }

