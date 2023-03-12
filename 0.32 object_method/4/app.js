// 4. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

const obj = {
}

function doObject(obj_) {
    for (let i = 0; i < 5; i++) {
        obj_[i] = i;
    }
    return obj_
}

function searchEvens(newObj_) {
    try {
        const arr = Object.keys(newObj_);
        let events = arr.filter(function (el) {
            if (el % 2 === 0) {
                return true
            }
        }
        );
        if (!arr.length) throw new Error('empty')
        return events
    } catch (er) {
        return er.message
    }
}

console.log(doObject(obj));
console.log(searchEvens(obj)); 