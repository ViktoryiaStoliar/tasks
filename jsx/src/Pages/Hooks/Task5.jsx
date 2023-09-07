import React, { useState } from 'react';

const Task5 = () => {

    const [inp, setInp] = useState('');
    const [res, setRes] = useState(['ghj', 'jvjhj', 'jvjhj']);


    function push(e) {
        setInp(e.target.value)
    }

    function save() {
        setRes([...res, inp]);
        setInp('')
    }

    function del(e) {
        const result = res.filter((el) => el !== e.target.id);
        setRes(result)
    }

    return (
        <>
            <div>{res.map((el) => <div><span>{el}</span><button id={el} onClick={del}>Удалить задачу</button></div>)}</div>
            <input value={inp} type="text" onChange={push} />
            <button onClick={save}>Добавь задачу</button>
        </>
    );
}

export default Task5;

// 5. Список задач с использованием useState: Создайте компонент списка задач,
// который позволяет пользователю добавлять и удалять задачи из списка.
