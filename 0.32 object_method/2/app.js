// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

const obj = {
    id: 1,
    mail: 'vika@mail',
    Hi: 1
}

const foundCount = (obj_) => {
    try {
        const res = Object.values(obj_.length);
        if (!res === 0) throw new Error ('empty')
        return res;

    } catch (error) {
        return (error.message);
    }

}

const res = foundCount(obj);
console.log(res);