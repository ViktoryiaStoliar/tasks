// 7. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
// возвращает 2 кнопки и параграф, в котором отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
// на кнопку +1 автоматически прибавлялась +1 к стейту numberю При клике на -1
// вычиталось 1 числовое значение

import { useState } from "react";

function Task13() {
    const [value, setValue] = useState(1);

    function doSum() {
        setValue(value + 1)
    }

    function doMinus() {
        setValue(value - 1)
    }

    return (
        <div>
            <p>{value}</p>
            <br></br>
            <button onClick={doSum}> +1 </button>
            <button onClick={doMinus}> -1 </button>
        </div>
    )
}

export default Task13
