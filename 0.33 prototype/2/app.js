// 2. По условию задачи даны инпут и 
// кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. 
// Необходимо вывести: полный
// массив из всех элементов, а также массив из 
// уникальных значений

const btn = document.querySelector('button');
let arr = [];
const inp = document.querySelector('input');
// let newArr = [];

function isValid(inp) {
    if (inp.value.trim() === '') throw new Error('empty');
    if (isNaN(inp.value)) throw new Error('it\'s not number')
}

btn.addEventListener('click', function () {
    try {
        let div1 = document.querySelector('.array');
        let div2 = document.querySelector('.uniq');

        isValid(inp);

        arr.push(inp.value);
        div1.innerHTML = arr;


        const newArr = [...new Set(arr)]
        // for (let i = 0; i < arr.length; i++) {
        //     if (newArr.includes(arr[i]))
        //     newArr.push(arr[i])
        // }
        inp.value = ''
        console.log(newArr);
        div2.innerHTML = newArr;
    } catch (er) {
        alert(er.message)
    }
})




