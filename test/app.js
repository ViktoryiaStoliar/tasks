let num = prompt(`Введите произвольно число`);
let a = num.split('');
let res = [];

for (let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        res.push(`${a[i]} - четное`) 
    } else {
        res.push(`${a[i]} - четное`) 
    }
}
console.log(res);
