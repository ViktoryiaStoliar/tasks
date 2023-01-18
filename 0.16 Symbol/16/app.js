// На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const str = `hSСhOol СomPAnY`.toLowerCase();
// console.log("# + str.replaceAll(' ','')");


let result = ``;
for (let i = 0; i < str.length; i++) {
    if(str[i] != ' ') {
        result +=srt[i];
    }
}

console.log("#' + result);