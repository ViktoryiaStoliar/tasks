import React, { useState } from 'react';

const Task4 = () => {

    const [flag, setFlag] = useState();

    function show() {
        flag === true ? setFlag(false) : setFlag(true)
    }

    return (
        <>
            <button onClick={show} >{flag === true ? 'Open menu' : 'Not menu'}</button>
            {flag === true ? <div><p>A</p><p>B</p><p>C</p></div> : <div></div>}
        </>
    )
}

export default Task4;


// Сделай компонент выезжающего меню из 3 параграфов.
// по нажатию на кнопку ,,открыть,, отображаешь меню.