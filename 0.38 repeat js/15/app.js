// 15. Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
// multArr, которая заполняет и возвращает массив из 5 рандомных элементов. Класс
// ConsoleArray является производным по отношению к базовому, родительскому
// NumberArray и содержит функцию multArr. Необходимо переопределить multArr
// из базового класса записав в переменную используя метод super. Далее посчитать
// произведение всех элементов массива используя reduce

class NumberArray {
    
    multArr() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.round(Math.random() * 10))
        }
        return arr
    }
}

class ConsoleArray extends NumberArray {
    multArr() {
        const arr = super.multArr();
        const res = arr.reduce((pr, el) => pr * el, 1)
        return res
    }
}

const consoleArray = new ConsoleArray();
console.log(consoleArray.multArr()); 