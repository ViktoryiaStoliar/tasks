// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company 

const str = 'hschool company'. split(' ');
// let strUp ='';
// for (let i = 0; i < str.length; i++){
//      strUP += str[i][0].toUpperCase() + str[i].slice(1) + " ";
// }
// console.log(strUp);

function showRes (str_) {
    let strUp = '';
    for (let i = 0; i < str_.length; i++){
        strUP += str_[i][0].toUpperCase() + str_[i].slice(1) + " ";
   }
   return strUp
}

let result = showRes(str);
console.log(result);