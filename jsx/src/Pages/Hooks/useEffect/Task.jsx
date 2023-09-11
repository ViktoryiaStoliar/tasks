// 2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
// который увеличивает значение счетчика на 1 каждую секунду с использованием
// useEffect.

import React, { useEffect, useState } from 'react';

const Task = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setValue(value + 1);
        }, 1000);
    })

    return (
        <div>
            <p>{value}</p>
        </div>
    );
}

// export default Task;
