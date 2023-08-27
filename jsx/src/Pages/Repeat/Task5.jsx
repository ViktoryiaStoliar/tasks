// Создай компонент, который будет отслеживать количество кликов по кнопке и
// отображать это количество.отображай в h1 каждое введенное значение из input
import React, { useState } from 'react';

const Task5 = () => {

    const [count, setCount] = useState(0)

    function show() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={show}>Нажми на меня</button>
        </div>
    );
}

export default Task5;
