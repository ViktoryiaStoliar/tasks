import React, { useState } from 'react';

const Task3 = () => {

    const [flag, setFlag] = useState(true);

    function show() {
        flag === true ? setFlag(false) : setFlag(true)
    }

    return (
        <>
            <button onClick={show}>{flag === true ? 'Open' : 'Close'}</button>
        </>
    )
}

export default Task3;


// Текст кнопки открыто меняется на закрыто по нажатию на себя