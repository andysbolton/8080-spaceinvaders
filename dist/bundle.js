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
        var mediator = _a.mediator, debug = _a.debug;
        this.instructionNumber = 0;
        this.lastInterrupt = 1;
        this.cycles = 0;
        this.byteAt = function (index) {
            var state = _this.state;
            return state.memory[state.pc.val() + index];
        };
        this.myDate = new Date();
        this.lastSecond = 0;
        this.countie = 0;
        this.lastTimer = 0;
        this.nextInterrupt = 16000;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var state, now, sinceLast, cyclesToCatchUp, cycles, opcode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        state = this.state;
                        _a.label = 1;
                    case 1:
                        if (!(state.pc.val() > -1)) return [3 /*break*/, 4];
                        if (!(this.instructionNumber % 1000 === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.cycles += this.readNext();
                        now = new Date().getTime();
                        if (this.lastTimer === 0) {
                            this.lastTimer = now;
                            this.nextInterrupt = this.lastTimer + 16000;
                            this.lastInterrupt = 2;
                        }
                        if (this.state.intEnable.val() === 1 && now > this.nextInterrupt) {
                            if (this.lastInterrupt === 2) {
                                this.generateInterrupt(1);
                                this.lastInterrupt = 1;
                            }
                            else {
                                this.generateInterrupt(2);
                                this.lastInterrupt = 2;
                            }
                            this.nextInterrupt = now + 8000;
                        }
                        sinceLast = now - this.lastTimer;
                        cyclesToCatchUp = 2 * sinceLast;
                        cycles = 0;
                        while (cyclesToCatchUp > cycles) {
                            opcode = state.memory[state.pc.val()].val();
                            if (opcode === 0xdb) {
                                state.a = this.in[this.byteAt(1).val()];
                                state.pc.incr(2);
                                cycles += 3;
                            }
                            else if (opcode == 0xd3) {
                                this.send(this.byteAt(1).val(), state.a.val()); // TODO: Is this always supposed to be 1?
                                state.pc.incr(2);
                                cycles += 3;
                            }
                            else {
                                cycles += this.readNext();
                            }
                        }
                        // if (this.cycles >= cyclesUntilInterrupt) {
                        //   // this.countie++;
                        //   if (this.state.intEnable.val() === 1) {
                        //     if (this.lastInterrupt === 2) {
                        //       this.generateInterrupt(1);
                        //       this.lastInterrupt = 1;
                        //     } else {
                        //       this.generateInterrupt(2);
                        //       this.lastInterrupt = 2;
                        //     }
                        //     this.state.intEnable = new Uint8(0);
                        //   }
                        //   this.cycles -= cyclesUntilInterrupt;
                        // }
                        this.lastTimer = now;
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
        this.test = new Array();
        this.readNext = function () {
            var state = _this.state;
            var opcode = state.memory[state.pc.val()].val();
            // if (
            //   this.debug &&
            //   this.instructionNumber >= 42350 - 2
            //   // && this.instructionNumber % 25 === 0
            // ) {
            // this.log(state.pc.val(), opcode);
            // }
            // if (this.instructionNumber === 539) {
            //   debugger;
            // }
            if (_this.instructionNumber === 2365219 - 10) {
                debugger;
            }
            if (_this.instructionNumber >= 2313474) {
                _this.test.push(_this.instructionNumber + " " + state.de + " " + state.a);
            }
            switch (opcode) {
                case 0x00: {
                    // NOP
                    state.pc.incr(1);
                    break;
                }
                case 0x01:
                    // LXI B, D16
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                case 0x02: {
                    // STAX B
                    _this.updateRam(state.bc.val(), state.a);
                    state.pc.incr(1);
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
                    // INR B
                    state.b.incr(1);
                    _this.setFlags(state.b);
                    state.pc.incr(1);
                    break;
                }
                case 0x05: {
                    // DCR B
                    var val = state.b.sub(1);
                    _this.setFlags(val, true);
                    state.b = val;
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
                    // const hob = state.a.highOrderBit;
                    // this.setCarryBit(hob);
                    // let val = state.a.rotateLeft().val();
                    // if (hob === 1) {
                    //   // set lsb to 1
                    //   val |= 1;
                    // } else {
                    //   // clear lsb
                    //   val &= ~1;
                    // }
                    // state.a = new Uint8(val);
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = ((state.a.val() & 0x80) >> 7) | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](a);
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
                    // DCX B
                    state.bc = state.bc.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x0c: {
                    // INR C
                    state.c.incr(1);
                    _this.setFlags(state.c);
                    state.pc.incr(1);
                    break;
                }
                case 0x0d: {
                    // DCR C
                    var val = state.c.sub(1);
                    _this.setFlags(val, true);
                    state.c = val;
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
                    var lob = state.a.lowOrderBit;
                    _this.setCarryBit(lob);
                    var rotated = (lob << 7) | (state.a.val() >> 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](rotated);
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
                    // STAX D
                    _this.updateRam(state.de.val(), state.a);
                    state.pc.incr(1);
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
                    // DCR D
                    var val = state.d.sub(1);
                    _this.setFlags(val, true);
                    state.d = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x16: {
                    // MVI D, D8
                    state.d = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x17: {
                    // RAL
                    // const carry = state.cc.cy;
                    // let rotated = this.state.a.rotateLeft().val();
                    // if (carry === 1) {
                    //   // set msb to 1
                    //   rotated |= 1 << 7;
                    // } else {
                    //   // clear msb
                    //   rotated &= ~(1 << 7);
                    // }
                    // state.a = new Uint8(rotated);
                    var carry = state.cc.cy;
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = carry | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](a);
                    state.pc.incr(1);
                    break;
                }
                case 0x18: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x19: {
                    // DAD D
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
                    // DCX D
                    state.de = state.de.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x1c: {
                    // INR E
                    state.e.incr(1);
                    _this.setFlags(state.e);
                    state.pc.incr(1);
                    break;
                }
                case 0x1d: {
                    // DCR E
                    var val = state.e.sub(1);
                    _this.setFlags(val, true);
                    state.e = val;
                    state.pc.incr(1);
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
                    // const lob = this.state.a.lowOrderBit;
                    // this.setCarryBit(lob);
                    // let val = this.state.a.val();
                    // if (lob === 1) {
                    //   // set msb to 1
                    //   val |= 1 << 7;
                    // } else {
                    //   // clear msb
                    //   val &= ~(1 << 7);
                    // }
                    // state.a = new Uint8(val);
                    var carry = state.cc.cy;
                    state.cc.cy = state.a.lowOrderBit;
                    var a = (carry << 7) | (state.a.val() >> 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](a);
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
                    //	DCR H
                    var val = state.h.sub(1);
                    _this.setFlags(val, true);
                    state.h = val;
                    state.pc.incr(1);
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
                    state.l = state.memory[location_2];
                    state.h = state.memory[location_2 + 1];
                    state.pc.incr(3);
                    break;
                }
                case 0x2b: {
                    // DCX H
                    state.hl = state.hl.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x2c: {
                    // INR L
                    state.l.incr(1);
                    _this.setFlags(state.l);
                    state.pc.incr(1);
                    break;
                }
                case 0x2d: {
                    // DCR L
                    var val = state.l.sub(1);
                    _this.setFlags(val, true);
                    state.l = val;
                    state.pc.incr(1);
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
                    // INX SP
                    var val = state.sp.add(1);
                    state.sp = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x34: {
                    // INR M
                    var val = state.memory[state.hl.val()].add(1);
                    _this.updateRam(state.hl.val(), val);
                    _this.setFlags(val, true);
                    state.pc.incr(1);
                    break;
                }
                case 0x35: {
                    // DCR M
                    var val = state.memory[state.hl.val()].sub(1);
                    _this.updateRam(state.hl.val(), val);
                    _this.setFlags(val, true);
                    state.pc.incr(1);
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
                    // DCX SP
                    state.sp = state.sp.sub(1);
                    state.pc.incr(1);
                    break;
                }
                case 0x3c: {
                    // INR A
                    state.a.incr(1);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0x3d: {
                    // DCR A
                    var val = state.a.sub(1);
                    _this.setFlags(val, true);
                    state.a = val;
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
                    // MOV B, H
                    _this.mov('b', 'h');
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
                    // MOV B, A
                    _this.mov('b', 'a');
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
                    // 	MOV C, D
                    _this.mov('c', 'd');
                    break;
                }
                case 0x4b: {
                    // 	MOV C, E
                    _this.mov('c', 'e');
                    break;
                }
                case 0x4c: {
                    // MOV C, H
                    _this.mov('c', 'h');
                    break;
                }
                case 0x4d: {
                    // MOV C, L
                    _this.mov('c', 'l');
                    break;
                }
                case 0x4e: {
                    // MOV C, M
                    _this.movMem('c', 'm');
                    break;
                }
                case 0x4f: {
                    // MOV C, A
                    _this.mov('c', 'a');
                    break;
                }
                case 0x50: {
                    // MOV D, B
                    _this.mov('d', 'b');
                    break;
                }
                case 0x51: {
                    // MOV D, C
                    _this.mov('d', 'c');
                    break;
                }
                case 0x52: {
                    //	MOV D, D
                    _this.mov('d', 'd');
                    break;
                }
                case 0x53: {
                    // MOV D, E
                    _this.mov('d', 'e');
                    break;
                }
                case 0x54: {
                    // MOV D, H
                    _this.mov('d', 'h');
                    break;
                }
                case 0x55: {
                    // MOV D, L
                    _this.mov('d', 'l');
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
                    // MOV E, B
                    _this.mov('e', 'b');
                    break;
                }
                case 0x59: {
                    // MOV E, C
                    _this.mov('e', 'c');
                    break;
                }
                case 0x5a: {
                    // MOV E, D
                    _this.mov('e', 'd');
                    break;
                }
                case 0x5b: {
                    // MOV E, E
                    _this.mov('e', 'e');
                    break;
                }
                case 0x5c: {
                    // MOV E, H
                    _this.mov('e', 'h');
                    break;
                }
                case 0x5d: {
                    // MOV E, L
                    _this.mov('e', 'l');
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
                    // MOV H, B
                    _this.mov('h', 'b');
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
                    // MOV H, E
                    _this.mov('h', 'e');
                    break;
                }
                case 0x64: {
                    // MOV H, H
                    _this.mov('h', 'h');
                    break;
                }
                case 0x65: {
                    // MOV H, L
                    _this.mov('h', 'l');
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
                    // MOV L, B
                    _this.mov('l', 'b');
                    break;
                }
                case 0x69: {
                    // MOV L, C
                    _this.mov('l', 'c');
                    break;
                }
                case 0x6a: {
                    // MOV L, D
                    _this.mov('l', 'd');
                    break;
                }
                case 0x6b: {
                    // MOV L, E
                    _this.mov('l', 'e');
                    break;
                }
                case 0x6c: {
                    // MOV L, H
                    _this.mov('l', 'h');
                    break;
                }
                case 0x6d: {
                    // MOV L, L
                    _this.mov('l', 'l');
                    break;
                }
                case 0x6e: {
                    // MOV L, M
                    _this.movMem('l', 'm');
                    break;
                }
                case 0x6f: {
                    // MOV L, A
                    _this.mov('l', 'a');
                    break;
                }
                case 0x70: {
                    // MOV M, B
                    _this.movMem('m', 'b');
                    break;
                }
                case 0x71: {
                    // MOV M, C
                    _this.movMem('m', 'c');
                    break;
                }
                case 0x72: {
                    // MOV M, D
                    _this.movMem('m', 'd');
                    break;
                }
                case 0x73: {
                    // MOV M, E
                    _this.movMem('m', 'e');
                    break;
                }
                case 0x74: {
                    // MOV M, H
                    _this.movMem('m', 'h');
                    break;
                }
                case 0x75: {
                    // MOV M, L
                    _this.movMem('m', 'l');
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
                    // ADD E
                    var val = state.a.add(state.e);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x84: {
                    // ADD H
                    var val = state.a.add(state.h);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x85: {
                    // ADD L
                    var val = state.a.add(state.l);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x86: {
                    // ADD M
                    var val = state.a.add(state.memory[state.hl.val()]);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x87: {
                    // ADD A
                    var val = state.a.add(state.a);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x88: {
                    // ADC B
                    var val = state.a.add(state.b).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x89: {
                    // ADC C
                    var val = state.a.add(state.c).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8a: {
                    //	ADC D
                    var val = state.a.add(state.d).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8b: {
                    //	ADC E
                    var val = state.a.add(state.e).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8c: {
                    //	ADC H
                    var val = state.a.add(state.h).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8d: {
                    //	ADC L
                    var val = state.a.add(state.l).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8e: {
                    //	ADC M
                    var val = state.a.add(state.memory[state.hl.val()]).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x8f: {
                    //	ADC A
                    var val = state.a.add(state.a).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x90: {
                    // SUB B
                    var val = state.a.sub(state.b);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x91: {
                    // SUB C
                    var val = state.a.sub(state.c);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x92: {
                    // SUB D
                    var val = state.a.sub(state.d);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x93: {
                    // SUB E
                    var val = state.a.sub(state.e);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x94: {
                    // SUB H
                    var val = state.a.sub(state.h);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x95: {
                    // SUB L
                    var val = state.a.sub(state.l);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x96: {
                    // SUB M
                    var val = state.a.sub(state.memory[state.hl.val()]);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x97: {
                    // SUB A
                    var val = state.a.sub(state.a);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x98: {
                    // SBB B
                    var val = state.a.sub(state.b.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x99: {
                    // SBB C
                    var val = state.a.sub(state.c.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9a: {
                    // SBB D
                    var val = state.a.sub(state.d.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9b: {
                    // SBB E
                    var val = state.a.sub(state.e.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9c: {
                    // SBB H
                    var val = state.a.sub(state.h.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9d: {
                    // SBB L
                    var val = state.a.sub(state.l.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9e: {
                    // SBB M
                    var val = state.a.sub(state.memory[state.hl.val()].add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0x9f: {
                    // SBB A
                    var val = state.a.sub(state.a.add(state.cc.cy));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(1);
                    break;
                }
                case 0xa0: {
                    // ANA B
                    var and = state.a.val() & state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa1: {
                    // ANA C
                    var and = state.a.val() & state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa2: {
                    // ANA D
                    var and = state.a.val() & state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa3: {
                    // ANA E
                    var and = state.a.val() & state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa4: {
                    // ANA H
                    var and = state.a.val() & state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa5: {
                    // ANA L
                    var and = state.a.val() & state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa6: {
                    // ANA M
                    var and = state.a.val() & state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
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
                    // XRA B
                    var xor = state.a.val() ^ state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa9: {
                    // XRA C
                    var xor = state.a.val() ^ state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaa: {
                    // XRA D
                    var xor = state.a.val() ^ state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xab: {
                    // XRA E
                    var xor = state.a.val() ^ state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xac: {
                    // XRA H
                    var xor = state.a.val() ^ state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xad: {
                    // XRA L
                    var xor = state.a.val() ^ state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xae: {
                    // XRA M
                    var xor = state.a.val() ^ state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaf: {
                    // XRA A
                    var xor = state.a.val() ^ state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb0: {
                    // ORA B
                    var val = state.a.val() | state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb1: {
                    // ORA C
                    var val = state.a.val() | state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb2: {
                    // ORA D
                    var val = state.a.val() | state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb3: {
                    // ORA E
                    var val = state.a.val() | state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb4: {
                    // ORA H
                    var val = state.a.val() | state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb5: {
                    // ORA H
                    var val = state.a.val() | state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb6: {
                    // ORA M
                    var val = state.a.val() | state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb7: {
                    // ORA A
                    var val = state.a.val() | state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb8: {
                    // CMP B
                    var comp = state.a.sub(state.b);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xb9: {
                    // CMP C
                    var comp = state.a.sub(state.c);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xba: {
                    // CMP D
                    var comp = state.a.sub(state.d);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbb: {
                    // CMP E
                    var comp = state.a.sub(state.e);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbc: {
                    // CMP H
                    var comp = state.a.sub(state.h);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbd: {
                    // CMP L
                    var comp = state.a.sub(state.l);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbe: {
                    // CMP M
                    var comp = state.a.sub(state.memory[state.hl.val()]);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xbf: {
                    // CMP A
                    var comp = state.a.sub(state.a);
                    _this.setFlags(comp, true);
                    state.pc.incr(1);
                    break;
                }
                case 0xc0: {
                    // RNZ
                    if (state.cc.z === 0) {
                        _this.ret();
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
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xc9: {
                    // RET
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
                    // if (state.c.val() == 9) {
                    //   const offset = (state.d.val() << 8) | state.e.val();
                    //   const str = state.memory[offset + 3]; //skip the prefix bytes
                    //   console.log(str);
                    // } else if (state.c.val() == 2) {
                    //   //saw this in the inspected code, never saw it called
                    //   console.log('print char routine called\n');
                    // }
                    var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                    var _c = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _c.high, low = _c.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xce: {
                    // ACI D8
                    var val = state.a.add(_this.byteAt(1)).add(state.cc.cy);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xcf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd0: {
                    // RNC
                    if (state.cc.cy === 0) {
                        _this.ret();
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
                    if (_this.byteAt(1).val() === 2) {
                        console.log(_this.test.join('\n'));
                        console.log(_this.test.length);
                        _this.test = new Array();
                    }
                    _this.send(_this.byteAt(1).val(), state.a.val()); // TODO: Is this always supposed to be 1?
                    state.pc.incr(2);
                    break;
                }
                case 0xd4: {
                    // CNC addr
                    if (state.cc.cy === 0) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _d = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _d.high, low = _d.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
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
                    // SUI D8
                    var val = state.a.sub(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xd7: {
                    // RST 2
                    var _e = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(state.pc.add(2)), high = _e.high, low = _e.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](0x10);
                    break;
                }
                case 0xd8: {
                    // RC
                    if (state.cc.cy === 1) {
                        _this.ret();
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
                    // CC addr
                    if (state.cc.cy === 1) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _f = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _f.high, low = _f.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xdd: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xde: {
                    // SBI D8
                    var byteWithCarry = _this.byteAt(1).add(state.cc.cy);
                    var val = state.a.sub(byteWithCarry);
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xdf: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xe0: {
                    // RPO
                    if (state.cc.p === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
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
                    // JPO addr
                    if (state.cc.p === 0) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xe3: {
                    // XTHL
                    var l = state.l.clone();
                    var h = state.h.clone();
                    state.l = state.memory[state.sp.val()];
                    state.h = state.memory[state.sp.val() + 1];
                    state.memory[state.sp.val()] = l;
                    state.memory[state.sp.val() + 1] = h;
                    state.pc.incr(1);
                    break;
                }
                case 0xe4: {
                    // CPO addr
                    if (state.cc.p === 0) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _g = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _g.high, low = _g.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xe5: {
                    // PUSH H
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
                    // RPE
                    if (state.cc.p === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xe9: {
                    // PCHL
                    state.pc = state.hl.clone();
                    break;
                }
                case 0xea: {
                    // JPE addr
                    if (state.cc.p === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                        state.pc = addr;
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xeb: {
                    // XCHG
                    var h = state.h.clone();
                    var l = state.l.clone();
                    state.h = state.d.clone();
                    state.l = state.e.clone();
                    state.d = h;
                    state.e = l;
                    state.pc.incr(1);
                    break;
                }
                case 0xec: {
                    // CPE addr
                    if (state.cc.p === 1) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _h = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _h.high, low = _h.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xed: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xee: {
                    // XRI D8
                    var val = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](state.a.val() ^ _this.byteAt(1).val());
                    _this.setCarryBit(0);
                    _this.setFlags(val);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xef: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf0: {
                    // RP
                    if (state.cc.s === 0) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xf1: {
                    // POP PSW
                    var low = state.memory[state.sp.val()].val();
                    var high = state.memory[state.sp.incr(1)];
                    state.a = high;
                    state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((low >> 7) & 1);
                    state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((low >> 6) & 1);
                    state.cc.ac = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((low >> 4) & 1);
                    state.cc.p = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((low >> 2) & 1);
                    state.cc.cy = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(low & 1);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xf2: {
                    // JP addr
                    if (state.cc.s === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xf3: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf4: {
                    // CP addr
                    if (state.cc.s === 0) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _j = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _j.high, low = _j.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
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
                    var val = state.a.val() | _this.byteAt(1).val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(2);
                    break;
                }
                case 0xf7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xf8: {
                    // RM
                    if (state.cc.s === 1) {
                        _this.ret();
                    }
                    else {
                        state.pc.incr(1);
                    }
                    break;
                }
                case 0xf9: {
                    // SPHL
                    state.sp = state.hl.clone();
                    state.pc.incr(1);
                    break;
                }
                case 0xfa: {
                    // JM addr
                    if (state.cc.s === 1) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xfb: {
                    // EI
                    state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](1);
                    state.pc.incr(1);
                    break;
                }
                case 0xfc: {
                    // CM addr
                    if (state.cc.s === 1) {
                        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](3));
                        var _k = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(val), high = _k.high, low = _k.low;
                        _this.updateRam(state.sp.decr(1), high);
                        _this.updateRam(state.sp.decr(1), low);
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
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
                    _this.unimplementedInstruction(opcode);
                    var _l = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(state.pc.add(2)), high = _l.high, low = _l.low;
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
            state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])((n.val() & 0x80) === 0x80);
            state.cc.ac = n.auxCarry;
            state.cc.p = _this.parity(n.val());
            if (carry) {
                _this.setCarryBit(n.carry);
            }
        };
        this.setCarryBit = function (n) { return (_this.state.cc.cy = n); };
        this.parity = function (n) {
            var size = 8;
            var parity = 0;
            var calc = n;
            for (var i = 0; i < size; i++) {
                if (calc & 0x1) {
                    parity++;
                }
                calc = calc >> 1;
            }
            return Object(_models_Bit__WEBPACK_IMPORTED_MODULE_3__["toBit"])(!(parity % 2));
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
        this.ret = function () {
            var state = _this.state;
            var low = state.memory[state.sp.val()];
            var high = state.memory[state.sp.incr(1)];
            state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].concatUint(high, low);
            state.sp.incr(1);
        };
        this.unimplementedInstruction = function (opcode) {
            var state = _this.state;
            throw new Error("Unimplemented code at instruction " + _this.instructionNumber + " at for opcode " + opcode.toString(16) + " at offset " + state.pc.val());
        };
        this.state = new _models_CpuState__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.state.memory.alloc(0x10000);
        // this.state.pc = new Uint16(0x100);
        var useDebug = !!debug;
        this.mediator = mediator;
        this.debug = useDebug;
        this.in = _models_ByteArray__WEBPACK_IMPORTED_MODULE_5__["default"].create();
        this.in.alloc(8);
    }
    Emulator.prototype.send = function (port, pos, bit) {
        this.mediator.sendOut(port, pos, bit);
    };
    Emulator.prototype.receive = function (port, val, bit) {
        var newVal = val;
        if (bit !== undefined) {
            newVal = this.modifyBit(this.in[port].val(), val, bit);
        }
        this.in.splice(port, 1, new _models_Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](newVal));
    };
    Emulator.prototype.modifyBit = function (number, pos, b) {
        var mask = 1 << pos;
        return (number & ~mask) | ((b << pos) & mask);
    };
    Emulator.prototype.updateScreen = function (addr, val) {
        this.mediator.updateScreen(addr, val);
    };
    Emulator.prototype.init = function () {
        // const ram = new Uint8Array(0x2000);
        var _this = this;
        fetch('invaders.rom').then(function (res) {
            res.arrayBuffer().then(function (buf) {
                var view = new Uint8Array(buf);
                var romBytes = __spread(view).map(Number);
                // const ramBytes = [...ram].map(Number);
                _this.state.memory.set(__spread(romBytes)); //  ...ramBytes
                //Fix the first instruction to be JMP 0x100
                // this.state.memory[0] = new Uint8(0xc3);
                // this.state.memory[1] = new Uint8(0);
                // this.state.memory[2] = new Uint8(0x01);
                // // Fix the stack pointer from 0x6ad to 0x7ad
                // // this 0x06 byte 112 in the code, which is
                // // byte 112 + 0x100 = 368 in memory
                // this.state.memory[368] = new Uint8(0x7);
                // //Skip DAA test
                // this.state.memory[0x59c] = new Uint8(0xc3); //JMP
                // this.state.memory[0x59d] = new Uint8(0xc2);
                // this.state.memory[0x59e] = new Uint8(0x05);
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
    ByteArray.prototype.set = function (n, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        n.forEach(function (val, index) {
            _this.splice(offset + index, 1, new _Uint8__WEBPACK_IMPORTED_MODULE_0__["default"](val));
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
/* harmony import */ var _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emulator/models/Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _emulator_models_Uint8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emulator/models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _emulator_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emulator/utils/utils */ "./src/emulator/utils/utils.ts");



var Painter = /** @class */ (function () {
    function Painter(mediator) {
        var _this = this;
        this.shiftRegister = new _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.shiftOffset = 0;
        this.write = function (port, val) {
            if (port === 6) {
                return;
            }
            switch (port) {
                case 2: // shift register result offset (bits 0,1,2)
                    // if (val === 0) {
                    //   offset = 0;
                    // } else if (val === 1) {
                    //   offset = 2;
                    // } else if (val === 2) {
                    //   offset = 7;
                    // }
                    // if (offset !== undefined) {
                    _this.shiftOffset = val & 0x7;
                    // }
                    break;
                case 3: //sound related
                    _this.unimplementedInstruction(port, val);
                    break;
                case 4: // fill shift register
                    var _a = _emulator_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].split(_this.shiftRegister), high = _a.high, low = _a.low;
                    _this.shiftRegister = new _emulator_models_Uint16__WEBPACK_IMPORTED_MODULE_0__["default"]((val << 8) | high.val());
                    var shifted = new _emulator_models_Uint8__WEBPACK_IMPORTED_MODULE_1__["default"]((_this.shiftRegister.val() << _this.shiftOffset) >> 8);
                    _this.send(3, shifted.val());
                    break;
                case 5: // sound related
                    _this.unimplementedInstruction(port, val);
                    break;
                case 6: // debug port
                    _this.unimplementedInstruction(port, val);
                    break;
                default:
                    break;
            }
        };
        this.unimplementedInstruction = function (port, val) {
            console.log("Unimplemented code: port " + port + " with value " + val);
        };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext && this.canvas.getContext('2d');
        this.mediator = mediator;
        this.events = new Events(this.send.bind(this));
        this.events.init();
    }
    Painter.prototype.send = function (port, val, bit) {
        this.mediator.sendIn(port, val, bit);
    };
    Painter.prototype.receive = function (port, val, bit) {
        this.write(port, val);
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
            console.log('pressed ', key);
            switch (key) {
                case 16: {
                    // shift (credit)
                    _this.onKeyPress(1, 0, 1);
                    break;
                }
                case 37: {
                    // key left (left)
                    _this.onKeyPress(0, 6, 1);
                    break;
                }
                case 39: {
                    // key right (right)
                    _this.onKeyPress(0, 5, 1);
                    break;
                }
                case 32: {
                    // space (fire)
                    _this.onKeyPress(0, 4, 1);
                    break;
                }
                case 49: {
                    // 1 (first player start)
                    _this.onKeyPress(1, 2, 1);
                    break;
                }
                default:
                    break;
            }
        };
    };
    return Events;
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL2VtdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQml0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQnl0ZUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQ29uZGl0aW9uQ29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9DcHVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvbW9kZWxzL1VpbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50MTYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50OC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tZWRpYXRvci9NZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFpbnRlci9wYWludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRW1DO0FBRU07QUFDUDtBQUNRO0FBRUw7QUFDTTtBQUUzQyw0QkFBNEI7QUFFNUIsa0JBQWtCO0FBQ2xCLElBQU0sVUFBVSxHQUFHO0lBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFFckQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUU5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRTlDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM1RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFB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O29CQUNQLGtCQUFrQjtvQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNELEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ1Asb0JBQW9CO29CQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCxlQUFlO29CQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNQLHlCQUF5QjtvQkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEBmbG93XHJcbmltcG9ydCB7IElNZWRpYXRvciB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSU1lZGlhdG9yJztcclxuaW1wb3J0IHsgSUNvbGxlYWd1ZSB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSUNvbGxlYWd1ZSc7XHJcbmltcG9ydCBVaW50OCBmcm9tICcuL21vZGVscy9VaW50OCc7XHJcbmltcG9ydCBVaW50IGZyb20gJy4vbW9kZWxzL1VpbnQnO1xyXG5pbXBvcnQgQ3B1U3RhdGUgZnJvbSAnLi9tb2RlbHMvQ3B1U3RhdGUnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL21vZGVscy9CaXQnO1xyXG5pbXBvcnQgeyBiaXQgfSBmcm9tICcuL3V0aWxzL2JpdCc7XHJcbmltcG9ydCBVaW50MTYgZnJvbSAnLi9tb2RlbHMvVWludDE2JztcclxuaW1wb3J0IEJ5dGVBcnJheSBmcm9tICcuL21vZGVscy9CeXRlQXJyYXknO1xyXG5cclxuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuLy8gcHJldHRpZXItaWdub3JlXHJcbmNvbnN0IGN5Y2xlczgwODAgPSBbXHJcblx0NCwgMTAsIDcsIDUsIDUsIDUsIDcsIDQsIDQsIDEwLCA3LCA1LCA1LCA1LCA3LCA0LCAvLzB4MDAuLjB4MGZcclxuXHQ0LCAxMCwgNywgNSwgNSwgNSwgNywgNCwgNCwgMTAsIDcsIDUsIDUsIDUsIDcsIDQsIC8vMHgxMC4uMHgxZlxyXG5cdDQsIDEwLCAxNiwgNSwgNSwgNSwgNywgNCwgNCwgMTAsIDE2LCA1LCA1LCA1LCA3LCA0LCAvL2V0Y1xyXG5cdDQsIDEwLCAxMywgNSwgMTAsIDEwLCAxMCwgNCwgNCwgMTAsIDEzLCA1LCA1LCA1LCA3LCA0LFxyXG5cclxuXHQ1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCAvLzB4NDAuLjB4NGZcclxuXHQ1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA3LCA1LFxyXG5cdDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsIDUsIDUsIDUsIDUsIDUsIDUsIDcsIDUsXHJcblx0NywgNywgNywgNywgNywgNywgNywgNywgNSwgNSwgNSwgNSwgNSwgNSwgNywgNSxcclxuXHJcblx0NCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgLy8weDgwLi44eDRmXHJcblx0NCwgNCwgNCwgNCwgNCwgNCwgNywgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNywgNCxcclxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA3LCA0LFxyXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDcsIDQsXHJcblxyXG5cdDExLCAxMCwgMTAsIDEwLCAxNywgMTEsIDcsIDExLCAxMSwgMTAsIDEwLCAxMCwgMTAsIDE3LCA3LCAxMSwgLy8weGMwLi4weGNmXHJcblx0MTEsIDEwLCAxMCwgMTAsIDE3LCAxMSwgNywgMTEsIDExLCAxMCwgMTAsIDEwLCAxMCwgMTcsIDcsIDExLFxyXG5cdDExLCAxMCwgMTAsIDE4LCAxNywgMTEsIDcsIDExLCAxMSwgNSwgMTAsIDUsIDE3LCAxNywgNywgMTEsXHJcblx0MTEsIDEwLCAxMCwgNCwgMTcsIDExLCA3LCAxMSwgMTEsIDUsIDEwLCA0LCAxNywgMTcsIDcsIDExLFxyXG5dO1xyXG5cclxuLy8gQ1BVIHJ1bm5pbmcgYXQgMm1oeiwgMiBpbnRlcnJ1cHRzIHJ1bm5pbmcgYXQgNjBtaHpcclxuY29uc3QgY3ljbGVzVW50aWxJbnRlcnJ1cHQ6IG51bWJlciA9IE1hdGguY2VpbCgyMDAwMDAwIC8gNjAgLyAyKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbXVsYXRvciBpbXBsZW1lbnRzIElDb2xsZWFndWUge1xyXG4gIGRlYnVnOiBib29sZWFuO1xyXG4gIHN0YXRlOiBDcHVTdGF0ZTtcclxuICAvLyBvdXQ6IEJ1ZmZlcjtcclxuICBpbjogQnl0ZUFycmF5O1xyXG4gIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgaW5zdHJ1Y3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XHJcbiAgbGFzdEludGVycnVwdDogbnVtYmVyID0gMTtcclxuICBjeWNsZXM6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIG1lZGlhdG9yLFxyXG4gICAgZGVidWcsXHJcbiAgfToge1xyXG4gICAgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICAgIHdlYjogYm9vbGVhbjtcclxuICAgIGRlYnVnPzogYm9vbGVhbjtcclxuICB9KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV3IENwdVN0YXRlKCk7XHJcbiAgICB0aGlzLnN0YXRlLm1lbW9yeS5hbGxvYygweDEwMDAwKTtcclxuICAgIC8vIHRoaXMuc3RhdGUucGMgPSBuZXcgVWludDE2KDB4MTAwKTtcclxuXHJcbiAgICBjb25zdCB1c2VEZWJ1ZyA9ICEhZGVidWc7XHJcblxyXG4gICAgdGhpcy5tZWRpYXRvciA9IG1lZGlhdG9yO1xyXG4gICAgdGhpcy5kZWJ1ZyA9IHVzZURlYnVnO1xyXG5cclxuICAgIHRoaXMuaW4gPSBCeXRlQXJyYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmluLmFsbG9jKDgpO1xyXG4gIH1cclxuXHJcbiAgc2VuZChwb3J0OiBudW1iZXIsIHBvczogbnVtYmVyLCBiaXQ/OiBCaXQpIHtcclxuICAgIHRoaXMubWVkaWF0b3Iuc2VuZE91dChwb3J0LCBwb3MsIGJpdCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdD86IEJpdCkge1xyXG4gICAgbGV0IG5ld1ZhbCA9IHZhbDtcclxuICAgIGlmIChiaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBuZXdWYWwgPSB0aGlzLm1vZGlmeUJpdCh0aGlzLmluW3BvcnRdLnZhbCgpLCB2YWwsIGJpdCBhcyBCaXQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbi5zcGxpY2UocG9ydCwgMSwgbmV3IFVpbnQ4KG5ld1ZhbCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb2RpZnlCaXQobnVtYmVyOiBudW1iZXIsIHBvczogbnVtYmVyLCBiOiBCaXQpIHtcclxuICAgIGNvbnN0IG1hc2sgPSAxIDw8IHBvcztcclxuICAgIHJldHVybiAobnVtYmVyICYgfm1hc2spIHwgKChiIDw8IHBvcykgJiBtYXNrKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnVwZGF0ZVNjcmVlbihhZGRyLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBieXRlQXQgPSAoaW5kZXg6IG51bWJlcik6IFVpbnQ4ID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gc3RhdGUubWVtb3J5W3N0YXRlLnBjLnZhbCgpICsgaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvLyBjb25zdCByYW0gPSBuZXcgVWludDhBcnJheSgweDIwMDApO1xyXG5cclxuICAgIGZldGNoKCdpbnZhZGVycy5yb20nKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHJlcy5hcnJheUJ1ZmZlcigpLnRoZW4oYnVmID0+IHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcclxuICAgICAgICBjb25zdCByb21CeXRlcyA9IFsuLi52aWV3XS5tYXAoTnVtYmVyKTtcclxuICAgICAgICAvLyBjb25zdCByYW1CeXRlcyA9IFsuLi5yYW1dLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWVtb3J5LnNldChbLi4ucm9tQnl0ZXNdKTsgLy8gIC4uLnJhbUJ5dGVzXHJcblxyXG4gICAgICAgIC8vRml4IHRoZSBmaXJzdCBpbnN0cnVjdGlvbiB0byBiZSBKTVAgMHgxMDBcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVswXSA9IG5ldyBVaW50OCgweGMzKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVsxXSA9IG5ldyBVaW50OCgwKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVsyXSA9IG5ldyBVaW50OCgweDAxKTtcclxuXHJcbiAgICAgICAgLy8gLy8gRml4IHRoZSBzdGFjayBwb2ludGVyIGZyb20gMHg2YWQgdG8gMHg3YWRcclxuICAgICAgICAvLyAvLyB0aGlzIDB4MDYgYnl0ZSAxMTIgaW4gdGhlIGNvZGUsIHdoaWNoIGlzXHJcbiAgICAgICAgLy8gLy8gYnl0ZSAxMTIgKyAweDEwMCA9IDM2OCBpbiBtZW1vcnlcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVszNjhdID0gbmV3IFVpbnQ4KDB4Nyk7XHJcblxyXG4gICAgICAgIC8vIC8vU2tpcCBEQUEgdGVzdFxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUubWVtb3J5WzB4NTljXSA9IG5ldyBVaW50OCgweGMzKTsgLy9KTVBcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVsweDU5ZF0gPSBuZXcgVWludDgoMHhjMik7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMHg1OWVdID0gbmV3IFVpbnQ4KDB4MDUpO1xyXG5cclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBteURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgbGFzdFNlY29uZCA9IDA7XHJcbiAgcHJpdmF0ZSBjb3VudGllID0gMDtcclxuICBwcml2YXRlIGxhc3RUaW1lciA9IDA7XHJcbiAgcHJpdmF0ZSBuZXh0SW50ZXJydXB0ID0gMTYwMDA7XHJcblxyXG4gIHByaXZhdGUgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHdoaWxlIChzdGF0ZS5wYy52YWwoKSA+IC0xKSB7XHJcbiAgICAgIGlmICh0aGlzLmluc3RydWN0aW9uTnVtYmVyICUgMTAwMCA9PT0gMCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3ljbGVzICs9IHRoaXMucmVhZE5leHQoKTtcclxuXHJcbiAgICAgIC8vIGxldCBzZWNvbmRzID0gbmV3IERhdGUoKS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIC8vIGlmIChzZWNvbmRzICE9PSB0aGlzLmxhc3RTZWNvbmQpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcclxuICAgICAgLy8gICAgICdhdCcsXHJcbiAgICAgIC8vICAgICB0aGlzLmxhc3RTZWNvbmQsXHJcbiAgICAgIC8vICAgICAncmFuJyxcclxuICAgICAgLy8gICAgIHRoaXMuY291bnRpZSxcclxuICAgICAgLy8gICAgICd0aW1lcywgZXhwZWN0aW5nIDEyMCdcclxuICAgICAgLy8gICApO1xyXG4gICAgICAvLyAgIHRoaXMubGFzdFNlY29uZCA9IHNlY29uZHM7XHJcbiAgICAgIC8vICAgdGhpcy5jb3VudGllID0gMDtcclxuICAgICAgLy8gfVxyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lciA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVyID0gbm93O1xyXG4gICAgICAgIHRoaXMubmV4dEludGVycnVwdCA9IHRoaXMubGFzdFRpbWVyICsgMTYwMDA7XHJcbiAgICAgICAgdGhpcy5sYXN0SW50ZXJydXB0ID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaW50RW5hYmxlLnZhbCgpID09PSAxICYmIG5vdyA+IHRoaXMubmV4dEludGVycnVwdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RJbnRlcnJ1cHQgPT09IDIpIHtcclxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbnRlcnJ1cHQoMSk7XHJcbiAgICAgICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDIpO1xyXG4gICAgICAgICAgdGhpcy5sYXN0SW50ZXJydXB0ID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXh0SW50ZXJydXB0ID0gbm93ICsgODAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2luY2VMYXN0ID0gbm93IC0gdGhpcy5sYXN0VGltZXI7XHJcbiAgICAgIGNvbnN0IGN5Y2xlc1RvQ2F0Y2hVcCA9IDIgKiBzaW5jZUxhc3Q7XHJcbiAgICAgIGxldCBjeWNsZXMgPSAwO1xyXG5cclxuICAgICAgd2hpbGUgKGN5Y2xlc1RvQ2F0Y2hVcCA+IGN5Y2xlcykge1xyXG4gICAgICAgIGNvbnN0IG9wY29kZSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKV0udmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChvcGNvZGUgPT09IDB4ZGIpIHtcclxuICAgICAgICAgIHN0YXRlLmEgPSB0aGlzLmluW3RoaXMuYnl0ZUF0KDEpLnZhbCgpXTtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgICBjeWNsZXMgKz0gMztcclxuICAgICAgICB9IGVsc2UgaWYgKG9wY29kZSA9PSAweGQzKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbmQodGhpcy5ieXRlQXQoMSkudmFsKCksIHN0YXRlLmEudmFsKCkpOyAvLyBUT0RPOiBJcyB0aGlzIGFsd2F5cyBzdXBwb3NlZCB0byBiZSAxP1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICAgIGN5Y2xlcyArPSAzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjeWNsZXMgKz0gdGhpcy5yZWFkTmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgKHRoaXMuY3ljbGVzID49IGN5Y2xlc1VudGlsSW50ZXJydXB0KSB7XHJcbiAgICAgIC8vICAgLy8gdGhpcy5jb3VudGllKys7XHJcblxyXG4gICAgICAvLyAgIGlmICh0aGlzLnN0YXRlLmludEVuYWJsZS52YWwoKSA9PT0gMSkge1xyXG4gICAgICAvLyAgICAgaWYgKHRoaXMubGFzdEludGVycnVwdCA9PT0gMikge1xyXG4gICAgICAvLyAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDEpO1xyXG4gICAgICAvLyAgICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSAxO1xyXG4gICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgdGhpcy5nZW5lcmF0ZUludGVycnVwdCgyKTtcclxuICAgICAgLy8gICAgICAgdGhpcy5sYXN0SW50ZXJydXB0ID0gMjtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICAgIHRoaXMuc3RhdGUuaW50RW5hYmxlID0gbmV3IFVpbnQ4KDApO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICB0aGlzLmN5Y2xlcyAtPSBjeWNsZXNVbnRpbEludGVycnVwdDtcclxuICAgICAgLy8gfVxyXG4gICAgICB0aGlzLmxhc3RUaW1lciA9IG5vdztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGxvZyA9IChjb3VudGVyOiBudW1iZXIsIG9wY29kZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBhdCAke2NvdW50ZXJ9ICgweCR7Y291bnRlci50b1N0cmluZygxNil9KSwgaW5zdHJ1Y3Rpb24gJHtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyXHJcbiAgICAgIH0sIGNvbW1hbmQgMHgke29wY29kZS50b1N0cmluZygxNil9YFxyXG4gICAgKTtcclxuICAgIHRoaXMubG9nU3RhdGUoc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2N5Y2xlczogJywgdGhpcy5jeWNsZXMpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbG9nU3RhdGUoc3RhdGU6IENwdVN0YXRlKSB7XHJcbiAgICBjb25zdCB7IGNjIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgXHJcbiAgICB7XHJcbiAgICAgIGE6ICR7c3RhdGUuYS5oZXh9XHJcbiAgICAgIGJjOiAke3N0YXRlLmJjLmhleH1cclxuICAgICAgZGU6ICR7c3RhdGUuZGUuaGV4fVxyXG4gICAgICBobDogJHtzdGF0ZS5obC5oZXh9XHJcbiAgICAgIHBjOiAke3N0YXRlLnBjLmhleH1cclxuICAgICAgc3A6ICR7c3RhdGUuc3AuaGV4fVxyXG4gICAgICBjYzoge1xyXG4gICAgICAgIHo6ICR7Y2Muen1cclxuICAgICAgICBzOiAke2NjLnN9XHJcbiAgICAgICAgcDogJHtjYy5wfVxyXG4gICAgICAgIGN5OiAke2NjLmN5fVxyXG4gICAgICAgIGFjOiAke2NjLmFjfVxyXG4gICAgICB9XHJcbiAgICB9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSW50ZXJydXB0KGludGVycnVwdE51bTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgLy9wZXJmb3JtIFwiUFVTSCBQQ1wiXHJcbiAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoc3RhdGUucGMpO1xyXG4gICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgIC8vU2V0IHRoZSBQQyB0byB0aGUgbG93IG1lbW9yeSB2ZWN0b3IuXHJcbiAgICAvL1RoaXMgaXMgaWRlbnRpY2FsIHRvIGFuIFwiUlNUIGludGVycnVwdF9udW1cIiBpbnN0cnVjdGlvbi5cclxuICAgIHN0YXRlLnBjID0gbmV3IFVpbnQxNig4ICogaW50ZXJydXB0TnVtKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGVzdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblxyXG4gIHByaXZhdGUgcmVhZE5leHQgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBvcGNvZGUgPSBzdGF0ZS5tZW1vcnlbc3RhdGUucGMudmFsKCldLnZhbCgpO1xyXG5cclxuICAgIC8vIGlmIChcclxuICAgIC8vICAgdGhpcy5kZWJ1ZyAmJlxyXG4gICAgLy8gICB0aGlzLmluc3RydWN0aW9uTnVtYmVyID49IDQyMzUwIC0gMlxyXG4gICAgLy8gICAvLyAmJiB0aGlzLmluc3RydWN0aW9uTnVtYmVyICUgMjUgPT09IDBcclxuICAgIC8vICkge1xyXG4gICAgLy8gdGhpcy5sb2coc3RhdGUucGMudmFsKCksIG9wY29kZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgPT09IDUzOSkge1xyXG4gICAgLy8gICBkZWJ1Z2dlcjtcclxuICAgIC8vIH1cclxuICAgIGlmICh0aGlzLmluc3RydWN0aW9uTnVtYmVyID09PSAyMzY1MjE5IC0gMTApIHtcclxuICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgPj0gMjMxMzQ3NCkge1xyXG4gICAgICB0aGlzLnRlc3QucHVzaChgJHt0aGlzLmluc3RydWN0aW9uTnVtYmVyfSAke3N0YXRlLmRlfSAke3N0YXRlLmF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChvcGNvZGUpIHtcclxuICAgICAgY2FzZSAweDAwOiB7XHJcbiAgICAgICAgLy8gTk9QXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDE6XHJcbiAgICAgICAgLy8gTFhJIEIsIEQxNlxyXG4gICAgICAgIHN0YXRlLmJjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHgwMjoge1xyXG4gICAgICAgIC8vIFNUQVggQlxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmJjLnZhbCgpLCBzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwMzoge1xyXG4gICAgICAgIC8vIElOWCBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYmMuYWRkKDEpO1xyXG4gICAgICAgIHN0YXRlLmJjID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA0OiB7XHJcbiAgICAgICAgLy8gSU5SIEJcclxuICAgICAgICBzdGF0ZS5iLmluY3IoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5iKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwNToge1xyXG4gICAgICAgIC8vIERDUiBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYi5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmIgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDY6IHtcclxuICAgICAgICAvLyBNVkkgQiwgRDhcclxuICAgICAgICBzdGF0ZS5iID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDc6IHtcclxuICAgICAgICAvLyBSTENcclxuICAgICAgICAvLyBjb25zdCBob2IgPSBzdGF0ZS5hLmhpZ2hPcmRlckJpdDtcclxuICAgICAgICAvLyB0aGlzLnNldENhcnJ5Qml0KGhvYik7XHJcblxyXG4gICAgICAgIC8vIGxldCB2YWwgPSBzdGF0ZS5hLnJvdGF0ZUxlZnQoKS52YWwoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGhvYiA9PT0gMSkge1xyXG4gICAgICAgIC8vICAgLy8gc2V0IGxzYiB0byAxXHJcbiAgICAgICAgLy8gICB2YWwgfD0gMTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgLy8gY2xlYXIgbHNiXHJcbiAgICAgICAgLy8gICB2YWwgJj0gfjE7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBzdGF0ZS5hID0gbmV3IFVpbnQ4KHZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoc3RhdGUuYS5oaWdoT3JkZXJCaXQpO1xyXG4gICAgICAgIGNvbnN0IGEgPSAoKHN0YXRlLmEudmFsKCkgJiAweDgwKSA+PiA3KSB8IChzdGF0ZS5hLnZhbCgpIDw8IDEpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwOToge1xyXG4gICAgICAgIC8vIERBRCBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLmJjKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGE6IHtcclxuICAgICAgICAvLyBMREFYIEJcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W3N0YXRlLmJjLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwYjoge1xyXG4gICAgICAgIC8vIERDWCBCXHJcbiAgICAgICAgc3RhdGUuYmMgPSBzdGF0ZS5iYy5zdWIoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGM6IHtcclxuICAgICAgICAvLyBJTlIgQ1xyXG4gICAgICAgIHN0YXRlLmMuaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmMpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBkOiB7XHJcbiAgICAgICAgLy8gRENSIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5jLnN1YigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYyA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZToge1xyXG4gICAgICAgIC8vIE1WSSBDLCBEOFxyXG4gICAgICAgIHN0YXRlLmMgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwZjoge1xyXG4gICAgICAgIC8vIFJSQ1xyXG4gICAgICAgIGNvbnN0IGxvYiA9IHN0YXRlLmEubG93T3JkZXJCaXQ7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdChsb2IpO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWQgPSAobG9iIDw8IDcpIHwgKHN0YXRlLmEudmFsKCkgPj4gMSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChyb3RhdGVkKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDExOiB7XHJcbiAgICAgICAgLy8gTFhJIEQsIEQxNlxyXG4gICAgICAgIHN0YXRlLmRlID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDEyOiB7XHJcbiAgICAgICAgLy8gU1RBWCBEXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuZGUudmFsKCksIHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDEzOiB7XHJcbiAgICAgICAgLy8gSU5YIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5kZS5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuZGUgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTQ6IHtcclxuICAgICAgICAvLyBJTlIgRFxyXG4gICAgICAgIHN0YXRlLmQuaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmQpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE1OiB7XHJcbiAgICAgICAgLy8gRENSIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5kLnN1YigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuZCA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNjoge1xyXG4gICAgICAgIC8vIE1WSSBELCBEOFxyXG4gICAgICAgIHN0YXRlLmQgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNzoge1xyXG4gICAgICAgIC8vIFJBTFxyXG4gICAgICAgIC8vIGNvbnN0IGNhcnJ5ID0gc3RhdGUuY2MuY3k7XHJcbiAgICAgICAgLy8gbGV0IHJvdGF0ZWQgPSB0aGlzLnN0YXRlLmEucm90YXRlTGVmdCgpLnZhbCgpO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2FycnkgPT09IDEpIHtcclxuICAgICAgICAvLyAgIC8vIHNldCBtc2IgdG8gMVxyXG4gICAgICAgIC8vICAgcm90YXRlZCB8PSAxIDw8IDc7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIC8vIGNsZWFyIG1zYlxyXG4gICAgICAgIC8vICAgcm90YXRlZCAmPSB+KDEgPDwgNyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBzdGF0ZS5hID0gbmV3IFVpbnQ4KHJvdGF0ZWQpO1xyXG4gICAgICAgIGNvbnN0IGNhcnJ5ID0gc3RhdGUuY2MuY3k7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdChzdGF0ZS5hLmhpZ2hPcmRlckJpdCk7XHJcbiAgICAgICAgY29uc3QgYSA9IGNhcnJ5IHwgKHN0YXRlLmEudmFsKCkgPDwgMSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE5OiB7XHJcbiAgICAgICAgLy8gREFEIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuZGUpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxYToge1xyXG4gICAgICAgIC8vIExEQVggRFxyXG4gICAgICAgIHN0YXRlLmEgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuZGUudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFiOiB7XHJcbiAgICAgICAgLy8gRENYIERcclxuICAgICAgICBzdGF0ZS5kZSA9IHN0YXRlLmRlLnN1YigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxYzoge1xyXG4gICAgICAgIC8vIElOUiBFXHJcbiAgICAgICAgc3RhdGUuZS5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWQ6IHtcclxuICAgICAgICAvLyBEQ1IgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmUuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5lID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFlOiB7XHJcbiAgICAgICAgLy8gTVZJIEUsIEQ4XHJcbiAgICAgICAgc3RhdGUuZSA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFmOiB7XHJcbiAgICAgICAgLy8gUkFSXHJcbiAgICAgICAgLy8gY29uc3QgbG9iID0gdGhpcy5zdGF0ZS5hLmxvd09yZGVyQml0O1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldENhcnJ5Qml0KGxvYik7XHJcblxyXG4gICAgICAgIC8vIGxldCB2YWwgPSB0aGlzLnN0YXRlLmEudmFsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIChsb2IgPT09IDEpIHtcclxuICAgICAgICAvLyAgIC8vIHNldCBtc2IgdG8gMVxyXG4gICAgICAgIC8vICAgdmFsIHw9IDEgPDwgNztcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgLy8gY2xlYXIgbXNiXHJcbiAgICAgICAgLy8gICB2YWwgJj0gfigxIDw8IDcpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIGNvbnN0IGNhcnJ5ID0gc3RhdGUuY2MuY3k7XHJcbiAgICAgICAgc3RhdGUuY2MuY3kgPSBzdGF0ZS5hLmxvd09yZGVyQml0O1xyXG4gICAgICAgIGNvbnN0IGEgPSAoY2FycnkgPDwgNykgfCAoc3RhdGUuYS52YWwoKSA+PiAxKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KGEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjE6IHtcclxuICAgICAgICAvLyBMWEkgSCwgRDE2XHJcbiAgICAgICAgc3RhdGUuaGwgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjI6IHtcclxuICAgICAgICAvLyBTSExEIGFkZHJcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHV0aWxzLmNvbmNhdChcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDIpLnZhbCgpLFxyXG4gICAgICAgICAgdGhpcy5ieXRlQXQoMSkudmFsKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKGxvY2F0aW9uLCBzdGF0ZS5sKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShsb2NhdGlvbiArIDEsIHN0YXRlLmgpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIzOiB7XHJcbiAgICAgICAgLy8gSU5YIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjQ6IHtcclxuICAgICAgICAvLyBJTlIgSFxyXG4gICAgICAgIHN0YXRlLmguaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmgpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI1OiB7XHJcbiAgICAgICAgLy9cdERDUiBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaC5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmggPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MjY6IHtcclxuICAgICAgICAvLyBNVkkgSCwgRDhcclxuICAgICAgICBzdGF0ZS5oID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI5OiB7XHJcbiAgICAgICAgLy8gREFEIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuaGwpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyYToge1xyXG4gICAgICAgIC8vIExITEQgYWRkclxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdXRpbHMuY29uY2F0KFxyXG4gICAgICAgICAgdGhpcy5ieXRlQXQoMikudmFsKCksXHJcbiAgICAgICAgICB0aGlzLmJ5dGVBdCgxKS52YWwoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3RhdGUubCA9IHN0YXRlLm1lbW9yeVtsb2NhdGlvbl07XHJcbiAgICAgICAgc3RhdGUuaCA9IHN0YXRlLm1lbW9yeVtsb2NhdGlvbiArIDFdO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJiOiB7XHJcbiAgICAgICAgLy8gRENYIEhcclxuICAgICAgICBzdGF0ZS5obCA9IHN0YXRlLmhsLnN1YigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyYzoge1xyXG4gICAgICAgIC8vIElOUiBMXHJcbiAgICAgICAgc3RhdGUubC5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUubCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmQ6IHtcclxuICAgICAgICAvLyBEQ1IgTFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmwuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5sID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJlOiB7XHJcbiAgICAgICAgLy8gTVZJIEwsIEQ4XHJcbiAgICAgICAgc3RhdGUubCA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJmOiB7XHJcbiAgICAgICAgLy8gQ01BXHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh+c3RhdGUuYS52YWwoKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzMToge1xyXG4gICAgICAgIC8vIExYSSBTUCwgRDE2XHJcbiAgICAgICAgc3RhdGUuc3AgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzI6IHtcclxuICAgICAgICAvLyBTVEEgYWRkclxyXG4gICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oYWRkci52YWwoKSwgc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzM6IHtcclxuICAgICAgICAvLyBJTlggU1BcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5zcC5hZGQoMSk7XHJcbiAgICAgICAgc3RhdGUuc3AgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzQ6IHtcclxuICAgICAgICAvLyBJTlIgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0uYWRkKDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCB2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNToge1xyXG4gICAgICAgIC8vIERDUiBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHZhbCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM2OiB7XHJcbiAgICAgICAgLy8gTVZJIE0sIEQ4XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuaGwudmFsKCksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNzoge1xyXG4gICAgICAgIC8vIFNUQ1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mzg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzOToge1xyXG4gICAgICAgIC8vIERBRCBTUFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5zcCk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNhOiB7XHJcbiAgICAgICAgLy8gTERBIGFkZHJcclxuICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBzdGF0ZS5tZW1vcnlbYWRkci52YWwoKV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2I6IHtcclxuICAgICAgICAvLyBEQ1ggU1BcclxuICAgICAgICBzdGF0ZS5zcCA9IHN0YXRlLnNwLnN1YigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzYzoge1xyXG4gICAgICAgIC8vIElOUiBBXHJcbiAgICAgICAgc3RhdGUuYS5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2Q6IHtcclxuICAgICAgICAvLyBEQ1IgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNlOiB7XHJcbiAgICAgICAgLy8gTVZJIEEsIEQ4XHJcbiAgICAgICAgc3RhdGUuYSA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNmOiB7XHJcbiAgICAgICAgLy8gQ01DXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuY2MuY3kgPT09IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDA6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0MTpcclxuICAgICAgICAvLyBNT1YgQiwgQ1xyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAweDQyOlxyXG4gICAgICAgIC8vIE1PViBCLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDM6XHJcbiAgICAgICAgLy8gTU9WIEIsIEVcclxuICAgICAgICB0aGlzLm1vdignYicsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHg0NDoge1xyXG4gICAgICAgIC8vIE1PViBCLCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0NToge1xyXG4gICAgICAgIC8vIE1PViBCLCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Njoge1xyXG4gICAgICAgIC8vIE1PViBCLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2InLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Nzoge1xyXG4gICAgICAgIC8vIE1PViBCLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0ODoge1xyXG4gICAgICAgIC8vIE1PViBDLCBCXHJcbiAgICAgICAgdGhpcy5tb3YoJ2MnLCAnYicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0OToge1xyXG4gICAgICAgIC8vIE1PViBDLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2MnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0YToge1xyXG4gICAgICAgIC8vIFx0TU9WIEMsIERcclxuICAgICAgICB0aGlzLm1vdignYycsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRiOiB7XHJcbiAgICAgICAgLy8gXHRNT1YgQywgRVxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2UnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGM6IHtcclxuICAgICAgICAvLyBNT1YgQywgSFxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2gnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGQ6IHtcclxuICAgICAgICAvLyBNT1YgQywgTFxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2wnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGU6IHtcclxuICAgICAgICAvLyBNT1YgQywgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdjJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGY6IHtcclxuICAgICAgICAvLyBNT1YgQywgQVxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTA6IHtcclxuICAgICAgICAvLyBNT1YgRCwgQlxyXG4gICAgICAgIHRoaXMubW92KCdkJywgJ2InKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTE6IHtcclxuICAgICAgICAvLyBNT1YgRCwgQ1xyXG4gICAgICAgIHRoaXMubW92KCdkJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NTI6IHtcclxuICAgICAgICAvL1x0TU9WIEQsIERcclxuICAgICAgICB0aGlzLm1vdignZCcsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUzOiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIEVcclxuICAgICAgICB0aGlzLm1vdignZCcsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU0OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIEhcclxuICAgICAgICB0aGlzLm1vdignZCcsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU1OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIExcclxuICAgICAgICB0aGlzLm1vdignZCcsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU2OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnZCcsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU3OiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIEFcclxuICAgICAgICB0aGlzLm1vdignZCcsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU4OiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEJcclxuICAgICAgICB0aGlzLm1vdignZScsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDU5OiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIENcclxuICAgICAgICB0aGlzLm1vdignZScsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVhOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIERcclxuICAgICAgICB0aGlzLm1vdignZScsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDViOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEVcclxuICAgICAgICB0aGlzLm1vdignZScsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVjOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEhcclxuICAgICAgICB0aGlzLm1vdignZScsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVkOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIExcclxuICAgICAgICB0aGlzLm1vdignZScsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVlOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnZScsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDVmOiB7XHJcbiAgICAgICAgLy8gTU9WIEUsIEFcclxuICAgICAgICB0aGlzLm1vdignZScsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYwOiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEJcclxuICAgICAgICB0aGlzLm1vdignaCcsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYxOiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIENcclxuICAgICAgICB0aGlzLm1vdignaCcsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYyOiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIERcclxuICAgICAgICB0aGlzLm1vdignaCcsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDYzOiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEVcclxuICAgICAgICB0aGlzLm1vdignaCcsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY0OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEhcclxuICAgICAgICB0aGlzLm1vdignaCcsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY1OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIExcclxuICAgICAgICB0aGlzLm1vdignaCcsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY2OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnaCcsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY3OiB7XHJcbiAgICAgICAgLy8gTU9WIEgsIEFcclxuICAgICAgICB0aGlzLm1vdignaCcsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY4OiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIEJcclxuICAgICAgICB0aGlzLm1vdignbCcsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY5OiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIENcclxuICAgICAgICB0aGlzLm1vdignbCcsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZhOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIERcclxuICAgICAgICB0aGlzLm1vdignbCcsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZiOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIEVcclxuICAgICAgICB0aGlzLm1vdignbCcsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZjOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIEhcclxuICAgICAgICB0aGlzLm1vdignbCcsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZkOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIExcclxuICAgICAgICB0aGlzLm1vdignbCcsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZlOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnbCcsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDZmOiB7XHJcbiAgICAgICAgLy8gTU9WIEwsIEFcclxuICAgICAgICB0aGlzLm1vdignbCcsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcwOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEJcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcxOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIENcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDcyOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIERcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDczOiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEVcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc0OiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEhcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc1OiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIExcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc2OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzc6IHtcclxuICAgICAgICAvLyBNT1YgTSwgQVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdtJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzg6IHtcclxuICAgICAgICAvLyBNT1YgQSwgQlxyXG4gICAgICAgIHRoaXMubW92KCdhJywgJ2InKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzk6IHtcclxuICAgICAgICAvLyBcdE1PViBBLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3YToge1xyXG4gICAgICAgIC8vIE1PViBBLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Yjoge1xyXG4gICAgICAgIC8vIFx0TU9WIEEsIEVcclxuICAgICAgICB0aGlzLm1vdignYScsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdjOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEhcclxuICAgICAgICB0aGlzLm1vdignYScsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdkOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIExcclxuICAgICAgICB0aGlzLm1vdignYScsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdlOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnYScsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDdmOiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEFcclxuICAgICAgICB0aGlzLm1vdignYScsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgwOiB7XHJcbiAgICAgICAgLy8gQUREIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4MToge1xyXG4gICAgICAgIC8vIEFERCBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODI6IHtcclxuICAgICAgICAvLyBBREQgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgzOiB7XHJcbiAgICAgICAgLy8gQUREIEVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5lKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4NDoge1xyXG4gICAgICAgIC8vIEFERCBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODU6IHtcclxuICAgICAgICAvLyBBREQgTFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg2OiB7XHJcbiAgICAgICAgLy8gQUREIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Nzoge1xyXG4gICAgICAgIC8vIEFERCBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODg6IHtcclxuICAgICAgICAvLyBBREMgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmIpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODk6IHtcclxuICAgICAgICAvLyBBREMgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmMpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGE6IHtcclxuICAgICAgICAvL1x0QURDIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5kKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhiOiB7XHJcbiAgICAgICAgLy9cdEFEQyBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuZSkuYWRkKHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Yzoge1xyXG4gICAgICAgIC8vXHRBREMgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmgpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGQ6IHtcclxuICAgICAgICAvL1x0QURDIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5sKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhlOiB7XHJcbiAgICAgICAgLy9cdEFEQyBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXSkuYWRkKHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Zjoge1xyXG4gICAgICAgIC8vXHRBREMgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmEpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTA6IHtcclxuICAgICAgICAvLyBTVUIgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmIpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkxOiB7XHJcbiAgICAgICAgLy8gU1VCIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5jKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Mjoge1xyXG4gICAgICAgIC8vIFNVQiBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuZCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTM6IHtcclxuICAgICAgICAvLyBTVUIgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmUpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk0OiB7XHJcbiAgICAgICAgLy8gU1VCIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5oKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5NToge1xyXG4gICAgICAgIC8vIFNVQiBMXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUubCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTY6IHtcclxuICAgICAgICAvLyBTVUIgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0pO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk3OiB7XHJcbiAgICAgICAgLy8gU1VCIEFcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5hKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5ODoge1xyXG4gICAgICAgIC8vIFNCQiBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYi5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5OToge1xyXG4gICAgICAgIC8vIFNCQiBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYy5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5YToge1xyXG4gICAgICAgIC8vIFNCQiBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuZC5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Yjoge1xyXG4gICAgICAgIC8vIFNCQiBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuZS5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Yzoge1xyXG4gICAgICAgIC8vIFNCQiBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuaC5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5ZDoge1xyXG4gICAgICAgIC8vIFNCQiBMXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUubC5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5ZToge1xyXG4gICAgICAgIC8vIFNCQiBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Zjoge1xyXG4gICAgICAgIC8vIFNCQiBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYS5hZGQoc3RhdGUuY2MuY3kpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMDoge1xyXG4gICAgICAgIC8vIEFOQSBCXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmIudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMToge1xyXG4gICAgICAgIC8vIEFOQSBDXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmMudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMjoge1xyXG4gICAgICAgIC8vIEFOQSBEXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmQudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhMzoge1xyXG4gICAgICAgIC8vIEFOQSBFXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmUudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNDoge1xyXG4gICAgICAgIC8vIEFOQSBIXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmgudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNToge1xyXG4gICAgICAgIC8vIEFOQSBMXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmwudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNjoge1xyXG4gICAgICAgIC8vIEFOQSBNXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0udmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhNzoge1xyXG4gICAgICAgIC8vIEFOQSBBXHJcbiAgICAgICAgY29uc3QgYW5kID0gc3RhdGUuYS52YWwoKSAmIHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhODoge1xyXG4gICAgICAgIC8vIFhSQSBCXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmIudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhOToge1xyXG4gICAgICAgIC8vIFhSQSBDXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmMudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhYToge1xyXG4gICAgICAgIC8vIFhSQSBEXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmQudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhYjoge1xyXG4gICAgICAgIC8vIFhSQSBFXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmUudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhYzoge1xyXG4gICAgICAgIC8vIFhSQSBIXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmgudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhZDoge1xyXG4gICAgICAgIC8vIFhSQSBMXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmwudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhZToge1xyXG4gICAgICAgIC8vIFhSQSBNXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0udmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhZjoge1xyXG4gICAgICAgIC8vIFhSQSBBXHJcbiAgICAgICAgY29uc3QgeG9yID0gc3RhdGUuYS52YWwoKSBeIHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh4b3IpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMDoge1xyXG4gICAgICAgIC8vIE9SQSBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmIudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMToge1xyXG4gICAgICAgIC8vIE9SQSBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmMudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMjoge1xyXG4gICAgICAgIC8vIE9SQSBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmQudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiMzoge1xyXG4gICAgICAgIC8vIE9SQSBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmUudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNDoge1xyXG4gICAgICAgIC8vIE9SQSBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmgudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNToge1xyXG4gICAgICAgIC8vIE9SQSBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmwudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNjoge1xyXG4gICAgICAgIC8vIE9SQSBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0udmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiNzoge1xyXG4gICAgICAgIC8vIE9SQSBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHN0YXRlLmEudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiODoge1xyXG4gICAgICAgIC8vIENNUCBCXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmIpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjk6IHtcclxuICAgICAgICAvLyBDTVAgQ1xyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5jKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJhOiB7XHJcbiAgICAgICAgLy8gQ01QIERcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuZCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiYjoge1xyXG4gICAgICAgIC8vIENNUCBFXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmUpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmM6IHtcclxuICAgICAgICAvLyBDTVAgSFxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5oKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJkOiB7XHJcbiAgICAgICAgLy8gQ01QIExcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUubCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiZToge1xyXG4gICAgICAgIC8vIENNUCBNXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0pO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmY6IHtcclxuICAgICAgICAvLyBDTVAgQVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5hKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMwOiB7XHJcbiAgICAgICAgLy8gUk5aXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMToge1xyXG4gICAgICAgIC8vIFBPUCBCXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmJjID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzI6IHtcclxuICAgICAgICAvLyBKTlogYWRkcmVzc1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMzOiB7XHJcbiAgICAgICAgLy8gSk1QIGFkZHJlc3NcclxuICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzQ6IHtcclxuICAgICAgICAvLyBDTlogYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjNToge1xyXG4gICAgICAgIC8vIFBVU0ggQlxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmMpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM2OiB7XHJcbiAgICAgICAgLy8gQURJIGJ5dGVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZCh0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yzc6IHtcclxuICAgICAgICAvLyBSU1RcclxuICAgICAgICBzdGF0ZS5wYyA9IG5ldyBVaW50MTYoMCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yzg6IHtcclxuICAgICAgICAvLyBSWlxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yzk6IHtcclxuICAgICAgICAvLyBSRVRcclxuICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludChoaWdoLCBsb3cpO1xyXG4gICAgICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNhOiB7XHJcbiAgICAgICAgLy8gSlogYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgICAgc3RhdGUucGMgPSBhZGRyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2I6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjYzoge1xyXG4gICAgICAgIC8vIENaIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQodmFsKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjZDoge1xyXG4gICAgICAgIC8vIENBTEwgYWRkcmVzc1xyXG5cclxuICAgICAgICAvLyBpZiAoc3RhdGUuYy52YWwoKSA9PSA5KSB7XHJcbiAgICAgICAgLy8gICBjb25zdCBvZmZzZXQgPSAoc3RhdGUuZC52YWwoKSA8PCA4KSB8IHN0YXRlLmUudmFsKCk7XHJcbiAgICAgICAgLy8gICBjb25zdCBzdHIgPSBzdGF0ZS5tZW1vcnlbb2Zmc2V0ICsgM107IC8vc2tpcCB0aGUgcHJlZml4IGJ5dGVzXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoc3RhdGUuYy52YWwoKSA9PSAyKSB7XHJcbiAgICAgICAgLy8gICAvL3NhdyB0aGlzIGluIHRoZSBpbnNwZWN0ZWQgY29kZSwgbmV2ZXIgc2F3IGl0IGNhbGxlZFxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3ByaW50IGNoYXIgcm91dGluZSBjYWxsZWRcXG4nKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2U6IHtcclxuICAgICAgICAvLyBBQ0kgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZCh0aGlzLmJ5dGVBdCgxKSkuYWRkKHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjZjoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQwOiB7XHJcbiAgICAgICAgLy8gUk5DXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDE6IHtcclxuICAgICAgICAvLyBQT1AgRFxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5kZSA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQyOiB7XHJcbiAgICAgICAgLy8gXHRKTkMgYWRkcmVzc1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMzoge1xyXG4gICAgICAgIC8vIE9VVCBEOFxyXG4gICAgICAgIGlmICh0aGlzLmJ5dGVBdCgxKS52YWwoKSA9PT0gMikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXN0LmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy50ZXN0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZW5kKHRoaXMuYnl0ZUF0KDEpLnZhbCgpLCBzdGF0ZS5hLnZhbCgpKTsgLy8gVE9ETzogSXMgdGhpcyBhbHdheXMgc3VwcG9zZWQgdG8gYmUgMT9cclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNDoge1xyXG4gICAgICAgIC8vIENOQyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBEXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgc3RhdGUuZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDY6IHtcclxuICAgICAgICAvLyBTVUkgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1Yih0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDc6IHtcclxuICAgICAgICAvLyBSU1QgMlxyXG4gICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYy5hZGQoMikpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IG5ldyBVaW50OCgweDEwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDg6IHtcclxuICAgICAgICAvLyBSQ1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ5OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGE6IHtcclxuICAgICAgICAvLyBKQyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgICAgc3RhdGUucGMgPSBhZGRyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGI6IHtcclxuICAgICAgICAvLyBJTiBEOFxyXG4gICAgICAgIHN0YXRlLmEgPSB0aGlzLmluW3RoaXMuYnl0ZUF0KDEpLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYzoge1xyXG4gICAgICAgIC8vIENDIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkZToge1xyXG4gICAgICAgIC8vIFNCSSBEOFxyXG4gICAgICAgIGNvbnN0IGJ5dGVXaXRoQ2FycnkgPSB0aGlzLmJ5dGVBdCgxKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKGJ5dGVXaXRoQ2FycnkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTA6IHtcclxuICAgICAgICAvLyBSUE9cclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGUxOiB7XHJcbiAgICAgICAgLy8gUE9QIEhcclxuICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcbiAgICAgICAgc3RhdGUuaGwgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgc3RhdGUuc3AuaW5jcigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMjoge1xyXG4gICAgICAgIC8vIEpQTyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMzoge1xyXG4gICAgICAgIC8vIFhUSExcclxuICAgICAgICBjb25zdCBsID0gc3RhdGUubC5jbG9uZSgpO1xyXG4gICAgICAgIGNvbnN0IGggPSBzdGF0ZS5oLmNsb25lKCk7XHJcbiAgICAgICAgc3RhdGUubCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgc3RhdGUuaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKSArIDFdO1xyXG4gICAgICAgIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV0gPSBsO1xyXG4gICAgICAgIHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKSArIDFdID0gaDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlNDoge1xyXG4gICAgICAgIC8vIENQTyBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLnBjLmFkZChuZXcgVWludDgoMykpO1xyXG4gICAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHZhbCk7XHJcblxyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTU6IHtcclxuICAgICAgICAvLyBQVVNIIEhcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5sKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTY6IHtcclxuICAgICAgICAvLyBBTkkgRDhcclxuICAgICAgICBjb25zdCBhbmQgPSBzdGF0ZS5hLnZhbCgpICYgdGhpcy5ieXRlQXQoMSkudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhbmQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU4OiB7XHJcbiAgICAgICAgLy8gUlBFXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlOToge1xyXG4gICAgICAgIC8vIFBDSExcclxuICAgICAgICBzdGF0ZS5wYyA9IHN0YXRlLmhsLmNsb25lKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVhOiB7XHJcbiAgICAgICAgLy8gSlBFIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGViOiB7XHJcbiAgICAgICAgLy8gWENIR1xyXG4gICAgICAgIGNvbnN0IGggPSBzdGF0ZS5oLmNsb25lKCk7XHJcbiAgICAgICAgY29uc3QgbCA9IHN0YXRlLmwuY2xvbmUoKTtcclxuICAgICAgICBzdGF0ZS5oID0gc3RhdGUuZC5jbG9uZSgpO1xyXG4gICAgICAgIHN0YXRlLmwgPSBzdGF0ZS5lLmNsb25lKCk7XHJcbiAgICAgICAgc3RhdGUuZCA9IGg7XHJcbiAgICAgICAgc3RhdGUuZSA9IGw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWM6IHtcclxuICAgICAgICAvLyBDUEUgYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWU6IHtcclxuICAgICAgICAvLyBYUkkgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBuZXcgVWludDgoc3RhdGUuYS52YWwoKSBeIHRoaXMuYnl0ZUF0KDEpLnZhbCgpKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGVmOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjA6IHtcclxuICAgICAgICAvLyBSUFxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjE6IHtcclxuICAgICAgICAvLyBQT1AgUFNXXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXS52YWwoKTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG4gICAgICAgIHN0YXRlLmEgPSBoaWdoO1xyXG4gICAgICAgIHN0YXRlLmNjLnMgPSB0b0JpdCgobG93ID4+IDcpICYgMSk7XHJcbiAgICAgICAgc3RhdGUuY2MueiA9IHRvQml0KChsb3cgPj4gNikgJiAxKTtcclxuICAgICAgICBzdGF0ZS5jYy5hYyA9IHRvQml0KChsb3cgPj4gNCkgJiAxKTtcclxuICAgICAgICBzdGF0ZS5jYy5wID0gdG9CaXQoKGxvdyA+PiAyKSAmIDEpO1xyXG4gICAgICAgIHN0YXRlLmNjLmN5ID0gdG9CaXQobG93ICYgMSk7XHJcbiAgICAgICAgc3RhdGUuc3AuaW5jcigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmMjoge1xyXG4gICAgICAgIC8vIEpQIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmMzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY0OiB7XHJcbiAgICAgICAgLy8gQ1AgYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdCh2YWwpO1xyXG5cclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY1OiB7XHJcbiAgICAgICAgLy8gUFVTSCBQU1dcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5hKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5jYy5nZXRQc3coKSk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY2OiB7XHJcbiAgICAgICAgLy8gT1JJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS52YWwoKSB8IHRoaXMuYnl0ZUF0KDEpLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Zjc6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmODoge1xyXG4gICAgICAgIC8vIFJNXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmOToge1xyXG4gICAgICAgIC8vIFNQSExcclxuICAgICAgICBzdGF0ZS5zcCA9IHN0YXRlLmhsLmNsb25lKCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmE6IHtcclxuICAgICAgICAvLyBKTSBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDEpIHtcclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmI6IHtcclxuICAgICAgICAvLyBFSVxyXG4gICAgICAgIHN0YXRlLmludEVuYWJsZSA9IG5ldyBVaW50OCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmYzoge1xyXG4gICAgICAgIC8vIENNIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQodmFsKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZlOiB7XHJcbiAgICAgICAgLy8gQ1BJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIodGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmZjoge1xyXG4gICAgICAgIC8vIFJTVCA3XHJcbiAgICAgICAgLy8gVE9ETzogaXMgdGhpcyB3cm9uZz9cclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYy5hZGQoMikpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBsb3cpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IG5ldyBVaW50OCgweDM4KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24oLTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0cnVjdGlvbk51bWJlcisrO1xyXG4gICAgcmV0dXJuIGN5Y2xlczgwODBbb3Bjb2RlXTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVSYW0obG9jYXRpb246IG51bWJlciwgdmFsdWU6IFVpbnQpIHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gICAgc3RhdGUubWVtb3J5LnNwbGljZShsb2NhdGlvbiwgMSwgdmFsdWUuY2xvbmUoKSk7XHJcblxyXG4gICAgaWYgKGxvY2F0aW9uID49IDB4MjQwMCAmJiBsb2NhdGlvbiA8PSAweDNmZmYpIHtcclxuICAgICAgLy8gdmlkZW8gcmFtXHJcbiAgICAgIHRoaXMudXBkYXRlU2NyZWVuKGxvY2F0aW9uLCB2YWx1ZS52YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZsYWdzID0gKG46IFVpbnQsIGNhcnJ5PzogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHN0YXRlLmNjLnogPSB0b0JpdCgobi52YWwoKSAmIDB4ZmYpID09PSAwKTtcclxuICAgIHN0YXRlLmNjLnMgPSB0b0JpdCgobi52YWwoKSAmIDB4ODApID09PSAweDgwKTtcclxuICAgIHN0YXRlLmNjLmFjID0gbi5hdXhDYXJyeTtcclxuICAgIHN0YXRlLmNjLnAgPSB0aGlzLnBhcml0eShuLnZhbCgpKTtcclxuXHJcbiAgICBpZiAoY2FycnkpIHtcclxuICAgICAgdGhpcy5zZXRDYXJyeUJpdChuLmNhcnJ5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNldENhcnJ5Qml0ID0gKG46IEJpdCkgPT4gKHRoaXMuc3RhdGUuY2MuY3kgPSBuKTtcclxuXHJcbiAgcHJpdmF0ZSBwYXJpdHkgPSAobjogbnVtYmVyKTogQml0ID0+IHtcclxuICAgIGNvbnN0IHNpemUgPSA4O1xyXG4gICAgbGV0IHBhcml0eSA9IDA7XHJcbiAgICBsZXQgY2FsYyA9IG47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICBpZiAoY2FsYyAmIDB4MSkge1xyXG4gICAgICAgIHBhcml0eSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGMgPSBjYWxjID4+IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9CaXQoIShwYXJpdHkgJSAyKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb3YgPSAoc3JjS2V5OiBzdHJpbmcsIGRlc3RLZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHNyY0tleSA9PT0gJ20nIHx8IGRlc3RLZXkgPT09ICdtJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NyYyBhbmQgZGVzdCBjYW5ub3QgYmUgYSBtZW1vcnkgbG9jYXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG5cclxuICAgIHN0YXRlW3NyY0tleV0gPSBzdGF0ZVtkZXN0S2V5XS5jbG9uZSgpO1xyXG5cclxuICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb3ZNZW0gPSAoc3JjS2V5OiBzdHJpbmcsIGRlc3RLZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHNyY0tleSAhPT0gJ20nICYmIGRlc3RLZXkgIT09ICdtJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBhIG1lbW9yeSBsb2NhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHNyY0tleSA9PT0gJ20nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCBzdGF0ZVtkZXN0S2V5XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZVtzcmNLZXldID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcblxyXG4gICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdW5pbXBsZW1lbnRlZEluc3RydWN0aW9uID0gKG9wY29kZTogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgVW5pbXBsZW1lbnRlZCBjb2RlIGF0IGluc3RydWN0aW9uICR7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbk51bWJlclxyXG4gICAgICB9IGF0IGZvciBvcGNvZGUgJHtvcGNvZGUudG9TdHJpbmcoMTYpfSBhdCBvZmZzZXQgJHtzdGF0ZS5wYy52YWwoKX1gXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNvbnN0IGFwcCA9IG5ldyBFbXVsYXRvcih7XHJcbi8vICAgZGVidWc6IHRydWUsXHJcbi8vIH0pO1xyXG5cclxuLy8gdHJ5IHtcclxuLy8gICBhcHAucnVuKCk7XHJcbi8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgY29uc29sZS5sb2coYXBwLmluc3RydWN0aW9uTnVtYmVyKTtcclxuLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgRW11bGF0b3I7XHJcbiIsInR5cGUgQml0ID0gMCB8IDE7XHJcblxyXG5leHBvcnQgY29uc3QgdG9CaXQgPSAoYXJnOiBib29sZWFuIHwgbnVtYmVyKTogQml0ID0+IHtcclxuICBjb25zdCB2YWwgPSB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyA/ICEhYXJnIDogYXJnO1xyXG4gIHJldHVybiB2YWwgPyAxIDogMDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpdDtcclxuIiwiaW1wb3J0IFVpbnQ4IGZyb20gJy4vVWludDgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnl0ZUFycmF5IGV4dGVuZHMgQXJyYXkge1xyXG4gIFtrZXk6IG51bWJlcl06IFVpbnQ4O1xyXG5cclxuICBwcml2YXRlIG1heDogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlKCk6IEJ5dGVBcnJheSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShCeXRlQXJyYXkucHJvdG90eXBlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhbGxvYyhuOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMucHVzaChuZXcgVWludDgoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0KG46IEFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgbi5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHRoaXMuc3BsaWNlKG9mZnNldCArIGluZGV4LCAxLCBuZXcgVWludDgodmFsKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcbmltcG9ydCBVaW50OCBmcm9tICcuL1VpbnQ4JztcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkNvZGVzIHtcbiAgejogQml0ID0gMDtcblxuICBzOiBCaXQgPSAwO1xuXG4gIHA6IEJpdCA9IDA7XG5cbiAgY3k6IEJpdCA9IDA7XG5cbiAgYWM6IEJpdCA9IDA7XG5cbiAgcGFkOiBCaXQgPSAwO1xuXG4gIGdldFBzdygpOiBVaW50OCB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5zICsgdGhpcy56ICsgJzAnICsgdGhpcy5hYyArICcwJyArIHRoaXMucCArICcxJyArIHRoaXMuY3k7XG4gICAgcmV0dXJuIG5ldyBVaW50OChwYXJzZUludCh2YWwsIDIpKTtcbiAgfVxuXG4gIHNldFBzdyhuOiBVaW50OCkge1xuICAgIGNvbnN0IGJpbmFyeSA9IG5cbiAgICAgIC52YWwoKVxuICAgICAgLnRvU3RyaW5nKDIpXG4gICAgICAucGFkU3RhcnQoOCwgJzAnKTtcbiAgICBjb25zdCBbcywgeiwgLCBhYywgLCBwLCAsIGN5XSA9IGJpbmFyeS5zcGxpdCgnJykubWFwKHMgPT4gTnVtYmVyKHMpKTtcbiAgICB0aGlzLnMgPSB0b0JpdChzKTtcbiAgICB0aGlzLnogPSB0b0JpdCh6KTtcbiAgICB0aGlzLmFjID0gdG9CaXQoYWMpO1xuICAgIHRoaXMucCA9IHRvQml0KHApO1xuICAgIHRoaXMuY3kgPSB0b0JpdChjeSk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XG5pbXBvcnQgVWludDE2IGZyb20gJy4vVWludDE2JztcbmltcG9ydCBDb25kaXRpb25Db2RlcyBmcm9tICcuL0NvbmRpdGlvbkNvZGVzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgQnl0ZUFycmF5IGZyb20gJy4vQnl0ZUFycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3B1U3RhdGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgYTogVWludDggPSBuZXcgVWludDgoKTtcblxuICBiOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGM6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgZDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGg6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgbDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBzcDogVWludDE2ID0gbmV3IFVpbnQxNigpO1xuXG4gIHBjOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XG5cbiAgbWVtb3J5OiBCeXRlQXJyYXkgPSBCeXRlQXJyYXkuY3JlYXRlKCk7XG5cbiAgY2M6IENvbmRpdGlvbkNvZGVzID0gbmV3IENvbmRpdGlvbkNvZGVzKCk7XG5cbiAgaW50RW5hYmxlOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGdldCBiYygpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuYiwgdGhpcy5jKTtcbiAgfVxuXG4gIHNldCBiYyhieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmIgPSBoaWdoO1xuICAgIHRoaXMuYyA9IGxvdztcbiAgfVxuXG4gIGdldCBkZSgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuZCwgdGhpcy5lKTtcbiAgfVxuXG4gIHNldCBkZShieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmQgPSBoaWdoO1xuICAgIHRoaXMuZSA9IGxvdztcbiAgfVxuXG4gIGdldCBobCgpOiBVaW50MTYge1xuICAgIHJldHVybiB1dGlscy5jb25jYXRVaW50KHRoaXMuaCwgdGhpcy5sKTtcbiAgfVxuXG4gIHNldCBobChieXRlczogVWludDE2KSB7XG4gICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KGJ5dGVzKTtcbiAgICB0aGlzLmggPSBoaWdoO1xuICAgIHRoaXMubCA9IGxvdztcbiAgfVxufVxuIiwiaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVpbnQge1xyXG4gIHByb3RlY3RlZCBudW06IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgbWF4OiBudW1iZXI7XHJcbiAgcHVibGljIGNhcnJ5OiBCaXQgPSAwO1xyXG4gIHB1YmxpYyBhdXhDYXJyeTogQml0ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIG46IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gICAgdGhpcy5udW0gPSBuICYgdGhpcy5tYXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm51bTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNaZXJvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGFkZChuOiBVaW50KTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHN1YihuOiBVaW50KTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGNsb25lKCk6IFVpbnQ7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXQgaGlnaE9yZGVyQml0KCk6IEJpdDtcclxuXHJcbiAgcHVibGljIGdldCBsb3dPcmRlckJpdCgpOiBCaXQge1xyXG4gICAgcmV0dXJuIHRvQml0KHRoaXMubnVtICYgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3Qgcm90YXRlTGVmdCgpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgaW5jcihuOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnVtICsgbikgJiB0aGlzLm1heDtcclxuICAgIHRoaXMubnVtID0gdmFsO1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWNyKG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWwgPSAodGhpcy5udW0gLSBuKSAmIHRoaXMubWF4O1xyXG4gICAgdGhpcy5udW0gPSB2YWw7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZXgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm51bS50b1N0cmluZygxNik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hlY2tDYXJyeSh2YWw6IG51bWJlcik6IHsgY2Fycnk6IEJpdDsgYXV4Q2Fycnk6IEJpdCB9IHtcclxuICAgIGNvbnN0IGNhcnJ5ID0gdmFsIDwgMCB8fCB2YWwgPiB0aGlzLm1heCA/IDEgOiAwO1xyXG4gICAgY29uc3QgYXV4Q2FycnkgPSB2YWwgPCAwIHx8IHZhbCA+IHRoaXMubWF4IC8gMiA/IDEgOiAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcnJ5LFxyXG4gICAgICBhdXhDYXJyeSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBVaW50IGZyb20gJy4vVWludCc7XHJcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaW50MTYgZXh0ZW5kcyBVaW50IHtcclxuICBjb25zdHJ1Y3RvcihuPzogbnVtYmVyKSB7XHJcbiAgICBzdXBlcigweGZmZmYsIG4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChuOiBVaW50MTYgfCBudW1iZXIpOiBVaW50MTYge1xyXG4gICAgbGV0IHZhbDtcclxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gKyBuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gKyBuLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50MTYodmFsICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcclxuICAgIHJldC5jYXJyeSA9IGNhcnJ5O1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gYXV4Q2Fycnk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWIobjogVWludDE2IHwgbnVtYmVyKTogVWludDE2IHtcclxuICAgIGxldCB2YWw7XHJcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIC0gbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIC0gbi52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDE2KHZhbCAmIHRoaXMubWF4KTtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJ5LCBhdXhDYXJyeSB9ID0gdGhpcy5jaGVja0NhcnJ5KHZhbCk7XHJcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcclxuICAgIHJldC5hdXhDYXJyeSA9IGF1eENhcnJ5O1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhpZ2hPcmRlckJpdCgpOiBCaXQge1xyXG4gICAgcmV0dXJuIHRvQml0KHRoaXMubnVtID4+IDE1KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGVMZWZ0KCk6IFVpbnQxNiB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQxNigodGhpcy5udW0gPDwgMSkgJiAweGZmZmYpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFVpbnQxNiB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQxNih0aGlzLm51bSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBmbG93XHJcbmltcG9ydCBVaW50IGZyb20gJy4vVWludCc7XHJcbmltcG9ydCBCaXQsIHsgdG9CaXQgfSBmcm9tICcuL0JpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaW50OCBleHRlbmRzIFVpbnQge1xyXG4gIGNvbnN0cnVjdG9yKG4/OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKDB4ZmYsIG4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChuOiBVaW50OCB8IG51bWJlcik6IFVpbnQ4IHtcclxuICAgIGxldCB2YWw7XHJcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtICsgbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtICsgbi52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDgodmFsICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcclxuICAgIHJldC5jYXJyeSA9IGNhcnJ5O1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gYXV4Q2Fycnk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWIobjogVWludDggfCBudW1iZXIpOiBVaW50OCB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSAtIG47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSAtIG4udmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4KHZhbCAmIHRoaXMubWF4KTtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJ5LCBhdXhDYXJyeSB9ID0gdGhpcy5jaGVja0NhcnJ5KHZhbCk7XHJcbiAgICByZXQuY2FycnkgPSBjYXJyeTtcclxuICAgIHJldC5hdXhDYXJyeSA9IGF1eENhcnJ5O1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhpZ2hPcmRlckJpdCgpOiBCaXQge1xyXG4gICAgcmV0dXJuIHRvQml0KHRoaXMubnVtID4+IDcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZUxlZnQoKTogVWludDgge1xyXG4gICAgcmV0dXJuIG5ldyBVaW50OCgodGhpcy5udW0gPDwgMSkgJiAweGZmKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBVaW50OCB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4KHRoaXMubnVtKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFVpbnQ4IGZyb20gJy4uL21vZGVscy9VaW50OCc7XG5pbXBvcnQgVWludDE2IGZyb20gJy4uL21vZGVscy9VaW50MTYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHN0YXRpYyBjb25jYXRVaW50ID0gKG1vc3Q6IFVpbnQ4LCBsZWFzdDogVWludDgpOiBVaW50MTYgPT5cbiAgICBuZXcgVWludDE2KChtb3N0LnZhbCgpIDw8IDgpIHwgbGVhc3QudmFsKCkpO1xuXG4gIHN0YXRpYyBjb25jYXQgPSAobW9zdDogbnVtYmVyLCBsZWFzdDogbnVtYmVyKTogbnVtYmVyID0+IChtb3N0IDw8IDgpIHwgbGVhc3Q7XG5cbiAgc3RhdGljIHNwbGl0ID0gKG46IFVpbnQxNikgPT4ge1xuICAgIGNvbnN0IGhpZ2ggPSBuLnZhbCgpID4+IDg7XG4gICAgY29uc3QgbG93ID0gbi52YWwoKSAmIDB4ZmY7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpZ2g6IG5ldyBVaW50OChoaWdoKSxcbiAgICAgIGxvdzogbmV3IFVpbnQ4KGxvdyksXG4gICAgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFBhaW50ZXIgfSBmcm9tICcuL3BhaW50ZXIvcGFpbnRlcic7XG5pbXBvcnQgeyBFbXVsYXRvciB9IGZyb20gJy4vZW11bGF0b3IvZW11bGF0b3InO1xuaW1wb3J0IHsgTWVkaWF0b3IgfSBmcm9tICcuL21lZGlhdG9yL01lZGlhdG9yJztcblxuY2xhc3MgTWFpbiB7XG4gIGVtdWxhdG9yOiBFbXVsYXRvcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuICAgIHRoaXMuZW11bGF0b3IgPSBuZXcgRW11bGF0b3IoeyBtZWRpYXRvciwgd2ViOiB0cnVlLCBkZWJ1ZzogdHJ1ZSB9KTtcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIobWVkaWF0b3IpO1xuXG4gICAgbWVkaWF0b3IucmVnaXN0ZXJPdXQodGhpcy5lbXVsYXRvcik7XG4gICAgbWVkaWF0b3IucmVnaXN0ZXJJbihwYWludGVyKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZW11bGF0b3IuaW5pdCgpO1xuICB9XG59XG5cbm5ldyBNYWluKCkuc3RhcnQoKTtcbiIsImltcG9ydCB7IElDb2xsZWFndWUgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lDb2xsZWFndWUnO1xyXG5pbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tICcuLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3InO1xyXG5pbXBvcnQgQml0IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9CaXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU1lZGlhdG9yIHtcclxuICBpbjogSUNvbGxlYWd1ZSB8IHVuZGVmaW5lZDtcclxuICBvdXQ6IElDb2xsZWFndWUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHJlZ2lzdGVySW4oY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKTogdm9pZCB7XHJcbiAgICB0aGlzLmluID0gY29sbGVhZ3VlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPdXQoY29sbGVhZ3VlOiBJQ29sbGVhZ3VlKTogdm9pZCB7XHJcbiAgICB0aGlzLm91dCA9IGNvbGxlYWd1ZTtcclxuICB9XHJcblxyXG4gIHNlbmRPdXQocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0OiBCaXQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpbmAgaXMgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluLnJlY2VpdmUocG9ydCwgdmFsLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgc2VuZEluKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdDogQml0KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3V0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYG91dGAgaXMgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm91dC5yZWNlaXZlKHBvcnQsIHZhbCwgYml0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgaW5gIGlzIG5vdCBpbml0aWFsaXplZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbi51cGRhdGVTY3JlZW4oYWRkciwgdmFsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSU1lZGlhdG9yIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JTWVkaWF0b3InO1xyXG5pbXBvcnQgeyBJQ29sbGVhZ3VlIH0gZnJvbSAnLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JQ29sbGVhZ3VlJztcclxuaW1wb3J0IEJpdCBmcm9tICcuLi9lbXVsYXRvci9tb2RlbHMvQml0JztcclxuaW1wb3J0IFVpbnQxNiBmcm9tICcuLi9lbXVsYXRvci9tb2RlbHMvVWludDE2JztcclxuaW1wb3J0IFVpbnQ4IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9VaW50OCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuLi9lbXVsYXRvci91dGlscy91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFpbnRlciBpbXBsZW1lbnRzIElDb2xsZWFndWUge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XHJcbiAgcHVibGljIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgLy8gcHJpdmF0ZSBtZW1vcnk6IEJ5dGVBcnJheSA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcclxuICAvLyBwcml2YXRlIF9wYWludGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgLy8gcHJpdmF0ZSBfeDogbnVtYmVyID0gMHgwO1xyXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudHM7XHJcbiAgcHJpdmF0ZSBzaGlmdFJlZ2lzdGVyOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XHJcbiAgcHJpdmF0ZSBzaGlmdE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IElNZWRpYXRvcikge1xyXG4gICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCAmJiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5tZWRpYXRvciA9IG1lZGlhdG9yO1xyXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKHRoaXMuc2VuZC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZXZlbnRzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHNlbmQocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0PzogQml0KTogdm9pZCB7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnNlbmRJbihwb3J0LCB2YWwsIGJpdCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdD86IEJpdCk6IHZvaWQge1xyXG4gICAgdGhpcy53cml0ZShwb3J0LCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2NyZWVuKGFkZHI6IG51bWJlciwgdmFsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJhc2UgPSBhZGRyIC0gMHgyNDAwO1xyXG4gICAgY29uc3QgeSA9IH4oKChiYXNlICYgMHgxZikgKiA4KSAmIDB4ZmYpICYgMHhmZjtcclxuICAgIGNvbnN0IHggPSBiYXNlID4+IDU7XHJcblxyXG4gICAgY29uc3QgYmluID0gdmFsLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KDgsICcwJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wYWludCh4LCB5ICsgaSwgTnVtYmVyKGJpbi5jaGFyQXQoaSkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFpbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9uOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcclxuICAgICAgLy8gdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCAxLCAxKTtcclxuICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IG9uID8gJ3doaXRlJyA6ICdibGFjayc7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4ICogMywgeSAqIDMsIDMsIDMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3cml0ZSA9IChwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAocG9ydCA9PT0gNikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHBvcnQpIHtcclxuICAgICAgY2FzZSAyOiAvLyBzaGlmdCByZWdpc3RlciByZXN1bHQgb2Zmc2V0IChiaXRzIDAsMSwyKVxyXG4gICAgICAgIC8vIGlmICh2YWwgPT09IDApIHtcclxuICAgICAgICAvLyAgIG9mZnNldCA9IDA7XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh2YWwgPT09IDEpIHtcclxuICAgICAgICAvLyAgIG9mZnNldCA9IDI7XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh2YWwgPT09IDIpIHtcclxuICAgICAgICAvLyAgIG9mZnNldCA9IDc7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAob2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnNoaWZ0T2Zmc2V0ID0gdmFsICYgMHg3O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOiAvL3NvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IC8vIGZpbGwgc2hpZnQgcmVnaXN0ZXJcclxuICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQodGhpcy5zaGlmdFJlZ2lzdGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlmdFJlZ2lzdGVyID0gbmV3IFVpbnQxNigodmFsIDw8IDgpIHwgaGlnaC52YWwoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaWZ0ZWQgPSBuZXcgVWludDgoXHJcbiAgICAgICAgICAodGhpcy5zaGlmdFJlZ2lzdGVyLnZhbCgpIDw8IHRoaXMuc2hpZnRPZmZzZXQpID4+IDhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmQoMywgc2hpZnRlZC52YWwoKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogLy8gc291bmQgcmVsYXRlZFxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHZhbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjogLy8gZGVidWcgcG9ydFxyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKHBvcnQsIHZhbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB1bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24gPSAocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFVuaW1wbGVtZW50ZWQgY29kZTogcG9ydCAke3BvcnR9IHdpdGggdmFsdWUgJHt2YWx9YCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogYWRkIGlucHV0XHJcbmNsYXNzIEV2ZW50cyB7XHJcbiAgcHJpdmF0ZSBvbktleVByZXNzKHBvcnQ6IG51bWJlciwgYml0OiBudW1iZXIsIHZhbDogQml0KSB7fVxyXG5cclxuICBjb25zdHJ1Y3RvcihvbktleVByZXNzOiBhbnkpIHtcclxuICAgIHRoaXMub25LZXlQcmVzcyA9IG9uS2V5UHJlc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHdpbmRvdy5vbmtleWRvd24gPSBlID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdwcmVzc2VkICcsIGtleSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgMTY6IHtcclxuICAgICAgICAgIC8vIHNoaWZ0IChjcmVkaXQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgMCwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzNzoge1xyXG4gICAgICAgICAgLy8ga2V5IGxlZnQgKGxlZnQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMCwgNiwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzOToge1xyXG4gICAgICAgICAgLy8ga2V5IHJpZ2h0IChyaWdodClcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygwLCA1LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDMyOiB7XHJcbiAgICAgICAgICAvLyBzcGFjZSAoZmlyZSlcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcygwLCA0LCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDQ5OiB7XHJcbiAgICAgICAgICAvLyAxIChmaXJzdCBwbGF5ZXIgc3RhcnQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMSwgMiwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9