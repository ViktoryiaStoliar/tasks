// 2. По событию изменения input отображать в консоль каждое вводимое значение

import { useState } from "react"


function Task7() {
    const [inp, setInp] = useState('');

    function show(e) {
        setInp(e.target.value)
    }

    return (
        <div>
            <h1>{inp}</h1>
            <input onChange={show} input/>
        </div>
    )
}

export default Task7