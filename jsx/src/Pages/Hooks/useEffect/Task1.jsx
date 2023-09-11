import React, { useEffect, useState } from 'react';

const Task1 = () => {

    const [data, setData] = useState('')

function inp(e){e}

useEffect((e)=>{
    console.log()
}, [data])

    return (
        <div>
            <input onChange={}></input>       
            <button onClick={}>Отправить</button>     
        </div>
    );
}

export default Task1;


// 1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
// который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
// useState для хранения значения введенного текста и хук useEffect для
// отслеживания изменений этого значения. При каждом изменении значения в
// поле ввода, выводить его в консоль с помощью useEffect.
