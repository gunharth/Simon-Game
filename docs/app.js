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
/*! no static exports found */
/***/ (function(module, exports) {

var game = {
  count: 0,
  possibilities: [0, 1, 2, 3],
  gameLevel: [0, 1, 2],
  player: [],
  gameLock: false
};
var countField = document.querySelector('#count');
var colors = document.querySelectorAll('.colors');

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
  }, 600);
  clearPlayer();
}

function playGame(id) {
  // field.addClass('hover');
  // console.log(field);
  // field.classList.add('active');
  document.getElementsByClassName(id)[0].play();
  document.getElementById(id).classList.add('active'); // sound(field);

  setTimeout(function () {
    document.getElementById(id).classList.remove('active');
  }, 300);
}

function clearPlayer() {
  game.player = [];
} // Response on color click


colors.forEach(function (color) {
  return color.addEventListener('click', function (e) {
    if (!game.gameLock) {
      color.classList.add('active');
      setTimeout(function () {
        return color.classList.remove('active');
      }, 150);
      document.getElementsByClassName(e.target.id)[0].play(); //userplay(e.target)
    }
  });
});

function addToPlayer(id) {
  var field = "#" + id;
  console.log(field);
  game.player.push(field);
  playerTurn(field);
}

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.gameLevel[game.player.length - 1]) {
    alert('Wrong move! Try again!');
    showMoves();
  } else {
    console.log('Good Move!'); //sound(x);

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
  game.gameLevel.push(game.possibilities[Math.floor(Math.random() * 4)]);
  showMoves();
}

function addCount() {
  game.count++;
  countField.textContent = game.count;
  generateMove();
}

newGame();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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