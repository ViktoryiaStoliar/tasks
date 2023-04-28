// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const div = document.querySelector('div');

    (!\^[1-9]{2}\-[1-9]{4}$/gm.test(input.value)) ? div.innerHTML = 'совпадает' : 'не совпадает'
})