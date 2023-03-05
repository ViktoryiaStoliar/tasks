// Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки

const btn = document.querySelector("button");
const div = document.querySelector("div");

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input')
        if(!inp.value.trim()) throw new Error ('empty')
        if (inp.value.toLowerCase() === inp.value.split('').reverse().join("").toLowerCase()) {
            div.innerHTML = 'Это палиндром'
        } else {
            div.innerHTML = 'Это не палиндром'
        }

    } catch (error) {
        alert(error.message)
    }
});
