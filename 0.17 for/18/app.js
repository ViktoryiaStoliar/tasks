// 18. На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const str = `123405`;
let res = ``;

for (i = 0; i < str.length; i++){
   if(str[i] % 2 === 0) {
      res += str[i] + ` чет `
   } else {
      res += str[i] +` нечет `
   }
}
console.log(res);