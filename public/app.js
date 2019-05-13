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

customElements.define('simon-game', _simon_game_js__WEBPACK_IMPORTED_MODULE_0__["SimonGame"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SimonGame =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(SimonGame, _HTMLElement);

  function SimonGame() {
    var _this;

    _classCallCheck(this, SimonGame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimonGame).call(this));

    _this.attachShadow({
      mode: 'open'
    }); // game settings


    _this.game = {
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
    _this.countField;
    _this.colors;
    _this.sounds;
    _this.message;
    _this.startButton;
    return _this;
  }

  _createClass(SimonGame, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.render(); // init game fields and buttons

      this.countField = this.shadowRoot.querySelector('#count');
      this.colors = this.shadowRoot.querySelectorAll('.colors');
      this.sounds = this.shadowRoot.querySelectorAll('audio');
      this.message = this.shadowRoot.querySelector('#message');
      this.startButton = this.shadowRoot.querySelector('#start'); // event handlers

      this.startButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this2.newGame();
      });
      this.colors.forEach(function (color) {
        color.addEventListener('click', function (e) {
          return _this2.handlePlayerClick(e);
        });
      });
    }
  }, {
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
      var _this3 = this;

      this.game.count++;
      this.countField.classList.add('fade');
      this.countField.textContent = this.game.count;
      setTimeout(function () {
        _this3.countField.classList.remove('fade');
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
      var _this4 = this;

      var i = 0;
      var moves = setInterval(function () {
        _this4.playGame(_this4.game.gameSeq[i]);

        i++;

        if (i >= _this4.game.gameSeq.length) {
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
      var _this5 = this;

      this.sounds[id].play();
      this.colors[id].classList.add('active');
      setTimeout(function () {
        _this5.colors[id].classList.remove('active');
      }, 300);
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(e) {
      e.preventDefault();

      if (!this.game.lock) {
        var target = e.target;
        this.sounds[target.id].play();
        target.classList.add('active');
        setTimeout(function () {
          target.classList.remove('active');
        }, 300);
        this.addToPlayerSeq(+target.id);
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
      var _this6 = this;

      if (this.game.playerSeq[this.game.playerSeq.length - 1] !== this.game.gameSeq[this.game.playerSeq.length - 1]) {
        this.message.textContent = "Congratulations you did ".concat(this.game.count, " turns!");
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
            setTimeout(function () {
              _this6.message.textContent = '';

              _this6.nextLevel();
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
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n            <style>\n                @import \"app.css\";\n            </style>\n            <div id=\"container\">\n                <div class=\"colors green\" id=\"0\"></div>\n                <div class=\"colors red\" id=\"1\"></div>\n                <div class=\"colors yellow\" id=\"2\"></div>\n                <div class=\"colors blue\" id=\"3\"></div>\n                <div id=\"center\">\n                    <div id=\"counter\">\n                        <h1 id=\"count\">0</h1>\n                    </div>\n                    <h1>simon</h1>\n                    <div id=\"message\"></div>\n                    <div id=\"starter\">\n                        <a href=\"#\" id=\"start\" class=\"myButton\">Start Game</a>\n                    </div>\n                </div>\n            </div>\n\n            <audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\"></audio>\n            <audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3\"></audio>\n            <audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3\"></audio>\n            <audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3\"></audio>\n        ";
    }
  }]);

  return SimonGame;
}(_wrapNativeSuper(HTMLElement));

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