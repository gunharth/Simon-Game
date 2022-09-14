/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_simon_game_simon_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/simon-game/simon-game.js */ "./src/component/simon-game/simon-game.js");

customElements.define('simon-game', _component_simon_game_simon_game_js__WEBPACK_IMPORTED_MODULE_0__.SimonGame); // loading animation

var loader = document.getElementById('loader');
setTimeout(function () {
  loader.firstChild.classList.add('rotating');
}, 700);
setTimeout(function () {
  loader.classList.add('is-hidden');
}, 1400);
setTimeout(function () {
  loader.remove();
}, 3400);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log("Service Worker Registered");
  });
}

/***/ }),

/***/ "./src/component/simon-game/simon-game.js":
/*!************************************************!*\
  !*** ./src/component/simon-game/simon-game.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimonGame": () => (/* binding */ SimonGame)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SimonGame = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SimonGame, _HTMLElement);

  var _super = _createSuper(SimonGame);

  function SimonGame() {
    var _this;

    _classCallCheck(this, SimonGame);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    }); // game settings


    _this.game = {
      rounds: 5,
      // default 20 rounds to go
      count: 0,
      options: [0, 1, 2, 3],
      gameSeq: [],
      playerSeq: [],
      lock: true,
      textStart: 'Simon',
      textDefault: 'Simon says',
      textLevel: ['Good!', 'Awesome!', 'Well done!', 'Great!', 'Fantastic!', 'Bligh me!'],
      textAgain: 'Sorry!',
      textWinner: 'Wohoo!<br>You won!'
    }; // game fields and buttons

    _this.score;
    _this.highscore;
    _this.colors;
    _this.message;
    _this.startGame;
    _this.sounds = [new Audio('audio/simonSound1.mp3'), new Audio('audio/simonSound2.mp3'), new Audio('audio/simonSound3.mp3'), new Audio('audio/simonSound4.mp3')];
    return _this;
  }

  _createClass(SimonGame, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.render(); // init game fields and buttons

      this.score = this.shadowRoot.querySelector('#score');
      this.highscore = this.shadowRoot.querySelector('#highscore');
      this.updateHighscore(this.getHighscore());
      this.colors = this.shadowRoot.querySelectorAll('.colors');
      this.message = this.shadowRoot.querySelector('#message');
      this.start = this.shadowRoot.querySelector('#startgame');
      this.reset = this.shadowRoot.querySelector('#resetgame'); //event handlers

      this.start.addEventListener('click', function (e) {
        e.preventDefault();

        _this2.newGame();
      });
      this.reset.addEventListener('click', function (e) {
        e.preventDefault();

        _this2.resetGame();
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
      this.message.textContent = this.game.textDefault;
      this.start.setAttribute('disabled', true);
      this.reset.setAttribute('disabled', true);
      this.addCount();
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      this.clearGame();
      this.message.textContent = this.game.textStart; // this.start.removeAttribute('disabled');

      this.setHighscore(0);
      this.updateHighscore(0);
    }
  }, {
    key: "clearGame",
    value: function clearGame() {
      this.game.gameSeq = [];
      this.game.gamePlayer = [];
      this.game.count = 0;
      this.updateScore();
    }
  }, {
    key: "addCount",
    value: function addCount() {
      this.game.count++;
      this.game.lock = true;
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
          setTimeout(function () {
            _this3.message.textContent = 'Your turn!';
          }, 700);
        }
      }, 700);
      this.clearPlayerSeq();
    }
  }, {
    key: "playGame",
    value: function playGame(id) {
      var _this4 = this;

      this.sounds[id].play();
      this.colors[id].classList.add('active');
      setTimeout(function () {
        _this4.colors[id].classList.remove('active');
      }, 300);
    }
  }, {
    key: "clearPlayerSeq",
    value: function clearPlayerSeq() {
      this.game.lock = false;
      this.game.playerSeq = [];
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
      var _this5 = this;

      if (this.game.playerSeq[this.game.playerSeq.length - 1] !== this.game.gameSeq[this.game.playerSeq.length - 1]) {
        this.message.innerHTML = " \xAF\\_(\u30C4)_/\xAF<br>You did ".concat(this.game.count - 1, " turns!");
        this.checkHighscore(this.game.count - 1);
        this.start.removeAttribute('disabled');
        this.reset.removeAttribute('disabled');
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
            this.start.removeAttribute('disabled');
            this.reset.removeAttribute('disabled');
          } else {
            // this.game.lock = true;
            this.message.textContent = this.game.textLevel[Math.floor(Math.random() * 5)];
            setTimeout(function () {
              _this5.message.textContent = _this5.game.textDefault;

              _this5.nextLevel();
            }, 2000);
          }
        }
      }
    }
  }, {
    key: "updateScore",
    value: function updateScore() {
      this.game.count < 10 ? this.score.textContent = '0' + this.game.count : this.score.textContent = this.game.count;
    }
  }, {
    key: "nextLevel",
    value: function nextLevel() {
      this.addCount();
    }
  }, {
    key: "checkHighscore",
    value: function checkHighscore(rounds) {
      if (rounds > this.getHighscore()) {
        this.setHighscore(rounds);
        this.updateHighscore(rounds);
      }
    }
  }, {
    key: "updateHighscore",
    value: function updateHighscore(hs) {
      hs < 10 ? this.highscore.innerHTML = '0' + hs : this.highscore.textContent = hs;
    }
  }, {
    key: "getHighscore",
    value: function getHighscore() {
      return localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
    }
  }, {
    key: "setHighscore",
    value: function setHighscore(rounds) {
      localStorage.setItem('highscore', rounds);
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n            <link rel=\"stylesheet\" href=\"simon-game.css\">\n            <div class=\"hs-outer\">\n                <h3>High Score: <span id=\"highscore\">3</span></h3>\n            </div>\n            <div class=\"controls\">\n            <button id=\"startgame\" href=\"#\">Start</button>\n            <span class=\"score\" id=\"score\">00</span>\n            <button id=\"resetgame\" href=\"#\">Reset</button>\n            </div>\n            <div id=\"gamepad\">\n                <div class=\"colors green\" id=\"0\"></div>\n                <div class=\"colors red\" id=\"1\"></div>\n                <div class=\"colors yellow\" id=\"2\"></div>\n                <div class=\"colors blue\" id=\"3\"></div>\n                <div id=\"center\">\n                    <div id=\"message\">Simon</div>\n                </div>\n            </div>\n        ";
    }
  }]);

  return SimonGame;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/***/ }),

/***/ "./src/component/simon-game/simon-game.scss":
/*!**************************************************!*\
  !*** ./src/component/simon-game/simon-game.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/app": 0,
/******/ 			"public/simon-game": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksimon_game"] = self["webpackChunksimon_game"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/app","public/simon-game"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_require__.O(undefined, ["public/app","public/simon-game"], () => (__webpack_require__("./src/component/simon-game/simon-game.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/app","public/simon-game"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;