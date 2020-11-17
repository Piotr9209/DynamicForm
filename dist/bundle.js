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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/triangle.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/triangle.ts":
/*!*************************!*\
  !*** ./src/triangle.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// "2) Utwórz funkcję, która jako argument przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego "
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRectangularTriangle = void 0;
exports.isRectangularTriangle = function (x1, x2, x3) {
    var _c = [x1, x2, x3].sort(function (_a, _b) { return _a - _b; }), a = _c[0], b = _c[1], c = _c[2];
    var areAnyNumbersLessAndGreaterThan0 = a <= 0;
    if (areAnyNumbersLessAndGreaterThan0)
        throw new Error("all numbers must be greater than 0");
    // const checkArgsToBuildTriangle = a + b <= c;
    if (!(a + b > c)) {
        console.log(a, b, c);
        throw new Error("can't build a triangle with this arguments");
    }
    // console.log('a=>', a)
    // console.log('b=>', b)
    // console.log('c=>', c)
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ? true : false;
};
// test:
//wywalic true jesli jest ok
// wywali false jest nie jest ok
// wywalic error jesli nie przejdzie
//sprawdzic czy przejda ponizej 0 cyfry
//sprawdzic czy jak dam parametr 3,4,6 zbuduje trojkat i wywali err
console.log(exports.isRectangularTriangle(3, 2, 1));
// console.log(isRectangularTriangle(1, 2, 3))
// console.log(isRectangularTriangle(3, 5, 1))
// console.log(isRectangularTriangle(3, 8, 1))
// console.log(isRectangularTriangle(11, 1, 3))
// console.log(isRectangularTriangle(-2, -3, -4))
// console.log(isRectangularTriangle(-5, -7, -9))
// wracając do opisów
// 9:33
// pisz na razie po polsku
// 9:33
// funckja X działa poprawnie jeśli
// 9:34
// po przekazaniu do niech numerów tworzących trójkąt nieprostokątny zwraca false
// 9:34
// po przekazanieu do niej numerów tworzących trójkąt prostokątny zwraca true
// 9:34
// *do niej zestawów numerów ...
// 9:35
// funckja X poprawnie obsługuje errory jeśli
// 9:35
// po przekazaniu do niejs zestawów numerów zawierających liczby ujemne prezentuje odpowiedni error
// 9:35
// po przekazaniu do niej zestawów nie tworzących trójkąta pokazje odpowiedni error
// 9:36
// łapiesz już zasadę >


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map