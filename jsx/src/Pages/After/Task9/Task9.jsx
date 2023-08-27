// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту

import { useState } from "react";

function Task9() {

    const [ inpValue, setInpValue ] = useState();

    function doMail(e) {
        setInpValue(e.target.value)
    }

    function isValid() {
        try {
            if (!/^[a-zA-Z0-9-_]+@[a-z]{2,10}\.[a-z]{2,10}/gm.test(inpValue)) throw new Error('некоректный мэйл')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <input type='text' onChange={doMail} />
            <button onClick={isValid}>clickOnMe</button>
        </div>
    )
}

export default Task9