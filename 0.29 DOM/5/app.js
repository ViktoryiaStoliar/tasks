// Необходимо отобразить числовой инпут и кнопку. 
// После нажатия на кнопку необходимо получить значение 
// из инпута. Проверить, что это число > 0. Если проверка true, 
// то вывести в Результат ряд Фибоначчи. 
const arr = [0, 1]
let div = document.querySelector('div');
document.querySelector('button').addEventListener('click', function(){
let inp = document.querySelector('input')
for(let i = 2; i < inp.value; i++){
    arr.push(arr[i-1]+arr[i-2])}
div.innerHTML = (`Результат: ${arr}`)
})









// const btn = document.querySelector('button')
// let arr = [0, 1]
// const div = document.querySelector('div')

// btn.addEventListener('click', function () {
//     try {
//         let inp = document.querySelector('input')
//         if (inp.value === '') throw new Error('Вы ничего не вввели')
//         if(isNaN(inp.value)) throw new Error ('Есть нечисловое значение')
//         for (let i = 2; i < inp.value; i++) {
//             arr.push((arr[i - 1]) + (arr[i - 2]))
//         }
//         div.innerHTML = `Результат ${arr}`
//         inp.value = ''

//     } catch (error) {
//         allert(error.message)
//     }
// })






// const btn = document.querySelector('button')
// let arr = [0, 1];
// const div = document.querySelector('div')

// btn.addEventListener('click', function () {
//     try {
//         let inp = document.querySelector('input');
//         if (inp.value === '') throw new Error('emply')
//         if (isNaN(inp.value)) throw new Error ('есть буква')
//         for (let i = 2; i < inp.value; i++) {
//             arr.push(arr[i - 1] + arr[i - 2])
//         }

//         div.innerHTML = arr;

//     } catch (err) {
//         alert(err.message)
//     }
// })