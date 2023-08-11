// 5. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Проверить
// значения 2 input на пустоту. Структура state:

import { useState } from "react";

function Task11() {

    const [inpValue1, setInpValue1] = useState({name: '', surname: ''});
    // const [inpValue, setInpValue2] = useState();

    function changeValue1(e) {
        setInpValue1({ ...inpValue1, [e.target.name]: e.target.value})
    }

    function isValid() {
        try {
            if (inpValue1.name.length !== 0 || inpValue1.surname.length !== 0) throw new Error('empty');
            alert('inp is correct')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <input type="text" name="inp1" id="" onClick={ changeValue1} />
            <input type="text" name="inp2" id="" onClick={changeValue1 } />
            <button onClick={ isValid}>ClickOnMe</button>
        </div>
    )
}

export default Task11;