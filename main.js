let blueCar = document.getElementById('blue');
let raceCar = document.getElementById('race');
let result = document.getElementById('result');
let score = document.getElementById('Score');
let game = document.getElementById('game');
let counter = 0;
let jump = document.getElementById('jump');



// logic for movement of blue car :-
blueCar.addEventListener('animationiteration', function () {
    let random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px"
    counter++
})


// Logic of Movement of Race Car :-
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        let raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue('left'))
        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 130) + 'px'
        }
        jump.play()
    }
    if (e.keyCode === 37) {
        let raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue('left'))
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + 'px'
        }
        jump.play()
    }
})


// Logic of Game Over :-
setInterval(function gameOver() {
    let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue('top'))
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'))
    let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue('left'))
    if ((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        result.style.display = 'block';
        game.style.display = 'none';
        score.innerHTML = `score: ${counter} `;
        counter = 0;
    }
}, 10)