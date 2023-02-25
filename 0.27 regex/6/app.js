// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true


const str = 'C:/Users/Admin/Desktop/test.txt';

function checkStr(str_) {
    try {
        if (!/^[A-F]+\:\/[A-Za-z]+\/[A-Za-z]+\/[A-Za-z]+\/[A-Za-z]+\.+[a-z]{1,3}$/gm.test(str_)) {
            throw new Error('некорректный ввод')
        } return true
    } catch (error) {
        return error.message
    }
}
console.log(checkStr(str)); 
