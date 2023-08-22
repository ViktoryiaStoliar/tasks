import React, { useState } from 'react';

const Task4 = () => {

    const [flag, setFlag] = useState(true);

    function show() {
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    return (
        <div>
            <button onClick={show}>{flag === true ? 'Open' : 'Close'}</button>
            {flag === true ? <div><p>A</p><p>B</p><p>C</p></div> : <div></div>}
        </div>
    );
}

export default Task4;


// Сделай компонент выезжающего меню из 3 параграфов.
// по нажатию на кнопку ,,открыть,, отображаешь меню.