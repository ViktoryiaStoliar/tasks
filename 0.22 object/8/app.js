// 8. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение)

const obj = {
    a : 123,
    b : ''
};

for (let key in obj) {
    if(obj[key]){
        result++
    }
}
console.log(result);