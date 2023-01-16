// На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false
const str = prompt(`Введите имя и фамилию`);

let a = (str[0]);

if (a === a.toUpperCase()) {
    console.log(true);
} else console.log(false);

// let b = (str.indexOf(" ++1"));
// && b === b.toUpperCase() 