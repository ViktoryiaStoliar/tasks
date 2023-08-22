import React, { useState } from 'react';

const Task1 = () => {

    const [num, setNum] = useState('');
    const [flag, setFlag] = useState(true);

    function change() {
        if (flag === true) {
            setNum('Hi')
            setFlag(false)
        } else {
            setNum('')
            setFlag(true)
        }
    }

    return (
        <>
            <h1>{num}</h1>
            <button onClick={change}>Поздороваться</button>
        </>
    );
}

export default Task1;


// у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку
// твоя задача отобразить в h1 ,привет, при повторном клике на кнопку
// ,,поздороваться,, убирать ,,привет,, из h1 