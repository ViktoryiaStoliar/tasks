// Записать в результат удвоенное
//  значение инпута. 
// Добавить проверки 
let div = document.querySelector('div')

document.querySelector('button').addEventListener('click', function () {
    try {
        let inp = document.querySelector('input');
        if (isNaN(inp.value)) throw new Error('letter');
        if (inp.value === '') throw new Error('emptiness');
        div.innerHTML = `Результат: ${inp.value * 2}`
    } catch (error) {
        alert(error.message)
    }
})



// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     try {
//         const inp = document.querySelector('input')
//         const div = document.querySelector('div');
//         if (isNaN(inp.value)) throw new Error('есть буква')
//         div.innerHTML = `Результат: ${inp.value * 2}`;

//     } catch (er) {
//         alert (er.message)
//     }

// })
