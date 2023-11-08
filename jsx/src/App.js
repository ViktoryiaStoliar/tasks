import myContext from './context/context';
import { useState } from 'react';

// {import Task1 from './Pages/Task1/Task1';
// import Task10 from './Pages/Task10/Task10';
// import Task11 from './Pages/Task11/Task11';
// import Task2 from './Pages/Task2/Task2';
// import Task3 from './Pages/Task3/Task3';
// import Task4 from './Pages/Task4/Task4';
// import Task5 from './Pages/Task5/Task5';
// import Task6 from './Pages/Task6/Task6';
// import Task7 from './Pages/Task7/Task7';
// import Task8 from './Pages/Task8/Task8';
// import Task9 from './Pages/Task9/Task9';
// import Task12 from './Task 12/Task12';
// import Task13 from './Task 13/Task13';
// import Task14 from './Pages/Task 14/Task14';
// import Task15 from './Pages/Task 15/Task 15';
// import Task16 from './Pages/Task 16/Task16';
// import Task17 from './Pages/Task 17/Task17';
// import Task19 from './Pages/Task 18/Task18';
// import Task18 from './Pages/Task 18/Task18';
// import Task20 from './Pages/Task 20/Task20';
// import Task21 from './Pages/Task 21/Task21';
// import Task23 from './Pages/Task 23/Task23';
// import Task22 from './Pages/Task22/Task22';}

// import Task1 from "./Pages/Hooks/useState/Task1";
import TaskUseSt from './Pages/Hooks/Task_useSt';

// import Task2 from "./Pages/Hooks/Task2";
// import Task3 from "./Pages/Hooks/Task3";
// import Task5 from "./Pages/Hooks/Task5";


// import Task1 from "./Pages/Repeat/Task1";
// import Task2 from './Pages/Repeat/Task2';
// import Task3 from "./Pages/Repeat/Task3";
// import Task4 from "./Pages/Repeat/Task4";
// import Task5 from "./Pages/Repeat/Task5";
// import Task6 from "./Pages/Repeat/Task6";
// import Task7 from "./Pages/Repeat/Task7";
// import Task8 from "./Pages/Repeat/Task8";
// import Task9 from "./Pages/Repeat/Task9";


function App() {

  const [value, setValue] = useState('ru')
  const [role, setRole] = useState('Пользователь')

  const obj = {
    id: 1,
    name: "Vika",
    surname: "Stolyar",
    value,
    getLang,
    role,
    getRole
  }

  function getLang(e) {
    setValue(e.target.textContent)
  }

  function getRole(e) {
    setRole(e.target.textContent)
  }

  return (

    <myContext.Provider value={obj}>
      <div className="App">
        {/* <Task1 />
      <br />
      <br />
      <Task2 />
      <br />
      <br />
      <Task3 />
      <br />
      <br />
      <Task4 />
      <br />
      <br />
      <Task5 />
      <br />
      <br />
      <Task6 />
      <br />
      <br />
      <Task7 />
      <br />
      <br />
      <Task8 />
      <br />
      <br />
      <Task9 />
      <br />
      <br />
      <Task10 />
      <br />
      <br />
      <Task11 />
      <br />
      <br />
      <Task12 />
      <br />
      <br />
      <Task13 />
      <br />
      <br />
      <Task14 />
      <br />
      <br />
      <Task15 />
      <br />
      <br />
      <br />
      <Task16 />
      <br />
      <br />
      <br />
      <Task17 />
      <br />
      <br />
      <br />
      <Task18 />
      <br />
      <br />
      <br />
      <Task19 />
      <br />
      <br />
      <Task20 />
      <br />
      <br />
      <Task21 />
      <br />
      <br />
      <Task22 />
      <br />
      <br />
        <Task23 />*/}
        {/* <br />
      <br />
      <br />
      <Task1 />
      <br />
      <br />
      <br />
      <Task2 />
      <br />
      <br />
      <br />
      <Task3 />
      <br />
      <br />
      <br />
      <Task4 />
      <br />
      <br />
      <br />
      <Task5 />
      <br />
      <br />
      <br />
      <Task6/>
      <br />
      <br />
      <br />
      <Task7/>
      <br />
      <br />
      <br />
      <Task8/>
      <br />
      <br />
      <br />
      <Task9/> */}
        <br />
        <br />
        <br />
        {/* <Task2 /> */}
        <br />
        <br />
        <br />
        {/* <Task3 /> */}
        <br />
        <br />
        <br />
        {/* <Task5/> */}
        <br />
        <br />
        <br />
        {/* <Task1 /> */}
        <TaskUseSt/>
        <br />
        <br />
        <br />
      </div>
    </myContext.Provider>
  );
}

export default App;
