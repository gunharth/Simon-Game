const game = {
    count: 0,
    possibilities: [0, 1, 2, 3],
    gameSeq: [],
    playerSeq: [],
    lock: false,
}

const countField = document.querySelector('#count');
const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    newGame();
})

function newGame() {
    clearGame();
}

function clearGame() {
    game.gameSeq = [];
    game.count = 0;
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
    }, 600)

    clearPlayerSeq();
}

function clearPlayerSeq() {
    game.playerSeq = [];
}

function playGame(id) {
    document.getElementsByClassName(id)[0].play();
    document.getElementById(id).classList.add('active');
    setTimeout(function () {
        document.getElementById(id).classList.remove('active');
    }, 300);
}

// Response on color click


function handleInteraction(e) {
    e.preventDefault();
    if (!game.lock) {
        color.classList.add('active');
        setTimeout(() => color.classList.remove('active'), 150);
        document.getElementsByClassName(e.target.id)[0].play();
        console.log(e.target.id);
        addToPlayerSeq(+e.target.id);
        //userplay(e.target)
    }
}
colors.forEach(color =>
    color.addEventListener('touchstart', (e) => {
        handleInteraction(e);
    })
)

colors.forEach(color =>
    color.addEventListener('click', (e) => {
        handleInteraction(e);
    })
)

function addToPlayerSeq(id) {
    game.playerSeq.push(id);
    console.log(game.playerSeq);
    playerCheck(id);
}

function playerCheck(id) {
    if (game.playerSeq[game.playerSeq.length - 1] !== game.gameSeq[game.playerSeq.length - 1]) {
            console.log('Wrong move! Try again!');
            showGameSeq();
    } else {
        console.log('Good Move!');
        document.getElementsByClassName(id)[0].play();
        var check = game.playerSeq.length === game.gameSeq.length;
        if (check) {
            if (game.count == 20) {
                alert('You won! Congrats.');
            } else {
                alert('Next round!');
                nextLevel();
            }
        }
    }
}

function nextLevel() {
    addCount();
}
