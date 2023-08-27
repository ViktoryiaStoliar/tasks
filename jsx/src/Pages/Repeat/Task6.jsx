// получить значение из 2 инпутов и отобразить
// это в консоль по клику на кнопку (одним useState)

import React, { useState } from 'react';

const Task6 = () => {

    const [data, setData] = useState({ inp1: '', inp2: '' });

    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const res = () => {
        console.log(data);
    }

    return (
        <>
            <input name='inp1' onChange={change}></input>
            <input name='inp2' onChange={change}></input>
            <button onClick={res}>Click on Me</button>
        </>
    )
}

export default Task6;
