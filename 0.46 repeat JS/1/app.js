// 1. Посчитать количество гласных и согласных в строке

const vowel = 'eioau'.toLowerCase();
let count = 0;
document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input');
    const div = document.querySelector('div');
    for (let i = 0; i < inp.value.length; i++) {
        if (vowel.includes(inp.value[i])) {
            count += 1;
        }
    }
    div.innerHTML = `Кол-во гласных : ${count}, кол-во согласных: ${inp.value.length - count}`;
})
