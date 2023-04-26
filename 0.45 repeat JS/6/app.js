// 7. На сервере реализуйте возможность регистрации doRegistration. Если почта
// клиента уникальна и массив репозитория не содержит такую почту, то сохранить
// клиентский объект в массив

class Server {
    middleware() {

    }

    controller(obj) {
        try {
            const serv = this.service(obj);
            return serv;
        } catch (error) {
            return error.message
        }
    }

    service(obj) {
        const rep = this.repository(obj);
        return rep
    }


    repository(obj) {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];


        const filtered = data.filter((el) => el.email === obj.email)
        if (filtered.length > 0) throw new Error('совпадение');
        const hashPwd = this.generatePwd(obj.pwd);
        const objToArr = { id: data.length + 1, ...obj, pwd: hashPwd };
        data.push(objToArr);

        return data;
    }

    generatePwd(pwd) {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const newPwd = [];
        for (let i of pwd) {
            let index = alphabet.indexOf(i);
            newPwd.push(alphabet[index + 3])
            // console.log(newPwd);
        }
        return newPwd.join('')
    }
}

class Client {
    doRegistration() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            const pwd = document.querySelector('.password');
            const email = document.querySelector('.email');
            const div = document.querySelector('div')
            const dataForServer = {
                email: email.value,
                pwd: pwd.value
            }
            const server = new Server();
            const res = server.controller({ email: email.value, pwd: pwd.value })
            div.innerHTML = JSON.stringify(res)
        })
    }
}

const client = new Client();
client.doRegistration();


