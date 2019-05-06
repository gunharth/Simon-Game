var game = {
    count: 0,
    possibilities: [0, 1, 2, 3],
    gameLevel: [0,1,2],
    player: [],
    gameLock: false,
}

let countField = document.querySelector('#count');
const colors = document.querySelectorAll('.colors')

function clearGame() {
    game.gameLevel = [];
    game.count = 0;
    addCount();
}

function newGame() {
    clearGame();
}

function showMoves() {
    var i = 0;
    var moves = setInterval(function () {
        playGame(game.gameLevel[i]);
        i++;
        if (i >= game.gameLevel.length) {
            clearInterval(moves);
        }
    }, 600)

    clearPlayer();
}

function playGame(id) {
    // field.addClass('hover');
    // console.log(field);
    // field.classList.add('active');
    document.getElementsByClassName(id)[0].play();
    document.getElementById(id).classList.add('active');
    // sound(field);
    setTimeout(function () {
        document.getElementById(id).classList.remove('active');
    }, 300);
}

function clearPlayer() {
    game.player = [];
}

// Response on color click
colors.forEach(color =>
    color.addEventListener('click', (e) => {
        if (!game.gameLock) {
            color.classList.add('active');
            setTimeout(() => color.classList.remove('active'), 150);
            document.getElementsByClassName(e.target.id)[0].play();
            //userplay(e.target)
        }
    })
)

function addToPlayer(id) {
    var field = "#" + id
    console.log(field);
    game.player.push(field);
    playerTurn(field);
}

function playerTurn(x) {
    if (game.player[game.player.length - 1] !== game.gameLevel[game.player.length - 1]) {
            alert('Wrong move! Try again!');
            showMoves();
    } else {
        console.log('Good Move!');
        //sound(x);
        document.getElementsByClassName(x)[0].play();
        var check = game.player.length === game.gameLevel.length;
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

function generateMove() {
    game.gameLevel.push(game.possibilities[(Math.floor(Math.random() * 4))]);
    showMoves();
}

function addCount() {
    game.count++;
    countField.textContent = game.count;
    generateMove();
}

newGame();
