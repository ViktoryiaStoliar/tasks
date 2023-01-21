// 7. Преобразуйте первую букву строки в верхний регистр несколькими способами

const str =`asjhvdljhvl`;
console.log(str[0].toUpperCase());
console.log(str.slice(0,1).toUpperCase());

for (let i = 0; i < str.length; i++) {
    if (i == 0) {
        console.log(str[i].toUpperCase())
    }
}
