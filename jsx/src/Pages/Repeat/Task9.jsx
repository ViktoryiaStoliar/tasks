// import React, { useState } from 'react';

// const Task9 = () => {

//     const [value, setValue] = useState('')

//     function show() {
//         alert(eval(value))
//     }
//     function change(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <div>
//             <input onChange={change}></input>
//             <button onClick={show}>Button</button>
//         </div>
//     );
// }

// export default Task9;


// // сделайте инпут в который вы пишете математическое выражение
// // по клику на кнопку вы высчитываете результат мат выражения
// // (eval()) и отображаете результат в h1
import React, { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';

function Task9() {

  const [ip, setIp] = useState('');

  // async function getIp() {
  //   const res = await axios.get('https://api.ipify.org/?format=json')
  //   console.log(res);
  //   setIp(res.data.ip)
  // };

  useEffect(() => {
    setIp('Hi')
  }, [])

  return (
    <>
      <div>
        <h1>{ip}</h1>
        {/* <p>{ip}( This is your IP address...probably :P )</p> */}
      </div>
    </>
  );
}

export default Task9;;