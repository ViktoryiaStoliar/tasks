// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const str = prompt('Введите е-mail');
const obj = {};

function prov(str_) {
    if (str_.includes('@') && (str_.endsWith('.com') || ('.ru'))) {
        // let obj_={
        //     email : str,
        //     active : 
        // };
        return obj.mail = { email: str_,active: true }
    } else {
        return obj.mail = { active: false }
    }
}

const obj_ = prov(str)
console.log(obj_);
   





