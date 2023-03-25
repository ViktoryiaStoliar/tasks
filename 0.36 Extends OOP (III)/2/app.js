// 2. Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {

    name;
    addres;
    numberOfPhone;

    getName() {
        return this.name
    }

    getAddres() {
        return this.addres
    }

    getNumberOfPhone() {
        return this.numberOfPhone
    }

    setName(name) {
        this.name = name
    }

    setAddres(addres) {
        this.addres = addres
    }

    setNumberOfPhone(numberOfPhone) {
        this.numberOfPhone = numberOfPhone
    }
}

class Customer extends Person {
    numberOfClient;
    bool;

    getNumberOfClient() {
        return this.numberOfClient
    }

    getBool() {
        return this.bool;
    }

    setNumberOfClient(numberOfClient) {
        this.numberOfClient = numberOfClient
    }

    setBool(bool) {
        this.bool = bool;
    }
}

const customer = new Customer();
customer.setName('Vika');
customer.setAddres('ALibegova');
customer.setNumberOfPhone('+5456');
customer.setNumberOfClient(45);
customer.setBool(false);

const name_ = customer.getName();
const addres = customer.getAddres();
const numberOfPhone = customer.getNumberOfPhone();
const numberOfClient = customer.getNumberOfClient();
const bool = customer.getBool();

console.log(name_, addres, numberOfPhone, numberOfClient, bool);
