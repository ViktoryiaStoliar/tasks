// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1

function Task2() {
    const arr = [3, 6, 9, 10, 5]
    return (
        <div>
            {arr.map((el) => <h1>{Math.sqrt(el)}</h1>)}
        </div>
    )
}
export default Task2