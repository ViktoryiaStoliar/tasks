// Пользователь вводит строку. Необходимо посчитать количество гласных

let str = prompt("Введите строку");
let sumstr = 0;

for (let i = 0; i < 10; i++) {
    if (str[i] === 'e' || str[i] === 'y' || str[i] === 'i' ||
        str[i] === 'u' || str[i] === 'o' || str[i] === 'a') {
        sumstr += 1;
    }
}

console.log(`${sumstr} - сумма гласных в строчке`);
