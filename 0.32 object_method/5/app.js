// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте

const obj = {};
const n = 17;

function doObj(obj_, n_) {
    for (let i = 0; i < n_; i++) {
        obj_[i] = i;
    }
    return obj
}

function searchKey(object_) {
    try {
        if (!Object.keys(object_).includes('10')) throw new Error
        return true
    } catch (error) {
        return error.message
    }
}


const object = doObj(obj, n);
const res = searchKey(object)
console.log(res);
