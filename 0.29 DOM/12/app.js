// 12. Вывести в строчку все вводимые значения через инпут в виде массива. 
// Добавить проверку, что поле не пустое

const btn = document.querySelector('button');
let arr = [];

btn.addEventListener('click', function(){
   try{
      let div = document.querySelector('div')
      let inp = document.querySelector('input');
      if (isNaN(inp.value)) throw new Error ('letter');
      if (inp.value.trim() === '') throw new Error ('empty');
      arr.push(inp.value);
      inp.value = ''
      div.innerHTML = arr
   } catch (error) {
      alert(error.message)
   } 
})

