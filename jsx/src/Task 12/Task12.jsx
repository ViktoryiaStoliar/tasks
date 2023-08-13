// 6. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
// возвращает кнопку и параграф, в котором отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
// на кнопку автоматически прибавлялась +1 к стейту number

import { useState } from "react";

function Task12() {
    const [value, setValue] = useState(1);

    function doSum() {
        setValue(value + 1)
    }

    return (
        <div>
            <p>{value}</p>
            <br></br>
            <button onClick={ doSum}> +1 </button>
        </div>
    )
}

export default Task12
