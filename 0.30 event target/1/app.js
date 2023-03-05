// На странице расположен маркированный список. 
// Пользователь кликает на каждый item списка. 
// Необъодимо отловить на какой из элементов нажал пользователь и отобразить

const ulTag =document.querySelector('ul');

ulTag.addEventListener('click', function(event){
    const divEl = document.querySelector('div');
    divEl.innerHTML = event.target.textContent
})