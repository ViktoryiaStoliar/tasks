// По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
   let inp1 = document.querySelector('.inp1');
   let inp2 = document.querySelector('.inp2');
   let a = inp1.value;
   let b = inp2.value;
   inp1.value = b;
   inp2.value = a;

})



// const btn = document.querySelector('button');


// btn.addEventListener('click', function () {
//    let inp1 = document.querySelector(".inp1");
//    let a = inp1.value;
//    let inp2 = document.querySelector(".inp2");
//    let b = inp2.value
//    inp1.value = b;
//    inp2.value = a;
// })

