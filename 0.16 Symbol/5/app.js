// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/

let url1 = "https://www.instagram.com/hschool.official".trim();

console.log(url1.slice(url1.indexOf('/') +2));