// 2. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = 'ajbdlj3145989*(^&*%$^%'

function generPswd(str_) {
    if (str_ .length != 8) return 'меньше 8 символов';
    let numbPswd = 0;
    let wordPswrd = 0;
    let wordPswrdUpper = 0;
    for (let i = 0; i < str_.length; i++) {
        if (!isNaN(str_[i])) {
            numbPswd++
        } else {
            str_[i] === str_[i].toUpperCase() ? wordPswrdUpper++ : wordPswrd++
        }
    }
    if (arr_.length - (wordPswrd + numbPswd + wordPswrdUpper) == 0) {
        return 'enter symbol';
    } if (numbPswd === 0 && wordPswrd === 0 && wordPswrdUpper === 0)
        return true

}

const res = generPswd(str);