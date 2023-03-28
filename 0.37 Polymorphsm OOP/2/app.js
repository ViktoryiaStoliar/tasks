// 2. Реализуйте класс NumberArray. NumberArray хранит функцию showArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию showArr. Необходимо переопределить showArr из базового
// класса и записать в переменную используя метод super. Далее дополняем
// переопределенный метод отображением результата в console.

class NumberArray {
    showArr() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(Math.round(Math.random() * 10))
        }
        return arr
    }
}

class ConsoleArray extends NumberArray{
    showArr(){
        const res = super.showArr();
        console.log(res);
    }
}

const consoleArray = new ConsoleArray();
consoleArray.showArr()