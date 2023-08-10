// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
    const str = ['vika@mail.ru', 'genya@mail.ru', 'alina_mail.ru']
    return (
        <div>
        {str.filter((el) => el.includes('@'))}
        </div>
    )
}

export default Task3