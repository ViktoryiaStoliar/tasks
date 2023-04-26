const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const psw = 'vika';
const newPsw = [];
for (let i of psw){
    let index = alphabet.indexOf(i);
    newPsw.push(alphabet[index+3])
    console.log(newPsw);
} 

