// 7. Создайте компонент, который отображает сумму значений input. Компонент
// состоит из Input для ввода математического значения и кнопки сложения для
// высчитывания результата внутри строки.

import { useDispatch, useSelector } from "react-redux";
import {fill1, fill2, sum } from "../slice/mathCalculation";

const Task7 = () => {

const dispatch = useDispatch();
const {result } = useSelector(state => state.mathCalculation)

    return (
        <div>
            <input onChange={(e) => dispatch(fill1(e.target.value))}></input>
            <input onChange={(e) => dispatch(fill2(e.target.value))}></input>
            <button onClick={() => dispatch(sum())}>Вычислить результат</button>
            <h1>{result}</h1>
        </div>
    );
}

export default Task7;
