// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+= 
import { useState } from 'react'

function Task6() {
    const [ inpPwd1, setInpPwd1 ] = useState('');
    const [ inpPwd2, setInpPwd2 ] = useState('');

    function changePwd1(e) {
        setInpPwd1(e.target.value)
    }
    function changePwd2(e) {
        setInpPwd2(e.target.value)
    }
    function isValid(){
        try {
            if (inpPwd1 !== inpPwd2) throw new Error ('Пароли не совпадают')
            alert(true)
        } catch (error) {
            alert (error.message)
        }
    }

    return (
        <div>
            <input onChange={changePwd1}></input>
            <input onChange={changePwd2}></input>
            <button onClick={isValid}>clickOnMe</button>
        </div>
    )
}

export default Task6