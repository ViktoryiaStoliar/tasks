// 3. Создайте компонент текстового поля, 
// который позволяет пользователю вводить
// текст и отображает его в реальном времени.
import { useDispatch, useSelector } from "react-redux";
import { data } from "../slice/inputValue";


const Task3 = () => {

    const state = useSelector(state => state.inputValue);
    const dispatch = useDispatch();

    function show(e) {
        dispatch(data(e.target.value))
    }

    return (
        <div>
            <h1>{state}</h1>
            <input onChange={show}></input>
        </div>
    );
}

export default Task3;
