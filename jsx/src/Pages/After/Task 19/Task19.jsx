import React, { useState } from "react";

// Кнопка открыто меняется на закрыто по нажатию на себя


function Task19() {
    const [flag, setFlag] = useState(false);

    function show() {
        flag === true ? setFlag(false) : setFlag(true)
    }

    return (
    <>
        <button onClick={show}>{flag === true ? "Open" : "Close"}
        {flag ===true ? <div><p>A</p><p>B</p><p>C</p></div>:<div></div>}
        </button>

    </>
    )
}

export default Task19;