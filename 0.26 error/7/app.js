// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9^2 === 81, 1, 2^2 === 1)

const num = 9119;

function erection(num_) {
    try {
        if (typeof (num_) != 'number') {
            throw new Error("Введите число")
        } else {
            let sum = '';
            for (let i = 0; i < num_.length ; i++) {
                sum += num_[i] 
            }
            return sum
        }

    } catch (error) {
        return error.messag
    }
}

console.log(erection(num)); 
