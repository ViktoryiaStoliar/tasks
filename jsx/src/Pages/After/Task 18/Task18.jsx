import React, { useState } from "react";

// Сделай компонент выезжающего меню из 3 параграфов. 
// по нажатию на кнопку ,,открыть,, отображаешь меню. 


function Task18() {

    const [bool, setBool] = useState(true);

    function show() {
        bool === true ? setBool(false) : setBool(true)
    }


    return (
        <>
            <button onClick={show}>{bool === true ? 'Open' : 'Close'}</button>
        </>
    )
}

export default Task18;