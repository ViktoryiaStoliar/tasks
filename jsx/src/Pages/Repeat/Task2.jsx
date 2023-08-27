import React, { useState } from 'react';
import style from './style.module.css'

function Task2() {
    const [flag, setFlag] = useState(false);

    function show() {
        flag === true ? setFlag(false) : setFlag(true)
    }
    // const [green, setGreen] = useState()
    return (
        <>
            <h1 className={flag === true ? style.blue : style.red}>Привет!</h1>
            <button onClick={ show}>Добавь цвет!</button>
        </>
    )
}

export default Task2;


// у тебя есть кнопка с названием ,,добавить цвет,,. по клику на кнопку
//  твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть
//   в первоначальное состояние