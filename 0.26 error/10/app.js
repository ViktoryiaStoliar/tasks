// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const str = 'vikynyshka@mail.ru';
// console.log(str);
function mail(s) {
    try {
        if (!s.includes("@")) {
            throw new Error('Это не почта')
        }
        return true
    } catch (error) {
        return error.massage
    }
}
console.log(mail(str)); 