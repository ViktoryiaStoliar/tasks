// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const str = 'hello everyone';

function isValid(str_) {
    try {
        // if(/^[A-Za-z ]+$/gm.test(str_)){
        let result = str_.replaceAll(/ /gm, '!');
        if (str_.length != result.length) throw new Error('не равно')
        return result
    } catch (error) {
    return error.message
}
}
console.log(isValid(str));
