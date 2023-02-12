// 5. На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
    fgkhgfk: 44,
    10: 1,
    jklj: 3,
    dhkjk111: 111,
    5 : 20
}

let arr = [];
for (let key in obj){
    if(obj[key] % 2 === 0){
        arr.push(obj[key])
        // console.log(obj[key]);
    }
}
console.log(arr);








// const obj = {
//     1 : 456,
//     2 : 4569,
//     3 : 1,
// }

// let arr = [];
//  for (let key in obj) {
//     if(key % 2 == 1){
//         arr.push(key)
//     }
//  }
//  console.log(arr);