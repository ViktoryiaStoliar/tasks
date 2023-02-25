// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    //<meta http-equiv="X-UA-Compatible" content="IE=edge">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./app.js"></script>
</body>
</html>`

function checkHTMLFiles(s) {
    try {
        let result = s.replace(/\/\/<[^>]*>/gm, ' ');
        return result
    } catch (error) {
        return error.message
    }
}
let result = checkHTMLFiles(data);
console.log(result);