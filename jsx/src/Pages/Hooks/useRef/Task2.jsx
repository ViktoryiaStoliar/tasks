import { useRef } from "react";

const Task2 = () => {

    const data = useRef();
    const arr = ['red', 'green', 'blue'];

    function focusText() {
        const colorRand = arr[Math.round(Math.random() * arr.length)]
        data.current.style.backgroundColor = colorRand
    }

    return (
        <div>
            <input ref={data} onFocus={focusText} ></input>
        </div>
    );
}

// 2. Создайте компонент, который при фокусе на текстовом поле добавляет
// background.

export default Task2;
