// 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
    checkEbent() {
        document.querySelector('button').addEventListener('click', () => {
            const inp1 = document.querySelector('.inp1').value;
            const inp2 = document.querySelector('.inp2').value;
            this.doPlus(inp1, inp2);
            this.doMinus(inp1, inp2);
            this.doMultiply(inp1, inp2);
            this.doDivide(inp1, inp2);
        })
    }
    doPlus(inp1, inp2) {
        let plus = document.querySelector('.out1')
        plus.innerHTML = `Результат суммы: ${+inp1 + +inp2}`
    }
    doMinus(inp1, inp2) {
        let minus = document.querySelector('.out2')
        minus.innerHTML = `Результат разности: ${+inp1 - +inp2}`
    }
    doMultiply(inp1, inp2) {
        let multip = document.querySelector('.out3')
        multip.innerHTML = `Результат умножения: ${+inp1 * +inp2}`
    }
    doDivide(inp1, inp2) {
        let divide = document.querySelector('.out4')
        divide.innerHTML = `Результат деления: ${+inp1 / +inp2}`
    }
}

const domHtml = new DomHtml();

domHtml.checkEbent();