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
        this.lastInterrupt = 2;
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
                                if (this.lastInterrupt === 2) {
                                    this.generateInterrupt(1);
                                    this.lastInterrupt = 1;
                                }
                                else {
                                    this.generateInterrupt(2);
                                    this.lastInterrupt = 2;
                                }
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
            console.log('cycles: ', _this.cycles);
        };
        this.readNext = function () {
            var state = _this.state;
            var opcode = state.memory[state.pc.val()].val();
            // if (
            //   this.debug &&
            //   this.instructionNumber >= 50590 - 2
            //   // && this.instructionNumber % 25 === 0
            // ) {
            //   this.log(state.pc.val(), opcode);
            // }
            // if (this.instructionNumber === 50590) {
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
                    // INX B
                    var val = state.bc.add(1);
                    state.bc = val;
                    state.pc.incr(1);
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
                    var hob = state.a.highOrderBit;
                    _this.setCarryBit(hob);
                    var val = state.a.rotateLeft().val();
                    if (hob === 1) {
                        // set lsb to 1
                        val |= 1;
                    }
                    else {
                        // clear lsb
                        val &= ~1;
                    }
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    state.pc.incr(1);
                    break;
                }
                case 0x08: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x09: {
                    // DAD B
                    var val = state.hl.add(state.bc);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x0a: {
                    // LDAX B
                    state.a = state.memory[state.bc.val()];
                    state.pc.incr(1);
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
                    var val = state.de.add(1);
                    state.de = val;
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
                    // MVI D, D8
                    state.d = _this.byteAt(1);
                    state.pc.incr(2);
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
                    // MVI E, D8
                    state.e = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x1f: {
                    // RAR
                    var lob = _this.state.a.lowOrderBit;
                    _this.setCarryBit(lob);
                    var val = _this.state.a.val();
                    if (lob === 1) {
                        // set msb to 1
                        val |= 1 << 7;
                    }
                    else {
                        // clear msb
                        val &= ~(1 << 7);
                    }
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    state.pc.incr(1);
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
                    // SHLD addr
                    var location_1 = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
                    _this.updateRam(location_1, state.l);
                    _this.updateRam(location_1 + 1, state.h);
                    state.pc.incr(3);
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
                    // LHLD addr
                    var location_2 = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(state.memory[location_2], state.memory[location_2 + 1]);
                    state.pc.incr(3);
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
                    // MVI L, D8
                    state.l = _this.byteAt(1);
                    state.pc.incr(2);
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
                    // STA addr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    _this.updateRam(addr.val(), state.a);
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
                    // STC
                    _this.setCarryBit(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x38: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x39: {
                    // DAD SP
                    var val = state.hl.add(state.sp);
                    state.hl = val;
                    _this.setCarryBit(val.carry);
                    state.pc.incr(1);
                    break;
                }
                case 0x3a: {
                    // LDA addr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.a = state.memory[addr.val()];
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
                    // MOV B, C
                    _this.mov('b', 'c');
                    break;
                case 0x42:
                    // MOV B, D
                    _this.mov('b', 'd');
                    break;
                case 0x43:
                    // MOV B, E
                    _this.mov('b', 'e');
                    break;
                case 0x44: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x45: {
                    // MOV B, L
                    _this.mov('b', 'l');
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
                    // MOV C, B
                    _this.mov('c', 'b');
                    break;
                }
                case 0x49: {
                    // MOV C, C
                    _this.mov('c', 'c');
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
                    // MOV C, H
                    _this.mov('c', 'h');
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
                    // MOV C, A
                    _this.mov('c', 'a');
                    break;
                }
                case 0x50: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x51: {
                    // MOV D, C
                    _this.mov('d', 'c');
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
                    _this.movMem('d', 'm');
                    break;
                }
                case 0x57: {
                    // MOV D, A
                    _this.mov('d', 'a');
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
                    // MOV E, A
                    _this.mov('e', 'a');
                    break;
                }
                case 0x60: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x61: {
                    // MOV H, C
                    _this.mov('h', 'c');
                    break;
                }
                case 0x62: {
                    // MOV H, D
                    _this.mov('h', 'd');
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
                    // MOV A, B
                    _this.mov('a', 'b');
                    break;
                }
                case 0x79: {
                    // 	MOV A, C
                    _this.mov('a', 'c');
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
                    // MOV A, L
                    _this.mov('a', 'l');
                    break;
                }
                case 0x7e: {
                    // MOV A, M
                    _this.movMem('a', 'm');
                    break;
                }
                case 0x7f: {
                    // MOV A, A
                    _this.mov('a', 'a');
                    break;
                }
                case 0x80: {
                    // ADD B
                    var val = state.a.add(state.b);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x81: {
                    // ADD C
                    var val = state.a.add(state.c);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x82: {
                    // ADD D
                    var val = state.a.add(state.d);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
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
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
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
                    // ORA M
                    var val = state.a.or(state.hl);
                    state.a = val;
                    _this.setCarryBit(0);
                    _this.setFlags(val);
                    state.pc.incr(1);
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
                    // CNZ addr
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
                case 0xc5: {
                    // PUSH B
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
                    if (state.cc.z === 1) {
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
                    // JZ addr
                    if (state.cc.z === 1) {
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
                    // CZ addr
                    if (state.cc.z === 1) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _b = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _b.high, low = _b.low;
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
                    var _c = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _c.high, low = _c.low;
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
                    // RNC
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
                    // 	JNC address
                    if (state.cc.cy === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
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
                    // RC
                    if (state.cc.cy === 1) {
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
                case 0xd9: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xda: {
                    // JC addr
                    if (state.cc.cy === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
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
                    _this.unimplementedInstruction(opcode);
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
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
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
                    // JPE addr
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
                    _this.updateRam(state.sp.decr(1), state.a);
                    _this.updateRam(state.sp.decr(1), state.cc.getPsw());
                    state.pc.incr(1);
                    break;
                }
                case 0xf6: {
                    // ORI D8
                    var val = state.a.or(_this.byteAt(1));
                    state.a = val;
                    _this.setCarryBit(0);
                    _this.setFlags(val);
                    state.pc.incr(2);
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
                    // TODO: is this wrong?
                    var _d = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(state.pc.add(2)), high = _d.high, low = _d.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](0x38);
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
            state[srcKey] = state[destKey].clone();
            state.pc.incr(1);
        };
        this.movMem = function (srcKey, destKey) {
            if (srcKey !== 'm' && destKey !== 'm') {
                throw new Error('must specify a memory location');
            }
            var state = _this.state;
            if (srcKey === 'm') {
                _this.updateRam(state.hl.val(), state[destKey]);
            }
            else {
                state[srcKey] = state.memory[state.hl.val()].clone();
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
        state.memory.splice(location, 1, value.clone());
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
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");

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
    Object.defineProperty(Uint.prototype, "lowOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(this.num & 1);
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
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");
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
    Uint16.prototype.or = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num | n;
        }
        else {
            val = this.num | n.val();
        }
        var ret = new Uint16(val);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    Object.defineProperty(Uint16.prototype, "highOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(this.num >> 15);
        },
        enumerable: true,
        configurable: true
    });
    Uint16.prototype.rotateLeft = function () {
        return new Uint16((this.num << 1) & 0xffff);
    };
    Uint16.prototype.clone = function () {
        return new Uint16(this.num);
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
/* harmony import */ var _Bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bit */ "./src/emulator/models/Bit.ts");
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
    Uint8.prototype.or = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num | n;
        }
        else {
            val = this.num | n.val();
        }
        var ret = new Uint8(val);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    Object.defineProperty(Uint8.prototype, "highOrderBit", {
        get: function () {
            return Object(_Bit__WEBPACK_IMPORTED_MODULE_1__["toBit"])(this.num >> 7);
        },
        enumerable: true,
        configurable: true
    });
    Uint8.prototype.rotateLeft = function () {
        return new Uint8((this.num << 1) & 0xff);
    };
    Uint8.prototype.clone = function () {
        return new Uint8(this.num);
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
    Painter.prototype.paint = function (x, y, on) {
        if (this.context) {
            // this.context.clearRect(x, y, 1, 1);
            this.context.fillStyle = on ? 'white' : 'black';
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

// TODO: add input
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL2VtdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQml0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQnl0ZUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQ29uZGl0aW9uQ29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9DcHVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvbW9kZWxzL1VpbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50MTYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50OC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tZWRpYXRvci9NZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFpbnRlci9wYWludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRW1DO0FBRU07QUFDUDtBQUNRO0FBRUw7QUFDTTtBQUUzQyw0QkFBNEI7QUFFNUIsa0JBQWtCO0FBQ2xCLElBQU0sVUFBVSxHQUFHO0lBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFckQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUU5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRTlDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM1RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFB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QUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNkLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RD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QUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsU0FBUztvQkFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSztvQkFDTCxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDckIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFNUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxvREFBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNULFVBQVU7b0JBQ1YsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLElBQU0sSUFBSSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztxQkFDakI7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRO29CQUNSLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsUUFBUTtvQkFDUixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxLQUFLLENBQUMsRUFBRSxHQUFHLG9EQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2dCQUNELEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2lCQUNQO2dC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NUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssQ0FBQyxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssQ0FBQyxFQUFFLGFBQWE7Z0JBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBS0gsY0FBQztBQUFELENBQUM7O0FBRUQsa0JBQWtCO0FBQ2xCO0lBR0UsZ0JBQVksVUFBZTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBSk8sMkJBQVUsR0FBbEIsVUFBbUIsSUFBWSxFQUFFLEdBQVcsRUFBRSxHQUFRLElBQUcsQ0FBQztJQU1uRCxxQkFBSSxHQUFYO1FBQUEsaUJBV0M7UUFWQyxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQUM7WUFDbEIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUU1QyxRQUFRLEdBQUcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLFFBQVE7b0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gQGZsb3dcclxuaW1wb3J0IHsgSU1lZGlhdG9yIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3InO1xyXG5pbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JQ29sbGVhZ3VlJztcclxuaW1wb3J0IFVpbnQ4IGZyb20gJy4vbW9kZWxzL1VpbnQ4JztcclxuaW1wb3J0IFVpbnQgZnJvbSAnLi9tb2RlbHMvVWludCc7XHJcbmltcG9ydCBDcHVTdGF0ZSBmcm9tICcuL21vZGVscy9DcHVTdGF0ZSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vbW9kZWxzL0JpdCc7XHJcbmltcG9ydCB7IGJpdCB9IGZyb20gJy4vdXRpbHMvYml0JztcclxuaW1wb3J0IFVpbnQxNiBmcm9tICcuL21vZGVscy9VaW50MTYnO1xyXG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gJy4vbW9kZWxzL0J5dGVBcnJheSc7XHJcblxyXG4vLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcblxyXG4vLyBwcmV0dGllci1pZ25vcmVcclxuY29uc3QgY3ljbGVzODA4MCA9IFtcclxuXHQ0LCAxMCwgNywgNSwgNSwgNSwgNywgNCwgNCwgMTAsIDcsIDUsIDUsIDUsIDcsIDQsIC8vMHgwMC4uMHgwZlxyXG5cdDQsIDEwLCA3LCA1LCA1LCA1LCA3LCA0LCA0LCAxMCwgNywgNSwgNSwgNSwgNywgNCwgLy8weDEwLi4weDFmXHJcblx0NCwgMTAsIDE2LCA1LCA1LCA1LCA3LCA0LCA0LCAxMCwgMTYsIDUsIDUsIDUsIDcsIDQsIC8vZXRjXHJcblx0NCwgMTAsIDEzLCA1LCAxMCwgMTAsIDEwLCA0LCA0LCAxMCwgMTMsIDUsIDUsIDUsIDcsIDQsXHJcblxyXG5cdDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsIDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsIC8vMHg0MC4uMHg0ZlxyXG5cdDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsIDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsXHJcblx0NSwgNSwgNSwgNSwgNSwgNSwgNywgNSwgNSwgNSwgNSwgNSwgNSwgNSwgNywgNSxcclxuXHQ3LCA3LCA3LCA3LCA3LCA3LCA3LCA3LCA1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LFxyXG5cclxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LCAvLzB4ODAuLjh4NGZcclxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LFxyXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsXHJcblx0NCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNywgNCxcclxuXHJcblx0MTEsIDEwLCAxMCwgMTAsIDE3LCAxMSwgNywgMTEsIDExLCAxMCwgMTAsIDEwLCAxMCwgMTcsIDcsIDExLCAvLzB4YzAuLjB4Y2ZcclxuXHQxMSwgMTAsIDEwLCAxMCwgMTcsIDExLCA3LCAxMSwgMTEsIDEwLCAxMCwgMTAsIDEwLCAxNywgNywgMTEsXHJcblx0MTEsIDEwLCAxMCwgMTgsIDE3LCAxMSwgNywgMTEsIDExLCA1LCAxMCwgNSwgMTcsIDE3LCA3LCAxMSxcclxuXHQxMSwgMTAsIDEwLCA0LCAxNywgMTEsIDcsIDExLCAxMSwgNSwgMTAsIDQsIDE3LCAxNywgNywgMTEsXHJcbl07XHJcblxyXG4vLyBDUFUgcnVubmluZyBhdCAybWh6LCAyIGludGVycnVwdHMgcnVubmluZyBhdCA2MG1oelxyXG5jb25zdCBjeWNsZXNVbnRpbEludGVycnVwdDogbnVtYmVyID0gTWF0aC5jZWlsKDIwMDAwMDAgLyA2MCAvIDIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVtdWxhdG9yIGltcGxlbWVudHMgSUNvbGxlYWd1ZSB7XHJcbiAgZGVidWc6IGJvb2xlYW47XHJcbiAgc3RhdGU6IENwdVN0YXRlO1xyXG4gIC8vIG91dDogQnVmZmVyO1xyXG4gIGluOiBCeXRlQXJyYXk7XHJcbiAgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICBpbnN0cnVjdGlvbk51bWJlcjogbnVtYmVyID0gMDtcclxuICBsYXN0SW50ZXJydXB0OiBudW1iZXIgPSAyO1xyXG4gIGN5Y2xlczogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgbWVkaWF0b3IsXHJcbiAgICBkZWJ1ZyxcclxuICAgIHdlYixcclxuICB9OiB7XHJcbiAgICBtZWRpYXRvcjogSU1lZGlhdG9yO1xyXG4gICAgd2ViOiBib29sZWFuO1xyXG4gICAgZGVidWc/OiBib29sZWFuO1xyXG4gIH0pIHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgQ3B1U3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCB1c2VXZWIgPSAhIXdlYjtcclxuICAgIGNvbnN0IHVzZURlYnVnID0gISFkZWJ1ZztcclxuXHJcbiAgICBpZiAoIXVzZVdlYikge1xyXG4gICAgICAvLyBjb25zdCByb20gPSBmcy5yZWFkRmlsZVN5bmMoJ2ludmFkZXJzJyk7XHJcbiAgICAgIC8vIGNvbnN0IHJhbSA9IEJ1ZmZlci5hbGxvYygweDIwMDApO1xyXG4gICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeS5zZXQoWy4uLnJvbSwgLi4ucmFtXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMub3V0ID0gQnVmZmVyLmFsbG9jKDB4MDEwMCk7XHJcbiAgICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XHJcbiAgICB0aGlzLmRlYnVnID0gdXNlRGVidWc7XHJcblxyXG4gICAgdGhpcy5pbiA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcclxuICAgIHRoaXMuaW4uYWxsb2MoOCk7XHJcbiAgfVxyXG5cclxuICBzZW5kKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdDogQml0KSB7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnNlbmRPdXQocG9ydCwgcG9zLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZShwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ6IEJpdCkge1xyXG4gICAgY29uc3QgdmFsID0gbmV3IFVpbnQ4KHRoaXMubW9kaWZ5Qml0KHRoaXMuaW5bcG9ydF0udmFsKCksIHBvcywgYml0KSk7XHJcbiAgICB0aGlzLmluLnNwbGljZShwb3J0LCAxLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb2RpZnlCaXQobnVtYmVyOiBudW1iZXIsIHBvczogbnVtYmVyLCBiOiBCaXQpIHtcclxuICAgIGNvbnN0IG1hc2sgPSAxIDw8IHBvcztcclxuICAgIHJldHVybiAobnVtYmVyICYgfm1hc2spIHwgKChiIDw8IHBvcykgJiBtYXNrKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnVwZGF0ZVNjcmVlbihhZGRyLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBieXRlQXQgPSAoaW5kZXg6IG51bWJlcik6IFVpbnQ4ID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gc3RhdGUubWVtb3J5W3N0YXRlLnBjLnZhbCgpICsgaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zdCByYW0gPSBuZXcgVWludDhBcnJheSgweDIwMDApO1xyXG5cclxuICAgIGZldGNoKCdpbnZhZGVycycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzLmFycmF5QnVmZmVyKCkudGhlbihidWYgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpO1xyXG4gICAgICAgIGNvbnN0IHJvbUJ5dGVzID0gWy4uLnZpZXddLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHJhbUJ5dGVzID0gWy4uLnJhbV0ubWFwKE51bWJlcik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tZW1vcnkuc2V0KFsuLi5yb21CeXRlcywgLi4ucmFtQnl0ZXNdKTtcclxuXHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHdoaWxlIChzdGF0ZS5wYy52YWwoKSA+IC0xKSB7XHJcbiAgICAgIC8vIGFsZXJ0KHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIpO1xyXG4gICAgICBpZiAodGhpcy5pbnN0cnVjdGlvbk51bWJlciAlIDEwMDAgPT09IDApIHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTApKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmxhc3RJbnRlcnJ1cHQgPiAxLjAgLyA2MC4wKSB7XHJcbiAgICAgIC8vICAgLy8xLzYwIHNlY29uZCBoYXMgZWxhcHNlZFxyXG4gICAgICAvLyAgIC8vb25seSBkbyBhbiBpbnRlcnJ1cHQgaWYgdGhleSBhcmUgZW5hYmxlZFxyXG4gICAgICAvLyAgIGlmICh0aGlzLnN0YXRlLmludEVuYWJsZSkge1xyXG4gICAgICAvLyAgICAgdGhpcy5nZW5lcmF0ZUludGVycnVwdCgyKTsgLy9pbnRlcnJ1cHQgMlxyXG5cclxuICAgICAgLy8gICAgIC8vU2F2ZSB0aGUgdGltZSB3ZSBkaWQgdGhpc1xyXG4gICAgICAvLyAgICAgdGhpcy5sYXN0SW50ZXJydXB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICB0aGlzLmN5Y2xlcyArPSB0aGlzLnJlYWROZXh0KCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jeWNsZXMgPj0gY3ljbGVzVW50aWxJbnRlcnJ1cHQpIHtcclxuICAgICAgICBpZiAodG9CaXQodGhpcy5zdGF0ZS5pbnRFbmFibGUudmFsKCkpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sYXN0SW50ZXJydXB0ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbnRlcnJ1cHQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEludGVycnVwdCA9IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGVzIC09IGN5Y2xlc1VudGlsSW50ZXJydXB0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBsb2cgPSAoY291bnRlcjogbnVtYmVyLCBvcGNvZGU6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgYXQgJHtjb3VudGVyfSAoMHgke2NvdW50ZXIudG9TdHJpbmcoMTYpfSksIGluc3RydWN0aW9uICR7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbk51bWJlclxyXG4gICAgICB9LCBjb21tYW5kIDB4JHtvcGNvZGUudG9TdHJpbmcoMTYpfWBcclxuICAgICk7XHJcbiAgICB0aGlzLmxvZ1N0YXRlKHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKCdjeWNsZXM6ICcsIHRoaXMuY3ljbGVzKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGxvZ1N0YXRlKHN0YXRlOiBDcHVTdGF0ZSkge1xyXG4gICAgY29uc3QgeyBjYyB9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coYFxyXG4gICAge1xyXG4gICAgICBhOiAke3N0YXRlLmEuaGV4fVxyXG4gICAgICBiYzogJHtzdGF0ZS5iYy5oZXh9XHJcbiAgICAgIGRlOiAke3N0YXRlLmRlLmhleH1cclxuICAgICAgaGw6ICR7c3RhdGUuaGwuaGV4fVxyXG4gICAgICBwYzogJHtzdGF0ZS5wYy5oZXh9XHJcbiAgICAgIHNwOiAke3N0YXRlLnNwLmhleH1cclxuICAgICAgY2M6IHtcclxuICAgICAgICB6OiAke2NjLnp9XHJcbiAgICAgICAgczogJHtjYy5zfVxyXG4gICAgICAgIHA6ICR7Y2MucH1cclxuICAgICAgICBjeTogJHtjYy5jeX1cclxuICAgICAgICBhYzogJHtjYy5hY31cclxuICAgICAgfVxyXG4gICAgfWApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUludGVycnVwdChpbnRlcnJ1cHROdW06IG51bWJlcikge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIC8vcGVyZm9ybSBcIlBVU0ggUENcIlxyXG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHN0YXRlLnBjKTtcclxuICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAvL1NldCB0aGUgUEMgdG8gdGhlIGxvdyBtZW1vcnkgdmVjdG9yLlxyXG4gICAgLy9UaGlzIGlzIGlkZW50aWNhbCB0byBhbiBcIlJTVCBpbnRlcnJ1cHRfbnVtXCIgaW5zdHJ1Y3Rpb24uXHJcbiAgICBzdGF0ZS5wYyA9IG5ldyBVaW50MTYoOCAqIGludGVycnVwdE51bSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWROZXh0ID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qgb3Bjb2RlID0gc3RhdGUubWVtb3J5W3N0YXRlLnBjLnZhbCgpXS52YWwoKTtcclxuXHJcbiAgICAvLyBpZiAoXHJcbiAgICAvLyAgIHRoaXMuZGVidWcgJiZcclxuICAgIC8vICAgdGhpcy5pbnN0cnVjdGlvbk51bWJlciA+PSA1MDU5MCAtIDJcclxuICAgIC8vICAgLy8gJiYgdGhpcy5pbnN0cnVjdGlvbk51bWJlciAlIDI1ID09PSAwXHJcbiAgICAvLyApIHtcclxuICAgIC8vICAgdGhpcy5sb2coc3RhdGUucGMudmFsKCksIG9wY29kZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgPT09IDUwNTkwKSB7XHJcbiAgICAvLyAgIGRlYnVnZ2VyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN3aXRjaCAob3Bjb2RlKSB7XHJcbiAgICAgIGNhc2UgMHgwMDoge1xyXG4gICAgICAgIC8vIE5PUFxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDAxOlxyXG4gICAgICAgIC8vIExYSSBCLCBEMTZcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMik7XHJcbiAgICAgICAgc3RhdGUuYyA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHgwMjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDAzOiB7XHJcbiAgICAgICAgLy8gSU5YIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5iYy5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuYmMgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwNToge1xyXG4gICAgICAgIC8vIERDUiBCXHJcbiAgICAgICAgc3RhdGUuYi5kZWNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYik7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDY6IHtcclxuICAgICAgICAvLyBNVkkgQiwgRDhcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDc6IHtcclxuICAgICAgICAvLyBSTENcclxuICAgICAgICBjb25zdCBob2IgPSBzdGF0ZS5hLmhpZ2hPcmRlckJpdDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KGhvYik7XHJcblxyXG4gICAgICAgIGxldCB2YWwgPSBzdGF0ZS5hLnJvdGF0ZUxlZnQoKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGhvYiA9PT0gMSkge1xyXG4gICAgICAgICAgLy8gc2V0IGxzYiB0byAxXHJcbiAgICAgICAgICB2YWwgfD0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gY2xlYXIgbHNiXHJcbiAgICAgICAgICB2YWwgJj0gfjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KHZhbCk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDk6IHtcclxuICAgICAgICAvLyBEQUQgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5iYyk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBhOiB7XHJcbiAgICAgICAgLy8gTERBWCBCXHJcbiAgICAgICAgc3RhdGUuYSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5iYy52YWwoKV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwYzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBkOiB7XHJcbiAgICAgICAgLy8gRENSIENcclxuICAgICAgICBzdGF0ZS5jLmRlY3IoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5jKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZToge1xyXG4gICAgICAgIC8vIE1WSSBDLCBEOFxyXG4gICAgICAgIHN0YXRlLmMgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZjoge1xyXG4gICAgICAgIC8vIFJSQ1xyXG4gICAgICAgIGNvbnN0IGJpbiA9IHN0YXRlLmFcclxuICAgICAgICAgIC52YWwoKVxyXG4gICAgICAgICAgLnRvU3RyaW5nKDIpXHJcbiAgICAgICAgICAucGFkU3RhcnQoOCk7XHJcbiAgICAgICAgbGV0IGJpdCA9IGJpblswXTtcclxuICAgICAgICB0aGlzLnJvdGF0ZShzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDExOiB7XHJcbiAgICAgICAgLy8gTFhJIEQsIEQxNlxyXG4gICAgICAgIHN0YXRlLmRlID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDEyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTM6IHtcclxuICAgICAgICAvLyBJTlggRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmRlLmFkZCgxKTtcclxuICAgICAgICBzdGF0ZS5kZSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNDoge1xyXG4gICAgICAgIC8vIElOUiBEXHJcbiAgICAgICAgc3RhdGUuZC5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuZCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNjoge1xyXG4gICAgICAgIC8vIE1WSSBELCBEOFxyXG4gICAgICAgIHN0YXRlLmQgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTk6IHtcclxuICAgICAgICAvLyBEQUQgRFxyXG4gICAgICAgIC8vIGNvbnN0IHJlcyA9IHRoaXMuY29uY2F0VWludCh0aGlzLnN0YXRlLmQsIHRoaXMuc3RhdGUuZSk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLmRlKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWE6IHtcclxuICAgICAgICAvLyBMREFYIERcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W3N0YXRlLmRlLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZToge1xyXG4gICAgICAgIC8vIE1WSSBFLCBEOFxyXG4gICAgICAgIHN0YXRlLmUgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZjoge1xyXG4gICAgICAgIC8vIFJBUlxyXG4gICAgICAgIGNvbnN0IGxvYiA9IHRoaXMuc3RhdGUuYS5sb3dPcmRlckJpdDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdChsb2IpO1xyXG5cclxuICAgICAgICBsZXQgdmFsID0gdGhpcy5zdGF0ZS5hLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAobG9iID09PSAxKSB7XHJcbiAgICAgICAgICAvLyBzZXQgbXNiIHRvIDFcclxuICAgICAgICAgIHZhbCB8PSAxIDw8IDc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGNsZWFyIG1zYlxyXG4gICAgICAgICAgdmFsICY9IH4oMSA8PCA3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMToge1xyXG4gICAgICAgIC8vIExYSSBILCBEMTZcclxuICAgICAgICBzdGF0ZS5obCA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMjoge1xyXG4gICAgICAgIC8vIFNITEQgYWRkclxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdXRpbHMuY29uY2F0KFxyXG4gICAgICAgICAgdGhpcy5ieXRlQXQoMikudmFsKCksXHJcbiAgICAgICAgICB0aGlzLmJ5dGVBdCgxKS52YWwoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0obG9jYXRpb24sIHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKGxvY2F0aW9uICsgMSwgc3RhdGUuaCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjM6IHtcclxuICAgICAgICAvLyBJTlggSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZCgxKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICAvLyBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdGhpcy5zcGxpdChieXRlcy52YWwoKSk7XHJcbiAgICAgICAgLy8gc3RhdGUuaCA9IGhpZ2g7XHJcbiAgICAgICAgLy8gc3RhdGUubCA9IGxvdztcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyNDoge1xyXG4gICAgICAgIC8vIElOUiBIXHJcbiAgICAgICAgc3RhdGUuaC5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuaCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyNjoge1xyXG4gICAgICAgIC8vIE1WSSBILCBEOFxyXG4gICAgICAgIHN0YXRlLmggPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjk6IHtcclxuICAgICAgICAvLyBEQUQgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5obCk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJhOiB7XHJcbiAgICAgICAgLy8gTEhMRCBhZGRyXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB1dGlscy5jb25jYXQoXHJcbiAgICAgICAgICB0aGlzLmJ5dGVBdCgyKS52YWwoKSxcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDEpLnZhbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHV0aWxzLmNvbmNhdFVpbnQoXHJcbiAgICAgICAgICBzdGF0ZS5tZW1vcnlbbG9jYXRpb25dLFxyXG4gICAgICAgICAgc3RhdGUubWVtb3J5W2xvY2F0aW9uICsgMV1cclxuICAgICAgICApO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJlOiB7XHJcbiAgICAgICAgLy8gTVZJIEwsIEQ4XHJcbiAgICAgICAgc3RhdGUubCA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJmOiB7XHJcbiAgICAgICAgLy8gQ01BXHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh+c3RhdGUuYS52YWwoKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMToge1xyXG4gICAgICAgIC8vIExYSSBTUCwgRDE2XHJcbiAgICAgICAgc3RhdGUuc3AgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzI6IHtcclxuICAgICAgICAvLyBTVEEgYWRkclxyXG4gICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oYWRkci52YWwoKSwgc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM1OiB7XHJcbiAgICAgICAgLy8gRENSIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHZhbCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgLy8gdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzY6IHtcclxuICAgICAgICAvLyBNVkkgTSwgRDhcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5obC52YWwoKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM3OiB7XHJcbiAgICAgICAgLy8gU1RDXHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM5OiB7XHJcbiAgICAgICAgLy8gREFEIFNQXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLnNwKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2E6IHtcclxuICAgICAgICAvLyBMREEgYWRkclxyXG4gICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHN0YXRlLm1lbW9yeVthZGRyLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2Q6IHtcclxuICAgICAgICAvLyBEQ1IgQVxyXG4gICAgICAgIHN0YXRlLmEuZGVjcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNlOiB7XHJcbiAgICAgICAgLy8gTVZJIEEsIEQ4XHJcbiAgICAgICAgc3RhdGUuYSA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNmOiB7XHJcbiAgICAgICAgLy8gQ01DXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuY2MuY3kgPT09IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0MTpcclxuICAgICAgICAvLyBNT1YgQiwgQ1xyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAweDQyOlxyXG4gICAgICAgIC8vIE1PViBCLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDM6XHJcbiAgICAgICAgLy8gTU9WIEIsIEVcclxuICAgICAgICB0aGlzLm1vdignYicsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHg0NDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ1OiB7XHJcbiAgICAgICAgLy8gTU9WIEIsIExcclxuICAgICAgICB0aGlzLm1vdignYicsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ2OiB7XHJcbiAgICAgICAgLy8gTU9WIEIsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnYicsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDg6IHtcclxuICAgICAgICAvLyBNT1YgQywgQlxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2InKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDk6IHtcclxuICAgICAgICAvLyBNT1YgQywgQ1xyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Yjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRjOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIEhcclxuICAgICAgICB0aGlzLm1vdignYycsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Zjoge1xyXG4gICAgICAgIC8vIE1PViBDLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2MnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1MDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUxOiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIENcclxuICAgICAgICB0aGlzLm1vdignZCcsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1NDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU1OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTY6IHtcclxuICAgICAgICAvLyBNT1YgRCwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdkJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTc6IHtcclxuICAgICAgICAvLyBNT1YgRCwgQVxyXG4gICAgICAgIHRoaXMubW92KCdkJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1OToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVhOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Yzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWU6IHtcclxuICAgICAgICAvLyBNT1YgRSwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdlJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NWY6IHtcclxuICAgICAgICAvLyBNT1YgRSwgQVxyXG4gICAgICAgIHRoaXMubW92KCdlJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2MToge1xyXG4gICAgICAgIC8vIE1PViBILCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Mjoge1xyXG4gICAgICAgIC8vIE1PViBILCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Mzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NjU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Njoge1xyXG4gICAgICAgIC8vIE1PViBILCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2gnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Nzoge1xyXG4gICAgICAgIC8vIE1PViBILCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Yjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NmQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZmOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIEFcclxuICAgICAgICB0aGlzLm1vdignbCcsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Mjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDczOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NzQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3NToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzc6IHtcclxuICAgICAgICAvLyBNT1YgTSwgQVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdtJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzg6IHtcclxuICAgICAgICAvLyBNT1YgQSwgQlxyXG4gICAgICAgIHRoaXMubW92KCdhJywgJ2InKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzk6IHtcclxuICAgICAgICAvLyBcdE1PViBBLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3YToge1xyXG4gICAgICAgIC8vIE1PViBBLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Yjoge1xyXG4gICAgICAgIC8vIFx0TU9WIEEsIEVcclxuICAgICAgICB0aGlzLm1vdignYScsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdjOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEhcclxuICAgICAgICB0aGlzLm1vdignYScsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdkOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIExcclxuICAgICAgICB0aGlzLm1vdignYScsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdlOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnYScsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdmOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEFcclxuICAgICAgICB0aGlzLm1vdignYScsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgwOiB7XHJcbiAgICAgICAgLy8gQUREIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4MToge1xyXG4gICAgICAgIC8vIEFERCBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODI6IHtcclxuICAgICAgICAvLyBBREQgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4NToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg2OiB7XHJcbiAgICAgICAgLy8gQUREIE1cclxuICAgICAgICAvLyBjb25zdCBvZmZzZXQgPSAoc3RhdGUuaC52YWwoKSA8PCA4KSB8IHN0YXRlLmwudmFsKCk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4OToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhhOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Yzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Zjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Mjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5NToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5ODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Yjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDljOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5ZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDlmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGEyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGE1OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNzoge1xyXG4gICAgICAgIC8vIEFOQSBBXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGE5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWE6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhYjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGFjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGFmOiB7XHJcbiAgICAgICAgLy8gWFJBIEFcclxuICAgICAgICBjb25zdCB4b3IgPSB0b0JpdCghIXN0YXRlLmEudmFsKCkgIT0gISFzdGF0ZS5hLnZhbCgpKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KHhvcik7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGIxOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNjoge1xyXG4gICAgICAgIC8vIE9SQSBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5vcihzdGF0ZS5obCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJlOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMDoge1xyXG4gICAgICAgIC8vIFJOWlxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMToge1xyXG4gICAgICAgIC8vIFBPUCBCXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmJjID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzI6IHtcclxuICAgICAgICAvLyBKTlogYWRkcmVzc1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMzOiB7XHJcbiAgICAgICAgLy8gSk1QIGFkZHJlc3NcclxuICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzQ6IHtcclxuICAgICAgICAvLyBDTlogYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjNToge1xyXG4gICAgICAgIC8vIFBVU0ggQlxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmMpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM2OiB7XHJcbiAgICAgICAgLy8gQURJIGJ5dGVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZCh0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yzc6IHtcclxuICAgICAgICAvLyBSU1RcclxuICAgICAgICBzdGF0ZS5wYyA9IG5ldyBVaW50MTYoMCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yzg6IHtcclxuICAgICAgICAvLyBSWlxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjOToge1xyXG4gICAgICAgIC8vIFJFVFxyXG4gICAgICAgIC8vIGNvbnN0IHsgdmFsIH0gPSBzdGF0ZS5zcC5hZGQoMSk7XHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjYToge1xyXG4gICAgICAgIC8vIEpaIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2M6IHtcclxuICAgICAgICAvLyBDWiBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNkOiB7XHJcbiAgICAgICAgLy8gQ0FMTCBhZGRyZXNzXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDA6IHtcclxuICAgICAgICAvLyBSTkNcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDE6IHtcclxuICAgICAgICAvLyBQT1AgRFxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5kZSA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQyOiB7XHJcbiAgICAgICAgLy8gXHRKTkMgYWRkcmVzc1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMzoge1xyXG4gICAgICAgIC8vIE9VVCBEOFxyXG4gICAgICAgIC8vIHRoaXMub3V0W3RoaXMuYnl0ZUF0KDEpLnZhbCgpXSA9IHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgdGhpcy5ieXRlQXQoMSkudmFsKCkgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICBzdGF0ZS5hLnZhbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNlbmQodGhpcy5ieXRlQXQoMSkudmFsKCksIHN0YXRlLmEudmFsKCksIDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDU6IHtcclxuICAgICAgICAvLyBQVVNIIERcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5kKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5lKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDg6IHtcclxuICAgICAgICAvLyBSQ1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYToge1xyXG4gICAgICAgIC8vIEpDIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYjoge1xyXG4gICAgICAgIC8vIElOIEQ4XHJcbiAgICAgICAgc3RhdGUuYSA9IHRoaXMuaW5bdGhpcy5ieXRlQXQoMSkudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRjOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkZToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMToge1xyXG4gICAgICAgIC8vIFBPUCBIXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTI6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTU6IHtcclxuICAgICAgICAvLyBQVVNIIEhcclxuICAgICAgICAvLyBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuZGVjcigxKV0gPSBzdGF0ZS5oO1xyXG4gICAgICAgIC8vIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5kZWNyKDEpXSA9IHN0YXRlLmw7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUubCk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU2OiB7XHJcbiAgICAgICAgLy8gQU5JIEQ4XHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHRoaXMuYnl0ZUF0KDEpLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWE6IHtcclxuICAgICAgICAvLyBKUEUgYWRkclxyXG4gICAgICAgIC8vIGlmIHBhcml0eSBlcXVhbHMgMSB0aGF0IGluZGljYXRlcyBpdCdzIGV2ZW5cclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMSkge1xyXG4gICAgICAgICAgLy8gY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIC8vIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYjoge1xyXG4gICAgICAgIC8vIFhDSEdcclxuICAgICAgICBjb25zdCBoID0gc3RhdGUuaDtcclxuICAgICAgICBjb25zdCBsID0gc3RhdGUubDtcclxuICAgICAgICBzdGF0ZS5oID0gc3RhdGUuZDtcclxuICAgICAgICBzdGF0ZS5sID0gc3RhdGUuZTtcclxuICAgICAgICBzdGF0ZS5kID0gaDtcclxuICAgICAgICBzdGF0ZS5lID0gbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWU6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlZjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjE6IHtcclxuICAgICAgICAvLyBQT1AgUFNXXHJcbiAgICAgICAgY29uc3QgcHN3ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpICsgMV07XHJcblxyXG4gICAgICAgIHN0YXRlLmNjLnNldFBzdyhwc3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDIpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYyOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBQU1dcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5hKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5jYy5nZXRQc3coKSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY2OiB7XHJcbiAgICAgICAgLy8gT1JJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5vcih0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Zjk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmYToge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZiOiB7XHJcbiAgICAgICAgLy8gRUlcclxuICAgICAgICBzdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmM6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZlOiB7XHJcbiAgICAgICAgLy8gQ1BJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIodGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZjoge1xyXG4gICAgICAgIC8vIFJTVCA3XHJcbiAgICAgICAgLy8gVE9ETzogaXMgdGhpcyB3cm9uZz9cclxuICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoc3RhdGUucGMuYWRkKDIpKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMgPSBuZXcgVWludDgoMHgzOCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKC0xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIrKztcclxuICAgIHJldHVybiBjeWNsZXM4MDgwW29wY29kZV07XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlUmFtKGxvY2F0aW9uOiBudW1iZXIsIHZhbHVlOiBVaW50KSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIHN0YXRlLm1lbW9yeS5zcGxpY2UobG9jYXRpb24sIDEsIHZhbHVlLmNsb25lKCkpO1xyXG5cclxuICAgIGlmIChsb2NhdGlvbiA+PSAweDI0MDAgJiYgbG9jYXRpb24gPD0gMHgzZmZmKSB7XHJcbiAgICAgIC8vIHZpZGVvIHJhbVxyXG4gICAgICB0aGlzLnVwZGF0ZVNjcmVlbihsb2NhdGlvbiwgdmFsdWUudmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGbGFncyA9IChuOiBVaW50LCBjYXJyeT86IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICBzdGF0ZS5jYy56ID0gdG9CaXQoKG4udmFsKCkgJiAweGZmKSA9PT0gMCk7XHJcbiAgICBzdGF0ZS5jYy5zID0gdG9CaXQoKG4udmFsKCkgJiAweDgwKSAhPT0gMCk7XHJcbiAgICBzdGF0ZS5jYy5hYyA9IG4uYXV4Q2Fycnk7XHJcbiAgICBzdGF0ZS5jYy5wID0gdGhpcy5wYXJpdHkobi52YWwoKSk7XHJcblxyXG4gICAgaWYgKGNhcnJ5KSB7XHJcbiAgICAgIHRoaXMuc2V0Q2FycnlCaXQobi5jYXJyeSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRDYXJyeUJpdCA9IChuOiBCaXQpID0+ICh0aGlzLnN0YXRlLmNjLmN5ID0gbik7XHJcblxyXG4gIHByaXZhdGUgcGFyaXR5ID0gKG46IG51bWJlcik6IEJpdCA9PiB7XHJcbiAgICByZXR1cm4gdG9CaXQobiAlIDIgPT09IDEgPyAwIDogMSk7XHJcbiAgICAvLyBsZXQgY2FsYyA9IG4gJiAweGZmO1xyXG4gICAgLy8gbGV0IHBhcml0eSA9IDA7XHJcbiAgICAvLyB3aGlsZSAoY2FsYykge1xyXG4gICAgLy8gICBwYXJpdHkgPSBwYXJpdHkgPT09IDAgPyAxIDogMDtcclxuICAgIC8vICAgY2FsYyAmPSBjYWxjIC0gMTtcclxuICAgIC8vIH1cclxuICAgIC8vIHJldHVybiBiaXQocGFyaXR5KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG1vdiA9IChzcmNLZXk6IHN0cmluZywgZGVzdEtleTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoc3JjS2V5ID09PSAnbScgfHwgZGVzdEtleSA9PT0gJ20nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3JjIGFuZCBkZXN0IGNhbm5vdCBiZSBhIG1lbW9yeSBsb2NhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gICAgc3RhdGVbc3JjS2V5XSA9IHN0YXRlW2Rlc3RLZXldLmNsb25lKCk7XHJcblxyXG4gICAgc3RhdGUucGMuaW5jcigxKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG1vdk1lbSA9IChzcmNLZXk6IHN0cmluZywgZGVzdEtleTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoc3JjS2V5ICE9PSAnbScgJiYgZGVzdEtleSAhPT0gJ20nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBzcGVjaWZ5IGEgbWVtb3J5IGxvY2F0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAoc3JjS2V5ID09PSAnbScpIHtcclxuICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHN0YXRlW2Rlc3RLZXldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlW3NyY0tleV0gPSBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLmNsb25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUucGMuaW5jcigxKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJvdGF0ZSA9IChhY2N1bTogVWludDgpID0+IHtcclxuICAgIGNvbnN0IGJpbmFyeSA9IGFjY3VtLnZhbCgpLnRvU3RyaW5nKDIpO1xyXG5cclxuICAgIHRoaXMuc2V0Q2FycnlCaXQodG9CaXQoTnVtYmVyKGJpbmFyeVswXSkpKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBiaW5hcnkuc2xpY2UoMikgKyBiaW5hcnkuc2xpY2UoMCwgMSk7XHJcblxyXG4gICAgYWNjdW0gPSBuZXcgVWludDgocGFyc2VJbnQodHJhbnNmb3JtLCAyKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB1bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24gPSAob3Bjb2RlOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBVbmltcGxlbWVudGVkIGNvZGUgYXQgaW5zdHJ1Y3Rpb24gJHtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyXHJcbiAgICAgIH0gYXQgZm9yIG9wY29kZSAke29wY29kZS50b1N0cmluZygxNil9IGF0IG9mZnNldCAke3N0YXRlLnBjLnZhbCgpfWBcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29uc3QgYXBwID0gbmV3IEVtdWxhdG9yKHtcclxuLy8gICBkZWJ1ZzogdHJ1ZSxcclxuLy8gfSk7XHJcblxyXG4vLyB0cnkge1xyXG4vLyAgIGFwcC5ydW4oKTtcclxuLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICBjb25zb2xlLmxvZyhhcHAuaW5zdHJ1Y3Rpb25OdW1iZXIpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gfVxyXG5leHBvcnQgZGVmYXVsdCBFbXVsYXRvcjtcclxuIiwidHlwZSBCaXQgPSAwIHwgMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0JpdCA9IChhcmc6IGJvb2xlYW4gfCBudW1iZXIpOiBCaXQgPT4ge1xyXG4gIGNvbnN0IHZhbCA9IHR5cGVvZiBhcmcgPT09ICdudW1iZXInID8gISFhcmcgOiBhcmc7XHJcbiAgcmV0dXJuIHZhbCA/IDEgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQml0O1xyXG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCeXRlQXJyYXkgZXh0ZW5kcyBBcnJheSB7XHJcbiAgW2tleTogbnVtYmVyXTogVWludDg7XHJcblxyXG4gIHByaXZhdGUgbWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUoKTogQnl0ZUFycmF5IHtcclxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKEJ5dGVBcnJheS5wcm90b3R5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFsbG9jKG46IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5wdXNoKG5ldyBVaW50OCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQobjogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgbi5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgIHRoaXMucHVzaChuZXcgVWludDgodmFsKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcbmltcG9ydCBVaW50OCBmcm9tICcuL1VpbnQ4JztcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkNvZGVzIHtcbiAgejogQml0ID0gMDtcblxuICBzOiBCaXQgPSAwO1xuXG4gIHA6IEJpdCA9IDA7XG5cbiAgY3k6IEJpdCA9IDA7XG5cbiAgYWM6IEJpdCA9IDA7XG5cbiAgcGFkOiBCaXQgPSAwO1xuXG4gIGdldFBzdygpOiBVaW50OCB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5zICsgdGhpcy56ICsgJzAnICsgdGhpcy5hYyArICcwJyArIHRoaXMucCArICcxJyArIHRoaXMuY3k7XG4gICAgcmV0dXJuIG5ldyBVaW50OChwYXJzZUludCh2YWwsIDIpKTtcbiAgfVxuXG4gIHNldFBzdyhuOiBVaW50OCkge1xuICAgIGNvbnN0IGJpbmFyeSA9IG5cbiAgICAgIC52YWwoKVxuICAgICAgLnRvU3RyaW5nKDIpXG4gICAgICAucGFkU3RhcnQoOCwgJzAnKTtcbiAgICBjb25zdCBbcywgeiwgLCBhYywgLCBwLCAsIGN5XSA9IGJpbmFyeS5zcGxpdCgnJykubWFwKHMgPT4gTnVtYmVyKHMpKTtcbiAgICB0aGlzLnMgPSB0b0JpdChzKTtcbiAgICB0aGlzLnogPSB0b0JpdCh6KTtcbiAgICB0aGlzLmFjID0gdG9CaXQoYWMpO1xuICAgIHRoaXMucCA9IHRvQml0KHApO1xuICAgIHRoaXMuY3kgPSB0b0JpdChjeSk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XG5pbXBvcnQgVWludDE2IGZyb20gJy4vVWludDE2JztcbmltcG9ydCBDb25kaXRpb25Db2RlcyBmcm9tICcuL0NvbmRpdGlvbkNvZGVzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gJy4vQnl0ZUFycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3B1U3RhdGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgYTogVWludDggPSBuZXcgVWludDgoKTtcblxuICBiOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGM6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgZDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGg6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgbDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBzcDogVWludDE2ID0gbmV3IFVpbnQxNigpO1xuXG4gIHBjOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XG5cbiAgbWVtb3J5OiBCeXRlQXJyYXkgPSBCeXRlQXJyYXkuY3JlYXRlKCk7XG5cbiAgY2M6IENvbmRpdGlvbkNvZGVzID0gbmV3IENvbmRpdGlvbkNvZGVzKCk7XG5cbiAgaW50RW5hYmxlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGdldCBiYygpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuYiwgdGhpcy5jKTtcbiAgfVxuXG4gIHNldCBiYyhieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmIgPSBoaWdoO1xuICAgIHRoaXMuYyA9IGxvdztcbiAgfVxuXG4gIGdldCBkZSgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuZCwgdGhpcy5lKTtcbiAgfVxuXG4gIHNldCBkZShieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmQgPSBoaWdoO1xuICAgIHRoaXMuZSA9IGxvdztcbiAgfVxuXG4gIGdldCBobCgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuaCwgdGhpcy5sKTtcbiAgfVxuXG4gIHNldCBobChieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmggPSBoaWdoO1xuICAgIHRoaXMubCA9IGxvdztcbiAgfVxufVxuIiwiaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVpbnQge1xyXG4gIHByb3RlY3RlZCBudW06IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgbWF4OiBudW1iZXI7XHJcbiAgcHVibGljIGNhcnJ5OiBCaXQgPSAwO1xyXG4gIHB1YmxpYyBhdXhDYXJyeTogQml0ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIG46IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gICAgdGhpcy5udW0gPSBuICYgdGhpcy5tYXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm51bTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNaZXJvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGFkZChuOiBVaW50KTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHN1YihuOiBVaW50KTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IG9yKG46IFVpbnQgfCBudW1iZXIpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGdldCBoaWdoT3JkZXJCaXQoKTogQml0O1xyXG5cclxuICBwdWJsaWMgZ2V0IGxvd09yZGVyQml0KCk6IEJpdCB7XHJcbiAgICByZXR1cm4gdG9CaXQodGhpcy5udW0gJiAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCByb3RhdGVMZWZ0KCk6IFVpbnQ7XHJcblxyXG4gIHB1YmxpYyBpbmNyKG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWwgPSAodGhpcy5udW0gKyBuKSAmIHRoaXMubWF4O1xyXG4gICAgdGhpcy5udW0gPSB2YWw7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlY3IobjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm51bSAtIG4pICYgdGhpcy5tYXg7XHJcbiAgICB0aGlzLm51bSA9IHZhbDtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhleCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtLnRvU3RyaW5nKDE2KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGVja0NhcnJ5KHZhbDogbnVtYmVyKTogeyBjYXJyeTogQml0OyBhdXhDYXJyeTogQml0IH0ge1xyXG4gICAgY29uc3QgY2FycnkgPSB2YWwgPCAwIHx8IHZhbCA+IHRoaXMubWF4ID8gMSA6IDA7XHJcbiAgICBjb25zdCBhdXhDYXJyeSA9IHZhbCA8IDAgfHwgdmFsID4gdGhpcy5tYXggLyAyID8gMSA6IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FycnksXHJcbiAgICAgIGF1eENhcnJ5LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IFVpbnQgZnJvbSAnLi9VaW50JztcclxuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpbnQxNiBleHRlbmRzIFVpbnQge1xyXG4gIGNvbnN0cnVjdG9yKG4/OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKDB4ZmZmZiwgbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG4udmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQxNih2YWwgJiB0aGlzLm1heCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YihuOiBVaW50MTYgfCBudW1iZXIpOiBVaW50MTYge1xyXG4gICAgbGV0IHZhbDtcclxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50MTYodmFsICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcclxuICAgIHJldC5jYXJyeSA9IGNhcnJ5O1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gYXV4Q2Fycnk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcihuOiBVaW50IHwgbnVtYmVyKTogVWludDE2IHtcclxuICAgIGxldCB2YWw7XHJcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIHwgbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIHwgbi52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDE2KHZhbCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoaWdoT3JkZXJCaXQoKTogQml0IHtcclxuICAgIHJldHVybiB0b0JpdCh0aGlzLm51bSA+PiAxNSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlTGVmdCgpOiBVaW50MTYge1xyXG4gICAgcmV0dXJuIG5ldyBVaW50MTYoKHRoaXMubnVtIDw8IDEpICYgMHhmZmZmKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBVaW50MTYge1xyXG4gICAgcmV0dXJuIG5ldyBVaW50MTYodGhpcy5udW0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xyXG5pbXBvcnQgVWludCBmcm9tICcuL1VpbnQnO1xyXG5pbXBvcnQgQml0LCB7IHRvQml0IH0gZnJvbSAnLi9CaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWludDggZXh0ZW5kcyBVaW50IHtcclxuICBjb25zdHJ1Y3RvcihuPzogbnVtYmVyKSB7XHJcbiAgICBzdXBlcigweGZmLCBuKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQobjogVWludDggfCBudW1iZXIpOiBVaW50OCB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG4udmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHZhbCAmIHRoaXMubWF4KTtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJ5LCBhdXhDYXJyeSB9ID0gdGhpcy5jaGVja0NhcnJ5KHZhbCk7XHJcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcclxuICAgIHJldC5hdXhDYXJyeSA9IGF1eENhcnJ5O1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3ViKG46IFVpbnQ4IHwgbnVtYmVyKTogVWludDgge1xyXG4gICAgbGV0IHZhbDtcclxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50OCh2YWwgJiB0aGlzLm1heCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9yKG46IFVpbnQgfCBudW1iZXIpOiBVaW50OCB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSB8IG47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSB8IG4udmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHZhbCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoaWdoT3JkZXJCaXQoKTogQml0IHtcclxuICAgIHJldHVybiB0b0JpdCh0aGlzLm51bSA+PiA3KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGVMZWZ0KCk6IFVpbnQ4IHtcclxuICAgIHJldHVybiBuZXcgVWludDgoKHRoaXMubnVtIDw8IDEpICYgMHhmZik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogVWludDgge1xyXG4gICAgcmV0dXJuIG5ldyBVaW50OCh0aGlzLm51bSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBVaW50OCBmcm9tICcuLi9tb2RlbHMvVWludDgnO1xuaW1wb3J0IFVpbnQxNiBmcm9tICcuLi9tb2RlbHMvVWludDE2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBzdGF0aWMgY29uY2F0VWludCA9IChtb3N0OiBVaW50OCwgbGVhc3Q6IFVpbnQ4KTogVWludDE2ID0+XG4gICAgbmV3IFVpbnQxNigobW9zdC52YWwoKSA8PCA4KSB8IGxlYXN0LnZhbCgpKTtcblxuICBzdGF0aWMgY29uY2F0ID0gKG1vc3Q6IG51bWJlciwgbGVhc3Q6IG51bWJlcik6IG51bWJlciA9PiAobW9zdCA8PCA4KSB8IGxlYXN0O1xuXG4gIHN0YXRpYyBzcGxpdCA9IChuOiBVaW50MTYpID0+IHtcbiAgICBjb25zdCBoaWdoID0gbi52YWwoKSA+PiA4O1xuICAgIGNvbnN0IGxvdyA9IG4udmFsKCkgJiAweGZmO1xuICAgIHJldHVybiB7XG4gICAgICBoaWdoOiBuZXcgVWludDgoaGlnaCksXG4gICAgICBsb3c6IG5ldyBVaW50OChsb3cpLFxuICAgIH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBQYWludGVyIH0gZnJvbSAnLi9wYWludGVyL3BhaW50ZXInO1xuaW1wb3J0IHsgRW11bGF0b3IgfSBmcm9tICcuL2VtdWxhdG9yL2VtdWxhdG9yJztcbmltcG9ydCB7IE1lZGlhdG9yIH0gZnJvbSAnLi9tZWRpYXRvci9NZWRpYXRvcic7XG5cbmNsYXNzIE1haW4ge1xuICBlbXVsYXRvcjogRW11bGF0b3I7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcbiAgICB0aGlzLmVtdWxhdG9yID0gbmV3IEVtdWxhdG9yKHsgbWVkaWF0b3IsIHdlYjogdHJ1ZSwgZGVidWc6IHRydWUgfSk7XG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyKG1lZGlhdG9yKTtcblxuICAgIG1lZGlhdG9yLnJlZ2lzdGVyT3V0KHRoaXMuZW11bGF0b3IpO1xuICAgIG1lZGlhdG9yLnJlZ2lzdGVySW4ocGFpbnRlcik7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVtdWxhdG9yLmluaXQoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLnN0YXJ0KCk7XG4iLCJpbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JQ29sbGVhZ3VlJztcclxuaW1wb3J0IHsgSU1lZGlhdG9yIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvSU1lZGlhdG9yJztcclxuaW1wb3J0IEJpdCBmcm9tICcuLi9lbXVsYXRvci9tb2RlbHMvQml0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYXRvciBpbXBsZW1lbnRzIElNZWRpYXRvciB7XHJcbiAgaW46IElDb2xsZWFndWUgfCB1bmRlZmluZWQ7XHJcbiAgb3V0OiBJQ29sbGVhZ3VlIHwgdW5kZWZpbmVkO1xyXG5cclxuICByZWdpc3RlckluKGNvbGxlYWd1ZTogSUNvbGxlYWd1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbiA9IGNvbGxlYWd1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT3V0KGNvbGxlYWd1ZTogSUNvbGxlYWd1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vdXQgPSBjb2xsZWFndWU7XHJcbiAgfVxyXG5cclxuICBzZW5kT3V0KHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgaW5gIGlzIG5vdCBpbml0aWFsaXplZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbi5yZWNlaXZlKHBvcnQsIHZhbCwgYml0KTtcclxuICB9XHJcblxyXG4gIHNlbmRJbihwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBiaXQ6IEJpdCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm91dCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BvdXRgIGlzIG5vdCBpbml0aWFsaXplZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vdXQucmVjZWl2ZShwb3J0LCB2YWwsIGJpdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY3JlZW4oYWRkcjogbnVtYmVyLCB2YWw6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmluKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGluYCBpcyBub3QgaW5pdGlhbGl6ZWQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW4udXBkYXRlU2NyZWVuKGFkZHIsIHZhbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNZWRpYXRvciB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSU1lZGlhdG9yJztcclxuaW1wb3J0IHsgSUNvbGxlYWd1ZSB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSUNvbGxlYWd1ZSc7XHJcbmltcG9ydCBCaXQgZnJvbSAnLi4vZW11bGF0b3IvbW9kZWxzL0JpdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlciBpbXBsZW1lbnRzIElDb2xsZWFndWUge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XHJcbiAgcHVibGljIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgLy8gcHJpdmF0ZSBtZW1vcnk6IEJ5dGVBcnJheSA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcclxuICAvLyBwcml2YXRlIF9wYWludGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgLy8gcHJpdmF0ZSBfeDogbnVtYmVyID0gMHgwO1xyXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcclxuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyh0aGlzLnNlbmQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmV2ZW50cy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBzZW5kKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnNlbmRJbihwb3J0LCBwb3MsIGJpdCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XHJcbiAgICB0aGlzLndyaXRlKHBvcnQsIHBvcywgYml0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBiYXNlID0gYWRkciAtIDB4MjQwMDtcclxuICAgIGNvbnN0IHkgPSB+KCgoYmFzZSAmIDB4MWYpICogOCkgJiAweGZmKSAmIDB4ZmY7XHJcbiAgICBjb25zdCB4ID0gYmFzZSA+PiA1O1xyXG5cclxuICAgIGNvbnN0IGJpbiA9IHZhbC50b1N0cmluZygyKS5wYWRTdGFydCg4LCAnMCcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFpbnQoeCwgeSArIGksIE51bWJlcihiaW4uY2hhckF0KGkpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhaW50KHg6IG51bWJlciwgeTogbnVtYmVyLCBvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIC8vIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBvbiA/ICd3aGl0ZScgOiAnYmxhY2snO1xyXG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCAqIDMsIHkgKiAzLCAzLCAzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vICAgcmVjZWl2ZShwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBpc1JhbTogYm9vbGVhbik6IHZvaWQge1xyXG4gIC8vICAgaWYgKHBvcnQgPj0gMHgyNDAwKSB7XHJcbiAgLy8gICAgIC8vIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChuZXcgVWludDE2KHBvcnQpKTtcclxuICAvLyAgICAgLy8gdGhpcy5wYWludChoaWdoLnZhbCgpLCBsb3cudmFsKCksIHZhbCk7XHJcbiAgLy8gICAgIGxldCBiYXNlID0gcG9ydCAtIDB4MjQwMDtcclxuICAvLyAgICAgbGV0IHkgPSB+KCgoYmFzZSAmIDB4MWYpICogOCkgJiAweGZmKSAmIDB4ZmY7XHJcbiAgLy8gICAgIGxldCB4ID0gYmFzZSA+PiA1O1xyXG5cclxuICAvLyAgICAgY29uc3Qgc3ByaXRlID0gdmFsLnRvU3RyaW5nKDIpLnBhZEVuZCg4LCAnMCcpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhzcHJpdGUpO1xyXG5cclxuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpdGUubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgICB0aGlzLnBhaW50KHgsIHkgKyBpLCB0b0JpdChzcHJpdGUuY2hhckF0KGkpKSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHRoaXMud3JpdGUocG9ydCwgdmFsKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgcGFpbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9uOiBCaXQpIHtcclxuICAvLyAgIGlmICh0aGlzLmNvbnRleHQpIHtcclxuICAvLyAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCAxLCAxKTtcclxuICAvLyAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IG9uID8gJ3doaXRlJyA6ICdibGFjayc7XHJcbiAgLy8gICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcclxuICAvLyAgIH1cclxuICAvL31cclxuXHJcbiAgLy8gcHJpdmF0ZSBvbktleVByZXNzKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIHZhbDogQml0KSB7XHJcbiAgLy8gICB0aGlzLnNlbmQocG9ydCwgcG9zLCB2YWwpO1xyXG4gIC8vIH1cclxuXHJcbiAgcHJpdmF0ZSB3cml0ZShwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ6IEJpdCkge1xyXG4gICAgc3dpdGNoIChwb3J0KSB7XHJcbiAgICAgIGNhc2UgMjogLy8gc2hpZnQgcmVnaXN0ZXIgcmVzdWx0IG9mZnNldCAoYml0cyAwLDEsMilcclxuICAgICAgICBjb25zb2xlLmxvZygneWVwJyk7XHJcbiAgICAgICAgLy8gdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ocG9ydCwgdmFsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOiAvL3NvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCBwb3MpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IC8vIGZpbGwgc2hpZnQgcmVnaXN0ZXJcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCBwb3MpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IC8vIHNvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCBwb3MpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDY6IC8vIGRlYnVnIHBvcnRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCBwb3MpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24gPSAocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFVuaW1wbGVtZW50ZWQgY29kZTogcG9ydCAke3BvcnR9IHdpdGggdmFsdWUgJHt2YWx9YCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogYWRkIGlucHV0XHJcbmNsYXNzIEV2ZW50cyB7XHJcbiAgcHJpdmF0ZSBvbktleVByZXNzKHBvcnQ6IG51bWJlciwgYml0OiBudW1iZXIsIHZhbDogQml0KSB7fVxyXG5cclxuICBjb25zdHJ1Y3RvcihvbktleVByZXNzOiBhbnkpIHtcclxuICAgIHRoaXMub25LZXlQcmVzcyA9IG9uS2V5UHJlc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHdpbmRvdy5vbmtleWRvd24gPSBlID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcclxuXHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAxNjoge1xyXG4gICAgICAgICAgLy8gc2hpZnRcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygxLCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=