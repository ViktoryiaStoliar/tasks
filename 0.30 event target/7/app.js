// *Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка),
//  с помощью которой можно будет добавить нового значение в таблицу. 


document.querySelector('button').addEventListener('click', function () {
    const table = document.querySelector('.table');
    const td = document.createElement('td');
    const inp = document.querySelector('input')
    const tbody = document.querySelector('.table');
    td.innerHTML = inp.value
    table.appendChild(td)
    inp.value = '';
    let row = tbody.insertRow(index)

})