// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = 'Vika88+=Genya';

function isValid(str_) {
    try {
        let result = str_.replaceAll(/[0-9\+\= ]/gm, ' ');
        let res = result.replaceAll(/ /gm, '')
        if (str_.length != result.length) {
            throw new Error('не исключились цифры, обработай строку еще раз');
        } else {
            return res
        }
    } catch (error) {
        return error.message
    }
} 

const res = isValid(str);
console.log(res);