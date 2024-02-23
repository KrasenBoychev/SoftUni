// select game screens
const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');

// game start listener
gameStart.addEventListener('click', onGameStart);

function onGameStart() {
    gameStart.classList.add('hide');
}