// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const str = prompt(`url`);

console.log( str.startsWith(`http`) && str.includes(`/`) && (str.endsWith(`.ru`) || str.endsWith(`.com`)) ? true : false);