import { useRef } from "react";

const Task1 = () => {

    const font = useRef(10);
    const teg = useRef()

    function change() {
        font.current = font.current + 1;
        teg.current.style.fontSize = `${font.current}px`
    }

    return (
        <div>
            <p ref={teg}>HI</p>
            <button onClick={change}>+1px</button>
        </div>
    );
}

// 1. Создайте компонент, который при каждом клике на кнопку увеличивает размер
// шрифта текста в элементе на странице.

export default Task1;
