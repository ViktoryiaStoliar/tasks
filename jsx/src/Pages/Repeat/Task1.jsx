import React, { useState } from 'react';

const Task1 = () => {

    const [data, setData] = useState('');
    const [flag, setFlag] = useState(true);

function res (){
    if (flag === true) {
        setData('Hi') 
        setFlag(false)
    } else {
        setData('')
        setFlag(true)
    }
}
    
    return (
        <>
        <h1>{data}</h1>
        <button onClick={res}>Поздороваться!</button>
        </>
    )
}

   export default Task1;


// у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку
// твоя задача отобразить в h1 ,привет, при повторном клике на кнопку
// ,,поздороваться,, убирать ,,привет,, из h1 