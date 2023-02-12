// 7. На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true
const obj = {
    id: 456,
    name: 'vsdjhfvj',
    gdf: null,
    fjgdjf: 0,
    kdfgkj: undefined
};
const obj_1 = {};

let a = [];
for (let key in obj_1) {
    if (obj_1 != null) {
        a++
    } console.log(a);
}
if (a > 0) {
    console.log(true);
} else console.log(false);


















// const obj = {
//     a : 456,
//     b : null,
//     c : '',
//     d : 0,
// }
// let count = 0;

// for (let key in obj){
//     if (key){
//         count++;
//     }}


//     if (count == 0) {
//         console.log(false)}
//             else {
//                 console.log(true);            }
   
