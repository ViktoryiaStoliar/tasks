// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const str = prompt('Введите е-mail');
const obj = {};

function inclMail(str_) {
    if (str_.includes('@') || (str_.endsWith('.com') || ('.ru'))) {
         return true
    } else {
        return false
    }
}
console.log(str);


function mail(str_){
    const bool = inclMail(str_);
    if  (bool === true){
        const obj = {str}
        return obj
    } else {
        return false
        }
}

const obj = mail(str)
console.log(res);



// let str = prompt(`url`);

// if (str.startsWith("http") && str.includes("/") && (str.endsWith(".com")|| (".ru"))) {
//     console.log(true);
// } else console.log(false);