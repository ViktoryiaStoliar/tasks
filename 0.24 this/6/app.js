// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество 
// своих вызовов

function call(){
    let count = 0;
    return () => {
        count++
        console.log(count);
    }
}

const wrapperCall = call()

wrapperCall()
wrapperCall()
wrapperCall()