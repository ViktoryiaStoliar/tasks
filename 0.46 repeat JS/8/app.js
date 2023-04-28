// 8. Необходимо по нажатию на кнопку включать музыку

const song = document.querySelector('audio');
document.querySelector('button').addEventListener('click', () => {
    song.src = "./song/the_lion_king_2019_01. Lindiwe Mkhize & Lebo M. - Circle Of Life Nants Ingonyama.mp3"
// song.autoplay = true
})