// 9. Мальчик идет долгим путем со школы домой. Чтобы сделать прогулку веселее, он
// складывает все номера домов, мимо которых проходит. К сожалению, не на всех
// домах написаны номера, к тому же мальчик регулярно меняет улицы по очереди,
// поэтому номера не представляются ему в определенном порядке.
// В какой-то момент во время прогулки мальчик встречает дом с написанным на
// нем 0 номером. Это настолько его удивляет, что он перестает прибавлять числа к
// своей сумме сразу после того, как видит этот дом.
// Для заданной последовательности домов определите сумму, которую получит
// мальчик. Гарантируется, что на пути всегда будет хотя бы один нулевой дом.
// Добавить проверку, что номера домов – только числа.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)


const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];
function isValid(arr_) {
    for(let i = 0; i < arr_.length; i++){
        if (!isNaN(arr_[i])) {
            return true;
        }
    }
}

function sum(arr_) {
    try{
        let bool = isValid(arr_);
        if (bool != true){
            throw new Error('Проверь первую функцию, это не массив');
        } else {
            let newArr = [];
            for (let i = 0; i < arr_.length; i++) {
                if (arr_[i] === 0) {
                    break;
                } else {
                    newArr.push(arr_[i]);
                }
            }
            // console.log(newArr);
            const res = newArr.reduce(function(sum, el) {
                return sum + el;
            }, 0)
            return res
        }
    } catch(error) {
        return error.message
    }
    
}
console.log(sum(arr));
