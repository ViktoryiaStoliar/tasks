// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

let str = prompt(`url`);

if (str.startsWith("http") && str.includes("/") && (str.endsWith(".com")|| (".ru"))) {
    console.log(true);
} else console.log(false);