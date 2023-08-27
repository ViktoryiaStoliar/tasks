import React, { useState } from 'react';

const Task7 = () => {

    const arr = ['Vika', 'Genya', 'Alina', 'Ksyusha']

    const [value, setValue] = useState('');

    function show() {
        for (let i = 0; i < arr.length; i++) {
            setValue(arr[i])
        }
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={show}>Click on mee</button>
        </div>
    );
}

export default Task7;


// Напиши компонент, который будет показывать случайную
// строку в h1 при нажатии на кнопку. слова хранятся в массиве
