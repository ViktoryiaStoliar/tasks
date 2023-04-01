// 14. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
    name;
    surname;
    setName(name) {
        this.name = name
    }
    setSurName(surname) {
        this.surname = surname
    }
    getName() {
        return this.name
    }
    getSurname() {
        return this.surname
    }
}


class Customer extends Person {
    phoneNumber;
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        this.phoneNumber;
    }
    info (){
        console.log(`${this.name} ${this.surname} ${this.phoneNumber}`);
    }

}

const customer = new Customer();
customer.setName('Vika');
customer.setSurName('Stolyar');
customer.setPhoneNumber('+37529');
const name = customer.getName();
const surname = customer.getSurname();
const phoneNumber = customer.getPhoneNumber();
const res = customer.info()
console.log(res);
