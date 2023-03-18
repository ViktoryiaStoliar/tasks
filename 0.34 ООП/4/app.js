// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {
    constructor(n) {
        this.n = n;
    }

    findChet() {
        const array = [];
        for (let i = 0; i < this.n; i++) {
            array.push(Math.round(Math.random() * 10))
        }
        const doChet = array.filter((el) => el % 2 === 0)

        return `${doChet} - длина массива: ${doChet.length}`

    }
}

const mathcalculation = new MathСalculation(10);
const res = mathcalculation.findChet();
console.log(res);