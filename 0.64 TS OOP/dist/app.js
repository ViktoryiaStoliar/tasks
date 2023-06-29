// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.
// {interface iStudent {
//     name: string;
//     age: number
// }
;
class Product {
    constructor() {
        this.product = [{ name: 'tv', price: 10 }, { name: 'tj', price: 21 }, { name: 'tp', price: 25 }];
    }
    displayProductInfo() {
        const filtered = this.product.filter((el) => {
            if (el.price > 20) {
                return true;
            }
        });
        return filtered;
    }
}
const product = new Product();
console.log(product.displayProductInfo());
