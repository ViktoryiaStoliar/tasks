// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

const n = 10;
let arr1 = [];
let arr2 = [];

for (i = 0; i < n; i++){
   let value = prompt();
   if (i < 5){
    arr1.push(value);
   } else {
    arr2.push(value);
   } 
}

let sort1 = arr1.sort();
let sort2 = arr2.sort();

sort1.join() == sort2.join() ? true : false;
