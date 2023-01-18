// Преобразовать строку ‘     Full StaCK DevELoper     ’ в массив вида [‘full, ‘stack’, ‘developer’]
const str = `     Full StaCK DevELoper     `. trim ().split('');
if (!isNaN(str)) {
    console.log(str);
} else console.log(`error`);

console.log (!isNaN(str) ? str : `error`);