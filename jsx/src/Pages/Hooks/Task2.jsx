import React, { useState } from 'react';

const Task2 = () => {

    const [value, setValue] = useState('')

const change = (e) => {
    setValue(e.target.value)
}

    return (
        <div>
            <p>{value}</p>
            <input onChange={change}></input>
        </div>
    );
}

export default Task2;


// 2. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и отображает его в реальном времени.
