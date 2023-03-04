// У вас есть кнопка. После каждого нажатия менять background.


const btn = document.querySelector('button');
let flag = false;

btn.addEventListener('click', function () {
   if(flag === false){
   btn.style.background = 'red'
   flag = true
} else {
   btn.style.background = 'blue';
   flag = false
}
})