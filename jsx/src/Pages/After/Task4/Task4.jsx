// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>

import img from './assets/children.png'

function Task4() {
    const arr = ['sdgfkh', 'sdgsd', 'gfkhgfk'];

    return (
        <p>
            <div>
                {arr.map((el) => <div><p>{el}</p><img src={img} alt='' width="200"/></div>)}
            </div>
        </p>
    )
}
export default Task4