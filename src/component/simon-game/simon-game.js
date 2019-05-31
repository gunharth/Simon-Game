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
            textStart: 'Simon',
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
        this.highscore;
        this.colors;
        this.message;
        this.startGame;
        this.sounds = [
            new Audio('audio/simonSound1.mp3'),
            new Audio('audio/simonSound2.mp3'),
            new Audio('audio/simonSound3.mp3'),
            new Audio('audio/simonSound4.mp3')
        ];
    }

    connectedCallback() {
        this.render();
        // init game fields and buttons
        this.score = this.shadowRoot.querySelector('#score');
        this.highscore = this.shadowRoot.querySelector('#highscore');
        this.updateHighscore(this.getHighscore());
        this.colors = this.shadowRoot.querySelectorAll('.colors');
        this.message = this.shadowRoot.querySelector('#message');
        this.start = this.shadowRoot.querySelector('#startgame');
        this.reset = this.shadowRoot.querySelector('#resetgame');

        //event handlers
        this.start.addEventListener('click', (e) => {
            e.preventDefault();
            this.newGame();
        });
        this.reset.addEventListener('click', (e) => {
            e.preventDefault();
            this.resetGame();
        });

        this.colors.forEach((color) => {
            color.addEventListener('click', (e) => this.handlePlayerClick(e));
        });
    }

    newGame() {
        this.clearGame();
        this.message.textContent = this.game.textDefault;
        this.start.setAttribute('disabled', true);
        //this.reset.setAttribute('disabled', true);
        this.addCount();
    }

    resetGame() {
        this.clearGame();
        this.message.textContent = this.game.textStart;
        this.start.setAttribute('disabled', false);
        this.setHighscore(0);
        this.updateHighscore(0);
    }

    clearGame() {
        this.game.gameSeq = [];
        this.game.gamePlayer = [];
        this.game.count = 0;
        this.updateScore();
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
            this.message.innerHTML = ` ¯\\_(ツ)_/¯<br>You did ${this.game.count - 1} turns!`;
            this.checkHighscore(this.game.count - 1);
            this.start.removeAttribute('disabled');
            //this.reset.removeAttribute('disabled');
            this.game.lock = true;
        } else {
            this.sounds[id].play();
            var check = this.game.playerSeq.length === this.game.gameSeq.length;
            if (check) {
                this.game.lock = true;
                this.updateScore();
                if (this.game.count == this.game.rounds) {
                    this.message.innerHTML = this.game.textWinner;
                    this.checkHighscore(this.game.count);
                    this.start.setAttribute('disabled', false);
                    //this.reset.setAttribute('disabled', false);
                } else {
                    // this.game.lock = true;
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

    checkHighscore(rounds) {
        if (rounds > this.getHighscore()) {
            this.setHighscore(rounds);
            this.updateHighscore(rounds)
        }
    }

    updateHighscore(hs) {
        (hs < 10) ?
            this.highscore.innerHTML = '0' + hs :
            this.highscore.textContent = hs;
    }

    getHighscore() {
        return localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
    }

    setHighscore(rounds) {
        localStorage.setItem('highscore', rounds);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="simon-game.css">
            <div class="hs-outer">
                <h3>High Score: <span id="highscore">3</span></h3>
            </div>
            <div class="controls">
            <button id="startgame" href="#">Start</button>
            <span class="score" id="score">00</span>
            <button id="resetgame" href="#">Reset</button>
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
        `;
    };
}
