// 12. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100.

// let Str = 'Vika';
// function str(){
//     let NewStr = ' ';
//     return () => {
//         NewStr +=Str
// console.log(NewStr);
//     }
//  }
//  const wrapper = str()

//  wrapper()
//  wrapper()
//  wrapper()
//  wrapper()
//  wrapper()
//  wrapper()

function gener() {
    return function () {
        console.log(Math.floor(Math.random() * 100));
    }
}

const result = gener();
result();
result();
result();