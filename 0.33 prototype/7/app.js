// 7. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах
const pillarsCount = document.querySelector('.pillars-count');
const pillarDistanse = document.querySelector('.pillar-distanse');
const pillarWidth = document.querySelector('.pillar-width');

document.querySelector('button').addEventListener('click', function () {
    const div = document.querySelector('div')
    dowith(pillarsCount, pillarDistanse, pillarWidth);
    div.innerHTML = result;
})

function dowith(pillarsCount_, pillarDistanse_, pillarWidth_) {
    let result = pillarsCount_ * pillarWidth_ + ((pillarsCount_ - 1) * 100 * pillarDistanse_);
    return result
}

// let res = dowith(10,10,15);
// console.log(res);
