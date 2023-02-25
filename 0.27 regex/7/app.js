// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов


const password = 'Vika+Genya=88';

function checkPassword(password_) {
    try {
        if (!/^[\w\+\=\_]{8,}$/gm.test(password_)) {
            throw new Error('Пароль неправильно составлен')
        } return "Надежный пароль"
    } catch (error) {
        return error.message
    }
}

const result = checkPassword(password);
console.log(result);