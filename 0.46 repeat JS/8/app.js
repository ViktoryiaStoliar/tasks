// 8. Необходимо по нажатию на кнопку включать музыку


const song = document.querySelector('audio');
let flag = false;
document.querySelector('button').addEventListener('click', () => {
    song.src = "./song/Billy Eichner & Seth Rogen & JD McCrary & Donald Glover - Hakuna Matata.mp3"

    if (flag === false) {
        song.play();
        flag = true;
    }
    else {
        song.pause();
        flag = false;
    }
})
