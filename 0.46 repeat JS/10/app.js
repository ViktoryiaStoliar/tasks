// 10. Добавить переключение песен


const song = document.querySelector('audio');
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const play = document.querySelector('.play');
const artist = document.querySelector('.artist');
const nameOfSong = document.querySelector('.NameOfSong');
const songCover = document.querySelector('.songCover')
let flag = false;
const tracks = [{
    id: 1,
    path: './song/first.mp3',
    artist: 'Billy Eichner',
    nameOfSong: 'accunaMatatta',
    songCover: 'background-image: url(./assets/first.jpg)'
}, {
    id: 2,
    path: './song/second.mp3',
    artist: 'JD McCrary',
    nameOfSong: 'King',
    songCover: 'background-image: url(./assets/second.jpg)'
},{
    id: 3,
    path: './song/third.mp3',
    artist : 'Seth Rogen ',
    nameOfSong: 'nature',
    songCover: 'background-image: url(./assets/third.jpg)'
}];

let currentIndexSong = 0;


play.addEventListener('click', function () {
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;
    songCover.style = tracks[currentIndexSong].songCover;
    if (flag === false) {
        song.play();

        flag = true;
        this.style = 'background-image: url(./assets/pause.png);'
    }
    else {
        song.pause();
        flag = false;
        this.style = 'background-image: url(./assets/playBtn.png);'

    }
})
back.addEventListener('click', function () {
    if (currentIndexSong === 0) return
    currentIndexSong--;
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;
    songCover.style = tracks[currentIndexSong].songCover;
    song.play();
    flag = true;
    play.style = 'background-image: url(./assets/pause.png);'
})
next.addEventListener('click', function () {
    if(currentIndexSong === tracks.length-1) return;
    currentIndexSong++;
    song.src = tracks[currentIndexSong].path;
    artist.textContent = tracks[currentIndexSong].artist;
    nameOfSong.textContent = tracks[currentIndexSong].nameOfSong;
    songCover.style = tracks[currentIndexSong].songCover;
    song.play();
    flag = true;
    play.style = 'background-image: url(./assets/pause.png);'
})
