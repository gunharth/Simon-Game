export class SimonGame {
    constructor() {
        // game settings
        this.game = {
            count: 0,
            options: [0, 1, 2, 3],
            gameSeq: [],
            playerSeq: [],
            lock: true,
            textStart: 'Start game',
            textLevel: 'Next level',
            textAgain: 'Try again?',
            textWinner: 'Wohoo!<br>You won!',
        }

        // game fields and buttons
        this.countField = document.querySelector('#count');
        this.colors = document.querySelectorAll('.colors');
        this.message = document.querySelector('#message');
        this.startButton = document.querySelector('#start');

        // event listeners
        this.startButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.newGame();
        })
        this.colors.forEach((color) => {
            color.addEventListener('click', (e) => this.handlePlayerClick(e));
        });
    }

    newGame() {
        this.clearGame();
    }

    clearGame() {
        this.game.gameSeq = [];
        this.game.count = 0;
        this.game.lock = true;
        this.startButton.textContent = this.game.textStart;
        this.message.textContent = '';
        this.addCount();
    }

    addCount() {
        this.game.count++;
        this.countField.classList.add('fade');
        this.countField.textContent = this.game.count;
        setTimeout(() => {
            this.countField.classList.remove('fade');
        }, 750);
        this.addToGameSeq();
    }

    addToGameSeq() {
        this.game.gameSeq.push(this.game.options[(Math.floor(Math.random() * 4))]);
        this.showGameSeq();
    }

    showGameSeq() {
        var i = 0;
        var moves = setInterval(() => {
            this.playGame(this.game.gameSeq[i]);
            i++;
            if (i >= this.game.gameSeq.length) {
                clearInterval(moves);
            }
        }, 700)
        this.clearPlayerSeq();
    }

    clearPlayerSeq() {
        this.game.lock = false;
        this.game.playerSeq = [];
    }

    playGame(id) {
        document.getElementsByClassName(id)[0].play();
        document.getElementById(id).classList.add('active');
        setTimeout(function () {
            document.getElementById(id).classList.remove('active');
        }, 300);
    }

    handlePlayerClick(e) {
        e.preventDefault();
        if (!this.game.lock) {
            document.getElementsByClassName(e.target.id)[0].play();
            e.target.classList.add('active');
            setTimeout(() => e.target.classList.remove('active'), 300);
            this.addToPlayerSeq(+e.target.id);
        }
    }

    addToPlayerSeq(id) {
        this.game.playerSeq.push(id);
        this.checkPlayerSeq(id);
    }

    checkPlayerSeq(id) {
        if (this.game.playerSeq[this.game.playerSeq.length - 1] !== this.game.gameSeq[this.game.playerSeq.length - 1]) {
            this.message.textContent = `Congratulations you did ${this.game.count} turns!`;
            this.startButton.textContent = 'Restart game';
            this.game.lock = true;
        } else {
            document.getElementsByClassName(id)[0].play();
            var check = this.game.playerSeq.length === this.game.gameSeq.length;
            if (check) {
                if (this.game.count == 2) {
                    this.message.innerHTML = this.game.textWinner;
                    this.startButton.textContent = this.game.textStart;
                } else {
                    this.message.textContent = this.game.textLevel;
                    setTimeout(() => {
                        this.message.textContent = '';
                        this.nextLevel();
                    }, 2000);
                }
            }
        }
    }

    nextLevel() {
        this.addCount();
    }
}
