// 7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

let Str = 'Vika';
function str(){
    let NewStr = ' ';
    return () => {
        NewStr +=Str
console.log(NewStr);
    }
 }
 const wrapper = str()

 wrapper()
 wrapper()
 wrapper()
 wrapper()
 wrapper()
 wrapper()