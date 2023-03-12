// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values 

const obj = {
    id: 1,
    mail: 25,
    Hi: 1
}

let str = 'Hi';

function searchStr(a, b) {
    try {
        const arr = Object.values(obj);
        if (!arr.includes(str)) throw new Error('emppty');
        return true
    } catch (er) {
        return er.message

    }
}
const res = searchStr(obj, str)
console.log(res);