export class SimonGame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

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
        this.countField;
        this.colors;
        this.sounds;
        this.message;
        this.startButton;

    }

    connectedCallback() {

        this.render();
        // init game fields and buttons
        this.countField = this.shadowRoot.querySelector('#count');
        this.colors = this.shadowRoot.querySelectorAll('.colors');
        this.sounds = this.shadowRoot.querySelectorAll('audio');
        this.message = this.shadowRoot.querySelector('#message');
        this.startButton = this.shadowRoot.querySelector('#start');

        // event handlers
        this.startButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.newGame();
        });

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
        this.sounds[id].play();
        this.colors[id].classList.add('active');
        setTimeout(() => {
            this.colors[id].classList.remove('active');
        }, 300);
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
            this.message.textContent = `Congratulations you did ${this.game.count} turns!`;
            this.startButton.textContent = 'Restart game';
            this.game.lock = true;
        } else {
            this.sounds[id].play();
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

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import "app.css";
            </style>
            <div id="container">
                <div class="colors green" id="0"></div>
                <div class="colors red" id="1"></div>
                <div class="colors yellow" id="2"></div>
                <div class="colors blue" id="3"></div>
                <div id="center">
                    <div id="counter">
                        <h1 id="count">0</h1>
                    </div>
                    <h1>simon</h1>
                    <div id="message"></div>
                    <div id="starter">
                        <a href="#" id="start" class="myButton">Start Game</a>
                    </div>
                </div>
            </div>

            <audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
            <audio src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
            <audio src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
            <audio src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
        `;
    };
}
