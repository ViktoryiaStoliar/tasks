// 15. Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

const str = `iypiuaypiuseypuiypaaaaaaaaaaaaaa`;
let lowels = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] == `u` || str[i] == `a`) {
        lowels += str[i] 
    }
}
 console.log(lowels);