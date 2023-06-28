interface iArray {
    id: number;
    title: string;
    count: number;
    price: number
}
const arr: iArray[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

// {function find(arr: iArray[]): iArray[] {
//     const filtered = arr.filter((el) => {
//         if (el.count > 10) {
//             return el
//         }
//     }) 
//     return filtered
// }

// const res = find(arr);
// console.log(res);}


// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
// {
//     function getAllGoods(arr: iArray[]): string[] {
//         let reversGoods: string[] = [];
//         for (let i = arr.length - 1; i >= 0; i--) {
//             reversGoods.push(arr[i]["title"]);
//         }
//         return reversGoods
//     }
//     const res: string[] = getAllGoods(arr);
//     console.log(res);
// }


// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
// {function getGoods3(arr: iArray[]): string[] {
//     let doArrGoods: string[] = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]['count'] % 3 === 0) {
//             doArrGoods.push(arr[i]["title"]);
//         }
//     }
//     return doArrGoods
// }
// console.log(getGoods3(arr));}


// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...
// {function getAllCoast(arr: iArray[]): number {
//     let res: number = arr.reduce((sum, el) => {
//         return sum + (el.price * el.count)
//     }, 0);
//     return res
// }
// console.log(getAllCoast(arr));}

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
// {function doMuxPrice(arr: iArray[]): number {
//     let res: number = arr[0].price
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].price > res) {
//             res = arr[i].price
//         }
//     }
//     return res
// }
// console.log(doMuxPrice(arr));}

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
// {function doAverageArr(arr: iArray[]): number {
//     const res: number = arr.reduce((sum: number, el:iArray) => {
//         return sum + el.price
//     }, 0)
//     return res / arr.length
// }
// console.log(doAverageArr(arr));}


// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
// {function doMaxPrice(arr: iArray[]): number {
//     const res: number[] = arr.map((el: iArray) => {
//         return el.count * el.price
//     })
//     return Math.max(...res)
// }
// console.log(doMaxPrice(arr));}

// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
// {const str: string[] = ['vika@mail.ru', 'genya@mail.ru', 'vika@mail.ru']
// function deleteDubl(str:string[]) {
//     let newstr: string[] = []
//     for (let i = 0; i < str.length; i++) {
//         if (!newstr.includes(str[i])) {
//             newstr.push(str[i])
//         }
//     }
//     return newstr
// }
// console.log(deleteDubl(str));}


// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
// {interface iStyle {
//     "name": string;
//     "value": number;
// }

// const objArray: iStyle[] = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }]

// function doObj(objArray: iStyle[]) {
//     let obj = {};
//     for (let i = 0; i < objArray.length; i++) {
//         obj[objArray[i].name] = objArray[i].value
//     }
//     return obj
// }
// console.log(doObj(objArray));}

// 10. У вас есть массив объектов вида приведенного в приложении. Пользователь
// вводит значение id: например, 1. Необходимо отобразить в консоль найденный
// объект используя алгоритм бинарного поиска.


// 11. У вас есть массив строковых значений. Необходимо вывести количество
// дубликатов в массиве:
// [1, 2, 1, 2, 3, 4, 5, 1] -> 3


// 12. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование


// 13. Реализовать функцию f: при вызове f(1, 2, 3) -> вернет 6, при вызове f(1)(2)(3)(), тоже
// вернет 6. Использовать каррирование


