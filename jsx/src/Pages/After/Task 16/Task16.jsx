import React, { useState } from "react";

// у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача отобразить в h1 ,,привет,,. 
// при повторном клике на кнопку ,,поздороваться,, убирать ,,привет,, в h1 

function Task16() {

    const [num, setNum] = useState('');
    // let flag = true;
    const [flag, setFlag] = useState(true)


    function show() {
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
            <button onClick={show}>Hi</button>
        </>
    )
}

export default Task16;