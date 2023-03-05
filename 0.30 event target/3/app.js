// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector('button');
const inp = document.querySelector('input')

btn.addEventListener('dblclick', function () {

    if (!/^[a-zA-Z0-9\-\_\.]+@[a-z]+\.+[a-z]+$/gm.test(inp.value)) {
        btn.style = 'background-color:red'
    }
    else {
        btn.style = 'background-color:green'
    }
}
)