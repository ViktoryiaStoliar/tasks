// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {  
    arr = [];  
    newArr = [];  
  
    doHashtag(n) {  
        try {  
            for (let i = 0; i < n; i++)  
                this.arr.push(prompt('введите элементы массива'));  
            for (let a = 0; a < this.arr.length; a++)  
                this.newArr.push('#' + this.arr[a]);  
            return this.newArr  
        } catch (er) {  
            return er.message  
        }  
    }  
}  
  
const hashtag = new Hashtag();  
const res = hashtag.doHashtag(5);  
console.log(res);