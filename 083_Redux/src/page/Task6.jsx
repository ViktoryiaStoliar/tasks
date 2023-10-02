// 6. Создайте компонент, который отображает проверку почты (true, false) 
// на валидность регулярному выражению. Валидатор состоит из Input для 
// ввода почты и кнопки для запуска валидатора.

import { useDispatch, useSelector } from "react-redux";
import { isValid, fill } from "../slice/validationEmail";

const Task6 = () => {

    const dispatch = useDispatch();
    const { result } = useSelector(state => state.validationEmail)

    return (
        <div>
            <input onChange={(e) => dispatch(fill(e.target.value))}></input>
            <button onClick={ () => dispatch(isValid())}>isValid</button>
            <h1>{String(result)}</h1>
        </div>
    );
}

export default Task6;
