// 17. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].join(',');
console.log(arr);
for (let i = 0; i <arr.length; i++){
}
console.log(arr.replaceAll(',','-') );