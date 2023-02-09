// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае
const str = "anna";

function polindrom (str_){
    const strRev = str_.split('').reverse().join('');
    return str_ === strRev ? true : false;
};
const res = polindrom(str);
console.log(res);