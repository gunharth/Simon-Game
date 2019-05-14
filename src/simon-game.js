export class SimonGame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // game settings
        this.game = {
            rounds: 5, // default 20 rounds to go
            count: 0,
            options: [0, 1, 2, 3],
            gameSeq: [],
            playerSeq: [],
            lock: true,
            // textStart: 'Start',
            textDefault: 'Simon says',
            textLevel: [
                'Good!',
                'Awesome!',
                'Well done!',
                'Great!',
                'Fantastic!',
                'Bligh me!'
            ],
            textAgain: 'Sorry!',
            textWinner: 'Wohoo!<br>You won!',
        }

        // game fields and buttons
        this.score;
        this.colors;
        this.sounds;
        this.message;
        this.startGame;

    }

    connectedCallback() {

        this.render();
        // init game fields and buttons
        this.score = this.shadowRoot.querySelector('#score');
        this.colors = this.shadowRoot.querySelectorAll('.colors');
        this.sounds = this.shadowRoot.querySelectorAll('audio');
        this.message = this.shadowRoot.querySelector('#message');
        this.startGame = this.shadowRoot.querySelectorAll('.startgame');

        // event handlers
        // this.startGame.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     this.newGame();
        // });
        this.startGame.forEach((start) => {
            start.addEventListener('click', (e) => {
                e.preventDefault();
                this.newGame();
            });
        });

        this.colors.forEach((color) => {
            //color.addEventListener('touchstart', (e) => this.handlePlayerClick(e), { passive: true });
            color.addEventListener('click', (e) => this.handlePlayerClick(e));
        });
    }

    newGame() {
        this.clearGame();
    }

    clearGame() {
        this.game.gameSeq = [];
        this.game.count = 0;
        this.updateScore();
        this.message.textContent = this.game.textDefault;
        this.addCount();
    }

    addCount() {
        this.game.count++;
        this.game.lock = true;
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
                setTimeout(() => {
                    this.message.textContent = 'Your turn!';
                }, 700);
            }
        }, 700)
        this.clearPlayerSeq();
    }

    playGame(id) {
        this.sounds[id].play();
        this.colors[id].classList.add('active');
        setTimeout(() => {
            this.colors[id].classList.remove('active');
        }, 300);
    }

    clearPlayerSeq() {
        this.game.lock = false;
        this.game.playerSeq = [];
    }

    handlePlayerClick(e) {
        e.preventDefault();
        if (!this.game.lock) {
            let target = e.target;
            this.sounds[target.id].play();
            target.classList.add('active');
            setTimeout(() => {
                target.classList.remove('active')
            }, 300);
            this.addToPlayerSeq(+target.id);
        }
    }

    addToPlayerSeq(id) {
        this.game.playerSeq.push(id);
        this.checkPlayerSeq(id);
    }

    checkPlayerSeq(id) {
        if (this.game.playerSeq[this.game.playerSeq.length - 1] !== this.game.gameSeq[this.game.playerSeq.length - 1]) {
            this.message.innerHTML = ` ¯\\_(ツ)_/¯<br>You did ${this.game.count-1} turns!`;
            this.game.lock = true;
        } else {
            this.sounds[id].play();
            var check = this.game.playerSeq.length === this.game.gameSeq.length;
            if (check) {
                this.updateScore();
                if (this.game.count == this.game.rounds) {
                    this.message.innerHTML = this.game.textWinner;
                    this.game.lock = true;
                } else {
                    this.game.lock = true;
                    this.message.textContent = this.game.textLevel[(Math.floor(Math.random() * 5))];
                    setTimeout(() => {
                        this.message.textContent = this.game.textDefault;
                        this.nextLevel();
                    }, 2000);
                }
            }
        }
    }

    updateScore() {
        (this.game.count < 10) ?
            this.score.textContent = '0' + this.game.count :
            this.score.textContent = this.game.count;
    }

    nextLevel() {
        this.addCount();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="app.css">
            <div class="leaderboard">
                <h3>Current High Score</h3>
                <div class="highscore">
                    <span><strong>Name:</strong></span><span class="highscorename"></span><span><strong>Score:</strong></span><span class="highscorenum"></span>
                </div>
            </div>
            <div class="controls">
            <a class="btn startgame" href="#">Start</a>
            <span class="score" id="score">00</span>
            <a class="btn startgame" href="#">Reset</a>
            </div>
            <div id="gamepad">
                <div class="colors green" id="0"></div>
                <div class="colors red" id="1"></div>
                <div class="colors yellow" id="2"></div>
                <div class="colors blue" id="3"></div>
                <div id="center">
                    <div id="message">Simon</div>
                </div>
            </div>
            <audio src="audio/simonSound1.mp3"></audio>
            <audio src="audio/simonSound2.mp3"></audio>
            <audio src="audio/simonSound3.mp3"></audio>
            <audio src="audio/simonSound4.mp3"></audio>
        `;
    };
}
