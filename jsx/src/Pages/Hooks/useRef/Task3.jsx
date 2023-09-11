import React, { useRef } from 'react';

const Task3 = () => {

    const count = useRef(0)

    function change() {
        count.current.textContent = +count.current.textContent + 1;
    }

    return (
        <div>
            <p ref={count}>{count.current}</p>
            <button onClick={change}>Click on me</button>
        </div>
    );
}

// 3. Реализуйте компонент, который отслеживает количество кликов на кнопку с
// помощью useRef и выводит это число при каждом клике.


export default Task3;
