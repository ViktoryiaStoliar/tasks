// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
// {const array: number[] = [1, 2, 3, 4, 5]
// const resFilter: number[] = array.filter((el) => el % 2 != 0 ? true : false);
// const resReduce: number = array.reduce((sum, el) => el + sum, 0)
// console.log(resReduce);}


// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a.
// {const str: string | string[] = 'FGhgfhs fakjhka abhgjh'.split(' ')
// const newStr: string[] = [];
// for (let i = 0; i < str.length; i++) {
//     if (str[i].includes('a')) {
//         newStr.push(str[i])
//     }
// }
// console.log(newStr);}

// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
// {const n: number = 5;
// const arr: number[] = [];
// for (let i = 0; i < n; i++) {
//     let num = +prompt();
//     if (!isNaN(num)) {
//         arr.push(num)
//     }
// }
// const res: number = arr.reduce((el, sum) => {
//     return sum + el
// }, 0)
// console.log(res);}


// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
// {const arrStr: string[] = [];
// for (let i = 0; i < 3; i++) {
//     let num: string = prompt();
//     arrStr.push(num)
// };
// const res: boolean = arrStr.some((el) => {
//     if (el.length > 5) return true
// })
// console.log(res);}


// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
// {const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const filer1: number[] = arr.filter((el) => el % 3 == 0 && el % 2 != 0 ? true : false)
// console.log(filer1);}

// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.
// {const arr: string[] = ['asgh', 'jahsdg', 'hgasj', 'ashkjd'];
// let str: string = '';
// arr.forEach((el) => {
//     str += el
// })
// console.log(str);

// const res: string = arr.reduce((sum, el) => {
//     return sum + el
// }, '')
// console.log(res);}

// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.
// {const n: number = 5;
// let arr: number[] = [];
// for (let i = 0; i < n; i++) {
//     let num = +prompt();
//     if (!isNaN(num)) {
//         arr.push(num)
//     }
// }
// console.log(arr);}

// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
// {const str: string[] = ['анна', 'sdjhs', 'ghg'];
// const res: string[] = str.filter(el => el.toLowerCase() === el.toLowerCase().split(' ').reverse().join(' '))
// console.log(res);}


// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
// {const arr: (string | number)[] = ['ghg', 'ghg', 5, 5, 1, 0];
// let newArr: (string | number)[] = []
// for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);}

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
// {const arrStr: string[] = ['fjgfjhe', 'euioui', 'iyuoyiuyqwueglqjhwv'];
// let newArr: string[] = []
// for (let i = 0; i < arrStr.length; i++) {
//     if (/[qwrtypsdfghjklzxcvbnm]/gm.test(arrStr[i])) {
//         newArr.push(arrStr[i])
//     }
// }
// console.log(newArr);}


// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
// {const str: string[] = [];
// for (let i = 0; i < 2; i++) {
//     let num: string = prompt();
//     str.push(num)
// }
// const res: boolean = str.every((el) => {
//     if (/^[a-zA-Z0-9\_]+\@+[a-z]{4,}\.[ru|com]+$/gm.test(el)) {
//         return true
//     }
// })
// console.log(res);}

// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
// {const arr: number[] = [0, 1, 2, 3, 4, 5];
// let newArr: number[] = []
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 != 0) {
//         newArr.push(arr[i])
//     }
// }
// const res: number = newArr.reduce((el, sum) => {
//     return sum + el
// })
// console.log(res);}


// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// {const arr:number[] = [1, 2, 3, 4, 5];
// let newArr:string[] = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         newArr.push('четн.')
//     } else {
//         newArr.push('нечетн.')
//     }
// }                                                                                                                                //const newArr = arr.map((el) => el % 2 === 0 ? 'четн.' : 'нечетн.')

// console.log(newArr);}

// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
// {const str:string = 'Viktoriya Stolyar'
// let o = {}
// for (let i = 0; i < str.length; i++) {

//     if ( o[str[i]]) {
//         o[str[i]] += 1
//     } else {
//         o[str[i]] = 1
//     }
// }

// console.log(o);}

// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
// {const arr:string[] = ['gfgh', 'hgfjg']
// arr.forEach((el) => {
//     console.log('!' + el);
// })}


// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
// {const arr: number[] | boolean = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] > arr[i]) {
//         console.log(true);
//     }
// }}

// 17. Создайте массив чисел и найдите наибольшую разницу между любыми двумя
// элементами.
// {const arr:number[] = [1, 2, 3, 4, 5]
// let a:number = Math.max(...arr);
// let b:number = Math.min(...arr);
// let res:number = a - b

// console.log(res)}

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
// {interface iBook {
//     "author": string,
//     "name": string,
//     "price": number
// }
// const o: iBook[]  = [{                    //:(string | number)[] Book
//     "author": "Булгаков",
//     "name": "Мастер и Маргарита",
//     "price": 4.99
// },
// {
//     "author": "Пушкин",
//     "name": "Капитанская дочка",
//     "price": 5
// }
// ]
// for (let i = 0; i < o.length; i++) {
//     if (o[i]["author"] === 'Булгаков') {
//         console.log(o[i]["name"]);
//     }
// }}

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
// {
//     interface iAuthor {
//         "author": string;
//         "name": string;
//         "price": number
//     }
//     const o: iAuthor[] = [{
//         "author": "Булгаков",
//         "name": "Мастер и Маргарита",
//         "price": 4.99
//     },
//     {
//         "author": "Пушкин",
//         "name": "Капитанская дочка",
//         "price": 51
//     }]
//     for (let i = 0; i < o.length; i++) {
//         if (o[i]["price"] > 50) {
//             console.log(o[i]["name"]);
//         }
//     }
// }


// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)


// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
// {const str:string[] = 'ghgj asjhlkjk weygfiwulevhflahnhv hvjhvj'.split(' ');
// let lengthStr = str[0];
// for(let i = 0; i < str.length; i++){
//     if(lengthStr.length < str[i].length){
//         lengthStr = str[i]
//     }
// }
// console.log(lengthStr.length, lengthStr);}

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
// {
//     interface iAuthor {
//         "author": string;
//         "name": string;
//         "price": number
//     }
//     const o: iAuthor[] = [{
//         "author": "Булгаков",
//         "name": "Мастер и Маргарита",
//         "price": 4.99
//     },
//     {
//         "author": "Пушкин",
//         "name": "Капитанская дочка",
//         "price": 51
//     }]
//     let res: number = o.reduce((sum, el) => {
//         return sum + el["price"]
//     }, 0);
//     console.log(res / o.length);
// }


// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
// {interface iPrice{
//     "название": string,
//     "цена": number,
//     "количество": number}
// const o: iPrice[] = [{
//     "название": "апельсин",
//     "цена": 15,
//     "количество": 5
// },
// {
//     "название": "банан",
//     "цена": 10,
//     "количество": 10
// },
// {
//     "название": "груша",
//     "цена": 11,
//     "количество": 15
// }]

// const res = o.reduce((sum, el) => {
//     return sum + (el["цена"] * el["количество"])
// }, 0);
// console.log(res);}

