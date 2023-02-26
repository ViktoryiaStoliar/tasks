// 14. Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

const n = 8;

function doPassword (){
    const arr =[];
    for(let i = 0; i< n; i++){
    const pass = (Math.floor(Math.random()* 9));
    arr.push(pass)
    }
    return arr

} 

const res = doPassword()
console.log(res);










