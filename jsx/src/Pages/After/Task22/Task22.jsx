import React, { useState } from "react";

// у вас есть 3 кнопки: о нас, цена, главная страница
// в h1 текст того на какую кнопку вы нажали
// (если нажали на ,,цена,, отображать ,,цена,, в h1)

function Task22() {

    const [value, setValue] = useState('');

    function show(e) {
        setValue(e.target.textContent)
    }

    return (
        <>
            <h1>{value}</h1>
            <button onClick={show}>О нас</button>
            <button onClick={show}>Цена</button>
            <button onClick={show}>Главная страница</button>
        </>
    )
}

export default Task22;