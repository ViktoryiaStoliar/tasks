import React, { useState } from "react";

// сделайте инпут в который вы пишете математическое выражение
// по клику на кнопку вы высчитываете результат мат выражения 
// (eval()) и отображаете результат в h1

function Task23() {

    const [value, setValue] = useState('');

    function change(e) {
        setValue(e.target.value)
    }

    function show() {
        alert(eval(value))
    }

    return (
        <>
            {/* <h1>{value}</h1> */}
            <input onChange={change}></input>
            <button onClick={show}>Result</button>
        </>
    )
}

export default Task23;