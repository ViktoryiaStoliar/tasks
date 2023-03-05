// Необходимо отобразить кнопку с надписью «Нажми на меня» и 
// пустой инпут. По клику на кнопку вызвать alert и отобразить 
// сообщение из значения инпута. Проверки на ввод. Обработать ошибки


const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        if(inp.value.trim() === '') throw new Error ('empty')
        alert(inp.value)

    } catch (error) {
        alert(error.message)
    }
})












// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     try {
//         const inp = document.querySelector('input');
//         if(inp.value.trim() === '') throw new Error('')
//         alert(inp.value)
//     } catch (error) {
//         alert(error.message)
//     }
// })