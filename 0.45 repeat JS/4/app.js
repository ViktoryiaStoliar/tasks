// 4. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
    doRegistration() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            const pwd = document.querySelector('.password');
            const email = document.querySelector('.email');
            const dataForServer = {
                email: email.value,
                pwd: pwd.value
            }
            console.log(dataForServer);
        })
    }
}

const client = new Client();
client.doRegistration();