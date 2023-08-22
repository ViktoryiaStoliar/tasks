import React, { useState } from 'react';
import style from './style.module.css'

const Task2 = () => {

    const [flag, setFlag] = useState(true);

    function show() {
        if (flag === true) {
            setFlag(false);

        } else {
            setFlag(true)
        }
    }

    return (
        <div>
            <h1 className={flag === true ? style.red : style.blue}>Viktoriya</h1>
            <button onClick={show}>Добавь увета</button>
        </div>
    );
}

export default Task2;


// у тебя есть кнопка с названием ,,добавить цвет,,. по клику на кнопку
//  твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть
//   в первоначальное состояние