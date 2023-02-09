// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 

const date = '09/03/2023';

function isValid (date_) {
     return typeof(date_) === 'string' ? true : false;
 }

function doDate(date_) {
    const bool = isValid(date_);
    if(bool === true){
    const dateNew = date_.split('/').reverse().join('-');
    return dateNew;
    
} else return 'error' 
}
const result = doDate(date);
console.log(result);