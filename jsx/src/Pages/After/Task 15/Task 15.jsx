import React, { useState } from "react";

function Task15() {

    const [num, setNum] = useState(0);

    function plus() {
        setNum(num + 1)
    }

    function minus() {
        setNum(num - 1)
    }

    return (
        <>
            <h1>{num}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}

export default Task15;