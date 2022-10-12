/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_postscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/postscore.js */ \"./src/modules/postscore.js\");\n/* harmony import */ var _modules_getscores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getscores.js */ \"./src/modules/getscores.js\");\n\n\n\ndocument.querySelector('form').addEventListener('submit', _modules_postscore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\ndocument.getElementById('refresh').addEventListener('click', _modules_getscores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/getscores.js":
/*!**********************************!*\
  !*** ./src/modules/getscores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getScores = async () => {\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a3bnNfVu6IZEqV9J1Num/scores/');\n  const data = await response.json();\n  const { result } = data;\n  const board = document.getElementById('board');\n  board.innerHTML = '';\n  result.forEach((item) => {\n    board.innerHTML += `\n        <tr><td>${item.user}: ${item.score}</td></tr>\n        `;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);\n\n//# sourceURL=webpack://leaderboard/./src/modules/getscores.js?");

/***/ }),

/***/ "./src/modules/postscore.js":
/*!**********************************!*\
  !*** ./src/modules/postscore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postScore = async (e) => {\n  e.preventDefault();\n  const user = document.querySelector('#name').value;\n  const score = document.querySelector('#score').value;\n  const data = {\n    user,\n    score,\n  };\n  const post = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  };\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a3bnNfVu6IZEqV9J1Num/scores/', post);\n  document.querySelector('form').reset();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postScore);\n\n//# sourceURL=webpack://leaderboard/./src/modules/postscore.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;