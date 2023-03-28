// 4. Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 

class Word {
    checkEvent() {
        document.querySelector('button').addEventListener('click', () => {
            const inp1 = document.querySelector('.inp1');
            const inp2 = document.querySelector('.inp2');
            const div = document.querySelector('div');
            this.isAnagram(inp1.value, inp2.value)
        })
    }

    isAnagram(inp1, inp2) {
        try {
            let first = inp1.split('').sort().join('');
            let second = inp2.split('').sort().join('');
            if (first === second) {
                alert(true)
            } else (false)

        } catch (er) {
            alert(er.message)
        }
    }
}
const word = new Word();
word.checkEvent()