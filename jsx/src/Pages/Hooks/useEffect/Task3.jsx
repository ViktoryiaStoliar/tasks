import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Task3 = () => {

    const [data, setData] = useState('');

    async function getData() {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    }

    useEffect(() => {
        getData()
    })

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

// export default Task3;

// 3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
// данные в заголовок с использованием useEffect.
