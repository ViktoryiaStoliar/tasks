// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

const str = "hSСhOol".trim().toLowerCase();

if(isNaN(str)) {
    console.log(`#+${str}`);
} else console.log(`error`);
