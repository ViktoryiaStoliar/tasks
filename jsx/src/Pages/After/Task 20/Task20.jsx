import React, { useState } from "react";

// получить значение из 2 инпутов и отобразить 
// это в консоль по клику на кнопку (одним useState)


function Task20() {
    const [value, setValue] = useState({ name: '', surname: '' });

    function change(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    function show() {
        console.log(value);
    }

    return (
        <>
            <input name='name' onChange={ change}></input>
            <input name='surname' onChange={change }></input>
            <button onClick={show}>Click on me</button>
        </>
    )
}

export default Task20;