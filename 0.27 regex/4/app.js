// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str = 'vikynyshka@mail.ru';

function isValid(str_) {
    try {
        if (!/^[a-zA-z0-9_\-\.]+@[a-z]{1,10}+.[a-z]{1,5}$/gm.test(str_)) throw new Error('неправильно ввели адрес почты')
        return true
    } catch (error) {
        return error.message
    }

}
console.log(isValid(str)); 
