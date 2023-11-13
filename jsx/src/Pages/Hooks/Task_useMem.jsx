import React, { useMemo, useState } from 'react';

const TaskUseMem = () => {

    // {Task 1: Создайте компонент, который отображает сумму двух чисел. 
    // Используйте хук useState для хранения значений чисел и хук
    // useMemo для кеширования результата суммы. При изменении значений чисел,
    // сумма должна пересчитываться только тогда, когда необходимо.

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [res, setRes] = useState();

    function result() {
        setRes(value1 + value2)
    }

    useMemo(result, [value1, value2])

    return (
        <div>
            <p>{res}</p>
            <input onChange={(e) => setValue1(+e.target.value)}></input>
            <input onChange={(e) => setValue2(+e.target.value)}></input>
        </div>
    );
    // }
}

export default TaskUseMem;
