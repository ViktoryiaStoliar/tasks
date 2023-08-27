import React, { useState } from "react";
import style from './style.module.css'
// у тебя есть кнопка с названием ,,добавить цвет,,. 
// по клику на кнопку твоя задача поменять цвет шрифта h1. 
// при повторном клике цвет вернуть в первоначальное состояние 


function Task17() {

    const [flag, setFlag] = useState(false);

    function show() {
        if (flag === true){
            setFlag(false)
    } else {
        setFlag(true)
    }}

    return (
        <>
            <h1 className={flag === true ? style.text: style.color}>Привет</h1>
            <button onClick={show}>добавить цвет</button>
        </>
    )
}

export default Task17;