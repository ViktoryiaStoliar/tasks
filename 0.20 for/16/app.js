// 16. Дано число 7, найдите все числа кратные 7 до 100

const a = 7;
let arr = [];
for (i = 0; i < 100; i++){
    if(i % a == 0){
        arr.push(i);
    }
}
console.log(arr);