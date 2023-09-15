import React, { useState } from 'react';

const Task8 = () => {

    const [value, setValue] = useState('');

    function show(e) {
        setValue(e.target.textContent)
    }
    
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={show}>О НАС</button>
            <button onClick={show}>ЦЕНА</button>
            <button onClick={show}>ГЛАВНАЯ СТРАНИЦА</button>
        </div>
    );
}

export default Task8;

// у вас есть 3 кнопки: о нас, цена, главная страница
// в h1 текст того на какую кнопку вы нажали
// (если нажали на ,,цена,, отображать ,,цена,, в h1)


const Task1 = () => {

    //     const [value, setValue] = useState();
    //     const [list, setList] = useState([]);
    
    //     function getList() {
    //         const arr = [];
    
    //         for (let i = 0; i < value; i++) {
    //             arr.push(i)
    //         }
    
    //         setList(arr)
    //     }
    
    //     useMemo(getList, [value])
    
    //     return (
    //         <div>
    //             {list.map((el, i) => <p key={i}>{el}</p>)}
    //             <input onChange={(e) => setValue(e.target.value)}></input>
    //         </div>
    //     );
    // }
    
    // export default Task1;