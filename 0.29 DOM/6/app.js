// Необходимо отобразить кнопку и инпут со значением по 
// умолчанию. По клику на кнопку заменить значение инпута


const btn = document.querySelector('button');
let flag = true

btn.addEventListener('click', function () {
    let inp = document.querySelector('input');
    if (flag === true) {
        inp.value = 'Привет';
        flag = false
    } else {
        inp.value = 'Hi';
        flag = true
    }
})




// const btn = document.querySelector('button');
// let flag = false;


// btn.addEventListener('click', function () {
//     const inp = document.querySelector('input')
//     if (flag === false) {
//         inp.value = 'Hi'
//         flag = true;

//     } else {
//         inp.value = 'Привет'
//         flag = false;
//     }
// })