import React, { useState } from 'react';

const TaskUseSt = () => {

    // { 1 task: Создайте компонент, который отображает кнопку и счетчик. При каждом 
    // нажатии на кнопку значение счетчика должно увеличиваться на 1.

    // const [value, setValue] = useState(0);

    // function plusOne (){
    //     setValue(value + 1)
    // }

    // return (
    //     <div>
    //         <button onClick={plusOne}>+1</button>
    //         <h1>{value}</h1>
    //     </div>
    // );
    // }

    // { 2 Task: Создать компонент с полем ввода имени и кнопкой "Привет!". При вводе имени
    // в поле и нажатии на кнопку компонент должен отображать приветственное сообщение \
    // с имененм, введенным пользователем.

    // const [name, setName] = useState('')

    // function greeting(e) {
    //     setName(e.target.value)
    // }

    // return (
    //     <>
    //         <h1>Hello, {name}!</h1>
    //         <input type="text" onChange={greeting} />
    //     </>
    // )
    // }

    // { Task 3: Создайте компонент, который отображает счетчик и кнопку
    // "Сброс". При нажатии на кнопку счетчик должен сбрасываться  в ноль.
    // Используйте useState, чтобы управлять значением счетчика.

    // const [value, setValue] = useState(0);

    // function dropping() {
    //     setValue(0)
    // }

    // function count(e) {
    //     setValue(e.target.value);
    // }

    // return (
    //     <>
    //         <input type="text" onChange={count} />
    //         <h1>{ value}</h1>
    //         <button onClick={dropping}>Сброс</button>
    //     </>
    // );
    // }

    //     { Task 4: Создайте компонент с кнопкой "Изменить цвет текста". При нажатии
    //     на кнопку текст внутри компонент должен менять цвет рандомно. 

    // const arr = ["green", "blue", "red", "orange", "pink"];

    // const [color, setColor] = useState("black");

    // function show() {
    //     setColor(arr[Math.round(Math.random() * 3)])
    // }

    // return (
    //     <>
    //         <h1 style={{ color: color }}>Hello, my dear friends!</h1 >
    //         <button onClick={show}>Изменить цвет текста</button>
    //     </>
    // );
    // }

    // {Task5: Создайте компонент с кнопкой "Показать/Скрыть текст". При
    // нажатии на кнопку текст должен появляться или исчезать.

    // const [value, setValue] = useState('')

    // function res() {
    //     value === true ? setValue(false) : setValue(true)
    // }

    // return (
    //     <>
    //         <h1>{value === true ? 'Hello, my dear friends!' : ' '}</h1>
    //         <button onClick={res}>Показать/Скрыть текст</button>
    //     </>
    // );
    // }

}

export default TaskUseSt;
