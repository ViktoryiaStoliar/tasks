// 2. По условию задачи даны инпут и 
// кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. 
// Необходимо вывести: полный
// массив из всех элементов, а также массив из 
// уникальных значений

const btn = document.querySelector('button');
const inp = document.querySelector('input');
let arr = [];

function isValid(inp_) {
    if (inp_.value.trim() === '') throw new Error('empty');
    if (isNaN(inp_.value)) throw new Error('it\'s not number')
}

btn.addEventListener('click', function () {
    try {
        let div1 = document.querySelector('.array');
        let div2 = document.querySelector('.uniq');
        
        isValid(inp);
        
        arr.push(inp.value);
        div1.innerHTML = arr;
        
        
        let newArr = [];
        // const newArr = [...new Set(arr)]    2 способ
        for (let i = 0; i < arr.length; i++) {
            if (newArr.includes(arr[i])) {
                continue
            } else {
                newArr.push(arr[i])
            }
        }
        inp.value = ''
        div2.innerHTML = newArr;
    } catch (er) {
        alert(er.message)
    }
})




