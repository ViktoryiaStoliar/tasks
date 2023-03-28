// есть два класса Main и Child. Класс Main содержит в себе функцию generateRandomElem, генерирующую массив из случайных 5-ти элементов.
// класс Child содержит метод doMultiply который находит произведение случайно сгенерированных элементов массива.
//Задание:
// из экземпляра класса Child вызвать метод doMultiply находящий произведение случайных элементов.
class Main {
    generateRandomElem() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.round(Math.random() * 10))
        }
    }
}

class Child extends Main {
    doMultiply() {
        let res = this.generateRandomElem();
        const result = res.reduce((multi, el) => {
            el * multi
        }, 1);
        return result
    }
}

const child = new Child();
const out = child.doMultiply();
console.log(out);