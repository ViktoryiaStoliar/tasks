import React, { useState } from 'react';

const Task3 = () => {

    const { value, setValue } = useState('')
    const { flag, setFlag } = useState(true);

    function res() {
        if (flag === true) {
            setValue('Приветики!');
            setFlag(false)
        } else {
            setValue('');
            setFlag(true)
        }
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={res}>Пoказать</button>
            <button onClick={res}>Скрыть</button>
        </div>
    );
}

export default Task3;


// 3. Отображение текста с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
// отображается текст, а при нажатии на "Скрыть" текст скрывается.
