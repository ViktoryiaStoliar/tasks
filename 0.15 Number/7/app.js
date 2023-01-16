// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)

const str = promp (``).toLowerCase();

if(isNaN(str)) {
    console.log(str.replaceAll('@', '!'));
} else console.log(`error`);

if (isNaN(str)) {
    console.log(str.split('@').join('!'));
} else console.log(`error`);

//дописать теринарный способ
// isNaN(str) ? 