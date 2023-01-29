// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const arr = [2, 5, 9, 15, 0, 4];
let newres = [];

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0) {
        newres.push(arr[i]);
    }
}
console.log(newres);

for (let el of arr){
    if(arr % 3 == 0){
        newres.push(arr)
    }
}
console.log(newres);
