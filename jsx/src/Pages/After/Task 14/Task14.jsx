import React, { useState } from "react";

function Task14() {
    const [inp, setInp] = useState('')

    function change(event) {
        setInp(event.target.value)
    }

    function click() {
        console.log(inp);
    }

    return (
        <>
            <button onClick={click}>click on me</button>
            <input onChange={change}></input>
        </>
    )
}

export default Task14