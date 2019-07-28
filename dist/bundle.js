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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emulator/emulator.ts":
/*!**********************************!*\
  !*** ./src/emulator/emulator.ts ***!
  \**********************************/
/*! exports provided: Emulator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emulator", function() { return Emulator; });
/* harmony import */ var _models_Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _models_CpuState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CpuState */ "./src/emulator/models/CpuState.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/emulator/utils/utils.ts");
/* harmony import */ var _models_Bit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Bit */ "./src/emulator/models/Bit.ts");
/* harmony import */ var _models_Uint16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _models_ByteArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/ByteArray */ "./src/emulator/models/ByteArray.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};






// const fs = require('fs');
// prettier-ignore
var cycles8080 = [
    4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4,
    4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4,
    4, 10, 16, 5, 5, 5, 7, 4, 4, 10, 16, 5, 5, 5, 7, 4,
    4, 10, 13, 5, 10, 10, 10, 4, 4, 10, 13, 5, 5, 5, 7, 4,
    5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
    5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
    5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
    7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 5,
    4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
    4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
    4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
    4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
    11, 10, 10, 10, 17, 11, 7, 11, 11, 10, 10, 10, 10, 17, 7, 11,
    11, 10, 10, 10, 17, 11, 7, 11, 11, 10, 10, 10, 10, 17, 7, 11,
    11, 10, 10, 18, 17, 11, 7, 11, 11, 5, 10, 5, 17, 17, 7, 11,
    11, 10, 10, 4, 17, 11, 7, 11, 11, 5, 10, 4, 17, 17, 7, 11,
];
// CPU running at 2mhz, 2 interrupts running at 60mhz
var cyclesUntilInterrupt = Math.ceil(2000000 / 60 / 2);
var Emulator = /** @class */ (function () {
    function Emulator(_a) {
        var _this = this;
        var mediator = _a.mediator, debug = _a.debug, web = _a.web;
        this.instructionNumber = 0;
        this.cycles = 0;
        this.byteAt = function (index) {
            var state = _this.state;
            return state.memory[state.pc.val() + index];
        };
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        state = this.state;
                        _a.label = 1;
                    case 1:
                        if (!(state.pc.val() > -1)) return [3 /*break*/, 4];
                        if (!(this.instructionNumber % 1000 === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // if (new Date().getTime() - this.lastInterrupt > 1.0 / 60.0) {
                        //   //1/60 second has elapsed
                        //   //only do an interrupt if they are enabled
                        //   if (this.state.intEnable) {
                        //     this.generateInterrupt(2); //interrupt 2
                        //     //Save the time we did this
                        //     this.lastInterrupt = new Date().getTime();
                        //   }
                        // }
                        this.cycles += this.readNext();
                        if (this.cycles >= cyclesUntilInterrupt) {
                            if (Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(this.state.intEnable.val())) {
                                this.generateInterrupt(2);
                                this.state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](0);
                            }
                            this.cycles -= cyclesUntilInterrupt;
                        }
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.log = function (counter, opcode) {
            var state = _this.state;
            console.log("at " + counter + " (0x" + counter.toString(16) + "), instruction " + _this.instructionNumber + ", command 0x" + opcode.toString(16));
            _this.logState(state);
        };
        this.readNext = function () {
            var state = _this.state;
            var opcode = state.memory[state.pc.val()].val();
            // if (this.debug && this.instructionNumber >= 42250 - 2) {
            //   this.log(state.pc.val(), opcode);
            // }
            // if (this.instructionNumber === 42250) {
            //   debugger;
            // }
            switch (opcode) {
                case 0x00: {
                    // NOP
                    state.pc.incr(1);
                    break;
                }
                case 0x01:
                    // LXI B, D16
                    state.b = _this.byteAt(2);
                    state.c = _this.byteAt(1);
                    state.pc.incr(3);
                    break;
                case 0x02: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x03: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x04: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x05: {
                    // DCR B
                    state.b.decr(1);
                    _this.setFlags(state.b);
                    state.pc.incr(1);
                    break;
                }
                case 0x06: {
                    // MVI B, D8
                    state.b = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x07: {
                    // RLC
                    _this.unimplementedInstruction(opcode);
                    // this.setCarryBit();
                    break;
                }
                case 0x08: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x09: {
                    // DAD B
                    // const res = this.concatUint(this.state.b, this.state.c);
                    var val = state.hl.add(state.bc);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x0a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x0b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x0c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x0d: {
                    // DCR C
                    state.c.decr(1);
                    _this.setFlags(state.c);
                    state.pc.incr(1);
                    break;
                }
                case 0x0e: {
                    // MVI C, D8
                    state.c = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x0f: {
                    // RRC
                    var bin = state.a
                        .val()
                        .toString(2)
                        .padStart(8);
                    var bit_1 = bin[0];
                    _this.rotate(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0x10: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x11: {
                    // LXI D, D16
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x12: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x13: {
                    // INX D
                    // const bytes = this.concatUint(state.d, state.e);
                    var val = state.de.add(1);
                    state.de = val;
                    // const { high, low } = this.split(bytes.val());
                    // state.d = high;
                    // state.e = low;
                    state.pc.incr(1);
                    break;
                }
                case 0x14: {
                    // INR D
                    state.d.incr(1);
                    _this.setFlags(state.d);
                    state.pc.incr(1);
                    break;
                }
                case 0x15: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x16: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x17: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x18: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x19: {
                    // DAD D
                    // const res = this.concatUint(this.state.d, this.state.e);
                    var val = state.hl.add(state.de);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x1a: {
                    // LDAX D
                    state.a = state.memory[state.de.val()];
                    state.pc.incr(1);
                    break;
                }
                case 0x1b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x1c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x1d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x1e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x1f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x20: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x21: {
                    // LXI H, D16
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x22: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x23: {
                    // INX H
                    var val = state.hl.add(1);
                    state.hl = val;
                    // const { high, low } = this.split(bytes.val());
                    // state.h = high;
                    // state.l = low;
                    state.pc.incr(1);
                    break;
                }
                case 0x24: {
                    // INR H
                    state.h.incr(1);
                    _this.setFlags(state.h);
                    state.pc.incr(1);
                    break;
                }
                case 0x25: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x26: {
                    // MVI H, D8
                    state.h = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x27: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x28: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x29: {
                    // DAD H
                    var val = state.hl.add(state.hl);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x2a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x2b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x2c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x2d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x2e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x2f: {
                    // CMA
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](~state.a.val());
                    state.pc.incr(1);
                    break;
                }
                case 0x30: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x31: {
                    // LXI SP, D16
                    state.sp = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x32: {
                    // STA adr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    // state.memory[addr.val()] = state.a;
                    state.a = addr;
                    state.pc.incr(3);
                    break;
                }
                case 0x33: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x34: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x35: {
                    // DCR M
                    var val = state.hl.sub(1);
                    _this.updateRam(state.hl.val(), val);
                    _this.setFlags(val, true);
                    state.pc.incr(1);
                    // this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x36: {
                    // MVI M, D8
                    _this.updateRam(state.hl.val(), _this.byteAt(1));
                    state.pc.incr(2);
                    break;
                }
                case 0x37: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x38: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x39: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x3a: {
                    // LDA adr
                    var adr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.a = state.memory[adr.val()];
                    state.pc.incr(3);
                    break;
                }
                case 0x3b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x3c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x3d: {
                    // DCR A
                    state.a.decr(1);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0x3e: {
                    // MVI A, D8
                    state.a = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x3f: {
                    // CMC
                    var val = state.cc.cy === 0 ? 1 : 0;
                    _this.setCarryBit(val);
                    state.pc.incr(1);
                    break;
                }
                case 0x40: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x41:
                    state.b = state.c;
                    break;
                case 0x42:
                    state.b = state.d;
                    break;
                case 0x43:
                    state.b = state.e;
                    break;
                case 0x44: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x45: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x46: {
                    // MOV B, M
                    _this.movMem('b', 'm');
                    break;
                }
                case 0x47: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x48: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x49: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x4f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x50: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x51: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x52: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x53: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x54: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x55: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x56: {
                    // MOV D, M
                    // ErRoR HeRe
                    _this.movMem('d', 'm');
                    break;
                }
                case 0x57: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x58: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x59: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x5a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x5b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x5c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x5d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x5e: {
                    // MOV E, M
                    _this.movMem('e', 'm');
                    break;
                }
                case 0x5f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x60: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x61: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x62: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x63: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x64: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x65: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x66: {
                    // MOV H, M
                    _this.movMem('h', 'm');
                    break;
                }
                case 0x67: {
                    // MOV H, A
                    _this.mov('h', 'a');
                    break;
                }
                case 0x68: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x69: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x6f: {
                    // MOV L, A
                    _this.mov('l', 'a');
                    break;
                }
                case 0x70: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x71: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x72: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x73: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x74: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x75: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x76: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x77: {
                    // MOV M, A
                    _this.movMem('m', 'a');
                    break;
                }
                case 0x78: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x79: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x7a: {
                    // MOV A, D
                    _this.mov('a', 'd');
                    break;
                }
                case 0x7b: {
                    // 	MOV A, E
                    _this.mov('a', 'e');
                    break;
                }
                case 0x7c: {
                    // MOV A, H
                    _this.mov('a', 'h');
                    break;
                }
                case 0x7d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x7e: {
                    // MOV A, M
                    _this.movMem('a', 'm');
                    break;
                }
                case 0x7f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x80: {
                    // ADD B
                    var val = state.a.add(state.b);
                    _this.setFlags(val, true);
                    state.a = val;
                    break;
                }
                case 0x81: {
                    // ADD C
                    var val = state.a.add(state.c);
                    _this.setFlags(val, true);
                    state.a = val;
                    break;
                }
                case 0x82: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x83: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x84: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x85: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x86: {
                    // ADD M
                    // const offset = (state.h.val() << 8) | state.l.val();
                    var val = state.a.add(state.memory[state.hl.val()]);
                    _this.setFlags(val, true);
                    state.a = val;
                    break;
                }
                case 0x87: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x88: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x89: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x8f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x90: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x91: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x92: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x93: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x94: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x95: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x96: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x97: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x98: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x99: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9a: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9b: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9c: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9d: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9e: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x9f: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa0: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa1: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa2: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa3: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa5: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa6: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa7: {
                    // ANA A
                    var and = state.a.val() & state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setFlags(state.a, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xa8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xa9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xaa: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xab: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xac: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xad: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xae: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xaf: {
                    // XRA A
                    var xor = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(!!state.a.val() != !!state.a.val());
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setFlags(state.a, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xb0: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb1: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb2: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb3: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb5: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb6: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xb9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xba: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xbb: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xbc: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xbd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xbe: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xbf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc0: {
                    // RNZ
                    if (state.cc.z !== 0) {
                        var low = state.memory[state.sp.val()];
                        var high = state.memory[state.sp.incr(1)];
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                        state.sp.incr(1);
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xc1: {
                    // POP B
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xc2: {
                    // JNZ address
                    if (state.cc.z === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xc3: {
                    // JMP address
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xc4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc5: {
                    // PUSH B
                    // state.memory[state.sp.decr(1)] = state.b;
                    // state.memory[state.sp.decr(1)] = state.c;
                    _this.updateRam(state.sp.decr(1), state.b);
                    _this.updateRam(state.sp.decr(1), state.c);
                    state.pc.incr(1);
                    break;
                }
                case 0xc6: {
                    // ADI byte
                    var val = state.a.add(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xc7: {
                    // RST
                    state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_4__["default"](0);
                    state.pc.incr(1);
                    break;
                }
                case 0xc8: {
                    // RZ
                    if (state.cc.z === 0) {
                        var low = state.memory[state.sp.val()];
                        var high = state.memory[state.sp.incr(1)];
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                        state.sp.incr(1);
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xc9: {
                    // RET
                    // const { val } = state.sp.add(1);
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    break;
                }
                case 0xca: {
                    // JZ adr
                    if (state.cc.z === 0) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xcb: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcc: {
                    // CZ adr
                    if (state.cc.z === 0) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _a.high, low = _a.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xcd: {
                    // CALL address
                    var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                    var _b = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _b.high, low = _b.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xce: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd0: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd1: {
                    // POP D
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xd2: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd3: {
                    // OUT D8
                    // this.out[this.byteAt(1).val()] = state.a.val();
                    console.log(_this.instructionNumber +
                        ' ' +
                        _this.byteAt(1).val() +
                        ' ' +
                        state.a.val());
                    _this.send(_this.byteAt(1).val(), state.a.val(), 1);
                    state.pc.incr(2);
                    break;
                }
                case 0xd4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd5: {
                    // PUSH D
                    _this.updateRam(state.sp.decr(1), state.d);
                    _this.updateRam(state.sp.decr(1), state.e);
                    state.pc.incr(1);
                    break;
                }
                case 0xd6: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xda: {
                    // JC adr
                    // TODO: THIS IS WRONG
                    if (state.cc.cy === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    state.pc.incr(3);
                    // state.memory[addr.val()] = state.a;
                    break;
                }
                case 0xdb: {
                    // IN D8
                    state.a = _this.in[_this.byteAt(1).val()];
                    state.pc.incr(2);
                    break;
                }
                case 0xdc: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xdd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xde: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xdf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe0: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe1: {
                    // POP H
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xe2: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe3: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe4: {
                    // CPO
                    // TODO: need else?
                    _this.unimplementedInstruction(opcode);
                    if (state.cc.p === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    break;
                }
                case 0xe5: {
                    // PUSH H
                    // state.memory[state.sp.decr(1)] = state.h;
                    // state.memory[state.sp.decr(1)] = state.l;
                    _this.updateRam(state.sp.decr(1), state.h);
                    _this.updateRam(state.sp.decr(1), state.l);
                    state.pc.incr(1);
                    break;
                }
                case 0xe6: {
                    // ANI D8
                    var and = state.a.val() & _this.byteAt(1).val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setFlags(state.a, true);
                    state.pc.incr(2);
                    break;
                }
                case 0xe7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xea: {
                    // JPE adr
                    // if parity equals 1 that indicates it's even
                    if (state.cc.p === 1) {
                        // const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
                        // state.pc = addr;
                        state.pc.incr(3);
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xeb: {
                    // XCHG
                    var h = state.h;
                    var l = state.l;
                    state.h = state.d;
                    state.l = state.e;
                    state.d = h;
                    state.e = l;
                    state.pc.incr(1);
                    break;
                }
                case 0xec: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xed: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xee: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xef: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf0: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf1: {
                    // POP PSW
                    var psw = state.memory[state.sp.val() + 1];
                    state.cc.setPsw(psw);
                    state.sp.incr(2);
                    state.pc.incr(1);
                    break;
                }
                case 0xf2: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf3: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf5: {
                    // PUSH PSW
                    // state.memory[state.sp.decr(1)] = state.a;
                    // state.memory[state.sp.decr(1)] = state.cc.getPsw();
                    _this.updateRam(state.sp.decr(1), state.a);
                    _this.updateRam(state.sp.decr(1), state.cc.getPsw());
                    state.pc.incr(1);
                    break;
                }
                case 0xf6: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xfa: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xfb: {
                    // EI
                    state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](1);
                    state.pc.incr(1);
                    break;
                }
                case 0xfc: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xfd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xfe: {
                    // CPI D8
                    var val = state.a.sub(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.pc.incr(2);
                    break;
                }
                case 0xff: {
                    // RST 7
                    break;
                }
                default: {
                    _this.unimplementedInstruction(-1);
                }
            }
            _this.instructionNumber++;
            return cycles8080[opcode];
        };
        this.setFlags = function (n, carry) {
            var state = _this.state;
            state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((n.val() & 0xff) === 0);
            state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((n.val() & 0x80) !== 0);
            state.cc.ac = n.auxCarry;
            state.cc.p = _this.parity(n.val());
            if (carry) {
                _this.setCarryBit(n.carry);
            }
        };
        this.setCarryBit = function (n) { return (_this.state.cc.cy = n); };
        this.parity = function (n) {
            return Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(n % 2 === 1 ? 0 : 1);
            // let calc = n & 0xff;
            // let parity = 0;
            // while (calc) {
            //   parity = parity === 0 ? 1 : 0;
            //   calc &= calc - 1;
            // }
            // return bit(parity);
        };
        this.mov = function (srcKey, destKey) {
            if (srcKey === 'm' || destKey === 'm') {
                throw new Error('src and dest cannot be a memory location');
            }
            var state = _this.state;
            state[srcKey] = state[destKey];
            state.pc.incr(1);
        };
        this.movMem = function (srcKey, destKey) {
            if (srcKey !== 'm' && destKey !== 'm') {
                throw new Error('must specify a memory location');
            }
            var state = _this.state;
            if (srcKey === 'm') {
                // state.memory[state.hl.val()] = state[destKey];
                _this.updateRam(state.hl.val(), state[destKey]);
            }
            else {
                state[srcKey] = state.memory[state.hl.val()];
                // this.updateRam(state[srcKey], state.hl, 'm');
            }
            state.pc.incr(1);
        };
        this.rotate = function (accum) {
            var binary = accum.val().toString(2);
            _this.setCarryBit(Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(Number(binary[0])));
            var transform = binary.slice(2) + binary.slice(0, 1);
            accum = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(transform, 2));
        };
        this.unimplementedInstruction = function (opcode) {
            var state = _this.state;
            throw new Error("Unimplemented code at instruction " + _this.instructionNumber + " at for opcode " + opcode.toString(16) + " at offset " + state.pc.val());
        };
        this.state = new _models_CpuState__WEBPACK_IMPORTED_MODULE_1__["default"]();
        var useWeb = !!web;
        var useDebug = !!debug;
        if (!useWeb) {
            // const rom = fs.readFileSync('invaders');
            // const ram = Buffer.alloc(0x2000);
            // this.state.memory.set([...rom, ...ram]);
        }
        else {
        }
        // this.out = Buffer.alloc(0x0100);
        this.mediator = mediator;
        this.debug = useDebug;
        this.lastInterrupt = new Date().getTime();
        this.in = _models_ByteArray__WEBPACK_IMPORTED_MODULE_5__["default"].create();
        this.in.alloc(8);
    }
    Emulator.prototype.send = function (port, pos, bit) {
        this.mediator.sendOut(port, pos, bit);
    };
    Emulator.prototype.receive = function (port, pos, bit) {
        var val = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](this.modifyBit(this.in[port].val(), pos, bit));
        this.in.splice(port, 1, val);
    };
    Emulator.prototype.modifyBit = function (number, pos, b) {
        var mask = 1 << pos;
        return (number & ~mask) | ((b << pos) & mask);
    };
    Emulator.prototype.updateScreen = function (addr, val) {
        this.mediator.updateScreen(addr, val);
    };
    Emulator.prototype.init = function () {
        var _this = this;
        var ram = new Uint8Array(0x2000);
        fetch('invaders').then(function (res) {
            res.arrayBuffer().then(function (buf) {
                var view = new Uint8Array(buf);
                var romBytes = __spread(view).map(Number);
                var ramBytes = __spread(ram).map(Number);
                _this.state.memory.set(__spread(romBytes, ramBytes));
                _this.run();
            });
        });
    };
    Emulator.prototype.logState = function (state) {
        var cc = state.cc;
        console.log("\n    {\n      a: " + state.a.hex + "\n      bc: " + state.bc.hex + "\n      de: " + state.de.hex + "\n      hl: " + state.hl.hex + "\n      pc: " + state.pc.hex + "\n      sp: " + state.sp.hex + "\n      cc: {\n        z: " + cc.z + "\n        s: " + cc.s + "\n        p: " + cc.p + "\n        cy: " + cc.cy + "\n        ac: " + cc.ac + "\n      }\n    }");
    };
    // private push(high: Uint8, low: Uint8) {
    //   const { state } = this;
    //   // state.sp.incr(2);
    // }
    Emulator.prototype.generateInterrupt = function (interruptNum) {
        var state = this.state;
        //perform "PUSH PC"
        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(state.pc), high = _a.high, low = _a.low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);
        //Set the PC to the low memory vector.
        //This is identical to an "RST interrupt_num" instruction.
        state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_4__["default"](8 * interruptNum);
    };
    Emulator.prototype.updateRam = function (location, value) {
        var state = this.state;
        state.memory.splice(location, 1, value);
        if (location >= 0x2400 && location <= 0x3fff) {
            // video ram
            this.updateScreen(location, value.val());
        }
    };
    return Emulator;
}());

// const app = new Emulator({
//   debug: true,
// });
// try {
//   app.run();
// } catch (error) {
//   console.log(app.instructionNumber);
//   console.log(error);
// }
/* harmony default export */ __webpack_exports__["default"] = (Emulator);


/***/ }),

/***/ "./src/emulator/models/Bit.ts":
/*!************************************!*\
  !*** ./src/emulator/models/Bit.ts ***!
  \************************************/
/*! exports provided: toBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBit", function() { return toBit; });
var toBit = function (arg) {
    var val = typeof arg === 'number' ? !!arg : arg;
    return val ? 1 : 0;
};


/***/ }),

/***/ "./src/emulator/models/ByteArray.ts":
/*!******************************************!*\
  !*** ./src/emulator/models/ByteArray.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint8 */ "./src/emulator/models/Uint8.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ByteArray = /** @class */ (function (_super) {
    __extends(ByteArray, _super);
    function ByteArray() {
        var _this = _super.call(this) || this;
        _this.max = 0;
        return _this;
    }
    ByteArray.create = function () {
        return Object.create(ByteArray.prototype);
    };
    ByteArray.prototype.alloc = function (n) {
        for (var i = 0; i < n; i++) {
            this.push(new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]());
        }
    };
    ByteArray.prototype.set = function (n) {
        var _this = this;
        n.forEach(function (val) {
            _this.push(new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val));
        });
    };
    return ByteArray;
}(Array));
/* harmony default export */ __webpack_exports__["default"] = (ByteArray);


/***/ }),

/***/ "./src/emulator/models/ConditionCodes.ts":
/*!***********************************************!*\
  !*** ./src/emulator/models/ConditionCodes.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
// @flow


var ConditionCodes = /** @class */ (function () {
    function ConditionCodes() {
        this.z = 0;
        this.s = 0;
        this.p = 0;
        this.cy = 0;
        this.ac = 0;
        this.pad = 0;
    }
    ConditionCodes.prototype.getPsw = function () {
        var val = this.s + this.z + '0' + this.ac + '0' + this.p + '1' + this.cy;
        return new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(val, 2));
    };
    ConditionCodes.prototype.setPsw = function (n) {
        var binary = n
            .val()
            .toString(2)
            .padStart(8, '0');
        var _a = __read(binary.split('').map(function (s) { return Number(s); }), 8), s = _a[0], z = _a[1], ac = _a[3], p = _a[5], cy = _a[7];
        this.s = Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(s);
        this.z = Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(z);
        this.ac = Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(ac);
        this.p = Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(p);
        this.cy = Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(cy);
    };
    return ConditionCodes;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConditionCodes);


/***/ }),

/***/ "./src/emulator/models/CpuState.ts":
/*!*****************************************!*\
  !*** ./src/emulator/models/CpuState.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _Uint16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _ConditionCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionCodes */ "./src/emulator/models/ConditionCodes.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/emulator/utils/utils.ts");
/* harmony import */ var _ByteArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByteArray */ "./src/emulator/models/ByteArray.ts");
// @flow





var CpuState = /** @class */ (function () {
    function CpuState() {
        this.a = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.b = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.c = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.d = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.e = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.h = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.l = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.sp = new _Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pc = new _Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.memory = _ByteArray__WEBPACK_IMPORTED_MODULE_4__["default"].create();
        this.cc = new _ConditionCodes__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.intEnable = new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Object.defineProperty(CpuState.prototype, "bc", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.b, this.c);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.b = high;
            this.c = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "de", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.d, this.e);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.d = high;
            this.e = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "hl", {
        get: function () {
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].concatUint(this.h, this.l);
        },
        set: function (bytes) {
            var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].split(bytes), high = _a.high, low = _a.low;
            this.h = high;
            this.l = low;
        },
        enumerable: true,
        configurable: true
    });
    return CpuState;
}());
/* harmony default export */ __webpack_exports__["default"] = (CpuState);


/***/ }),

/***/ "./src/emulator/models/Uint.ts":
/*!*************************************!*\
  !*** ./src/emulator/models/Uint.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Uint = /** @class */ (function () {
    function Uint(max, n) {
        if (n === void 0) { n = 0; }
        this.carry = 0;
        this.auxCarry = 0;
        this.max = max;
        this.num = n & this.max;
    }
    Uint.prototype.toString = function () {
        return this.num.toString();
    };
    Uint.prototype.val = function () {
        return this.num;
    };
    Object.defineProperty(Uint.prototype, "isZero", {
        get: function () {
            return this.num === 0;
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.incr = function (n) {
        var val = (this.num + n) & this.max;
        this.num = val;
        return val;
    };
    Uint.prototype.decr = function (n) {
        var val = (this.num - n) & this.max;
        this.num = val;
        return val;
    };
    Object.defineProperty(Uint.prototype, "hex", {
        get: function () {
            return this.num.toString(16);
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.checkCarry = function (val) {
        var carry = val < 0 || val > this.max ? 1 : 0;
        var auxCarry = val < 0 || val > this.max / 2 ? 1 : 0;
        return {
            carry: carry,
            auxCarry: auxCarry,
        };
    };
    return Uint;
}());
/* harmony default export */ __webpack_exports__["default"] = (Uint);


/***/ }),

/***/ "./src/emulator/models/Uint16.ts":
/*!***************************************!*\
  !*** ./src/emulator/models/Uint16.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint */ "./src/emulator/models/Uint.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @flow

var Uint16 = /** @class */ (function (_super) {
    __extends(Uint16, _super);
    function Uint16(n) {
        return _super.call(this, 0xffff, n) || this;
    }
    Uint16.prototype.add = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num + n;
        }
        else {
            val = this.num + n.val();
        }
        var ret = new Uint16(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    Uint16.prototype.sub = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num - n;
        }
        else {
            val = this.num - n.val();
        }
        var ret = new Uint16(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    return Uint16;
}(_Uint__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Uint16);


/***/ }),

/***/ "./src/emulator/models/Uint8.ts":
/*!**************************************!*\
  !*** ./src/emulator/models/Uint8.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uint */ "./src/emulator/models/Uint.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @flow

var Uint8 = /** @class */ (function (_super) {
    __extends(Uint8, _super);
    function Uint8(n) {
        return _super.call(this, 0xff, n) || this;
    }
    Uint8.prototype.add = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num + n;
        }
        else {
            val = this.num + n.val();
        }
        var ret = new Uint8(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    Uint8.prototype.sub = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num - n;
        }
        else {
            val = this.num - n.val();
        }
        var ret = new Uint8(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    return Uint8;
}(_Uint__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Uint8);


/***/ }),

/***/ "./src/emulator/utils/utils.ts":
/*!*************************************!*\
  !*** ./src/emulator/utils/utils.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Uint8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _models_Uint16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Uint16 */ "./src/emulator/models/Uint16.ts");


var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.concatUint = function (most, least) {
        return new _models_Uint16__WEBPACK_IMPORTED_MODULE_1__["default"]((most.val() << 8) | least.val());
    };
    default_1.concat = function (most, least) { return (most << 8) | least; };
    default_1.split = function (n) {
        var high = n.val() >> 8;
        var low = n.val() & 0xff;
        return {
            high: new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](high),
            low: new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](low),
        };
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _painter_painter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./painter/painter */ "./src/painter/painter.ts");
/* harmony import */ var _emulator_emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator/emulator */ "./src/emulator/emulator.ts");
/* harmony import */ var _mediator_Mediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediator/Mediator */ "./src/mediator/Mediator.ts");



var Main = /** @class */ (function () {
    function Main() {
        var mediator = new _mediator_Mediator__WEBPACK_IMPORTED_MODULE_2__["Mediator"]();
        this.emulator = new _emulator_emulator__WEBPACK_IMPORTED_MODULE_1__["Emulator"]({ mediator: mediator, web: true, debug: true });
        var painter = new _painter_painter__WEBPACK_IMPORTED_MODULE_0__["Painter"](mediator);
        mediator.registerOut(this.emulator);
        mediator.registerIn(painter);
    }
    Main.prototype.start = function () {
        this.emulator.init();
    };
    return Main;
}());
new Main().start();


/***/ }),

/***/ "./src/mediator/Mediator.ts":
/*!**********************************!*\
  !*** ./src/mediator/Mediator.ts ***!
  \**********************************/
/*! exports provided: Mediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return Mediator; });
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Mediator.prototype.registerIn = function (colleague) {
        this.in = colleague;
    };
    Mediator.prototype.registerOut = function (colleague) {
        this.out = colleague;
    };
    Mediator.prototype.sendOut = function (port, val, bit) {
        if (!this.in) {
            throw new Error('`in` is not initialized');
        }
        this.in.receive(port, val, bit);
    };
    Mediator.prototype.sendIn = function (port, val, bit) {
        if (!this.out) {
            throw new Error('`out` is not initialized');
        }
        this.out.receive(port, val, bit);
    };
    Mediator.prototype.updateScreen = function (addr, val) {
        if (!this.in) {
            throw new Error('`in` is not initialized');
        }
        this.in.updateScreen(addr, val);
    };
    return Mediator;
}());



/***/ }),

/***/ "./src/painter/painter.ts":
/*!********************************!*\
  !*** ./src/painter/painter.ts ***!
  \********************************/
/*! exports provided: Painter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painter", function() { return Painter; });
var Painter = /** @class */ (function () {
    function Painter(mediator) {
        this.unimplementedInstruction = function (port, val) {
            console.log("Unimplemented code: port " + port + " with value " + val);
        };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext && this.canvas.getContext('2d');
        this.mediator = mediator;
        this.events = new Events(this.send.bind(this));
        this.events.init();
    }
    // get painterCount() {
    //   if (this._painterCount++ > 0x20) {
    //     this._painterCount = 0;
    //     this._x++;
    //   }
    //   return this._x;
    // }
    Painter.prototype.send = function (port, pos, bit) {
        this.mediator.sendIn(port, pos, bit);
    };
    Painter.prototype.receive = function (port, pos, bit) {
        this.write(port, pos, bit);
    };
    Painter.prototype.updateScreen = function (addr, val) {
        var base = addr - 0x2400;
        var y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
        var x = base >> 5;
        var bin = val.toString(2).padStart(8, '0');
        for (var i = 0; i < bin.length; i++) {
            this.paint(x, y + i, Number(bin.charAt(i)));
        }
    };
    Painter.prototype.paint = function (x, y, isOn) {
        if (this.context) {
            // this.context.clearRect(x, y, 1, 1);
            this.context.fillStyle = isOn ? 'white' : 'black';
            this.context.fillRect(x * 3, y * 3, 3, 3);
        }
    };
    //   receive(port: number, val: number, isRam: boolean): void {
    //   if (port >= 0x2400) {
    //     // const { high, low } = utils.split(new Uint16(port));
    //     // this.paint(high.val(), low.val(), val);
    //     let base = port - 0x2400;
    //     let y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
    //     let x = base >> 5;
    //     const sprite = val.toString(2).padEnd(8, '0');
    //     console.log(sprite);
    //     for (let i = 0; i < sprite.length; i++) {
    //       this.paint(x, y + i, toBit(sprite.charAt(i)));
    //     }
    //   } else {
    //     this.write(port, val);
    //   }
    // }
    // private paint(x: number, y: number, on: Bit) {
    //   if (this.context) {
    //     this.context.clearRect(x, y, 1, 1);
    //     this.context.fillStyle = on ? 'white' : 'black';
    //     this.context.fillRect(x, y, 1, 1);
    //   }
    //}
    // private onKeyPress(port: number, pos: number, val: Bit) {
    //   this.send(port, pos, val);
    // }
    Painter.prototype.write = function (port, pos, bit) {
        switch (port) {
            case 2: // shift register result offset (bits 0,1,2)
                console.log('yep');
                // this.unimplementedInstruction(port, val);
                break;
            case 3: //sound related
                this.unimplementedInstruction(port, pos);
                break;
            case 4: // fill shift register
                this.unimplementedInstruction(port, pos);
                break;
            case 5: // sound related
                this.unimplementedInstruction(port, pos);
                break;
            case 6: // debug port
                this.unimplementedInstruction(port, pos);
                break;
            default:
                break;
        }
    };
    return Painter;
}());

var Events = /** @class */ (function () {
    function Events(onKeyPress) {
        this.onKeyPress = onKeyPress;
    }
    Events.prototype.onKeyPress = function (port, bit, val) { };
    Events.prototype.init = function () {
        var _this = this;
        window.onkeydown = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;
            switch (key) {
                case 16: {
                    // shift
                    _this.onKeyPress(1, 0, 1);
                }
            }
        };
    };
    return Events;
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL2VtdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQml0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQnl0ZUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQ29uZGl0aW9uQ29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9DcHVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvbW9kZWxzL1VpbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50MTYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50OC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tZWRpYXRvci9NZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFpbnRlci9wYWludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRW1DO0FBRU07QUFDUDtBQUNRO0FBRUw7QUFDTTtBQUUzQyw0QkFBNEI7QUFFNUIsa0JBQWtCO0FBQ2xCLElBQU0sVUFBVSxHQUFHO0lBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFckQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUU5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRTlDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM1RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFB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LEdBQUcsQ0FBQyxDQUFDO29CQUN0QixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsV0FBVztvQkFDWCxhQUFhO29CQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsV0FBVztvQkFDWCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxL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ZCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDZCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUix1REFBdUQ7b0JBQ3ZELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDZCxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyx5REFBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3RELEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxxREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxN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O1lBQ1IsS0FBSyxDQUFDLEVBQUUsc0JBQXNCO2dCQUM1QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxDQUFDLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxDQUFDLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7SUFLSCxjQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUdFLGdCQUFZLFVBQWU7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUpPLDJCQUFVLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBUSxJQUFHLENBQUM7SUFNbkQscUJBQUksR0FBWDtRQUFBLGlCQVdDO1FBVkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxXQUFDO1lBQ2xCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFNUMsUUFBUSxHQUFHLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCxRQUFRO29CQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7IElNZWRpYXRvciB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSU1lZGlhdG9yJztcclxuaW1wb3J0IHsgSUNvbGxlYWd1ZSB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSUNvbGxlYWd1ZSc7XHJcbmltcG9ydCBVaW50OCBmcm9tICcuL21vZGVscy9VaW50OCc7XHJcbmltcG9ydCBVaW50IGZyb20gJy4vbW9kZWxzL1VpbnQnO1xyXG5pbXBvcnQgQ3B1U3RhdGUgZnJvbSAnLi9tb2RlbHMvQ3B1U3RhdGUnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL21vZGVscy9CaXQnO1xyXG5pbXBvcnQgeyBiaXQgfSBmcm9tICcuL3V0aWxzL2JpdCc7XHJcbmltcG9ydCBVaW50MTYgZnJvbSAnLi9tb2RlbHMvVWludDE2JztcclxuaW1wb3J0IEJ5dGVBcnJheSBmcm9tICcuL21vZGVscy9CeXRlQXJyYXknO1xyXG5cclxuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuLy8gcHJldHRpZXItaWdub3JlXHJcbmNvbnN0IGN5Y2xlczgwODAgPSBbXHJcblx0NCwgMTAsIDcsIDUsIDUsIDUsIDcsIDQsIDQsIDEwLCA3LCA1LCA1LCA1LCA3LCA0LCAvLzB4MDAuLjB4MGZcclxuXHQ0LCAxMCwgNywgNSwgNSwgNSwgNywgNCwgNCwgMTAsIDcsIDUsIDUsIDUsIDcsIDQsIC8vMHgxMC4uMHgxZlxyXG5cdDQsIDEwLCAxNiwgNSwgNSwgNSwgNywgNCwgNCwgMTAsIDE2LCA1LCA1LCA1LCA3LCA0LCAvL2V0Y1xyXG5cdDQsIDEwLCAxMywgNSwgMTAsIDEwLCAxMCwgNCwgNCwgMTAsIDEzLCA1LCA1LCA1LCA3LCA0LFxyXG5cclxuXHQ1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCAvLzB4NDAuLjB4NGZcclxuXHQ1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LFxyXG5cdDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsIDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsXHJcblx0NywgNywgNywgNywgNywgNywgNywgNywgNSwgNSwgNSwgNSwgNSwgNSwgNywgNSxcclxuXHJcblx0NCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgLy8weDgwLi44eDRmXHJcblx0NCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNywgNCxcclxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LFxyXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsXHJcblxyXG5cdDExLCAxMCwgMTAsIDEwLCAxNywgMTEsIDcsIDExLCAxMSwgMTAsIDEwLCAxMCwgMTAsIDE3LCA3LCAxMSwgLy8weGMwLi4weGNmXHJcblx0MTEsIDEwLCAxMCwgMTAsIDE3LCAxMSwgNywgMTEsIDExLCAxMCwgMTAsIDEwLCAxMCwgMTcsIDcsIDExLFxyXG5cdDExLCAxMCwgMTAsIDE4LCAxNywgMTEsIDcsIDExLCAxMSwgNSwgMTAsIDUsIDE3LCAxNywgNywgMTEsXHJcblx0MTEsIDEwLCAxMCwgNCwgMTcsIDExLCA3LCAxMSwgMTEsIDUsIDEwLCA0LCAxNywgMTcsIDcsIDExLFxyXG5dO1xyXG5cclxuLy8gQ1BVIHJ1bm5pbmcgYXQgMm1oeiwgMiBpbnRlcnJ1cHRzIHJ1bm5pbmcgYXQgNjBtaHpcclxuY29uc3QgY3ljbGVzVW50aWxJbnRlcnJ1cHQ6IG51bWJlciA9IE1hdGguY2VpbCgyMDAwMDAwIC8gNjAgLyAyKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbXVsYXRvciBpbXBsZW1lbnRzIElDb2xsZWFndWUge1xyXG4gIGRlYnVnOiBib29sZWFuO1xyXG4gIHN0YXRlOiBDcHVTdGF0ZTtcclxuICAvLyBvdXQ6IEJ1ZmZlcjtcclxuICBpbjogQnl0ZUFycmF5O1xyXG4gIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgaW5zdHJ1Y3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XHJcbiAgbGFzdEludGVycnVwdDogbnVtYmVyO1xyXG4gIGN5Y2xlczogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgbWVkaWF0b3IsXHJcbiAgICBkZWJ1ZyxcclxuICAgIHdlYixcclxuICB9OiB7XHJcbiAgICBtZWRpYXRvcjogSU1lZGlhdG9yO1xyXG4gICAgd2ViOiBib29sZWFuO1xyXG4gICAgZGVidWc/OiBib29sZWFuO1xyXG4gIH0pIHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgQ3B1U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCB1c2VXZWIgPSAhIXdlYjtcclxuICAgIGNvbnN0IHVzZURlYnVnID0gISFkZWJ1ZztcclxuXHJcbiAgICBpZiAoIXVzZVdlYikge1xyXG4gICAgICAvLyBjb25zdCByb20gPSBmcy5yZWFkRmlsZVN5bmMoJ2ludmFkZXJzJyk7XHJcbiAgICAgIC8vIGNvbnN0IHJhbSA9IEJ1ZmZlci5hbGxvYygweDIwMDApO1xyXG4gICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeS5zZXQoWy4uLnJvbSwgLi4ucmFtXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMub3V0ID0gQnVmZmVyLmFsbG9jKDB4MDEwMCk7XHJcbiAgICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XHJcbiAgICB0aGlzLmRlYnVnID0gdXNlRGVidWc7XHJcbiAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICB0aGlzLmluID0gQnl0ZUFycmF5LmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5pbi5hbGxvYyg4KTtcclxuICB9XHJcblxyXG4gIHNlbmQocG9ydDogbnVtYmVyLCBwb3M6IG51bWJlciwgYml0OiBCaXQpIHtcclxuICAgIHRoaXMubWVkaWF0b3Iuc2VuZE91dChwb3J0LCBwb3MsIGJpdCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdDogQml0KSB7XHJcbiAgICBjb25zdCB2YWwgPSBuZXcgVWludDgodGhpcy5tb2RpZnlCaXQodGhpcy5pbltwb3J0XS52YWwoKSwgcG9zLCBiaXQpKTtcclxuICAgIHRoaXMuaW4uc3BsaWNlKHBvcnQsIDEsIHZhbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vZGlmeUJpdChudW1iZXI6IG51bWJlciwgcG9zOiBudW1iZXIsIGI6IEJpdCkge1xyXG4gICAgY29uc3QgbWFzayA9IDEgPDwgcG9zO1xyXG4gICAgcmV0dXJuIChudW1iZXIgJiB+bWFzaykgfCAoKGIgPDwgcG9zKSAmIG1hc2spO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2NyZWVuKGFkZHI6IG51bWJlciwgdmFsOiBudW1iZXIpIHtcclxuICAgIHRoaXMubWVkaWF0b3IudXBkYXRlU2NyZWVuKGFkZHIsIHZhbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ5dGVBdCA9IChpbmRleDogbnVtYmVyKTogVWludDggPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHJldHVybiBzdGF0ZS5tZW1vcnlbc3RhdGUucGMudmFsKCkgKyBpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IHJhbSA9IG5ldyBVaW50OEFycmF5KDB4MjAwMCk7XHJcblxyXG4gICAgZmV0Y2goJ2ludmFkZXJzJykudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXMuYXJyYXlCdWZmZXIoKS50aGVuKGJ1ZiA9PiB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XHJcbiAgICAgICAgY29uc3Qgcm9tQnl0ZXMgPSBbLi4udmlld10ubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgcmFtQnl0ZXMgPSBbLi4ucmFtXS5tYXAoTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1lbW9yeS5zZXQoWy4uLnJvbUJ5dGVzLCAuLi5yYW1CeXRlc10pO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgd2hpbGUgKHN0YXRlLnBjLnZhbCgpID4gLTEpIHtcclxuICAgICAgLy8gYWxlcnQodGhpcy5pbnN0cnVjdGlvbk51bWJlcik7XHJcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9uTnVtYmVyICUgMTAwMCA9PT0gMCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMubGFzdEludGVycnVwdCA+IDEuMCAvIDYwLjApIHtcclxuICAgICAgLy8gICAvLzEvNjAgc2Vjb25kIGhhcyBlbGFwc2VkXHJcbiAgICAgIC8vICAgLy9vbmx5IGRvIGFuIGludGVycnVwdCBpZiB0aGV5IGFyZSBlbmFibGVkXHJcbiAgICAgIC8vICAgaWYgKHRoaXMuc3RhdGUuaW50RW5hYmxlKSB7XHJcbiAgICAgIC8vICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDIpOyAvL2ludGVycnVwdCAyXHJcblxyXG4gICAgICAvLyAgICAgLy9TYXZlIHRoZSB0aW1lIHdlIGRpZCB0aGlzXHJcbiAgICAgIC8vICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHRoaXMuY3ljbGVzICs9IHRoaXMucmVhZE5leHQoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlcyA+PSBjeWNsZXNVbnRpbEludGVycnVwdCkge1xyXG4gICAgICAgIGlmICh0b0JpdCh0aGlzLnN0YXRlLmludEVuYWJsZS52YWwoKSkpIHtcclxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbnRlcnJ1cHQoMik7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmludEVuYWJsZSA9IG5ldyBVaW50OCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZXMgLT0gY3ljbGVzVW50aWxJbnRlcnJ1cHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGxvZyA9IChjb3VudGVyOiBudW1iZXIsIG9wY29kZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBhdCAke2NvdW50ZXJ9ICgweCR7Y291bnRlci50b1N0cmluZygxNil9KSwgaW5zdHJ1Y3Rpb24gJHtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyXHJcbiAgICAgIH0sIGNvbW1hbmQgMHgke29wY29kZS50b1N0cmluZygxNil9YFxyXG4gICAgKTtcclxuICAgIHRoaXMubG9nU3RhdGUoc3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbG9nU3RhdGUoc3RhdGU6IENwdVN0YXRlKSB7XHJcbiAgICBjb25zdCB7IGNjIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgXHJcbiAgICB7XHJcbiAgICAgIGE6ICR7c3RhdGUuYS5oZXh9XHJcbiAgICAgIGJjOiAke3N0YXRlLmJjLmhleH1cclxuICAgICAgZGU6ICR7c3RhdGUuZGUuaGV4fVxyXG4gICAgICBobDogJHtzdGF0ZS5obC5oZXh9XHJcbiAgICAgIHBjOiAke3N0YXRlLnBjLmhleH1cclxuICAgICAgc3A6ICR7c3RhdGUuc3AuaGV4fVxyXG4gICAgICBjYzoge1xyXG4gICAgICAgIHo6ICR7Y2Muen1cclxuICAgICAgICBzOiAke2NjLnN9XHJcbiAgICAgICAgcDogJHtjYy5wfVxyXG4gICAgICAgIGN5OiAke2NjLmN5fVxyXG4gICAgICAgIGFjOiAke2NjLmFjfVxyXG4gICAgICB9XHJcbiAgICB9YCk7XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIHB1c2goaGlnaDogVWludDgsIGxvdzogVWludDgpIHtcclxuICAvLyAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gIC8vICAgLy8gc3RhdGUuc3AuaW5jcigyKTtcclxuICAvLyB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVJbnRlcnJ1cHQoaW50ZXJydXB0TnVtOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICAvL3BlcmZvcm0gXCJQVVNIIFBDXCJcclxuICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYyk7XHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgLy9TZXQgdGhlIFBDIHRvIHRoZSBsb3cgbWVtb3J5IHZlY3Rvci5cclxuICAgIC8vVGhpcyBpcyBpZGVudGljYWwgdG8gYW4gXCJSU1QgaW50ZXJydXB0X251bVwiIGluc3RydWN0aW9uLlxyXG4gICAgc3RhdGUucGMgPSBuZXcgVWludDE2KDggKiBpbnRlcnJ1cHROdW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkTmV4dCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IG9wY29kZSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKV0udmFsKCk7XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuZGVidWcgJiYgdGhpcy5pbnN0cnVjdGlvbk51bWJlciA+PSA0MjI1MCAtIDIpIHtcclxuICAgIC8vICAgdGhpcy5sb2coc3RhdGUucGMudmFsKCksIG9wY29kZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgPT09IDQyMjUwKSB7XHJcbiAgICAvLyAgIGRlYnVnZ2VyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN3aXRjaCAob3Bjb2RlKSB7XHJcbiAgICAgIGNhc2UgMHgwMDoge1xyXG4gICAgICAgIC8vIE5PUFxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDAxOlxyXG4gICAgICAgIC8vIExYSSBCLCBEMTZcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMik7XHJcbiAgICAgICAgc3RhdGUuYyA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHgwMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDAzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwNToge1xyXG4gICAgICAgIC8vIERDUiBCXHJcbiAgICAgICAgc3RhdGUuYi5kZWNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYik7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDY6IHtcclxuICAgICAgICAvLyBNVkkgQiwgRDhcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDc6IHtcclxuICAgICAgICAvLyBSTENcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0Q2FycnlCaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwOToge1xyXG4gICAgICAgIC8vIERBRCBCXHJcbiAgICAgICAgLy8gY29uc3QgcmVzID0gdGhpcy5jb25jYXRVaW50KHRoaXMuc3RhdGUuYiwgdGhpcy5zdGF0ZS5jKTtcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuYmMpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZDoge1xyXG4gICAgICAgIC8vIERDUiBDXHJcbiAgICAgICAgc3RhdGUuYy5kZWNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYyk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGU6IHtcclxuICAgICAgICAvLyBNVkkgQywgRDhcclxuICAgICAgICBzdGF0ZS5jID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGY6IHtcclxuICAgICAgICAvLyBSUkNcclxuICAgICAgICBjb25zdCBiaW4gPSBzdGF0ZS5hXHJcbiAgICAgICAgICAudmFsKClcclxuICAgICAgICAgIC50b1N0cmluZygyKVxyXG4gICAgICAgICAgLnBhZFN0YXJ0KDgpO1xyXG4gICAgICAgIGxldCBiaXQgPSBiaW5bMF07XHJcbiAgICAgICAgdGhpcy5yb3RhdGUoc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMToge1xyXG4gICAgICAgIC8vIExYSSBELCBEMTZcclxuICAgICAgICBzdGF0ZS5kZSA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDEzOiB7XHJcbiAgICAgICAgLy8gSU5YIERcclxuICAgICAgICAvLyBjb25zdCBieXRlcyA9IHRoaXMuY29uY2F0VWludChzdGF0ZS5kLCBzdGF0ZS5lKTtcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5kZS5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuZGUgPSB2YWw7XHJcbiAgICAgICAgLy8gY29uc3QgeyBoaWdoLCBsb3cgfSA9IHRoaXMuc3BsaXQoYnl0ZXMudmFsKCkpO1xyXG4gICAgICAgIC8vIHN0YXRlLmQgPSBoaWdoO1xyXG4gICAgICAgIC8vIHN0YXRlLmUgPSBsb3c7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTQ6IHtcclxuICAgICAgICAvLyBJTlIgRFxyXG4gICAgICAgIHN0YXRlLmQuaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmQpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE1OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTk6IHtcclxuICAgICAgICAvLyBEQUQgRFxyXG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IHRoaXMuY29uY2F0VWludCh0aGlzLnN0YXRlLmQsIHRoaXMuc3RhdGUuZSk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLmRlKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWE6IHtcclxuICAgICAgICAvLyBMREFYIERcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W3N0YXRlLmRlLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMToge1xyXG4gICAgICAgIC8vIExYSSBILCBEMTZcclxuICAgICAgICBzdGF0ZS5obCA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIzOiB7XHJcbiAgICAgICAgLy8gSU5YIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgLy8gY29uc3QgeyBoaWdoLCBsb3cgfSA9IHRoaXMuc3BsaXQoYnl0ZXMudmFsKCkpO1xyXG4gICAgICAgIC8vIHN0YXRlLmggPSBoaWdoO1xyXG4gICAgICAgIC8vIHN0YXRlLmwgPSBsb3c7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjQ6IHtcclxuICAgICAgICAvLyBJTlIgSFxyXG4gICAgICAgIHN0YXRlLmguaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmgpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI1OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjY6IHtcclxuICAgICAgICAvLyBNVkkgSCwgRDhcclxuICAgICAgICBzdGF0ZS5oID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI5OiB7XHJcbiAgICAgICAgLy8gREFEIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuaGwpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJlOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmY6IHtcclxuICAgICAgICAvLyBDTUFcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KH5zdGF0ZS5hLnZhbCgpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDMxOiB7XHJcbiAgICAgICAgLy8gTFhJIFNQLCBEMTZcclxuICAgICAgICBzdGF0ZS5zcCA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMjoge1xyXG4gICAgICAgIC8vIFNUQSBhZHJcclxuICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIC8vIHN0YXRlLm1lbW9yeVthZGRyLnZhbCgpXSA9IHN0YXRlLmE7XHJcbiAgICAgICAgc3RhdGUuYSA9IGFkZHI7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM1OiB7XHJcbiAgICAgICAgLy8gRENSIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHZhbCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgLy8gdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzY6IHtcclxuICAgICAgICAvLyBNVkkgTSwgRDhcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5obC52YWwoKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mzg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzOToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNhOiB7XHJcbiAgICAgICAgLy8gTERBIGFkclxyXG4gICAgICAgIGNvbnN0IGFkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W2Fkci52YWwoKV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2I6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzYzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNkOiB7XHJcbiAgICAgICAgLy8gRENSIEFcclxuICAgICAgICBzdGF0ZS5hLmRlY3IoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzZToge1xyXG4gICAgICAgIC8vIE1WSSBBLCBEOFxyXG4gICAgICAgIHN0YXRlLmEgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzZjoge1xyXG4gICAgICAgIC8vIENNQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmNjLmN5ID09PSAwID8gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDE6XHJcbiAgICAgICAgc3RhdGUuYiA9IHN0YXRlLmM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHg0MjpcclxuICAgICAgICBzdGF0ZS5iID0gc3RhdGUuZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAweDQzOlxyXG4gICAgICAgIHN0YXRlLmIgPSBzdGF0ZS5lO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0NToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ2OiB7XHJcbiAgICAgICAgLy8gTU9WIEIsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnYicsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0OToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRhOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Yzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Zjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Mjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1NToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU2OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIE1cclxuICAgICAgICAvLyBFclJvUiBIZVJlXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2QnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Nzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1YToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDViOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1ZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVlOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnZScsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2MToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2NDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY1OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjY6IHtcclxuICAgICAgICAvLyBNT1YgSCwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdoJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Njc6IHtcclxuICAgICAgICAvLyBNT1YgSCwgQVxyXG4gICAgICAgIHRoaXMubW92KCdoJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Njg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2OToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZhOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Yzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Zjoge1xyXG4gICAgICAgIC8vIE1PViBMLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3MDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcxOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Mzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Njoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc3OiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEFcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3YToge1xyXG4gICAgICAgIC8vIE1PViBBLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Yjoge1xyXG4gICAgICAgIC8vIFx0TU9WIEEsIEVcclxuICAgICAgICB0aGlzLm1vdignYScsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdjOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEhcclxuICAgICAgICB0aGlzLm1vdignYScsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2U6IHtcclxuICAgICAgICAvLyBNT1YgQSwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdhJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2Y6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4MDoge1xyXG4gICAgICAgIC8vIEFERCBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYik7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgxOiB7XHJcbiAgICAgICAgLy8gQUREIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5jKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Mzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Njoge1xyXG4gICAgICAgIC8vIEFERCBNXHJcbiAgICAgICAgLy8gY29uc3Qgb2Zmc2V0ID0gKHN0YXRlLmgudmFsKCkgPDwgOCkgfCBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0pO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Nzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4YToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4ZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhlOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5MDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkxOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Mzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Njoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5OToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDlhOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Yzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDlkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Zjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGEwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGEzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGE2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTc6IHtcclxuICAgICAgICAvLyBBTkEgQVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGE4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGFiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGFlOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWY6IHtcclxuICAgICAgICAvLyBYUkEgQVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHRvQml0KCEhc3RhdGUuYS52YWwoKSAhPSAhIXN0YXRlLmEudmFsKCkpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGIwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGIzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzA6IHtcclxuICAgICAgICAvLyBSTlpcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiAhPT0gMCkge1xyXG4gICAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzE6IHtcclxuICAgICAgICAvLyBQT1AgQlxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5iYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMyOiB7XHJcbiAgICAgICAgLy8gSk5aIGFkZHJlc3NcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMzoge1xyXG4gICAgICAgIC8vIEpNUCBhZGRyZXNzXHJcbiAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzU6IHtcclxuICAgICAgICAvLyBQVVNIIEJcclxuICAgICAgICAvLyBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuZGVjcigxKV0gPSBzdGF0ZS5iO1xyXG4gICAgICAgIC8vIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5kZWNyKDEpXSA9IHN0YXRlLmM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuYik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuYyk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzY6IHtcclxuICAgICAgICAvLyBBREkgYnl0ZVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjNzoge1xyXG4gICAgICAgIC8vIFJTVFxyXG4gICAgICAgIHN0YXRlLnBjID0gbmV3IFVpbnQxNigwKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjODoge1xyXG4gICAgICAgIC8vIFJaXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG5cclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgICAgc3RhdGUuc3AuaW5jcigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM5OiB7XHJcbiAgICAgICAgLy8gUkVUXHJcbiAgICAgICAgLy8gY29uc3QgeyB2YWwgfSA9IHN0YXRlLnNwLmFkZCgxKTtcclxuICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNhOiB7XHJcbiAgICAgICAgLy8gSlogYWRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNjOiB7XHJcbiAgICAgICAgLy8gQ1ogYWRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNkOiB7XHJcbiAgICAgICAgLy8gQ0FMTCBhZGRyZXNzXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMToge1xyXG4gICAgICAgIC8vIFBPUCBEXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmRlID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMzoge1xyXG4gICAgICAgIC8vIE9VVCBEOFxyXG4gICAgICAgIC8vIHRoaXMub3V0W3RoaXMuYnl0ZUF0KDEpLnZhbCgpXSA9IHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgdGhpcy5ieXRlQXQoMSkudmFsKCkgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICBzdGF0ZS5hLnZhbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNlbmQodGhpcy5ieXRlQXQoMSkudmFsKCksIHN0YXRlLmEudmFsKCksIDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDU6IHtcclxuICAgICAgICAvLyBQVVNIIERcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5kKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5lKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkOToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRhOiB7XHJcbiAgICAgICAgLy8gSkMgYWRyXHJcbiAgICAgICAgLy8gVE9ETzogVEhJUyBJUyBXUk9OR1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICAvLyBzdGF0ZS5tZW1vcnlbYWRkci52YWwoKV0gPSBzdGF0ZS5hO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYjoge1xyXG4gICAgICAgIC8vIElOIEQ4XHJcbiAgICAgICAgc3RhdGUuYSA9IHRoaXMuaW5bdGhpcy5ieXRlQXQoMSkudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMToge1xyXG4gICAgICAgIC8vIFBPUCBIXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU0OiB7XHJcbiAgICAgICAgLy8gQ1BPXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCBlbHNlP1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDApIHtcclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTU6IHtcclxuICAgICAgICAvLyBQVVNIIEhcclxuICAgICAgICAvLyBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuZGVjcigxKV0gPSBzdGF0ZS5oO1xyXG4gICAgICAgIC8vIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5kZWNyKDEpXSA9IHN0YXRlLmw7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUubCk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU2OiB7XHJcbiAgICAgICAgLy8gQU5JIEQ4XHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHRoaXMuYnl0ZUF0KDEpLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlOToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVhOiB7XHJcbiAgICAgICAgLy8gSlBFIGFkclxyXG4gICAgICAgIC8vIGlmIHBhcml0eSBlcXVhbHMgMSB0aGF0IGluZGljYXRlcyBpdCdzIGV2ZW5cclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMSkge1xyXG4gICAgICAgICAgLy8gY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIC8vIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYjoge1xyXG4gICAgICAgIC8vIFhDSEdcclxuICAgICAgICBjb25zdCBoID0gc3RhdGUuaDtcclxuICAgICAgICBjb25zdCBsID0gc3RhdGUubDtcclxuICAgICAgICBzdGF0ZS5oID0gc3RhdGUuZDtcclxuICAgICAgICBzdGF0ZS5sID0gc3RhdGUuZTtcclxuICAgICAgICBzdGF0ZS5kID0gaDtcclxuICAgICAgICBzdGF0ZS5lID0gbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlZjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjE6IHtcclxuICAgICAgICAvLyBQT1AgUFNXXHJcbiAgICAgICAgY29uc3QgcHN3ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpICsgMV07XHJcblxyXG4gICAgICAgIHN0YXRlLmNjLnNldFBzdyhwc3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDIpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBQU1dcclxuICAgICAgICAvLyBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuZGVjcigxKV0gPSBzdGF0ZS5hO1xyXG4gICAgICAgIC8vIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5kZWNyKDEpXSA9IHN0YXRlLmNjLmdldFBzdygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmNjLmdldFBzdygpKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Zjk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZiOiB7XHJcbiAgICAgICAgLy8gRUlcclxuICAgICAgICBzdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZlOiB7XHJcbiAgICAgICAgLy8gQ1BJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIodGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZjoge1xyXG4gICAgICAgIC8vIFJTVCA3XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKC0xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIrKztcclxuICAgIHJldHVybiBjeWNsZXM4MDgwW29wY29kZV07XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlUmFtKGxvY2F0aW9uOiBudW1iZXIsIHZhbHVlOiBVaW50KSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIHN0YXRlLm1lbW9yeS5zcGxpY2UobG9jYXRpb24sIDEsIHZhbHVlKTtcclxuXHJcbiAgICBpZiAobG9jYXRpb24gPj0gMHgyNDAwICYmIGxvY2F0aW9uIDw9IDB4M2ZmZikge1xyXG4gICAgICAvLyB2aWRlbyByYW1cclxuICAgICAgdGhpcy51cGRhdGVTY3JlZW4obG9jYXRpb24sIHZhbHVlLnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmxhZ3MgPSAobjogVWludCwgY2Fycnk/OiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgc3RhdGUuY2MueiA9IHRvQml0KChuLnZhbCgpICYgMHhmZikgPT09IDApO1xyXG4gICAgc3RhdGUuY2MucyA9IHRvQml0KChuLnZhbCgpICYgMHg4MCkgIT09IDApO1xyXG4gICAgc3RhdGUuY2MuYWMgPSBuLmF1eENhcnJ5O1xyXG4gICAgc3RhdGUuY2MucCA9IHRoaXMucGFyaXR5KG4udmFsKCkpO1xyXG5cclxuICAgIGlmIChjYXJyeSkge1xyXG4gICAgICB0aGlzLnNldENhcnJ5Qml0KG4uY2FycnkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2V0Q2FycnlCaXQgPSAobjogQml0KSA9PiAodGhpcy5zdGF0ZS5jYy5jeSA9IG4pO1xyXG5cclxuICBwcml2YXRlIHBhcml0eSA9IChuOiBudW1iZXIpOiBCaXQgPT4ge1xyXG4gICAgcmV0dXJuIHRvQml0KG4gJSAyID09PSAxID8gMCA6IDEpO1xyXG4gICAgLy8gbGV0IGNhbGMgPSBuICYgMHhmZjtcclxuICAgIC8vIGxldCBwYXJpdHkgPSAwO1xyXG4gICAgLy8gd2hpbGUgKGNhbGMpIHtcclxuICAgIC8vICAgcGFyaXR5ID0gcGFyaXR5ID09PSAwID8gMSA6IDA7XHJcbiAgICAvLyAgIGNhbGMgJj0gY2FsYyAtIDE7XHJcbiAgICAvLyB9XHJcbiAgICAvLyByZXR1cm4gYml0KHBhcml0eSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb3YgPSAoc3JjS2V5OiBzdHJpbmcsIGRlc3RLZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHNyY0tleSA9PT0gJ20nIHx8IGRlc3RLZXkgPT09ICdtJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NyYyBhbmQgZGVzdCBjYW5ub3QgYmUgYSBtZW1vcnkgbG9jYXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIHN0YXRlW3NyY0tleV0gPSBzdGF0ZVtkZXN0S2V5XTtcclxuXHJcbiAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbW92TWVtID0gKHNyY0tleTogc3RyaW5nLCBkZXN0S2V5OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIGlmIChzcmNLZXkgIT09ICdtJyAmJiBkZXN0S2V5ICE9PSAnbScpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgYSBtZW1vcnkgbG9jYXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChzcmNLZXkgPT09ICdtJykge1xyXG4gICAgICAvLyBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldID0gc3RhdGVbZGVzdEtleV07XHJcbiAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCBzdGF0ZVtkZXN0S2V5XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZVtzcmNLZXldID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXTtcclxuICAgICAgLy8gdGhpcy51cGRhdGVSYW0oc3RhdGVbc3JjS2V5XSwgc3RhdGUuaGwsICdtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUucGMuaW5jcigxKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJvdGF0ZSA9IChhY2N1bTogVWludDgpID0+IHtcclxuICAgIGNvbnN0IGJpbmFyeSA9IGFjY3VtLnZhbCgpLnRvU3RyaW5nKDIpO1xyXG5cclxuICAgIHRoaXMuc2V0Q2FycnlCaXQodG9CaXQoTnVtYmVyKGJpbmFyeVswXSkpKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBiaW5hcnkuc2xpY2UoMikgKyBiaW5hcnkuc2xpY2UoMCwgMSk7XHJcblxyXG4gICAgYWNjdW0gPSBuZXcgVWludDgocGFyc2VJbnQodHJhbnNmb3JtLCAyKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB1bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24gPSAob3Bjb2RlOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBVbmltcGxlbWVudGVkIGNvZGUgYXQgaW5zdHJ1Y3Rpb24gJHtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyXHJcbiAgICAgIH0gYXQgZm9yIG9wY29kZSAke29wY29kZS50b1N0cmluZygxNil9IGF0IG9mZnNldCAke3N0YXRlLnBjLnZhbCgpfWBcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29uc3QgYXBwID0gbmV3IEVtdWxhdG9yKHtcclxuLy8gICBkZWJ1ZzogdHJ1ZSxcclxuLy8gfSk7XHJcblxyXG4vLyB0cnkge1xyXG4vLyAgIGFwcC5ydW4oKTtcclxuLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICBjb25zb2xlLmxvZyhhcHAuaW5zdHJ1Y3Rpb25OdW1iZXIpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBFbXVsYXRvcjtcclxuIiwidHlwZSBCaXQgPSAwIHwgMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0JpdCA9IChhcmc6IGJvb2xlYW4gfCBudW1iZXIpOiBCaXQgPT4ge1xyXG4gIGNvbnN0IHZhbCA9IHR5cGVvZiBhcmcgPT09ICdudW1iZXInID8gISFhcmcgOiBhcmc7XHJcbiAgcmV0dXJuIHZhbCA/IDEgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQml0O1xyXG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ5dGVBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgW2tleTogbnVtYmVyXTogVWludDg7XG5cbiAgcHJpdmF0ZSBtYXg6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSgpOiBCeXRlQXJyYXkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKEJ5dGVBcnJheS5wcm90b3R5cGUpO1xuICB9XG5cbiAgcHVibGljIGFsbG9jKG46IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnB1c2gobmV3IFVpbnQ4KCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQobjogQXJyYXk8bnVtYmVyPikge1xuICAgIG4uZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgdGhpcy5wdXNoKG5ldyBVaW50OCh2YWwpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCBVaW50OCBmcm9tICcuL1VpbnQ4JztcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkNvZGVzIHtcbiAgejogQml0ID0gMDtcblxuICBzOiBCaXQgPSAwO1xuXG4gIHA6IEJpdCA9IDA7XG5cbiAgY3k6IEJpdCA9IDA7XG5cbiAgYWM6IEJpdCA9IDA7XG5cbiAgcGFkOiBCaXQgPSAwO1xuXG4gIGdldFBzdygpOiBVaW50OCB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5zICsgdGhpcy56ICsgJzAnICsgdGhpcy5hYyArICcwJyArIHRoaXMucCArICcxJyArIHRoaXMuY3k7XG4gICAgcmV0dXJuIG5ldyBVaW50OChwYXJzZUludCh2YWwsIDIpKTtcbiAgfVxuXG4gIHNldFBzdyhuOiBVaW50OCkge1xuICAgIGNvbnN0IGJpbmFyeSA9IG5cbiAgICAgIC52YWwoKVxuICAgICAgLnRvU3RyaW5nKDIpXG4gICAgICAucGFkU3RhcnQoOCwgJzAnKTtcbiAgICBjb25zdCBbcywgeiwgLCBhYywgLCBwLCAsIGN5XSA9IGJpbmFyeS5zcGxpdCgnJykubWFwKHMgPT4gTnVtYmVyKHMpKTtcbiAgICB0aGlzLnMgPSB0b0JpdChzKTtcbiAgICB0aGlzLnogPSB0b0JpdCh6KTtcbiAgICB0aGlzLmFjID0gdG9CaXQoYWMpO1xuICAgIHRoaXMucCA9IHRvQml0KHApO1xuICAgIHRoaXMuY3kgPSB0b0JpdChjeSk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XG5pbXBvcnQgVWludDE2IGZyb20gJy4vVWludDE2JztcbmltcG9ydCBDb25kaXRpb25Db2RlcyBmcm9tICcuL0NvbmRpdGlvbkNvZGVzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gJy4vQnl0ZUFycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3B1U3RhdGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgYTogVWludDggPSBuZXcgVWludDgoKTtcblxuICBiOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGM6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgZDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGg6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgbDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBzcDogVWludDE2ID0gbmV3IFVpbnQxNigpO1xuXG4gIHBjOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XG5cbiAgbWVtb3J5OiBCeXRlQXJyYXkgPSBCeXRlQXJyYXkuY3JlYXRlKCk7XG5cbiAgY2M6IENvbmRpdGlvbkNvZGVzID0gbmV3IENvbmRpdGlvbkNvZGVzKCk7XG5cbiAgaW50RW5hYmxlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGdldCBiYygpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuYiwgdGhpcy5jKTtcbiAgfVxuXG4gIHNldCBiYyhieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmIgPSBoaWdoO1xuICAgIHRoaXMuYyA9IGxvdztcbiAgfVxuXG4gIGdldCBkZSgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuZCwgdGhpcy5lKTtcbiAgfVxuXG4gIHNldCBkZShieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmQgPSBoaWdoO1xuICAgIHRoaXMuZSA9IGxvdztcbiAgfVxuXG4gIGdldCBobCgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuaCwgdGhpcy5sKTtcbiAgfVxuXG4gIHNldCBobChieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmggPSBoaWdoO1xuICAgIHRoaXMubCA9IGxvdztcbiAgfVxufVxuIiwiaW1wb3J0IEJpdCBmcm9tICcuL0JpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVpbnQge1xuICBwcm90ZWN0ZWQgbnVtOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXg6IG51bWJlcjtcbiAgcHVibGljIGNhcnJ5OiBCaXQgPSAwO1xuICBwdWJsaWMgYXV4Q2Fycnk6IEJpdCA9IDA7XG5cbiAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIG46IG51bWJlciA9IDApIHtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLm51bSA9IG4gJiB0aGlzLm1heDtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyB2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5udW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzWmVybygpIHtcbiAgICByZXR1cm4gdGhpcy5udW0gPT09IDA7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgYWRkKG46IFVpbnQpOiBVaW50O1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBzdWIobjogVWludCk6IFVpbnQ7XG5cbiAgcHVibGljIGluY3IobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5udW0gKyBuKSAmIHRoaXMubWF4O1xuICAgIHRoaXMubnVtID0gdmFsO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBwdWJsaWMgZGVjcihuOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm51bSAtIG4pICYgdGhpcy5tYXg7XG4gICAgdGhpcy5udW0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGV4KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubnVtLnRvU3RyaW5nKDE2KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja0NhcnJ5KHZhbDogbnVtYmVyKTogeyBjYXJyeTogQml0OyBhdXhDYXJyeTogQml0IH0ge1xuICAgIGNvbnN0IGNhcnJ5ID0gdmFsIDwgMCB8fCB2YWwgPiB0aGlzLm1heCA/IDEgOiAwO1xuICAgIGNvbnN0IGF1eENhcnJ5ID0gdmFsIDwgMCB8fCB2YWwgPiB0aGlzLm1heCAvIDIgPyAxIDogMDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXJyeSxcbiAgICAgIGF1eENhcnJ5LFxuICAgIH07XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgVWludCBmcm9tICcuL1VpbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaW50MTYgZXh0ZW5kcyBVaW50IHtcbiAgY29uc3RydWN0b3Iobj86IG51bWJlcikge1xuICAgIHN1cGVyKDB4ZmZmZiwgbik7XG4gIH1cblxuICBwdWJsaWMgYWRkKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XG4gICAgbGV0IHZhbDtcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSB0aGlzLm51bSArIG47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMubnVtICsgbi52YWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSBuZXcgVWludDE2KHZhbCAmIHRoaXMubWF4KTtcblxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgc3ViKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XG4gICAgbGV0IHZhbDtcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSB0aGlzLm51bSAtIG47XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMubnVtIC0gbi52YWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSBuZXcgVWludDE2KHZhbCAmIHRoaXMubWF4KTtcblxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgVWludCBmcm9tICcuL1VpbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaW50OCBleHRlbmRzIFVpbnQge1xuICBjb25zdHJ1Y3RvcihuPzogbnVtYmVyKSB7XG4gICAgc3VwZXIoMHhmZiwgbik7XG4gIH1cblxuICBwdWJsaWMgYWRkKG46IFVpbnQ4IHwgbnVtYmVyKTogVWludDgge1xuICAgIGxldCB2YWw7XG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gdGhpcy5udW0gKyBuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLm51bSArIG4udmFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHZhbCAmIHRoaXMubWF4KTtcblxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgc3ViKG46IFVpbnQ4IHwgbnVtYmVyKTogVWludDgge1xuICAgIGxldCB2YWw7XG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gdGhpcy5udW0gLSBuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLm51bSAtIG4udmFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHZhbCAmIHRoaXMubWF4KTtcblxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiIsImltcG9ydCBVaW50OCBmcm9tICcuLi9tb2RlbHMvVWludDgnO1xuaW1wb3J0IFVpbnQxNiBmcm9tICcuLi9tb2RlbHMvVWludDE2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBzdGF0aWMgY29uY2F0VWludCA9IChtb3N0OiBVaW50OCwgbGVhc3Q6IFVpbnQ4KTogVWludDE2ID0+XG4gICAgbmV3IFVpbnQxNigobW9zdC52YWwoKSA8PCA4KSB8IGxlYXN0LnZhbCgpKTtcblxuICBzdGF0aWMgY29uY2F0ID0gKG1vc3Q6IG51bWJlciwgbGVhc3Q6IG51bWJlcik6IG51bWJlciA9PiAobW9zdCA8PCA4KSB8IGxlYXN0O1xuXG4gIHN0YXRpYyBzcGxpdCA9IChuOiBVaW50MTYpID0+IHtcbiAgICBjb25zdCBoaWdoID0gbi52YWwoKSA+PiA4O1xuICAgIGNvbnN0IGxvdyA9IG4udmFsKCkgJiAweGZmO1xuICAgIHJldHVybiB7XG4gICAgICBoaWdoOiBuZXcgVWludDgoaGlnaCksXG4gICAgICBsb3c6IG5ldyBVaW50OChsb3cpLFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgRW11bGF0b3IgfSBmcm9tICcuL2VtdWxhdG9yL2VtdWxhdG9yJztcbmltcG9ydCB7IE1lZGlhdG9yIH0gZnJvbSAnLi9tZWRpYXRvci9NZWRpYXRvcic7XG5cbmNsYXNzIE1haW4ge1xuICBlbXVsYXRvcjogRW11bGF0b3I7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcbiAgICB0aGlzLmVtdWxhdG9yID0gbmV3IEVtdWxhdG9yKHsgbWVkaWF0b3IsIHdlYjogdHJ1ZSwgZGVidWc6IHRydWUgfSk7XG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyKG1lZGlhdG9yKTtcblxuICAgIG1lZGlhdG9yLnJlZ2lzdGVyT3V0KHRoaXMuZW11bGF0b3IpO1xuICAgIG1lZGlhdG9yLnJlZ2lzdGVySW4ocGFpbnRlcik7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVtdWxhdG9yLmluaXQoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLnN0YXJ0KCk7XG4iLCJpbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JQ29sbGVhZ3VlJztcbmltcG9ydCB7IElNZWRpYXRvciB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lNZWRpYXRvcic7XG5pbXBvcnQgQml0IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9CaXQnO1xuXG5leHBvcnQgY2xhc3MgTWVkaWF0b3IgaW1wbGVtZW50cyBJTWVkaWF0b3Ige1xuICBpbjogSUNvbGxlYWd1ZSB8IHVuZGVmaW5lZDtcbiAgb3V0OiBJQ29sbGVhZ3VlIHwgdW5kZWZpbmVkO1xuXG4gIHJlZ2lzdGVySW4oY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKTogdm9pZCB7XG4gICAgdGhpcy5pbiA9IGNvbGxlYWd1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT3V0KGNvbGxlYWd1ZTogSUNvbGxlYWd1ZSk6IHZvaWQge1xuICAgIHRoaXMub3V0ID0gY29sbGVhZ3VlO1xuICB9XG5cbiAgc2VuZE91dChwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBiaXQ6IEJpdCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgaW5gIGlzIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICB0aGlzLmluLnJlY2VpdmUocG9ydCwgdmFsLCBiaXQpO1xuICB9XG5cbiAgc2VuZEluKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm91dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgb3V0YCBpcyBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5vdXQucmVjZWl2ZShwb3J0LCB2YWwsIGJpdCk7XG4gIH1cblxuICB1cGRhdGVTY3JlZW4oYWRkcjogbnVtYmVyLCB2YWw6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgaW5gIGlzIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICB0aGlzLmluLnVwZGF0ZVNjcmVlbihhZGRyLCB2YWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lNZWRpYXRvcic7XHJcbmltcG9ydCB7IElDb2xsZWFndWUgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lDb2xsZWFndWUnO1xyXG5pbXBvcnQgQml0IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9CaXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgaW1wbGVtZW50cyBJQ29sbGVhZ3VlIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xyXG4gIHB1YmxpYyBtZWRpYXRvcjogSU1lZGlhdG9yO1xyXG4gIC8vIHByaXZhdGUgbWVtb3J5OiBCeXRlQXJyYXkgPSBCeXRlQXJyYXkuY3JlYXRlKCk7XHJcbiAgLy8gcHJpdmF0ZSBfcGFpbnRlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIC8vIHByaXZhdGUgX3g6IG51bWJlciA9IDB4MDtcclxuICBwcml2YXRlIGV2ZW50czogRXZlbnRzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogSU1lZGlhdG9yKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0ICYmIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XHJcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHModGhpcy5zZW5kLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5ldmVudHMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IHBhaW50ZXJDb3VudCgpIHtcclxuICAvLyAgIGlmICh0aGlzLl9wYWludGVyQ291bnQrKyA+IDB4MjApIHtcclxuICAvLyAgICAgdGhpcy5fcGFpbnRlckNvdW50ID0gMDtcclxuICAvLyAgICAgdGhpcy5feCsrO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIHJldHVybiB0aGlzLl94O1xyXG4gIC8vIH1cclxuXHJcbiAgc2VuZChwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ6IEJpdCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZWRpYXRvci5zZW5kSW4ocG9ydCwgcG9zLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZShwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ6IEJpdCk6IHZvaWQge1xyXG4gICAgdGhpcy53cml0ZShwb3J0LCBwb3MsIGJpdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY3JlZW4oYWRkcjogbnVtYmVyLCB2YWw6IG51bWJlcikge1xyXG4gICAgY29uc3QgYmFzZSA9IGFkZHIgLSAweDI0MDA7XHJcbiAgICBjb25zdCB5ID0gfigoKGJhc2UgJiAweDFmKSAqIDgpICYgMHhmZikgJiAweGZmO1xyXG4gICAgY29uc3QgeCA9IGJhc2UgPj4gNTtcclxuXHJcbiAgICBjb25zdCBiaW4gPSB2YWwudG9TdHJpbmcoMikucGFkU3RhcnQoOCwgJzAnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnBhaW50KHgsIHkgKyBpLCBOdW1iZXIoYmluLmNoYXJBdChpKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYWludCh4OiBudW1iZXIsIHk6IG51bWJlciwgaXNPbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIC8vIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBpc09uID8gJ3doaXRlJyA6ICdibGFjayc7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4ICogMywgeSAqIDMsIDMsIDMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gICByZWNlaXZlKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGlzUmFtOiBib29sZWFuKTogdm9pZCB7XHJcbiAgLy8gICBpZiAocG9ydCA+PSAweDI0MDApIHtcclxuICAvLyAgICAgLy8gY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KG5ldyBVaW50MTYocG9ydCkpO1xyXG4gIC8vICAgICAvLyB0aGlzLnBhaW50KGhpZ2gudmFsKCksIGxvdy52YWwoKSwgdmFsKTtcclxuICAvLyAgICAgbGV0IGJhc2UgPSBwb3J0IC0gMHgyNDAwO1xyXG4gIC8vICAgICBsZXQgeSA9IH4oKChiYXNlICYgMHgxZikgKiA4KSAmIDB4ZmYpICYgMHhmZjtcclxuICAvLyAgICAgbGV0IHggPSBiYXNlID4+IDU7XHJcblxyXG4gIC8vICAgICBjb25zdCBzcHJpdGUgPSB2YWwudG9TdHJpbmcoMikucGFkRW5kKDgsICcwJyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHNwcml0ZSk7XHJcblxyXG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcml0ZS5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICAgIHRoaXMucGFpbnQoeCwgeSArIGksIHRvQml0KHNwcml0ZS5jaGFyQXQoaSkpKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgdGhpcy53cml0ZShwb3J0LCB2YWwpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBwYWludCh4OiBudW1iZXIsIHk6IG51bWJlciwgb246IEJpdCkge1xyXG4gIC8vICAgaWYgKHRoaXMuY29udGV4dCkge1xyXG4gIC8vICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIDEsIDEpO1xyXG4gIC8vICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gb24gPyAnd2hpdGUnIDogJ2JsYWNrJztcclxuICAvLyAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xyXG4gIC8vICAgfVxyXG4gIC8vfVxyXG5cclxuICAvLyBwcml2YXRlIG9uS2V5UHJlc3MocG9ydDogbnVtYmVyLCBwb3M6IG51bWJlciwgdmFsOiBCaXQpIHtcclxuICAvLyAgIHRoaXMuc2VuZChwb3J0LCBwb3MsIHZhbCk7XHJcbiAgLy8gfVxyXG5cclxuICBwcml2YXRlIHdyaXRlKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdDogQml0KSB7XHJcbiAgICBzd2l0Y2ggKHBvcnQpIHtcclxuICAgICAgY2FzZSAyOiAvLyBzaGlmdCByZWdpc3RlciByZXN1bHQgb2Zmc2V0IChiaXRzIDAsMSwyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXAnKTtcclxuICAgICAgICAvLyB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6IC8vc291bmQgcmVsYXRlZFxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHBvcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDogLy8gZmlsbCBzaGlmdCByZWdpc3RlclxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHBvcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogLy8gc291bmQgcmVsYXRlZFxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHBvcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjogLy8gZGVidWcgcG9ydFxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHBvcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbiA9IChwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgVW5pbXBsZW1lbnRlZCBjb2RlOiBwb3J0ICR7cG9ydH0gd2l0aCB2YWx1ZSAke3ZhbH1gKTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBFdmVudHMge1xyXG4gIHByaXZhdGUgb25LZXlQcmVzcyhwb3J0OiBudW1iZXIsIGJpdDogbnVtYmVyLCB2YWw6IEJpdCkge31cclxuXHJcbiAgY29uc3RydWN0b3Iob25LZXlQcmVzczogYW55KSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MgPSBvbktleVByZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB3aW5kb3cub25rZXlkb3duID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgMTY6IHtcclxuICAgICAgICAgIC8vIHNoaWZ0XHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9