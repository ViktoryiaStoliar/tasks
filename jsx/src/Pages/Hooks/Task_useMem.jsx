import React, { useMemo, useState } from 'react';

const TaskUseMem = () => {

    // {Task 1: Создайте компонент, который отображает сумму двух чисел. 
    // Используйте хук useState для хранения значений чисел и хук
    // useMemo для кеширования результата суммы. При изменении значений чисел,
    // сумма должна пересчитываться только тогда, когда необходимо.

    const arr = [1, 2, 3, 4, 5];

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    function plus() {
        setValue1(arr[Math.round(Math.random() * 3)]) + setValue2(arr[Math.round(Math.random() * 3)])
    }
    // const plus = useMemo(() => {
    //     return )

    return (
        <div>
            <h1>{value1 + value2}</h1>
            <button onClick={plus}>Показать результат</button>
        </div>
    );
    // }
}

export default TaskUseMem;
