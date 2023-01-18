// На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const str = `hSСhOol СomPAnY`.trim().toLowerCase();

console.log(`#${str.replaceAll(' ', '')}`);



const str1 = `hSСhOol СomPAnY`.toLowerCase();

let result = ``;
for (let i = 0; i < str1.length; i++) {
    if(str1[i] != ' ') {
        result +=str1[i];
    }
}

console.log(`#${result}`);