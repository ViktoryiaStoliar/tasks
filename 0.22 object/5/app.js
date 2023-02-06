// 5. На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
    1 : 456,
    2 : 4569, 
    3 : 1,
}

let arr = [];
 for (let key in obj) {
    if(key % 2 == 1){
        arr.push(key)
    }
 }
 console.log(arr);