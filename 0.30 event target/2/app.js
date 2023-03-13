// По наведению на кнопку вывести сообщение «Hi». 
// Когда мышка выходит за границы кнопки сновка скрывать

const btn = document.querySelector('button');
const divEl = document.querySelector('div');

btn.addEventListener('mouseover', function () {
    divEl.innerHTML = 'Hi'
})

btn.addEventListener('mouseout', function () {
    divEl.innerHTML = ''
})