// 3. На входе статичный объект. Необходимо вывести все числовые значения.

const obj ={
    id: 456,
    sdjhkfj : 'dbkjzbd', 
    4 : 456,
    456 : 1230,
    5 : '456'
}
for(let key in obj){
    if(!isNaN(obj[key])){
        console.log(obj[key]);
    }
}







// const obj = {
//     1 : 123,
//     hjk : 'gdajhgj',
//     test : 456,
// }
// for (let key in obj){
//     if(!isNaN(obj[key])){
// console.log(obj[key]);
//     }
// }