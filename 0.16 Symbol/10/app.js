//  10. Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.
const a = prompt(`Введите число`);
b = Math.sqrt(a);
console.log(Math.round(b)); 
console.log(Math.sqrt(a).toFixed(1)); 
console.log(Math.sqrt(a).toFixed(2));
