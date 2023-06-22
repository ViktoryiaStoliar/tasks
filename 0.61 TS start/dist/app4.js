// 4. Создайте переменную grade и присвойте ей значение от 1 до 5. Используя
// оператор switch, выведите в консоль описание оценки (например, "Отлично",
// "Хорошо" и т.д.) в зависимости от значения переменной grade.\
var grade = +prompt();
switch (grade) {
    case 1:
        console.log('очень плохо');
        break;
    case 2:
        console.log('плохо');
        break;
    case 3:
        console.log('хорошо');
        break;
    case 4:
        console.log('отлично');
        break;
    case 5:
        console.log('превосходно');
        break;
    default: break;
}
