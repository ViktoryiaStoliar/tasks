// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

const a = +prompt(`Введите число от 1 до 12`);

if ((a == 12) || (a == 1) || (a == 2)) {      // второй способ
    console.log(`зима`);
} else {
    if ((a == 3) || (a == 4) || (a == 5)) {
        console.log(`весна`);
    } else {
        if ((a == 6) || (a == 7) || (a == 8)) {
            console.log(`лето`);
        } else {
            if ((a == 9) || (a == 10) || (a == 11)) {
                console.log(`осень`);
            }
        }
    }
}


switch (a) {           //первый способ
    case 1:
        console.log(`зима`);
        break;

    case 2:
        console.log(`зима`);
        break;

    case 3:
        console.log(`весна`);
        break;

    case 4:
        console.log(`весна`);
        break;

    case 5:
        console.log(`весна`);
        break;

    case 6:
        console.log(`лето`);
        break;

    case 7:
        console.log(`лето`);
        break;

    case 8:
        console.log(`лето`);
        break;

    case 9:
        console.log(`осень`);
        break;

    case 10:
        console.log(`осень`);
        break;

    case 11:
        console.log(`осень`);
        break;

    case 12:
        console.log(`зима`);
        break;

    default:
        console.log(`Ошибка ввода`);
        break;
}


