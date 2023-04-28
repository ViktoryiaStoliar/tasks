// 6. При наведении на картинку изменять ее
const img = document.querySelector('img')


img.addEventListener('mouseover', () => {
    img.src = "./img/2.jpg"
})

img.addEventListener('mouseout', () => {
    img.src="./img/1.jpg"
})