// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5 

const str = `             АааГГЦЦцТТтттА   `.trim().toUpperCase();
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4= 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == `А`) {
        sum1 += 1;
    }

    if (str[i] == `Г`) {
        sum2 += 1;
    }

    if (str[i] == `Ц`) {
        sum3 += 1;
    } 

    if (str[i] == `Т`) {
        sum4 += 1;

}
}

console.log(`букв А - ${sum1}; букв Г - ${sum2}; букв Ц - ${sum3}; букв Т - ${sum4};`);

