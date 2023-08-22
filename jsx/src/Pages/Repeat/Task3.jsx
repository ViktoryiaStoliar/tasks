import React, { useState } from 'react';

const Task3 = () => {

    const [value, setValue] = useState('Open');
    const [flag, setFlag] = useState(true)

    function status() {
        if (flag === true) {
            setValue('Open');
            setFlag(false)
        } else {
            setValue ('Close')
            setFlag (true)
        }
    }

    return (
        <div>
            <button onClick={ status}>{value}</button>
        </div>
    );
}

export default Task3;


// Текст кнопки открыто меняется на закрыто по нажатию на себя