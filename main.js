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

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutTab: () => (/* binding */ aboutTab)\n/* harmony export */ });\nconst aboutTab = function () {\n  const tab = document.createElement(\"div\");\n  tab.classList.add(\"tab\");\n\n  const tabContent = document.createElement(\"div\");\n  tabContent.classList.add(\"tab-content\");\n\n  const tabHeader = document.createElement(\"h1\");\n  tabHeader.textContent = \"About\";\n\n  const tabText = document.createElement(\"p\");\n  tabText.textContent = \"This is the about tab content\";\n\n  tabContent.appendChild(tabHeader);\n  tabContent.appendChild(tabText);\n\n  tab.appendChild(tabContent);\n\n  return tab;\n};\n\n\n//# sourceURL=webpack:///./src/about-tab.js?");

/***/ }),

/***/ "./src/home-details.js":
/*!*****************************!*\
  !*** ./src/home-details.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addContent: () => (/* binding */ addContent)\n/* harmony export */ });\nconst addContent = function () {\n  const contentContainer = document.querySelector(\"#content\");\n\n  const pageHeader = document.createElement(\"h1\");\n  const pageContent = document.createElement(\"p\");\n\n  pageHeader.textContent = \"Home Details\";\n  pageContent.textContent = \"This is the home details page content\";\n\n  contentContainer.appendChild(pageHeader);\n  contentContainer.appendChild(pageContent);\n};\n\n\n//# sourceURL=webpack:///./src/home-details.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeTab: () => (/* binding */ homeTab)\n/* harmony export */ });\nconst homeTab = function () {\n  const contentContainer = document.querySelector(\"#content\");\n\n  const tab = document.createElement(\"div\");\n  tab.classList.add(\"tab\");\n\n  const tabContent = document.createElement(\"div\");\n  tabContent.classList.add(\"tab-content\");\n\n  const tabHeader = document.createElement(\"h1\");\n  tabHeader.textContent = \"Home\";\n\n  const tabText = document.createElement(\"p\");\n  tabText.textContent = \"This is the home tab content\";\n\n  tabContent.appendChild(tabHeader);\n  tabContent.appendChild(tabText);\n\n  tab.appendChild(tabContent);\n\n  contentContainer.appendChild(tab);\n};\n\n\n//# sourceURL=webpack:///./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-details.js */ \"./src/home-details.js\");\n/* harmony import */ var _home_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab.js */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab.js */ \"./src/menu-tab.js\");\n/* harmony import */ var _about_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-tab.js */ \"./src/about-tab.js\");\n\n\n\n\n\n(0,_home_details_js__WEBPACK_IMPORTED_MODULE_0__.addContent)();\n\nconst homeTabButton = document.querySelector(\"#homeTab\");\nconst menuTabButton = document.querySelector(\"#menuTab\");\nconst aboutTabButton = document.querySelector(\"#aboutTab\");\n\nhomeTabButton.addEventListener(\"click\", () => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  (0,_home_tab_js__WEBPACK_IMPORTED_MODULE_1__.homeTab)();\n});\n\nmenuTabButton.addEventListener(\"click\", () => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  content.appendChild((0,_menu_tab_js__WEBPACK_IMPORTED_MODULE_2__.menuTab)());\n});\n\naboutTabButton.addEventListener(\"click\", () => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  content.appendChild((0,_about_tab_js__WEBPACK_IMPORTED_MODULE_3__.aboutTab)());\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuTab: () => (/* binding */ menuTab)\n/* harmony export */ });\nconst menuTab = function () {\n  const tab = document.createElement(\"div\");\n  tab.classList.add(\"tab\");\n\n  const tabContent = document.createElement(\"div\");\n  tabContent.classList.add(\"tab-content\");\n\n  const tabHeader = document.createElement(\"h1\");\n  tabHeader.textContent = \"Menu\";\n\n  const tabText = document.createElement(\"p\");\n  tabText.textContent = \"This is the menu tab content\";\n\n  tabContent.appendChild(tabHeader);\n  tabContent.appendChild(tabText);\n\n  tab.appendChild(tabContent);\n\n  return tab;\n};\n\n\n//# sourceURL=webpack:///./src/menu-tab.js?");

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