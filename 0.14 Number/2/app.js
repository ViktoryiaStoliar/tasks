// Выявить, является ли введенное число четным

const a = +prompt();

 if (a % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}
 a % 2 === 0 ? console.log(false) : console.log(false); //первый способ вывода (теринарный)

 console.log(a % 2 === 0 ? true : false); // второй способ вывода (правильный)

