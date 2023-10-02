// 4. Создайте компонент формы. По клику на кнопку 
// собрать данные из input и
// проверить вводимую строку на палиндром


import { useDispatch, useSelector } from "react-redux";
import { fill, check } from "../slice/palindrom";


const Task4 = () => {

    const dispatch = useDispatch();
    const { input, res } = useSelector(state => state.palindrom)

    function callFillInput(e) {
        dispatch(fill(e.target.value))
    }

    return (
        <div>
            <h1>{input}</h1>
            <h1>{String(res)}</h1>
            <input onChange={callFillInput}></input>
            <button onClick={() => dispatch(check())}>check palindrom</button>
        </div>
    );
}

export default Task4;
