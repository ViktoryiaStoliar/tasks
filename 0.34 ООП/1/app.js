// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

// class Singer {
//     name;
//     surname;

//     getAutograph() {
//         try {
//             return (`${this.name} ${this.surname}, с найлучшими пожеланиями`);
//         } catch (er) {
//             return er.message
//         }
//     }
// }

// const singer = new Singer();
// singer.name = 'Vika';
// singer.surname = 'Stoliar'
// const res = singer.getAutograph();
// console.log(res);

// class Singer {

//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getAutograph() {
//         try {
//             return (`${this.name} ${this.surname}, с найлучшими пожеланиями`);
//         } catch (er) {
//             return er.message
//         }
//     }
// }

// const singer = new Singer('Vika', 'Stoliar');
// const res = singer.getAutograph();
// console.log(res);

class Singer {

    getAutograph(name, surname) {
        try {
            return `${name} ${surname}, с наилучшими пожеланиями`
        } catch (er) {
            return er.message
        }
    }
}

const singer = new Singer();
const res = singer.getAutograph('Vika', 'Stoliar');
console.log(res);