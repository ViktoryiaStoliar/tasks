// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str = 'конус'.split('').sort();
const str2 = 'сукно'.split('').sort();

function isAnnagramma(str_, str2_) {
        return str_.join('') == str2_.join('') ? true : false;
}
const res = isAnnagramma(str, str2)
console.log(res);
