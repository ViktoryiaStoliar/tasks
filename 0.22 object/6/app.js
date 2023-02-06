// 6. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
const obj = {
    a : 123,
    b : "sdjgkjfk",
    c : 456,
}

let arr =[];
for(let key in obj) {
    if(!isNaN(obj[key])){
        arr.push(obj[key] * 2)
    }
}
console.log(arr);