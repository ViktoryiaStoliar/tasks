// 3. На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового ЧИСЛОВОГО значения (добавить
// проверку на число). Отобразить в результате только элементы, кот больше 5

const num = +prompt();
let str = '';
for(let i = 0; i < num; i++){
    let newValue = prompt('');
    if(!isNaN(newValue)){
        str +=newValue
    }
}

for(let i =0; i <str.length; i++){
    if (str[i] > 5) {
        console.log(str[i]);
    }
}