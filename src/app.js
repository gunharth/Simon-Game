const game = {
    count: 0,
    possibilities: [0, 1, 2, 3],
    gameSeq: [],
    playerSeq: [],
    lock: true,
    textStart: 'Start game',
    textLevel: 'Next level',
    textAgain: 'Try again?',
    textWinner: 'Wohoo!<br>You won!',
}

const countField = document.querySelector('#count');
const colors = document.querySelectorAll('.colors');
const message = document.querySelector('#message');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
})

function newGame() {
    clearGame();
}

function clearGame() {
    game.gameSeq = [];
    game.count = 0;
    game.lock = true;
    startButton.textContent = game.textStart;
    message.textContent = '';
    addCount();
}

function addCount() {
    game.count++;
    countField.classList.add('fade');
    countField.textContent = game.count;
    setTimeout(() => {
        countField.classList.remove('fade');
    }, 750);
    addToGameSeq();
}

function addToGameSeq() {
    game.gameSeq.push(game.possibilities[(Math.floor(Math.random() * 4))]);
    showGameSeq();
}

function showGameSeq() {
    var i = 0;
    var moves = setInterval(function () {
        playGame(game.gameSeq[i]);
        i++;
        if (i >= game.gameSeq.length) {
            clearInterval(moves);
        }
    }, 700)
    clearPlayerSeq();
}

function clearPlayerSeq() {
    game.lock = false;
    game.playerSeq = [];
}

function playGame(id) {
    document.getElementsByClassName(id)[0].play();
    document.getElementById(id).classList.add('active');
    setTimeout(function () {
        document.getElementById(id).classList.remove('active');
    }, 300);
}

// closure for click or touch event
function handleInteraction(e) {
    e.preventDefault();
    if (!game.lock) {
        document.getElementsByClassName(e.target.id)[0].play();
        e.target.classList.add('active');
        setTimeout(() => e.target.classList.remove('active'), 300);
        addToPlayerSeq(+e.target.id);
    }
}
// bind click or touch to color areas
colors.forEach(color => {
    color.addEventListener('touchstart', handleInteraction);
    color.addEventListener('click', handleInteraction);
});

function addToPlayerSeq(id) {
    game.playerSeq.push(id);
    checkPlayerSeq(id);
}

function checkPlayerSeq(id) {
    if (game.playerSeq[game.playerSeq.length - 1] !== game.gameSeq[game.playerSeq.length - 1]) {
        message.textContent = `Congratulations you did ${game.count} turns!`;
        startButton.textContent = 'Restart game';
        game.lock = true;
    } else {
        document.getElementsByClassName(id)[0].play();
        var check = game.playerSeq.length === game.gameSeq.length;
        if (check) {
            if (game.count == 2) {
                message.innerHTML = game.textWinner;
                startButton.textContent = game.textStart;
            } else {
                message.textContent = game.textLevel;
                setTimeout(() => {
                    message.textContent = '';
                    nextLevel();
                }, 2000);
            }
        }
    }
}

function nextLevel() {
    addCount();
}
