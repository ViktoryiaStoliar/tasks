// 18. На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

const num = "456978210";
let res = " ";
for (let i = 0; i < num.length; i++) {
   if (num[i] % 2 === 0) {
      res += num[i] + ` - четн.; `
   } else {
      res += num[i] + `  - нечетн.; `
   }
}
console.log(res);

