import React, { useState } from "react";

// Напиши компонент, который будет показывать случайную строку 
// в h1 при нажатии на кнопку. слова хранятся в массиве


function Task21() {
    const [value, setValue] = useState();

    const arr = ['1', '2', '3', '4'];



    function show() {
        setValue(arr[Math.round(Math.random() * 3)]);
    }

    return (
        <>
            <h1>{value}</h1>
            <button onClick={show}>Click on me</button>
        </>
    )
}

export default Task21;