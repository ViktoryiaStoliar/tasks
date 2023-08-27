// 2. По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром

import { useState } from 'react';

function Task8() {
    const [inpValue, setInpValue] = useState();

    function doInpValue(e) {
        setInpValue(e.target.value)
    }

    function isPalindrom() {
        try {
            if (inpValue !== inpValue.split('').reverse().join('')) throw new Error ('это слово не явл палиндром')
        alert ('слово - палиндром')
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <div>
            <input type='text' onChange={doInpValue} />
            <button onClick={isPalindrom}>clickOnMe</button>
        </div>
    )
}

export default Task8;

