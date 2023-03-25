// 3. Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
    name;
    surname;
    getFullName() {
        return `Имя: ${this.name} Фамилия: ${this.surname}`
    }
    getName = () => this.name;
    getSurname = () => this.surname;

    setName = (name) => this.name = name;
    setSurname = (surname) => this.surname = surname;
}

class Singer extends Worker {
    years;
    birth;
    style;
    getMoreInfo() {
        return `Возрост: ${this.years} День Рождение: ${this.birth} Стиль:${this.style}`
    }

    getYears = () => this.years;
    getBirth = () => this.birth;
    getStyle = () => this.style;

    setYears = (years) => this.years = years;
    setBirth = (birth) => this.birth = birth;
    setStyle = (style) => this.style = style;


}


const singer = new Singer();

const name = singer.setName('Валерия');
const surname = singer.setSurname('а хто его знает');
const years = singer.setYears(53);
const birth = singer.setBirth('17.09.88')
const style = singer.setStyle('pop');
const fullName = singer.getFullName();
const info = singer.getMoreInfo();

console.log(fullName, info);