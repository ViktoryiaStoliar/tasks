
// 1. Счетчик с использованием useState: Создай компонент React, который отображает
// числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
// состоянием счетчика. При нажатии на кнопки, значение счетчика должно
// увеличиваться или уменьшаться.

// import { useState } from "react";

// const Task1 = () => {

//     const [value, setValue] = useState(0);

//     function plus() {
//         setValue(value + 1)
//     }

//     function minus() {
//         setValue(value - 1)
//     }

//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={plus}>+1</button>
//             <button onClick={minus}>-1</button>
//         </div>
//     );
// }

// export default Task1;

// 2. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и отображает его в реальном времени.
// import React, { useState } from 'react';

// const Task1 = () => {

//     const [value, setValue] = useState('')

//     return (
//         <>
//             <h1>{value}</h1>
//             <input onChange={function change(e) {
//                 setValue(e.target.value)
//             }} type="text" />
//         </>
//     );
// }

// export default Task1;

// 3. Отображение текста с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
// отображается текст, а при нажатии на "Скрыть" текст скрывается.
// import React, { useState } from 'react';

// const Task1 = () => {

//     const [text, setText] = useState("HI")
//     const [flag, setFlag] = useState(true)

//     function seeText() {
//         if (flag === true) {
//             setText('HI');
//             setFlag(false)
//         } else {
//             setText('')
//             setFlag(true);
//         }
//     }

//     return (
//         <div>
//             <h1>{text}</h1>
//             <button onClick={seeText}>ПОКАЗАТЬ</button>
//             <button onClick={seeText}>СКРЫТЬ</button>
//         </div>
//     );
// }

// export default Task1;

// 4. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
// который позволяет пользователю выбирать цвет из списка и отображает цвет
// выбранного цвета на экране.

// import React, { useState } from 'react';

// const Task1 = () => {

//     const [color, setColor] = useState('red')

//     return (
//         <div>
//             <div style={{ backgroundColor: color, width: '35px', height: '12px' }}></div>
//             <button onClick={(e) => setColor(e.target.textContent)}>Blue</button>
//             <button onClick={(e) => setColor(e.target.textContent)}>Green</button>
//             <button onClick={(e) => setColor(e.target.textContent)}>Black</button>
//             <button onClick={(e) => setColor(e.target.textContent)}>Yellow</button>

//         </div>
//     );
// }

// export default Task1;

// 5. Список задач с использованием useState: Создайте компонент списка задач,
// который позволяет пользователю добавлять и удалять задачи из списка.

// import React, { useState } from 'react';

// const Task1 = () => {

//     // const [list, setList] = useState()
//     const array = ['сходить в магазин', 'помыть машину', 'оплатить кружки']

//     // function getDataList() {

//     // }

//     return (
//         <div>
//             <ul>
//                 <span> {array.map((el) => <li>{el}<button>    Удалить задачу</button></li>)}</span>
//             </ul>
//             {/* <input onChange={ }></input> */}
//         </div>
//     );
// }

// export default Task1;




// import React, { useState, useMemo } from 'react';

// function letSum(a, b) {
//     const sum = {a, b};
//     return sum
// }

// const Task1 = () => {

//     const [a, setA] = useState(0)
//     const [b, setB] = useState(0)

// const sum = useMemo(()=> letSum(a,b), [a,b])

//     return (
//         <div>
//             <input value={a} onChange={(e) => setA(e.target.value)} type="text" />
//             <input value={b} onChange={(e) => setB(e.target.value)} type="text" />
//             <button onClick={sum}>Посчитать сумму</button>
//         </div>
//     );
// }

// export default Task1;


// useMemo:
// 1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
// useState для хранения значений чисел и хук useMemo для кэширования
// результата суммы. При изменении значений чисел, сумма должна
// пересчитываться только тогда, когда необходимо

// import React, { useMemo, useState } from 'react';

// const Task1 = () => {

//     const [a, setA] = useState(0)
//     const [b, setB] = useState(0)
//     const [res, setRes] = useState()

//     function sum() { setRes(a + b) }

//     useMemo(sum, [a, b])

//     return (
//         <div>
//             <h1>{res}</h1>
//             <input onChange={(e => setA(+e.target.value))}></input>
//             <input onChange={(e => setB(+e.target.value))}></input>
//         </div>
//     );
// }

// export default Task1;


// 2. Разработайте компонент, который выполняет факториал числа при вводе
// значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
// вычислений для разных введенных значений и отображать их без повторных
// вычислений.

// import React, { useState, useMemo } from 'react';

// const Task1 = () => {

//     const [value, setValue] = useState(1);
//     const [res, setRes] = useState()

//     function fact(value) {
//         if (value === 1) return 1;
//         return value * fact(value - 1)
//     }

//     function showFact() {
//         if (!value) return ;
//         setRes(fact(value));
//     }

//     useMemo(showFact, [value])

//     return (
//         <div>
//             <h1>{res}</h1>
//             <input onChange={(e) => setValue(e.target.value)}></input>
//         </div>
//     );
// }

// export default Task1;

// 3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
// введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
// список чисел только при изменении N.

// import React, { useState, useMemo } from 'react';

// const Task1 = () => {

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

// 4. Напишите программу, которая принимает строку от пользователя и выводит ее в
// обратном порядке. Используй хук useState для хранения строки и хук useMemo
// для кэширования результата.

// import React, { useMemo, useState } from 'react';

// const Task1 = () => {

//     const [str, setStr] = useState('');
//     const [res, setRes] = useState()

//     function reverseStr() {
//         setRes(str.split('').reverse().join(''))
//     }

//     useMemo(reverseStr, [str])

//     return (
//         <div>
//             <h1>{res}</h1>
//             <input onChange={(e) => { setStr(e.target.value) }}></input>
//         </div>
//     );
// }

// export default Task1;


// 5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
// должен быть получен с использованием useMemo при монтировании
// компонента и кэширован для избегания повторных запросов к API при
// обновлении других частей компонента. https://api.ipify.org/?format=json

// import React, { useMemo, useState } from 'react';
// import axios from 'axios';

// const Task1 = () => {

//     const [value, setValue] = useState('')

//     async function getIP() {
//         const res = await axios.get('https://api.ipify.org/?format=json');
//         setValue(res.data.ip);
//     }

//     useMemo(getIP, [])

//     return (
//         <div>
//             <h1>{value}</h1>
//         </div>
//     );
// }

// export default Task1;


// useContext:
// 1. Создайте простое приложение для аутентификации пользователя. Используйте
// useContext, чтобы хранить информацию о текущем пользователе.

// import React, { useContext } from 'react';
// import myContext from '../../../context/context'

// const Task1 = () => {

//     const data = useContext(myContext)

//     return (
//         <div>
//             <h1>{data.id}</h1>
//             <h1>{data.name}</h1>
//             <h1>{data.surname}</h1>
//         </div>
//     );
// }

// export default Task1;

// 2. Разработайте приложение, в котором пользователь может выбирать язык
// интерфейса (например, английский и испанский). Используйте useContext, чтобы
// хранить текущий выбранный язык и переводить текст на выбранный язык в
// компонентах.

// import React, { useState, useContext } from 'react';
// import myContext from '../../../context/context';

// const Task1 = () => {

// const {value, getLang} = useContext(myContext)

//     const obj = {
//         ru: "ПРИВЕТ",
//         en: "Hi"
//     }

//     return (
//         <div>
//             <button onClick={getLang}>en</button>
//             <button onClick={getLang}>ru</button>
//             <p>{obj[value]}</p>
//         </div>
//     );
// }

// export default Task1;


// 3. Создайте приложение, которое отображает информацию о текущей роли
// пользователя (например, "Администратор" или "Пользователь"). Используйте
// useContext, чтобы хранить текущую роль и отображать ее на экране.
// import React, { useContext } from 'react';
// import myContext from '../../../context/context';

// const Task1 = () => {

//     const { role, getRole } = useContext(myContext);

//     const objRol = {
//         role1: "Администратор",
//         role2: "Пользователь"
//     };

//     return (
//         <div>
//             <button onClick={getRole}>role1</button>
//             <button onClick={getRole}>role2</button>
//             <p>{objRol[role]}</p>
//         </div>
//     );
// }

// export default Task1;

// useCallback:
// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
// счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
// оптимизировать обработчик клика на кнопке.

// import React, { useCallback, useState } from 'react';

// const Task1 = () => {

//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <button onClick={useCallback(() => setCount(count + 1), [count])}>+1</button>
//             <button onClick={useCallback(() => setCount(count - 1), [count])}>-1</button>
//             <p>Результат: {count}</p>
//         </div>
//     );
// }

// export default Task1;


// 2. Создайте компонент, который отображает список элементов с кнопками
// "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
// Используйте useCallback, чтобы оптимизировать функцию удаления элемента.

// import React, { useCallback, useState } from 'react';

// const Task1 = () => {

//     const [res, setRes] = useState(['sdfgs', 'sdfgd', 'wergw'])

//     const del = useCallback( function del(e) {
//         const filtered = res.filter((el) => el !== e.target.id);
//         setRes(filtered)
//     }, [res])

//     return (
//         <div>
//             <div>{res.map((el) => <div><span>{el}</span><button id={el} onClick={del}>Удалить</button></div>)}</div>
//         </div>
//     );
// }

// export default Task1;

// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
// на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса.
// import React, { useCallback, useState } from 'react';

// const Task1 = () => {

//     const [value, setValue] = useState(true)
//     const res = useCallback(() => value === true ? setValue(false) : setValue(true), [value])

//     return (
//         <div>
//             <p>{value === true ? "Активный" : "Неактивный"}</p>
//             <button onClick={res}>Изменить статус</button>
//         </div>
//     );
// }

// export default Task1;

// 4. Создайте компонент, который предоставляет пользователю выбор цвета из
// списка. При выборе цвета, компонент должен отображать выбранный цвет на
// странице. Используйте useCallback, чтобы оптимизировать функцию выбора
// цвета.

// 5. Создайте компонент, который позволяет пользователю добавлять и удалять
// элементы из списка. Используйте useCallback, чтобы оптимизировать функции
// добавления и удаления элементов.

// import React, { useState } from 'react';

// const Task1 = () => {

//     const [inpVal, setInpVal] = useState('')
//     const [value, setValue] = useState(['fgsdg', 'sdgsdgs', 'sdgsdgsd'])

//     function add() {
//         setValue([...value, inpVal]);
//         setInpVal('')
//     }

//     function del(e) {
//         const filtered = value.filter((el) => el !== e.target.id)
//         setValue(filtered)
//     }

//     return (
//         <div>
//             <input value={inpVal} type="text" onChange={(e) => setInpVal(e.target.value)} />
//             <div>{value?.map((el) => <div><span>{el}</span><button id={el} onClick={del}>Удалить элемент</button></div>)}</div>
//             <button onClick={add}>Добавить элемент</button>
//         </div>
//     );
// }

// export default Task1;

// useReducer:
// 1. Создайте компонент счетчика, который может увеличивать или уменьшать
// значение при нажатии на соответствующие кнопки.

// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     switch (action) {
//         case 'INCREMENT':
//             return state + 1;

//         case 'DECREMENT':
//             return state - 1;

//         default:
//             break;
//     }
// }

// const Task1 = () => {

//     const [counter, dispatch] = useReducer(reducer, 0);

//     return (
//         <div>
//             <p>{counter}</p>
//             <button onClick={() => dispatch('INCREMENT')}>+1</button>
//             <button onClick={() => dispatch('DECREMENT')}>-1</button>
//         </div>
//     );
// }

// export default Task1;






















































































































