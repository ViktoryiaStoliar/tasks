// 4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
// значения 2 input

import { useState } from 'react'

function Task10() {
    const [ inpValue1, setInpValue1 ] = useState();
    const [ inpValue2, setInpValue2 ] = useState();

    function changeValue1(e) {
        setInpValue1(e.target.value)
    }
    function changeValue2(e) {
        setInpValue2(e.target.value)
    }

    function compare() {
        try {
            if (inpValue1 !== inpValue2) throw new Error('не совпадают значения')
            alert ('совпадают')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <input className='inpValue' onClick={changeValue1} />
            <input className='inpValue2' onClick={changeValue2} />
            <bitton onClick={compare}>clickOnMe</bitton>
        </div>
    )
}

export default Task10;