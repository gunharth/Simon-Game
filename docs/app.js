/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simon_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simon-game.js */ "./src/simon-game.js");

var game = new _simon_game_js__WEBPACK_IMPORTED_MODULE_0__["SimonGame"]();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/simon-game.js":
/*!***************************!*\
  !*** ./src/simon-game.js ***!
  \***************************/
/*! exports provided: SimonGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimonGame", function() { return SimonGame; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SimonGame =
/*#__PURE__*/
function () {
  function SimonGame() {
    var _this = this;

    _classCallCheck(this, SimonGame);

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
      textWinner: 'Wohoo!<br>You won!' // game fields and buttons

    };
    this.countField = document.querySelector('#count');
    this.colors = document.querySelectorAll('.colors');
    this.message = document.querySelector('#message');
    this.startButton = document.querySelector('#start'); // event listeners

    this.startButton.addEventListener('click', function (e) {
      e.preventDefault();

      _this.newGame();
    });
    this.colors.forEach(function (color) {
      color.addEventListener('click', function (e) {
        return _this.handlePlayerClick(e);
      });
    });
  }

  _createClass(SimonGame, [{
    key: "newGame",
    value: function newGame() {
      this.clearGame();
    }
  }, {
    key: "clearGame",
    value: function clearGame() {
      this.game.gameSeq = [];
      this.game.count = 0;
      this.game.lock = true;
      this.startButton.textContent = this.game.textStart;
      this.message.textContent = '';
      this.addCount();
    }
  }, {
    key: "addCount",
    value: function addCount() {
      var _this2 = this;

      this.game.count++;
      this.countField.classList.add('fade');
      this.countField.textContent = this.game.count;
      setTimeout(function () {
        _this2.countField.classList.remove('fade');
      }, 750);
      this.addToGameSeq();
    }
  }, {
    key: "addToGameSeq",
    value: function addToGameSeq() {
      this.game.gameSeq.push(this.game.options[Math.floor(Math.random() * 4)]);
      this.showGameSeq();
    }
  }, {
    key: "showGameSeq",
    value: function showGameSeq() {
      var _this3 = this;

      var i = 0;
      var moves = setInterval(function () {
        _this3.playGame(_this3.game.gameSeq[i]);

        i++;

        if (i >= _this3.game.gameSeq.length) {
          clearInterval(moves);
        }
      }, 700);
      this.clearPlayerSeq();
    }
  }, {
    key: "clearPlayerSeq",
    value: function clearPlayerSeq() {
      this.game.lock = false;
      this.game.playerSeq = [];
    }
  }, {
    key: "playGame",
    value: function playGame(id) {
      document.getElementsByClassName(id)[0].play();
      document.getElementById(id).classList.add('active');
      setTimeout(function () {
        document.getElementById(id).classList.remove('active');
      }, 300);
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(e) {
      e.preventDefault();

      if (!this.game.lock) {
        document.getElementsByClassName(e.target.id)[0].play();
        e.target.classList.add('active');
        setTimeout(function () {
          return e.target.classList.remove('active');
        }, 300);
        this.addToPlayerSeq(+e.target.id);
      }
    }
  }, {
    key: "addToPlayerSeq",
    value: function addToPlayerSeq(id) {
      this.game.playerSeq.push(id);
      this.checkPlayerSeq(id);
    }
  }, {
    key: "checkPlayerSeq",
    value: function checkPlayerSeq(id) {
      var _this4 = this;

      if (this.game.playerSeq[this.game.playerSeq.length - 1] !== this.game.gameSeq[this.game.playerSeq.length - 1]) {
        this.message.textContent = "Congratulations you did ".concat(this.game.count, " turns!");
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
            setTimeout(function () {
              _this4.message.textContent = '';

              _this4.nextLevel();
            }, 2000);
          }
        }
      }
    }
  }, {
    key: "nextLevel",
    value: function nextLevel() {
      this.addCount();
    }
  }]);

  return SimonGame;
}();

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Guni/Code/guni/Simon-Game/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/Guni/Code/guni/Simon-Game/src/app.scss */"./src/app.scss");


/***/ })

/******/ });