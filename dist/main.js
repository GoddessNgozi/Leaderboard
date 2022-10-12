/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const result = [\n  {\n    user: 'Ngozi',\n    score: '100',\n  },\n  {\n    user: 'Jenny',\n    score: '500',\n  },\n];\n\nconst getScores = () => {\n  const board = document.getElementById('board');\n  board.innerHTML = '';\n  result.forEach((item) => {\n    board.innerHTML += `\n          <tr><td>${item.user}: ${item.score}</td></tr>\n          `;\n  });\n};\n\nconst postScore = (e) => {\n  e.preventDefault();\n  const name = document.querySelector('#name').value;\n  const score = document.querySelector('#score').value;\n  const data = {\n    user: name.trim(),\n    score,\n  };\n  result.push(data);\n  document.querySelector('form').reset();\n};\n\ndocument.getElementById('refresh').addEventListener('click', getScores);\n\ndocument.querySelector('form').addEventListener('submit', postScore);\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;