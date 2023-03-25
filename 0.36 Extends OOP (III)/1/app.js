// 1. Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
    nameOfEmployee;
    numberOfEmployee;

    getNameOfEmployee = () => this.nameOfEmployee
    getNumberOfEmployee = () => this.numberOfEmployee

    setNameOfEmployee = (nameOfEmployee) => {
        this.nameOfEmployee = nameOfEmployee
    }
    setNumberOfEmployee = (numberOfEmployee) => {
        this.numberOfEmployee = numberOfEmployee
    }
}

class ProductionWorker extends Employee {
    numberOfChange;
    rateOfChange;

    getNumberOfChange = () => this.numberOfChange;
    getRateOfChange = () => this.rateOfChange;

    setNumberOfChange = (numberOfChange) => {
        this.numberOfChange = numberOfChange
    }

    setRateOfChange = (rateOfChange) => {
        this.rateOfChange = rateOfChange
    }
}

const productionWorker = new ProductionWorker();
productionWorker.setNumberOfEmployee(23);
productionWorker.setNameOfEmployee('Vika');
productionWorker.setNumberOfChange(1);
productionWorker.setRateOfChange(50);

const nameOfEmployee = productionWorker.getNameOfEmployee();
const numberOfEmployee = productionWorker.getNumberOfEmployee();
const numberOfChange = productionWorker.getNumberOfChange();
const rateOfChange = productionWorker.getRateOfChange();


console.log(nameOfEmployee, numberOfEmployee, numberOfChange, numberOfChange);
