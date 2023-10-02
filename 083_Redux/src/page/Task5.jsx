// 5. Создайте компонент, который предоставляет две кнопки:
//  "Показать" и "Скрыть".
// При нажатии на "Показать" отображается текст, а при 
// нажатии на "Скрыть" текст скрывается.

import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "../slice/show_hide";

const Task5 = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.showHide)

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => dispatch(show())}>Show text</button>
            <button onClick={() => dispatch(hide())}>Hide text</button>
        </div>
    );
}

export default Task5;
