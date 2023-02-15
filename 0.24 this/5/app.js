// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = prompt('Введите пароль').split('');

function password(str_) {
    let res = 0;
    for (let i = 0; i < str_.length; i++) {
        if (str_[i].includes('-') || str_[i].includes('`') || str_[i].includes('!')) {
            res++
        }
    }

    let strLower = 0;
    for (let i = 0; i < str_.length; i++) {
        if (str_[i] == str_[i].toLowerCase()) {
            strLower++
        }
    }

    let strUpper = str_.some(function (el) {
        if (el.toUpperCase()) {
            return true
        }
    })

    let strNumber = str_.some(function (el) {
        if (!isNaN(el)) {
            return true
        }
    })
    
    if (res > 0 && strLower > 0 && strUpper === true && strNumber === true) {
        return 'Надежный пароль!'
    } else return 'ненадежный пароль'

}

const res = password(str)
console.log(res);