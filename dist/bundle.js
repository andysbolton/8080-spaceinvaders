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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Bit */ "./src/emulator/models/Bit.ts");
/* harmony import */ var _models_ByteArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ByteArray */ "./src/emulator/models/ByteArray.ts");
/* harmony import */ var _models_CpuState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/CpuState */ "./src/emulator/models/CpuState.ts");
/* harmony import */ var _models_Uint16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Uint16 */ "./src/emulator/models/Uint16.ts");
/* harmony import */ var _models_Uint8__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Uint8 */ "./src/emulator/models/Uint8.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./src/emulator/utils/utils.ts");
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






// prettier-ignore
var cycles8080 = [
    //  0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F
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
    5, 10, 10, 10, 11, 11, 7, 11, 5, 10, 10, 10, 11, 17, 7, 11,
    5, 10, 10, 10, 11, 11, 7, 11, 5, 10, 10, 10, 11, 17, 7, 11,
    5, 10, 10, 18, 11, 11, 7, 11, 5, 5, 10, 4, 11, 17, 7, 11,
    5, 10, 10, 4, 11, 11, 7, 11, 5, 5, 10, 4, 11, 17, 7, 11 // F
];
// CPU running at 2mhz, 2 interrupts running at 60mhz
var cyclesUntilInterrupt = Math.ceil(2000000 / 60 / 2);
var Emulator = /** @class */ (function () {
    function Emulator(_a) {
        var _this = this;
        var mediator = _a.mediator, debug = _a.debug, test = _a.test;
        this.instructionNumber = 0;
        this.lastInterrupt = 1;
        this.cycles = 0;
        this.test = false;
        this.testComplete = false;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var state, next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        state = this.state;
                        _a.label = 1;
                    case 1:
                        if (!(state.pc.val() > -1)) return [3 /*break*/, 4];
                        if (this.testComplete) {
                            return [3 /*break*/, 4];
                        }
                        if (!(this.instructionNumber % 1000 === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        next = this.readNext();
                        this.cycles += next;
                        if (this.cycles >= cyclesUntilInterrupt && !this.test) {
                            if (this.state.intEnable.val() === 1) {
                                if (this.lastInterrupt === 2) {
                                    this.generateInterrupt(1);
                                    this.lastInterrupt = 1;
                                }
                                else {
                                    this.generateInterrupt(2);
                                    this.lastInterrupt = 2;
                                }
                                this.state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0);
                            }
                            this.cycles -= cyclesUntilInterrupt;
                        }
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this.cycles];
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
            if (_this.test || _this.debug) {
                _this.log(state.pc.val(), opcode);
            }
            switch (opcode) {
                case 0x00: {
                    // NOP
                    state.pc.incr(1);
                    break;
                }
                case 0x01:
                    // LXI B, D16
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = ((state.a.val() & 0x80) >> 7) | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
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
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](rotated);
                    state.pc.incr(1);
                    break;
                }
                case 0x10: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x11: {
                    // LXI D, D16
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                    var carry = state.cc.cy;
                    _this.setCarryBit(state.a.highOrderBit);
                    var a = carry | (state.a.val() << 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
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
                    var carry = state.cc.cy;
                    state.cc.cy = state.a.lowOrderBit;
                    var a = (carry << 7) | (state.a.val() >> 1);
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](a);
                    state.pc.incr(1);
                    break;
                }
                case 0x20: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x21: {
                    // LXI H, D16
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x22: {
                    // SHLD addr
                    var location_1 = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
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
                    var location_2 = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concat(_this.byteAt(2).val(), _this.byteAt(1).val());
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
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](~state.a.val());
                    state.pc.incr(1);
                    break;
                }
                case 0x30: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x31: {
                    // LXI SP, D16
                    state.sp = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x32: {
                    // STA addr
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                    var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa1: {
                    // ANA C
                    var and = state.a.val() & state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa2: {
                    // ANA D
                    var and = state.a.val() & state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa3: {
                    // ANA E
                    var and = state.a.val() & state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa4: {
                    // ANA H
                    var and = state.a.val() & state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa5: {
                    // ANA L
                    var and = state.a.val() & state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa6: {
                    // ANA M
                    var and = state.a.val() & state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa7: {
                    // ANA A
                    var and = state.a.val() & state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa8: {
                    // XRA B
                    var xor = state.a.val() ^ state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xa9: {
                    // XRA C
                    var xor = state.a.val() ^ state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaa: {
                    // XRA D
                    var xor = state.a.val() ^ state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xab: {
                    // XRA E
                    var xor = state.a.val() ^ state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xac: {
                    // XRA H
                    var xor = state.a.val() ^ state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xad: {
                    // XRA L
                    var xor = state.a.val() ^ state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xae: {
                    // XRA M
                    var xor = state.a.val() ^ state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xaf: {
                    // XRA A
                    var xor = state.a.val() ^ state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](xor);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb0: {
                    // ORA B
                    var val = state.a.val() | state.b.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb1: {
                    // ORA C
                    var val = state.a.val() | state.c.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb2: {
                    // ORA D
                    var val = state.a.val() | state.d.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb3: {
                    // ORA E
                    var val = state.a.val() | state.e.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb4: {
                    // ORA H
                    var val = state.a.val() | state.h.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb5: {
                    // ORA H
                    var val = state.a.val() | state.l.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb6: {
                    // ORA M
                    var val = state.a.val() | state.memory[state.hl.val()].val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
                    _this.setCarryBit(0);
                    _this.setFlags(state.a);
                    state.pc.incr(1);
                    break;
                }
                case 0xb7: {
                    // ORA A
                    var val = state.a.val() | state.a.val();
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
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
                    state.bc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xc2: {
                    // JNZ address
                    if (state.cc.z === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xc3: {
                    // JMP address
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xc4: {
                    // CNZ addr
                    if (state.cc.z === 0) {
                        _this.call();
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
                    state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_3__["default"](0);
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
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    break;
                }
                case 0xca: {
                    // JZ addr
                    if (state.cc.z === 1) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                        _this.call();
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
                    var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](3));
                    var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(val), high = _a.high, low = _a.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                    state.de = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xd2: {
                    // 	JNC address
                    if (state.cc.cy === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xd3: {
                    // OUT D8
                    if (!_this.test) {
                        _this.send(_this.byteAt(1).val(), state.a.val());
                    }
                    else {
                        // Writing to out indicates the end of a test
                        _this.testComplete = true;
                    }
                    state.pc.incr(2);
                    break;
                }
                case 0xd4: {
                    // CNC addr
                    if (state.cc.cy === 0) {
                        _this.call();
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
                    var _b = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc.add(2)), high = _b.high, low = _b.low;
                    _this.updateRam(state.sp.decr(1), high);
                    _this.updateRam(state.sp.decr(1), low);
                    state.pc = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](0x10);
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
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                        _this.call();
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
                    state.hl = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xe2: {
                    // JPO addr
                    if (state.cc.p === 0) {
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                        _this.call();
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
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](and);
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
                        var addr = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                        _this.call();
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
                    var val = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](state.a.val() ^ _this.byteAt(1).val());
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
                    state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 7) & 1);
                    state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 6) & 1);
                    state.cc.ac = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 4) & 1);
                    state.cc.p = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((low >> 2) & 1);
                    state.cc.cy = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(low & 1);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xf2: {
                    // JP addr
                    if (state.cc.s === 0) {
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
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
                        _this.call();
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
                    state.a = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](val);
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
                        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xfb: {
                    // EI
                    state.intEnable = new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](1);
                    state.pc.incr(1);
                    break;
                }
                case 0xfc: {
                    // CM addr
                    if (state.cc.s === 1) {
                        _this.call();
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
                    _this.unimplementedInstruction(opcode);
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
            state.cc.z = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((n.val() & 0xff) === 0);
            state.cc.s = Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])((n.val() & 0x80) === 0x80);
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
            return Object(_models_Bit__WEBPACK_IMPORTED_MODULE_0__["toBit"])(!(parity % 2));
        };
        this.mov = function (srcKey, destKey) {
            if (srcKey === 'm' || destKey === 'm') {
                throw new Error('src and dest cannot be a memory location');
            }
            _this.state[srcKey] = _this.state[destKey].clone();
            _this.state.pc.incr(1);
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
        this.byteAt = function (index) {
            var state = _this.state;
            return state.memory[state.pc.val() + index];
        };
        this.ret = function () {
            var state = _this.state;
            var low = state.memory[state.sp.val()];
            var high = state.memory[state.sp.incr(1)];
            state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(high, low);
            state.sp.incr(1);
            _this.cycles += 6;
        };
        this.unimplementedInstruction = function (opcode) {
            var state = _this.state;
            throw new Error("Unimplemented code at instruction " + _this.instructionNumber + " at for opcode " + opcode.toString(16) + " at offset " + state.pc.val());
        };
        this.state = new _models_CpuState__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.state.memory.alloc(0x10000);
        var useDebug = !!debug;
        var useTest = !!test;
        this.mediator = mediator;
        this.debug = useDebug;
        this.test = useTest;
        this.in = _models_ByteArray__WEBPACK_IMPORTED_MODULE_1__["default"].create();
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
        this.in.splice(port, 1, new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](newVal));
    };
    Emulator.prototype.updateScreen = function (addr, val) {
        this.mediator.updateScreen(addr, val);
    };
    Emulator.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, buf, view, romBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('invaders')];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.arrayBuffer()];
                    case 2:
                        buf = _a.sent();
                        view = new Uint8Array(buf);
                        romBytes = __spread(view).map(Number);
                        this.state.memory.set(__spread(romBytes)); //  ...ramBytes
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
                        // state.pc = new Uint16(0x100);
                        // // inject "out 1,a" at 0x0000 (signal to stop the test)
                        // state.memory[0x0000] = new Uint8(0xd3);
                        // state.memory[0x0001] = new Uint8(0x00);
                        // // inject "in a,0" at 0x0005 (signal to output some characters)
                        // state.memory[0x0005] = new Uint8(0xdb);
                        // state.memory[0x0006] = new Uint8(0x00);
                        // state.memory[0x0007] = new Uint8(0xc9);
                        this.run();
                        return [2 /*return*/];
                }
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
        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(state.pc), high = _a.high, low = _a.low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);
        //Set the PC to the low memory vector.
        //This is identical to an "RST interrupt_num" instruction.
        state.pc = new _models_Uint16__WEBPACK_IMPORTED_MODULE_3__["default"](8 * interruptNum);
    };
    Emulator.prototype.call = function () {
        var state = this.state;
        var val = state.pc.add(new _models_Uint8__WEBPACK_IMPORTED_MODULE_4__["default"](3));
        var _a = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].split(val), high = _a.high, low = _a.low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);
        state.pc = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["default"].concatUint(this.byteAt(2), this.byteAt(1));
        this.cycles += 6;
    };
    Emulator.prototype.updateRam = function (location, value) {
        var state = this.state;
        state.memory.splice(location, 1, value.clone());
        if (location >= 0x2400 && location <= 0x3fff) {
            // video ram
            this.updateScreen(location, value.val());
        }
    };
    Emulator.prototype.modifyBit = function (number, pos, b) {
        var mask = 1 << pos;
        return (number & ~mask) | ((b << pos) & mask);
    };
    return Emulator;
}());
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
        this.emulator = new _emulator_emulator__WEBPACK_IMPORTED_MODULE_1__["default"]({ mediator: mediator, debug: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL2VtdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQml0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQnl0ZUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbXVsYXRvci9tb2RlbHMvQ29uZGl0aW9uQ29kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9DcHVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvbW9kZWxzL1VpbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50MTYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtdWxhdG9yL21vZGVscy9VaW50OC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW11bGF0b3IvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tZWRpYXRvci9NZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFpbnRlci9wYWludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGMEM7QUFDQztBQUNGO0FBRUo7QUFDRjtBQUNEO0FBSWxDLGtCQUFrQjtBQUNsQixJQUFNLFVBQVUsR0FBRztJQUNqQixpRUFBaUU7SUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztJQUM3RCxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO0lBQzdELENBQUMsRUFBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7SUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztJQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO0lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7SUFDN0QsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztJQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO0lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7SUFDN0QsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQztJQUM3RCxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDO0lBQzdELENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsQ0FBQyxFQUFHLENBQUM7SUFDN0QsQ0FBQyxFQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRTtJQUM5RCxDQUFDLEVBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxFQUFFO0lBQzlELENBQUMsRUFBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFH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b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDUCx5QkFBeUI7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQml0LCB7IHRvQml0IH0gZnJvbSAnLi9tb2RlbHMvQml0JztcclxuaW1wb3J0IEJ5dGVBcnJheSBmcm9tICcuL21vZGVscy9CeXRlQXJyYXknO1xyXG5pbXBvcnQgQ3B1U3RhdGUgZnJvbSAnLi9tb2RlbHMvQ3B1U3RhdGUnO1xyXG5pbXBvcnQgVWludCBmcm9tICcuL21vZGVscy9VaW50JztcclxuaW1wb3J0IFVpbnQxNiBmcm9tICcuL21vZGVscy9VaW50MTYnO1xyXG5pbXBvcnQgVWludDggZnJvbSAnLi9tb2RlbHMvVWludDgnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7IElDb2xsZWFndWUgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lDb2xsZWFndWUnO1xyXG5pbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lNZWRpYXRvcic7XHJcblxyXG4vLyBwcmV0dGllci1pZ25vcmVcclxuY29uc3QgY3ljbGVzODA4MCA9IFtcclxuICAvLyAgMCAgIDEgICAyICAgMyAgIDQgICA1ICAgNiAgIDcgICA4ICAgOSAgIEEgICBCICAgQyAgIEQgICBFICAgRlxyXG4gICAgICA0LCAgMTAsIDcsICA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgNywgIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMFxyXG4gICAgICA0LCAgMTAsIDcsICA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgNywgIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMVxyXG4gICAgICA0LCAgMTAsIDE2LCA1LCAgNSwgIDUsICA3LCAgNCwgIDQsICAxMCwgMTYsIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gMlxyXG4gICAgICA0LCAgMTAsIDEzLCA1LCAgMTAsIDEwLCAxMCwgNCwgIDQsICAxMCwgMTMsIDUsICA1LCAgNSwgIDcsICA0LCAgLy8gM1xyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNFxyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNVxyXG4gICAgICA1LCAgNSwgIDUsICA1LCAgNSwgIDUsICA3LCAgNSwgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gNlxyXG4gICAgICA3LCAgNywgIDcsICA3LCAgNywgIDcsICA3LCAgNywgIDUsICA1LCAgNSwgIDUsICA1LCAgNSwgIDcsICA1LCAgLy8gN1xyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gOFxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gOVxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gQVxyXG4gICAgICA0LCAgNCwgIDQsICA0LCAgNCwgIDQsICA3LCAgNCwgIDQsICA0LCAgNCwgIDQsICA0LCAgNCwgIDcsICA0LCAgLy8gQlxyXG4gICAgICA1LCAgMTAsIDEwLCAxMCwgMTEsIDExLCA3LCAgMTEsIDUsICAxMCwgMTAsIDEwLCAxMSwgMTcsIDcsICAxMSwgLy8gQ1xyXG4gICAgICA1LCAgMTAsIDEwLCAxMCwgMTEsIDExLCA3LCAgMTEsIDUsICAxMCwgMTAsIDEwLCAxMSwgMTcsIDcsICAxMSwgLy8gRFxyXG4gICAgICA1LCAgMTAsIDEwLCAxOCwgMTEsIDExLCA3LCAgMTEsIDUsICA1LCAgMTAsIDQsICAxMSwgMTcsIDcsICAxMSwgLy8gRVxyXG4gICAgICA1LCAgMTAsIDEwLCA0LCAgMTEsIDExLCA3LCAgMTEsIDUsICA1LCAgMTAsIDQsICAxMSwgMTcsIDcsICAxMSAgLy8gRlxyXG5dO1xyXG5cclxuLy8gQ1BVIHJ1bm5pbmcgYXQgMm1oeiwgMiBpbnRlcnJ1cHRzIHJ1bm5pbmcgYXQgNjBtaHpcclxuY29uc3QgY3ljbGVzVW50aWxJbnRlcnJ1cHQ6IG51bWJlciA9IE1hdGguY2VpbCgyMDAwMDAwIC8gNjAgLyAyKTtcclxuXHJcbmNsYXNzIEVtdWxhdG9yIGltcGxlbWVudHMgSUNvbGxlYWd1ZSB7XHJcbiAgZGVidWc6IGJvb2xlYW47XHJcbiAgc3RhdGU6IENwdVN0YXRlO1xyXG4gIGluOiBCeXRlQXJyYXk7XHJcbiAgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICBpbnN0cnVjdGlvbk51bWJlcjogbnVtYmVyID0gMDtcclxuICBsYXN0SW50ZXJydXB0OiBudW1iZXIgPSAxO1xyXG4gIGN5Y2xlczogbnVtYmVyID0gMDtcclxuICB0ZXN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGVzdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIG1lZGlhdG9yLFxyXG4gICAgZGVidWcsXHJcbiAgICB0ZXN0LFxyXG4gIH06IHtcclxuICAgIG1lZGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgICB0ZXN0PzogYm9vbGVhbjtcclxuICAgIGRlYnVnPzogYm9vbGVhbjtcclxuICB9KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV3IENwdVN0YXRlKCk7XHJcbiAgICB0aGlzLnN0YXRlLm1lbW9yeS5hbGxvYygweDEwMDAwKTtcclxuXHJcbiAgICBjb25zdCB1c2VEZWJ1ZyA9ICEhZGVidWc7XHJcbiAgICBjb25zdCB1c2VUZXN0ID0gISF0ZXN0O1xyXG5cclxuICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcclxuICAgIHRoaXMuZGVidWcgPSB1c2VEZWJ1ZztcclxuICAgIHRoaXMudGVzdCA9IHVzZVRlc3Q7XHJcblxyXG4gICAgdGhpcy5pbiA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcclxuICAgIHRoaXMuaW4uYWxsb2MoOCk7XHJcbiAgfVxyXG5cclxuICBzZW5kKHBvcnQ6IG51bWJlciwgcG9zOiBudW1iZXIsIGJpdD86IEJpdCkge1xyXG4gICAgdGhpcy5tZWRpYXRvci5zZW5kT3V0KHBvcnQsIHBvcywgYml0KTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmUocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0PzogQml0KSB7XHJcbiAgICBsZXQgbmV3VmFsID0gdmFsO1xyXG4gICAgaWYgKGJpdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG5ld1ZhbCA9IHRoaXMubW9kaWZ5Qml0KHRoaXMuaW5bcG9ydF0udmFsKCksIHZhbCwgYml0IGFzIEJpdCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluLnNwbGljZShwb3J0LCAxLCBuZXcgVWludDgobmV3VmFsKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY3JlZW4oYWRkcjogbnVtYmVyLCB2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5tZWRpYXRvci51cGRhdGVTY3JlZW4oYWRkciwgdmFsKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaW52YWRlcnMnKTtcclxuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XHJcbiAgICBjb25zdCByb21CeXRlcyA9IFsuLi52aWV3XS5tYXAoTnVtYmVyKTtcclxuICAgIHRoaXMuc3RhdGUubWVtb3J5LnNldChbLi4ucm9tQnl0ZXNdKTsgLy8gIC4uLnJhbUJ5dGVzXHJcblxyXG4gICAgLy9GaXggdGhlIGZpcnN0IGluc3RydWN0aW9uIHRvIGJlIEpNUCAweDEwMFxyXG4gICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMF0gPSBuZXcgVWludDgoMHhjMyk7XHJcbiAgICAvLyB0aGlzLnN0YXRlLm1lbW9yeVsxXSA9IG5ldyBVaW50OCgwKTtcclxuICAgIC8vIHRoaXMuc3RhdGUubWVtb3J5WzJdID0gbmV3IFVpbnQ4KDB4MDEpO1xyXG5cclxuICAgIC8vIC8vIEZpeCB0aGUgc3RhY2sgcG9pbnRlciBmcm9tIDB4NmFkIHRvIDB4N2FkXHJcbiAgICAvLyAvLyB0aGlzIDB4MDYgYnl0ZSAxMTIgaW4gdGhlIGNvZGUsIHdoaWNoIGlzXHJcbiAgICAvLyAvLyBieXRlIDExMiArIDB4MTAwID0gMzY4IGluIG1lbW9yeVxyXG4gICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMzY4XSA9IG5ldyBVaW50OCgweDcpO1xyXG5cclxuICAgIC8vIC8vU2tpcCBEQUEgdGVzdFxyXG4gICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMHg1OWNdID0gbmV3IFVpbnQ4KDB4YzMpOyAvL0pNUFxyXG4gICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMHg1OWRdID0gbmV3IFVpbnQ4KDB4YzIpO1xyXG4gICAgLy8gdGhpcy5zdGF0ZS5tZW1vcnlbMHg1OWVdID0gbmV3IFVpbnQ4KDB4MDUpO1xyXG5cclxuICAgIC8vIHN0YXRlLnBjID0gbmV3IFVpbnQxNigweDEwMCk7XHJcbiAgICAvLyAvLyBpbmplY3QgXCJvdXQgMSxhXCIgYXQgMHgwMDAwIChzaWduYWwgdG8gc3RvcCB0aGUgdGVzdClcclxuICAgIC8vIHN0YXRlLm1lbW9yeVsweDAwMDBdID0gbmV3IFVpbnQ4KDB4ZDMpO1xyXG4gICAgLy8gc3RhdGUubWVtb3J5WzB4MDAwMV0gPSBuZXcgVWludDgoMHgwMCk7XHJcblxyXG4gICAgLy8gLy8gaW5qZWN0IFwiaW4gYSwwXCIgYXQgMHgwMDA1IChzaWduYWwgdG8gb3V0cHV0IHNvbWUgY2hhcmFjdGVycylcclxuICAgIC8vIHN0YXRlLm1lbW9yeVsweDAwMDVdID0gbmV3IFVpbnQ4KDB4ZGIpO1xyXG4gICAgLy8gc3RhdGUubWVtb3J5WzB4MDAwNl0gPSBuZXcgVWludDgoMHgwMCk7XHJcbiAgICAvLyBzdGF0ZS5tZW1vcnlbMHgwMDA3XSA9IG5ldyBVaW50OCgweGM5KTtcclxuXHJcbiAgICB0aGlzLnJ1bigpO1xyXG4gIH1cclxuXHJcbiAgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuXHJcbiAgICB3aGlsZSAoc3RhdGUucGMudmFsKCkgPiAtMSkge1xyXG4gICAgICBpZiAodGhpcy50ZXN0Q29tcGxldGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXIgJSAxMDAwID09PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV4dCA9IHRoaXMucmVhZE5leHQoKTtcclxuICAgICAgdGhpcy5jeWNsZXMgKz0gbmV4dDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlcyA+PSBjeWNsZXNVbnRpbEludGVycnVwdCAmJiAhdGhpcy50ZXN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW50RW5hYmxlLnZhbCgpID09PSAxKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sYXN0SW50ZXJydXB0ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbnRlcnJ1cHQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEludGVycnVwdCA9IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlSW50ZXJydXB0KDIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RJbnRlcnJ1cHQgPSAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5pbnRFbmFibGUgPSBuZXcgVWludDgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGVzIC09IGN5Y2xlc1VudGlsSW50ZXJydXB0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3ljbGVzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbG9nID0gKGNvdW50ZXI6IG51bWJlciwgb3Bjb2RlOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYGF0ICR7Y291bnRlcn0gKDB4JHtjb3VudGVyLnRvU3RyaW5nKDE2KX0pLCBpbnN0cnVjdGlvbiAke1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXJcclxuICAgICAgfSwgY29tbWFuZCAweCR7b3Bjb2RlLnRvU3RyaW5nKDE2KX1gXHJcbiAgICApO1xyXG4gICAgdGhpcy5sb2dTdGF0ZShzdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZygnY3ljbGVzOiAnLCB0aGlzLmN5Y2xlcyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBsb2dTdGF0ZShzdGF0ZTogQ3B1U3RhdGUpIHtcclxuICAgIGNvbnN0IHsgY2MgfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBcclxuICAgIHtcclxuICAgICAgYTogJHtzdGF0ZS5hLmhleH1cclxuICAgICAgYmM6ICR7c3RhdGUuYmMuaGV4fVxyXG4gICAgICBkZTogJHtzdGF0ZS5kZS5oZXh9XHJcbiAgICAgIGhsOiAke3N0YXRlLmhsLmhleH1cclxuICAgICAgcGM6ICR7c3RhdGUucGMuaGV4fVxyXG4gICAgICBzcDogJHtzdGF0ZS5zcC5oZXh9XHJcbiAgICAgIGNjOiB7XHJcbiAgICAgICAgejogJHtjYy56fVxyXG4gICAgICAgIHM6ICR7Y2Muc31cclxuICAgICAgICBwOiAke2NjLnB9XHJcbiAgICAgICAgY3k6ICR7Y2MuY3l9XHJcbiAgICAgICAgYWM6ICR7Y2MuYWN9XHJcbiAgICAgIH1cclxuICAgIH1gKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVJbnRlcnJ1cHQoaW50ZXJydXB0TnVtOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICAvL3BlcmZvcm0gXCJQVVNIIFBDXCJcclxuICAgIGNvbnN0IHsgaGlnaCwgbG93IH0gPSB1dGlscy5zcGxpdChzdGF0ZS5wYyk7XHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgLy9TZXQgdGhlIFBDIHRvIHRoZSBsb3cgbWVtb3J5IHZlY3Rvci5cclxuICAgIC8vVGhpcyBpcyBpZGVudGljYWwgdG8gYW4gXCJSU1QgaW50ZXJydXB0X251bVwiIGluc3RydWN0aW9uLlxyXG4gICAgc3RhdGUucGMgPSBuZXcgVWludDE2KDggKiBpbnRlcnJ1cHROdW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkTmV4dCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IG9wY29kZSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKV0udmFsKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudGVzdCB8fCB0aGlzLmRlYnVnKSB7XHJcbiAgICAgIHRoaXMubG9nKHN0YXRlLnBjLnZhbCgpLCBvcGNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAob3Bjb2RlKSB7XHJcbiAgICAgIGNhc2UgMHgwMDoge1xyXG4gICAgICAgIC8vIE5PUFxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDAxOlxyXG4gICAgICAgIC8vIExYSSBCLCBEMTZcclxuICAgICAgICBzdGF0ZS5iYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4MDI6IHtcclxuICAgICAgICAvLyBTVEFYIEJcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5iYy52YWwoKSwgc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDM6IHtcclxuICAgICAgICAvLyBJTlggQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmJjLmFkZCgxKTtcclxuICAgICAgICBzdGF0ZS5iYyA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwNDoge1xyXG4gICAgICAgIC8vIElOUiBCXHJcbiAgICAgICAgc3RhdGUuYi5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYik7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MDU6IHtcclxuICAgICAgICAvLyBEQ1IgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmIuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5iID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA2OiB7XHJcbiAgICAgICAgLy8gTVZJIEIsIEQ4XHJcbiAgICAgICAgc3RhdGUuYiA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA3OiB7XHJcbiAgICAgICAgLy8gUkxDXHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdChzdGF0ZS5hLmhpZ2hPcmRlckJpdCk7XHJcbiAgICAgICAgY29uc3QgYSA9ICgoc3RhdGUuYS52YWwoKSAmIDB4ODApID4+IDcpIHwgKHN0YXRlLmEudmFsKCkgPDwgMSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwODoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDA5OiB7XHJcbiAgICAgICAgLy8gREFEIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuYmMpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwYToge1xyXG4gICAgICAgIC8vIExEQVggQlxyXG4gICAgICAgIHN0YXRlLmEgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuYmMudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBiOiB7XHJcbiAgICAgICAgLy8gRENYIEJcclxuICAgICAgICBzdGF0ZS5iYyA9IHN0YXRlLmJjLnN1YigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgwYzoge1xyXG4gICAgICAgIC8vIElOUiBDXHJcbiAgICAgICAgc3RhdGUuYy5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYyk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MGQ6IHtcclxuICAgICAgICAvLyBEQ1IgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmMuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5jID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBlOiB7XHJcbiAgICAgICAgLy8gTVZJIEMsIEQ4XHJcbiAgICAgICAgc3RhdGUuYyA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDBmOiB7XHJcbiAgICAgICAgLy8gUlJDXHJcbiAgICAgICAgY29uc3QgbG9iID0gc3RhdGUuYS5sb3dPcmRlckJpdDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KGxvYik7XHJcbiAgICAgICAgY29uc3Qgcm90YXRlZCA9IChsb2IgPDwgNykgfCAoc3RhdGUuYS52YWwoKSA+PiAxKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KHJvdGF0ZWQpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDEwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTE6IHtcclxuICAgICAgICAvLyBMWEkgRCwgRDE2XHJcbiAgICAgICAgc3RhdGUuZGUgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTI6IHtcclxuICAgICAgICAvLyBTVEFYIERcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5kZS52YWwoKSwgc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTM6IHtcclxuICAgICAgICAvLyBJTlggRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmRlLmFkZCgxKTtcclxuICAgICAgICBzdGF0ZS5kZSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxNDoge1xyXG4gICAgICAgIC8vIElOUiBEXHJcbiAgICAgICAgc3RhdGUuZC5pbmNyKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuZCk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTU6IHtcclxuICAgICAgICAvLyBEQ1IgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmQuc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5kID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE2OiB7XHJcbiAgICAgICAgLy8gTVZJIEQsIEQ4XHJcbiAgICAgICAgc3RhdGUuZCA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE3OiB7XHJcbiAgICAgICAgLy8gUkFMXHJcbiAgICAgICAgY29uc3QgY2FycnkgPSBzdGF0ZS5jYy5jeTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHN0YXRlLmEuaGlnaE9yZGVyQml0KTtcclxuICAgICAgICBjb25zdCBhID0gY2FycnkgfCAoc3RhdGUuYS52YWwoKSA8PCAxKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KGEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MTk6IHtcclxuICAgICAgICAvLyBEQUQgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmhsLmFkZChzdGF0ZS5kZSk7XHJcbiAgICAgICAgc3RhdGUuaGwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwuY2FycnkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFhOiB7XHJcbiAgICAgICAgLy8gTERBWCBEXHJcbiAgICAgICAgc3RhdGUuYSA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5kZS52YWwoKV07XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWI6IHtcclxuICAgICAgICAvLyBEQ1ggRFxyXG4gICAgICAgIHN0YXRlLmRlID0gc3RhdGUuZGUuc3ViKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDFjOiB7XHJcbiAgICAgICAgLy8gSU5SIEVcclxuICAgICAgICBzdGF0ZS5lLmluY3IoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5lKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgxZDoge1xyXG4gICAgICAgIC8vIERDUiBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuZS5zdWIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmUgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWU6IHtcclxuICAgICAgICAvLyBNVkkgRSwgRDhcclxuICAgICAgICBzdGF0ZS5lID0gdGhpcy5ieXRlQXQoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MWY6IHtcclxuICAgICAgICAvLyBSQVJcclxuICAgICAgICBjb25zdCBjYXJyeSA9IHN0YXRlLmNjLmN5O1xyXG4gICAgICAgIHN0YXRlLmNjLmN5ID0gc3RhdGUuYS5sb3dPcmRlckJpdDtcclxuICAgICAgICBjb25zdCBhID0gKGNhcnJ5IDw8IDcpIHwgKHN0YXRlLmEudmFsKCkgPj4gMSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OChhKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIxOiB7XHJcbiAgICAgICAgLy8gTFhJIEgsIEQxNlxyXG4gICAgICAgIHN0YXRlLmhsID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDIyOiB7XHJcbiAgICAgICAgLy8gU0hMRCBhZGRyXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB1dGlscy5jb25jYXQoXHJcbiAgICAgICAgICB0aGlzLmJ5dGVBdCgyKS52YWwoKSxcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDEpLnZhbCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShsb2NhdGlvbiwgc3RhdGUubCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0obG9jYXRpb24gKyAxLCBzdGF0ZS5oKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyMzoge1xyXG4gICAgICAgIC8vIElOWCBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKDEpO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI0OiB7XHJcbiAgICAgICAgLy8gSU5SIEhcclxuICAgICAgICBzdGF0ZS5oLmluY3IoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5oKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyNToge1xyXG4gICAgICAgIC8vXHREQ1IgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmguc3ViKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5oID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI2OiB7XHJcbiAgICAgICAgLy8gTVZJIEgsIEQ4XHJcbiAgICAgICAgc3RhdGUuaCA9IHRoaXMuYnl0ZUF0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mjg6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyOToge1xyXG4gICAgICAgIC8vIERBRCBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuaGwuYWRkKHN0YXRlLmhsKTtcclxuICAgICAgICBzdGF0ZS5obCA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KHZhbC5jYXJyeSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmE6IHtcclxuICAgICAgICAvLyBMSExEIGFkZHJcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHV0aWxzLmNvbmNhdChcclxuICAgICAgICAgIHRoaXMuYnl0ZUF0KDIpLnZhbCgpLFxyXG4gICAgICAgICAgdGhpcy5ieXRlQXQoMSkudmFsKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHN0YXRlLmwgPSBzdGF0ZS5tZW1vcnlbbG9jYXRpb25dO1xyXG4gICAgICAgIHN0YXRlLmggPSBzdGF0ZS5tZW1vcnlbbG9jYXRpb24gKyAxXTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyYjoge1xyXG4gICAgICAgIC8vIERDWCBIXHJcbiAgICAgICAgc3RhdGUuaGwgPSBzdGF0ZS5obC5zdWIoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MmM6IHtcclxuICAgICAgICAvLyBJTlIgTFxyXG4gICAgICAgIHN0YXRlLmwuaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmwpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDJkOiB7XHJcbiAgICAgICAgLy8gRENSIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5sLnN1YigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUubCA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyZToge1xyXG4gICAgICAgIC8vIE1WSSBMLCBEOFxyXG4gICAgICAgIHN0YXRlLmwgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyZjoge1xyXG4gICAgICAgIC8vIENNQVxyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgofnN0YXRlLmEudmFsKCkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDMwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzE6IHtcclxuICAgICAgICAvLyBMWEkgU1AsIEQxNlxyXG4gICAgICAgIHN0YXRlLnNwID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDMyOiB7XHJcbiAgICAgICAgLy8gU1RBIGFkZHJcclxuICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKGFkZHIudmFsKCksIHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDMzOiB7XHJcbiAgICAgICAgLy8gSU5YIFNQXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuc3AuYWRkKDEpO1xyXG4gICAgICAgIHN0YXRlLnNwID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM0OiB7XHJcbiAgICAgICAgLy8gSU5SIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLmFkZCgxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5obC52YWwoKSwgdmFsKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MzU6IHtcclxuICAgICAgICAvLyBEQ1IgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0uc3ViKDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCB2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzNjoge1xyXG4gICAgICAgIC8vIE1WSSBNLCBEOFxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mzc6IHtcclxuICAgICAgICAvLyBTVENcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM4OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Mzk6IHtcclxuICAgICAgICAvLyBEQUQgU1BcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5obC5hZGQoc3RhdGUuc3ApO1xyXG4gICAgICAgIHN0YXRlLmhsID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQodmFsLmNhcnJ5KTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzYToge1xyXG4gICAgICAgIC8vIExEQSBhZGRyXHJcbiAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICBzdGF0ZS5hID0gc3RhdGUubWVtb3J5W2FkZHIudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNiOiB7XHJcbiAgICAgICAgLy8gRENYIFNQXHJcbiAgICAgICAgc3RhdGUuc3AgPSBzdGF0ZS5zcC5zdWIoMSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4M2M6IHtcclxuICAgICAgICAvLyBJTlIgQVxyXG4gICAgICAgIHN0YXRlLmEuaW5jcigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDNkOiB7XHJcbiAgICAgICAgLy8gRENSIEFcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YigxKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzZToge1xyXG4gICAgICAgIC8vIE1WSSBBLCBEOFxyXG4gICAgICAgIHN0YXRlLmEgPSB0aGlzLmJ5dGVBdCgxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzZjoge1xyXG4gICAgICAgIC8vIENNQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmNjLmN5ID09PSAwID8gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCh2YWwpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQwOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDE6XHJcbiAgICAgICAgLy8gTU9WIEIsIENcclxuICAgICAgICB0aGlzLm1vdignYicsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMHg0MjpcclxuICAgICAgICAvLyBNT1YgQiwgRFxyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2QnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAweDQzOlxyXG4gICAgICAgIC8vIE1PViBCLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2InLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDB4NDQ6IHtcclxuICAgICAgICAvLyBNT1YgQiwgSFxyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2gnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDU6IHtcclxuICAgICAgICAvLyBNT1YgQiwgTFxyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2wnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDY6IHtcclxuICAgICAgICAvLyBNT1YgQiwgTVxyXG4gICAgICAgIHRoaXMubW92TWVtKCdiJywgJ20nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDc6IHtcclxuICAgICAgICAvLyBNT1YgQiwgQVxyXG4gICAgICAgIHRoaXMubW92KCdiJywgJ2EnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDg6IHtcclxuICAgICAgICAvLyBNT1YgQywgQlxyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2InKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDk6IHtcclxuICAgICAgICAvLyBNT1YgQywgQ1xyXG4gICAgICAgIHRoaXMubW92KCdjJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NGE6IHtcclxuICAgICAgICAvLyBcdE1PViBDLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2MnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg0Yjoge1xyXG4gICAgICAgIC8vIFx0TU9WIEMsIEVcclxuICAgICAgICB0aGlzLm1vdignYycsICdlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRjOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIEhcclxuICAgICAgICB0aGlzLm1vdignYycsICdoJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRkOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIExcclxuICAgICAgICB0aGlzLm1vdignYycsICdsJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRlOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIE1cclxuICAgICAgICB0aGlzLm1vdk1lbSgnYycsICdtJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDRmOiB7XHJcbiAgICAgICAgLy8gTU9WIEMsIEFcclxuICAgICAgICB0aGlzLm1vdignYycsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUwOiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIEJcclxuICAgICAgICB0aGlzLm1vdignZCcsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUxOiB7XHJcbiAgICAgICAgLy8gTU9WIEQsIENcclxuICAgICAgICB0aGlzLm1vdignZCcsICdjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDUyOiB7XHJcbiAgICAgICAgLy9cdE1PViBELCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2QnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Mzoge1xyXG4gICAgICAgIC8vIE1PViBELCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2QnLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1NDoge1xyXG4gICAgICAgIC8vIE1PViBELCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2QnLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1NToge1xyXG4gICAgICAgIC8vIE1PViBELCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2QnLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Njoge1xyXG4gICAgICAgIC8vIE1PViBELCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2QnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Nzoge1xyXG4gICAgICAgIC8vIE1PViBELCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2QnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1ODoge1xyXG4gICAgICAgIC8vIE1PViBFLCBCXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnYicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1OToge1xyXG4gICAgICAgIC8vIE1PViBFLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1YToge1xyXG4gICAgICAgIC8vIE1PViBFLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Yjoge1xyXG4gICAgICAgIC8vIE1PViBFLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Yzoge1xyXG4gICAgICAgIC8vIE1PViBFLCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1ZDoge1xyXG4gICAgICAgIC8vIE1PViBFLCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1ZToge1xyXG4gICAgICAgIC8vIE1PViBFLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2UnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1Zjoge1xyXG4gICAgICAgIC8vIE1PViBFLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2UnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2MDoge1xyXG4gICAgICAgIC8vIE1PViBILCBCXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnYicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2MToge1xyXG4gICAgICAgIC8vIE1PViBILCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Mjoge1xyXG4gICAgICAgIC8vIE1PViBILCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Mzoge1xyXG4gICAgICAgIC8vIE1PViBILCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2NDoge1xyXG4gICAgICAgIC8vIE1PViBILCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2NToge1xyXG4gICAgICAgIC8vIE1PViBILCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Njoge1xyXG4gICAgICAgIC8vIE1PViBILCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2gnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Nzoge1xyXG4gICAgICAgIC8vIE1PViBILCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2gnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ODoge1xyXG4gICAgICAgIC8vIE1PViBMLCBCXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnYicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2OToge1xyXG4gICAgICAgIC8vIE1PViBMLCBDXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2YToge1xyXG4gICAgICAgIC8vIE1PViBMLCBEXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Yjoge1xyXG4gICAgICAgIC8vIE1PViBMLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Yzoge1xyXG4gICAgICAgIC8vIE1PViBMLCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ZDoge1xyXG4gICAgICAgIC8vIE1PViBMLCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2ZToge1xyXG4gICAgICAgIC8vIE1PViBMLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2wnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg2Zjoge1xyXG4gICAgICAgIC8vIE1PViBMLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2wnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3MDoge1xyXG4gICAgICAgIC8vIE1PViBNLCBCXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnYicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3MToge1xyXG4gICAgICAgIC8vIE1PViBNLCBDXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Mjoge1xyXG4gICAgICAgIC8vIE1PViBNLCBEXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Mzoge1xyXG4gICAgICAgIC8vIE1PViBNLCBFXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3NDoge1xyXG4gICAgICAgIC8vIE1PViBNLCBIXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3NToge1xyXG4gICAgICAgIC8vIE1PViBNLCBMXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ20nLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Njoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc3OiB7XHJcbiAgICAgICAgLy8gTU9WIE0sIEFcclxuICAgICAgICB0aGlzLm1vdk1lbSgnbScsICdhJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc4OiB7XHJcbiAgICAgICAgLy8gTU9WIEEsIEJcclxuICAgICAgICB0aGlzLm1vdignYScsICdiJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc5OiB7XHJcbiAgICAgICAgLy8gXHRNT1YgQSwgQ1xyXG4gICAgICAgIHRoaXMubW92KCdhJywgJ2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2E6IHtcclxuICAgICAgICAvLyBNT1YgQSwgRFxyXG4gICAgICAgIHRoaXMubW92KCdhJywgJ2QnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4N2I6IHtcclxuICAgICAgICAvLyBcdE1PViBBLCBFXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnZScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Yzoge1xyXG4gICAgICAgIC8vIE1PViBBLCBIXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnaCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3ZDoge1xyXG4gICAgICAgIC8vIE1PViBBLCBMXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3ZToge1xyXG4gICAgICAgIC8vIE1PViBBLCBNXHJcbiAgICAgICAgdGhpcy5tb3ZNZW0oJ2EnLCAnbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg3Zjoge1xyXG4gICAgICAgIC8vIE1PViBBLCBBXHJcbiAgICAgICAgdGhpcy5tb3YoJ2EnLCAnYScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4MDoge1xyXG4gICAgICAgIC8vIEFERCBCXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuYik7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODE6IHtcclxuICAgICAgICAvLyBBREQgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmMpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDgyOiB7XHJcbiAgICAgICAgLy8gQUREIERcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5kKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Mzoge1xyXG4gICAgICAgIC8vIEFERCBFXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODQ6IHtcclxuICAgICAgICAvLyBBREQgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmgpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg1OiB7XHJcbiAgICAgICAgLy8gQUREIExcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5sKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Njoge1xyXG4gICAgICAgIC8vIEFERCBNXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ODc6IHtcclxuICAgICAgICAvLyBBREQgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg4OiB7XHJcbiAgICAgICAgLy8gQURDIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5iKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg5OiB7XHJcbiAgICAgICAgLy8gQURDIENcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5jKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhhOiB7XHJcbiAgICAgICAgLy9cdEFEQyBEXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUuZCkuYWRkKHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4Yjoge1xyXG4gICAgICAgIC8vXHRBREMgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLmUpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGM6IHtcclxuICAgICAgICAvL1x0QURDIEhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5oKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDhkOiB7XHJcbiAgICAgICAgLy9cdEFEQyBMXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQoc3RhdGUubCkuYWRkKHN0YXRlLmNjLmN5KTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4ZToge1xyXG4gICAgICAgIC8vXHRBREMgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuYWRkKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0pLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OGY6IHtcclxuICAgICAgICAvL1x0QURDIEFcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLmFkZChzdGF0ZS5hKS5hZGQoc3RhdGUuY2MuY3kpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkwOiB7XHJcbiAgICAgICAgLy8gU1VCIEJcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5MToge1xyXG4gICAgICAgIC8vIFNVQiBDXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTI6IHtcclxuICAgICAgICAvLyBTVUIgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDkzOiB7XHJcbiAgICAgICAgLy8gU1VCIEVcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5lKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5NDoge1xyXG4gICAgICAgIC8vIFNVQiBIXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTU6IHtcclxuICAgICAgICAvLyBTVUIgTFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDk2OiB7XHJcbiAgICAgICAgLy8gU1VCIE1cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1YihzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg5Nzoge1xyXG4gICAgICAgIC8vIFNVQiBBXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTg6IHtcclxuICAgICAgICAvLyBTQkIgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmIuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OTk6IHtcclxuICAgICAgICAvLyBTQkIgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmMuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWE6IHtcclxuICAgICAgICAvLyBTQkIgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmQuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWI6IHtcclxuICAgICAgICAvLyBTQkIgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmUuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWM6IHtcclxuICAgICAgICAvLyBTQkIgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmguYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWQ6IHtcclxuICAgICAgICAvLyBTQkIgTFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmwuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWU6IHtcclxuICAgICAgICAvLyBTQkIgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLm1lbW9yeVtzdGF0ZS5obC52YWwoKV0uYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4OWY6IHtcclxuICAgICAgICAvLyBTQkIgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHN0YXRlLmEuYWRkKHN0YXRlLmNjLmN5KSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTA6IHtcclxuICAgICAgICAvLyBBTkEgQlxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5iLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTE6IHtcclxuICAgICAgICAvLyBBTkEgQ1xyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5jLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTI6IHtcclxuICAgICAgICAvLyBBTkEgRFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5kLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTM6IHtcclxuICAgICAgICAvLyBBTkEgRVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTQ6IHtcclxuICAgICAgICAvLyBBTkEgSFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5oLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTU6IHtcclxuICAgICAgICAvLyBBTkEgTFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTY6IHtcclxuICAgICAgICAvLyBBTkEgTVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTc6IHtcclxuICAgICAgICAvLyBBTkEgQVxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoYW5kKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTg6IHtcclxuICAgICAgICAvLyBYUkEgQlxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5iLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YTk6IHtcclxuICAgICAgICAvLyBYUkEgQ1xyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5jLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWE6IHtcclxuICAgICAgICAvLyBYUkEgRFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5kLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWI6IHtcclxuICAgICAgICAvLyBYUkEgRVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWM6IHtcclxuICAgICAgICAvLyBYUkEgSFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5oLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWQ6IHtcclxuICAgICAgICAvLyBYUkEgTFxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWU6IHtcclxuICAgICAgICAvLyBYUkEgTVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YWY6IHtcclxuICAgICAgICAvLyBYUkEgQVxyXG4gICAgICAgIGNvbnN0IHhvciA9IHN0YXRlLmEudmFsKCkgXiBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgoeG9yKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjA6IHtcclxuICAgICAgICAvLyBPUkEgQlxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5iLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjE6IHtcclxuICAgICAgICAvLyBPUkEgQ1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5jLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjI6IHtcclxuICAgICAgICAvLyBPUkEgRFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5kLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjM6IHtcclxuICAgICAgICAvLyBPUkEgRVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjQ6IHtcclxuICAgICAgICAvLyBPUkEgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5oLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjU6IHtcclxuICAgICAgICAvLyBPUkEgSFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5sLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YjY6IHtcclxuICAgICAgICAvLyBPUkEgTVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjc6IHtcclxuICAgICAgICAvLyBPUkEgQVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEudmFsKCkgfCBzdGF0ZS5hLnZhbCgpO1xyXG4gICAgICAgIHN0YXRlLmEgPSBuZXcgVWludDgodmFsKTtcclxuICAgICAgICB0aGlzLnNldENhcnJ5Qml0KDApO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3Moc3RhdGUuYSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Yjg6IHtcclxuICAgICAgICAvLyBDTVAgQlxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI5OiB7XHJcbiAgICAgICAgLy8gQ01QIENcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuYyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiYToge1xyXG4gICAgICAgIC8vIENNUCBEXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmI6IHtcclxuICAgICAgICAvLyBDTVAgRVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5lKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJjOiB7XHJcbiAgICAgICAgLy8gQ01QIEhcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuaCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiZDoge1xyXG4gICAgICAgIC8vIENNUCBMXHJcbiAgICAgICAgY29uc3QgY29tcCA9IHN0YXRlLmEuc3ViKHN0YXRlLmwpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3MoY29tcCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YmU6IHtcclxuICAgICAgICAvLyBDTVAgTVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSBzdGF0ZS5hLnN1YihzdGF0ZS5tZW1vcnlbc3RhdGUuaGwudmFsKCldKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKGNvbXAsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGJmOiB7XHJcbiAgICAgICAgLy8gQ01QIEFcclxuICAgICAgICBjb25zdCBjb21wID0gc3RhdGUuYS5zdWIoc3RhdGUuYSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhjb21wLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMDoge1xyXG4gICAgICAgIC8vIFJOWlxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy56ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzE6IHtcclxuICAgICAgICAvLyBQT1AgQlxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5iYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGMyOiB7XHJcbiAgICAgICAgLy8gSk5aIGFkZHJlc3NcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjMzoge1xyXG4gICAgICAgIC8vIEpNUCBhZGRyZXNzXHJcbiAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM0OiB7XHJcbiAgICAgICAgLy8gQ05aIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4YzU6IHtcclxuICAgICAgICAvLyBQVVNIIEJcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5iKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5jKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjNjoge1xyXG4gICAgICAgIC8vIEFESSBieXRlXHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQodGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxhZ3ModmFsLCB0cnVlKTtcclxuICAgICAgICBzdGF0ZS5hID0gdmFsO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM3OiB7XHJcbiAgICAgICAgLy8gUlNUXHJcbiAgICAgICAgc3RhdGUucGMgPSBuZXcgVWludDE2KDApO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM4OiB7XHJcbiAgICAgICAgLy8gUlpcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM5OiB7XHJcbiAgICAgICAgLy8gUkVUXHJcbiAgICAgICAgY29uc3QgbG93ID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBjb25zdCBoaWdoID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLmluY3IoMSldO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjYToge1xyXG4gICAgICAgIC8vIEpaIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MueiA9PT0gMSkge1xyXG4gICAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNiOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2M6IHtcclxuICAgICAgICAvLyBDWiBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnogPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2Q6IHtcclxuICAgICAgICAvLyBDQUxMIGFkZHJlc3NcclxuXHJcbiAgICAgICAgLy8gaWYgKHN0YXRlLmMudmFsKCkgPT0gOSkge1xyXG4gICAgICAgIC8vICAgY29uc3Qgb2Zmc2V0ID0gKHN0YXRlLmQudmFsKCkgPDwgOCkgfCBzdGF0ZS5lLnZhbCgpO1xyXG4gICAgICAgIC8vICAgY29uc3Qgc3RyID0gc3RhdGUubWVtb3J5W29mZnNldCArIDNdOyAvL3NraXAgdGhlIHByZWZpeCBieXRlc1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKHN0YXRlLmMudmFsKCkgPT0gMikge1xyXG4gICAgICAgIC8vICAgLy9zYXcgdGhpcyBpbiB0aGUgaW5zcGVjdGVkIGNvZGUsIG5ldmVyIHNhdyBpdCBjYWxsZWRcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdwcmludCBjaGFyIHJvdXRpbmUgY2FsbGVkXFxuJyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5wYy5hZGQobmV3IFVpbnQ4KDMpKTtcclxuICAgICAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQodmFsKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgaGlnaCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYW0oc3RhdGUuc3AuZGVjcigxKSwgbG93KTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGNlOiB7XHJcbiAgICAgICAgLy8gQUNJIEQ4XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5hZGQodGhpcy5ieXRlQXQoMSkpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Y2Y6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMDoge1xyXG4gICAgICAgIC8vIFJOQ1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQxOiB7XHJcbiAgICAgICAgLy8gUE9QIERcclxuICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcbiAgICAgICAgc3RhdGUuZGUgPSB1dGlscy5jb25jYXRVaW50KGhpZ2gsIGxvdyk7XHJcbiAgICAgICAgc3RhdGUuc3AuaW5jcigxKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkMjoge1xyXG4gICAgICAgIC8vIFx0Sk5DIGFkZHJlc3NcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDApIHtcclxuICAgICAgICAgIHN0YXRlLnBjID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDM6IHtcclxuICAgICAgICAvLyBPVVQgRDhcclxuICAgICAgICBpZiAoIXRoaXMudGVzdCkge1xyXG4gICAgICAgICAgdGhpcy5zZW5kKHRoaXMuYnl0ZUF0KDEpLnZhbCgpLCBzdGF0ZS5hLnZhbCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gV3JpdGluZyB0byBvdXQgaW5kaWNhdGVzIHRoZSBlbmQgb2YgYSB0ZXN0XHJcbiAgICAgICAgICB0aGlzLnRlc3RDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGQ0OiB7XHJcbiAgICAgICAgLy8gQ05DIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDU6IHtcclxuICAgICAgICAvLyBQVVNIIERcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5kKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBzdGF0ZS5lKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNjoge1xyXG4gICAgICAgIC8vIFNVSSBEOFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IHN0YXRlLmEuc3ViKHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHZhbCwgdHJ1ZSk7XHJcbiAgICAgICAgc3RhdGUuYSA9IHZhbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkNzoge1xyXG4gICAgICAgIC8vIFJTVCAyXHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHN0YXRlLnBjLmFkZCgyKSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGhpZ2gpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgICAgIHN0YXRlLnBjID0gbmV3IFVpbnQ4KDB4MTApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkODoge1xyXG4gICAgICAgIC8vIFJDXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLmN5ID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDk6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYToge1xyXG4gICAgICAgIC8vIEpDIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MuY3kgPT09IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZHIgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IGFkZHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkYjoge1xyXG4gICAgICAgIC8vIElOIEQ4XHJcbiAgICAgICAgc3RhdGUuYSA9IHRoaXMuaW5bdGhpcy5ieXRlQXQoMSkudmFsKCldO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRjOiB7XHJcbiAgICAgICAgLy8gQ0MgYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5jeSA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkZDoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGRlOiB7XHJcbiAgICAgICAgLy8gU0JJIEQ4XHJcbiAgICAgICAgY29uc3QgYnl0ZVdpdGhDYXJyeSA9IHRoaXMuYnl0ZUF0KDEpLmFkZChzdGF0ZS5jYy5jeSk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gc3RhdGUuYS5zdWIoYnl0ZVdpdGhDYXJyeSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZGY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlMDoge1xyXG4gICAgICAgIC8vIFJQT1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTE6IHtcclxuICAgICAgICAvLyBQT1AgSFxyXG4gICAgICAgIGNvbnN0IGxvdyA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC52YWwoKV07XHJcbiAgICAgICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuICAgICAgICBzdGF0ZS5obCA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGUyOiB7XHJcbiAgICAgICAgLy8gSlBPIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3QgYWRkciA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICAgIHN0YXRlLnBjID0gYWRkcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGUzOiB7XHJcbiAgICAgICAgLy8gWFRITFxyXG4gICAgICAgIGNvbnN0IGwgPSBzdGF0ZS5sLmNsb25lKCk7XHJcbiAgICAgICAgY29uc3QgaCA9IHN0YXRlLmguY2xvbmUoKTtcclxuICAgICAgICBzdGF0ZS5sID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXTtcclxuICAgICAgICBzdGF0ZS5oID0gc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpICsgMV07XHJcbiAgICAgICAgc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpXSA9IGw7XHJcbiAgICAgICAgc3RhdGUubWVtb3J5W3N0YXRlLnNwLnZhbCgpICsgMV0gPSBoO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU0OiB7XHJcbiAgICAgICAgLy8gQ1BPIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlNToge1xyXG4gICAgICAgIC8vIFBVU0ggSFxyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmwpO1xyXG5cclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlNjoge1xyXG4gICAgICAgIC8vIEFOSSBEOFxyXG4gICAgICAgIGNvbnN0IGFuZCA9IHN0YXRlLmEudmFsKCkgJiB0aGlzLmJ5dGVBdCgxKS52YWwoKTtcclxuICAgICAgICBzdGF0ZS5hID0gbmV3IFVpbnQ4KGFuZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJyeUJpdCgwKTtcclxuICAgICAgICB0aGlzLnNldEZsYWdzKHN0YXRlLmEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU3OiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZTg6IHtcclxuICAgICAgICAvLyBSUEVcclxuICAgICAgICBpZiAoc3RhdGUuY2MucCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGU5OiB7XHJcbiAgICAgICAgLy8gUENITFxyXG4gICAgICAgIHN0YXRlLnBjID0gc3RhdGUuaGwuY2xvbmUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWE6IHtcclxuICAgICAgICAvLyBKUEUgYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5wID09PSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyID0gdXRpbHMuY29uY2F0VWludCh0aGlzLmJ5dGVBdCgyKSwgdGhpcy5ieXRlQXQoMSkpO1xyXG4gICAgICAgICAgc3RhdGUucGMgPSBhZGRyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWI6IHtcclxuICAgICAgICAvLyBYQ0hHXHJcbiAgICAgICAgY29uc3QgaCA9IHN0YXRlLmguY2xvbmUoKTtcclxuICAgICAgICBjb25zdCBsID0gc3RhdGUubC5jbG9uZSgpO1xyXG4gICAgICAgIHN0YXRlLmggPSBzdGF0ZS5kLmNsb25lKCk7XHJcbiAgICAgICAgc3RhdGUubCA9IHN0YXRlLmUuY2xvbmUoKTtcclxuICAgICAgICBzdGF0ZS5kID0gaDtcclxuICAgICAgICBzdGF0ZS5lID0gbDtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlYzoge1xyXG4gICAgICAgIC8vIENQRSBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnAgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhlZToge1xyXG4gICAgICAgIC8vIFhSSSBEOFxyXG4gICAgICAgIGNvbnN0IHZhbCA9IG5ldyBVaW50OChzdGF0ZS5hLnZhbCgpIF4gdGhpcy5ieXRlQXQoMSkudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwpO1xyXG4gICAgICAgIHN0YXRlLmEgPSB2YWw7XHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZWY6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmMDoge1xyXG4gICAgICAgIC8vIFJQXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucmV0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmMToge1xyXG4gICAgICAgIC8vIFBPUCBQU1dcclxuICAgICAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AuaW5jcigxKV07XHJcbiAgICAgICAgc3RhdGUuYSA9IGhpZ2g7XHJcbiAgICAgICAgc3RhdGUuY2MucyA9IHRvQml0KChsb3cgPj4gNykgJiAxKTtcclxuICAgICAgICBzdGF0ZS5jYy56ID0gdG9CaXQoKGxvdyA+PiA2KSAmIDEpO1xyXG4gICAgICAgIHN0YXRlLmNjLmFjID0gdG9CaXQoKGxvdyA+PiA0KSAmIDEpO1xyXG4gICAgICAgIHN0YXRlLmNjLnAgPSB0b0JpdCgobG93ID4+IDIpICYgMSk7XHJcbiAgICAgICAgc3RhdGUuY2MuY3kgPSB0b0JpdChsb3cgJiAxKTtcclxuICAgICAgICBzdGF0ZS5zcC5pbmNyKDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYyOiB7XHJcbiAgICAgICAgLy8gSlAgYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAwKSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQodGhpcy5ieXRlQXQoMiksIHRoaXMuYnl0ZUF0KDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGYzOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjQ6IHtcclxuICAgICAgICAvLyBDUCBhZGRyXHJcbiAgICAgICAgaWYgKHN0YXRlLmNjLnMgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZS5wYy5pbmNyKDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjU6IHtcclxuICAgICAgICAvLyBQVVNIIFBTV1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIHN0YXRlLmNjLmdldFBzdygpKTtcclxuXHJcbiAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZjY6IHtcclxuICAgICAgICAvLyBPUkkgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnZhbCgpIHwgdGhpcy5ieXRlQXQoMSkudmFsKCk7XHJcbiAgICAgICAgc3RhdGUuYSA9IG5ldyBVaW50OCh2YWwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FycnlCaXQoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyhzdGF0ZS5hKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmNzoge1xyXG4gICAgICAgIHRoaXMudW5pbXBsZW1lbnRlZEluc3RydWN0aW9uKG9wY29kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY4OiB7XHJcbiAgICAgICAgLy8gUk1cclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5yZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGY5OiB7XHJcbiAgICAgICAgLy8gU1BITFxyXG4gICAgICAgIHN0YXRlLnNwID0gc3RhdGUuaGwuY2xvbmUoKTtcclxuICAgICAgICBzdGF0ZS5wYy5pbmNyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmYToge1xyXG4gICAgICAgIC8vIEpNIGFkZHJcclxuICAgICAgICBpZiAoc3RhdGUuY2MucyA9PT0gMSkge1xyXG4gICAgICAgICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlLnBjLmluY3IoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhmYjoge1xyXG4gICAgICAgIC8vIEVJXHJcbiAgICAgICAgc3RhdGUuaW50RW5hYmxlID0gbmV3IFVpbnQ4KDEpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZjOiB7XHJcbiAgICAgICAgLy8gQ00gYWRkclxyXG4gICAgICAgIGlmIChzdGF0ZS5jYy5zID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdGUucGMuaW5jcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZkOiB7XHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ob3Bjb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZmU6IHtcclxuICAgICAgICAvLyBDUEkgRDhcclxuICAgICAgICBjb25zdCB2YWwgPSBzdGF0ZS5hLnN1Yih0aGlzLmJ5dGVBdCgxKSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbGFncyh2YWwsIHRydWUpO1xyXG4gICAgICAgIHN0YXRlLnBjLmluY3IoMik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGZmOiB7XHJcbiAgICAgICAgLy8gUlNUIDdcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihvcGNvZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbigtMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluc3RydWN0aW9uTnVtYmVyKys7XHJcbiAgICByZXR1cm4gY3ljbGVzODA4MFtvcGNvZGVdO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY2FsbCgpIHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgdmFsID0gc3RhdGUucGMuYWRkKG5ldyBVaW50OCgzKSk7XHJcbiAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQodmFsKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVJhbShzdGF0ZS5zcC5kZWNyKDEpLCBoaWdoKTtcclxuICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLnNwLmRlY3IoMSksIGxvdyk7XHJcblxyXG4gICAgc3RhdGUucGMgPSB1dGlscy5jb25jYXRVaW50KHRoaXMuYnl0ZUF0KDIpLCB0aGlzLmJ5dGVBdCgxKSk7XHJcblxyXG4gICAgdGhpcy5jeWNsZXMgKz0gNjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJhbShsb2NhdGlvbjogbnVtYmVyLCB2YWx1ZTogVWludCkge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuXHJcbiAgICBzdGF0ZS5tZW1vcnkuc3BsaWNlKGxvY2F0aW9uLCAxLCB2YWx1ZS5jbG9uZSgpKTtcclxuXHJcbiAgICBpZiAobG9jYXRpb24gPj0gMHgyNDAwICYmIGxvY2F0aW9uIDw9IDB4M2ZmZikge1xyXG4gICAgICAvLyB2aWRlbyByYW1cclxuICAgICAgdGhpcy51cGRhdGVTY3JlZW4obG9jYXRpb24sIHZhbHVlLnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmxhZ3MgPSAobjogVWludCwgY2Fycnk/OiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgc3RhdGUuY2MueiA9IHRvQml0KChuLnZhbCgpICYgMHhmZikgPT09IDApO1xyXG4gICAgc3RhdGUuY2MucyA9IHRvQml0KChuLnZhbCgpICYgMHg4MCkgPT09IDB4ODApO1xyXG4gICAgc3RhdGUuY2MuYWMgPSBuLmF1eENhcnJ5O1xyXG4gICAgc3RhdGUuY2MucCA9IHRoaXMucGFyaXR5KG4udmFsKCkpO1xyXG5cclxuICAgIGlmIChjYXJyeSkge1xyXG4gICAgICB0aGlzLnNldENhcnJ5Qml0KG4uY2FycnkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2V0Q2FycnlCaXQgPSAobjogQml0KSA9PiAodGhpcy5zdGF0ZS5jYy5jeSA9IG4pO1xyXG5cclxuICBwcml2YXRlIHBhcml0eSA9IChuOiBudW1iZXIpOiBCaXQgPT4ge1xyXG4gICAgY29uc3Qgc2l6ZSA9IDg7XHJcbiAgICBsZXQgcGFyaXR5ID0gMDtcclxuICAgIGxldCBjYWxjID0gbjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGlmIChjYWxjICYgMHgxKSB7XHJcbiAgICAgICAgcGFyaXR5Kys7XHJcbiAgICAgIH1cclxuICAgICAgY2FsYyA9IGNhbGMgPj4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b0JpdCghKHBhcml0eSAlIDIpKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG1vdiA9IChzcmNLZXk6IHN0cmluZywgZGVzdEtleTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoc3JjS2V5ID09PSAnbScgfHwgZGVzdEtleSA9PT0gJ20nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3JjIGFuZCBkZXN0IGNhbm5vdCBiZSBhIG1lbW9yeSBsb2NhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGVbc3JjS2V5XSA9IHRoaXMuc3RhdGVbZGVzdEtleV0uY2xvbmUoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLnBjLmluY3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb3ZNZW0gPSAoc3JjS2V5OiBzdHJpbmcsIGRlc3RLZXk6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHNyY0tleSAhPT0gJ20nICYmIGRlc3RLZXkgIT09ICdtJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBhIG1lbW9yeSBsb2NhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHNyY0tleSA9PT0gJ20nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmFtKHN0YXRlLmhsLnZhbCgpLCBzdGF0ZVtkZXN0S2V5XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZVtzcmNLZXldID0gc3RhdGUubWVtb3J5W3N0YXRlLmhsLnZhbCgpXS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLnBjLmluY3IoMSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBtb2RpZnlCaXQobnVtYmVyOiBudW1iZXIsIHBvczogbnVtYmVyLCBiOiBCaXQpIHtcclxuICAgIGNvbnN0IG1hc2sgPSAxIDw8IHBvcztcclxuICAgIHJldHVybiAobnVtYmVyICYgfm1hc2spIHwgKChiIDw8IHBvcykgJiBtYXNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnl0ZUF0ID0gKGluZGV4OiBudW1iZXIpOiBVaW50OCA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIHN0YXRlLm1lbW9yeVtzdGF0ZS5wYy52YWwoKSArIGluZGV4XTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBsb3cgPSBzdGF0ZS5tZW1vcnlbc3RhdGUuc3AudmFsKCldO1xyXG4gICAgY29uc3QgaGlnaCA9IHN0YXRlLm1lbW9yeVtzdGF0ZS5zcC5pbmNyKDEpXTtcclxuXHJcbiAgICBzdGF0ZS5wYyA9IHV0aWxzLmNvbmNhdFVpbnQoaGlnaCwgbG93KTtcclxuICAgIHN0YXRlLnNwLmluY3IoMSk7XHJcblxyXG4gICAgdGhpcy5jeWNsZXMgKz0gNjtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbiA9IChvcGNvZGU6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYFVuaW1wbGVtZW50ZWQgY29kZSBhdCBpbnN0cnVjdGlvbiAke1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25OdW1iZXJcclxuICAgICAgfSBhdCBmb3Igb3Bjb2RlICR7b3Bjb2RlLnRvU3RyaW5nKDE2KX0gYXQgb2Zmc2V0ICR7c3RhdGUucGMudmFsKCl9YFxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXVsYXRvcjtcclxuIiwidHlwZSBCaXQgPSAwIHwgMTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0JpdCA9IChhcmc6IGJvb2xlYW4gfCBudW1iZXIpOiBCaXQgPT4ge1xyXG4gIGNvbnN0IHZhbCA9IHR5cGVvZiBhcmcgPT09ICdudW1iZXInID8gISFhcmcgOiBhcmc7XHJcbiAgcmV0dXJuIHZhbCA/IDEgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQml0O1xyXG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi9VaW50OCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCeXRlQXJyYXkgZXh0ZW5kcyBBcnJheSB7XHJcbiAgW2tleTogbnVtYmVyXTogVWludDg7XHJcblxyXG4gIHByaXZhdGUgbWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUoKTogQnl0ZUFycmF5IHtcclxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKEJ5dGVBcnJheS5wcm90b3R5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFsbG9jKG46IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5wdXNoKG5ldyBVaW50OCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQobjogQXJyYXk8bnVtYmVyPiwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICBuLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5zcGxpY2Uob2Zmc2V0ICsgaW5kZXgsIDEsIG5ldyBVaW50OCh2YWwpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZmxvd1xuaW1wb3J0IFVpbnQ4IGZyb20gJy4vVWludDgnO1xuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uQ29kZXMge1xuICB6OiBCaXQgPSAwO1xuXG4gIHM6IEJpdCA9IDA7XG5cbiAgcDogQml0ID0gMDtcblxuICBjeTogQml0ID0gMDtcblxuICBhYzogQml0ID0gMDtcblxuICBwYWQ6IEJpdCA9IDA7XG5cbiAgZ2V0UHN3KCk6IFVpbnQ4IHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnMgKyB0aGlzLnogKyAnMCcgKyB0aGlzLmFjICsgJzAnICsgdGhpcy5wICsgJzEnICsgdGhpcy5jeTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4KHBhcnNlSW50KHZhbCwgMikpO1xuICB9XG5cbiAgc2V0UHN3KG46IFVpbnQ4KSB7XG4gICAgY29uc3QgYmluYXJ5ID0gblxuICAgICAgLnZhbCgpXG4gICAgICAudG9TdHJpbmcoMilcbiAgICAgIC5wYWRTdGFydCg4LCAnMCcpO1xuICAgIGNvbnN0IFtzLCB6LCAsIGFjLCAsIHAsICwgY3ldID0gYmluYXJ5LnNwbGl0KCcnKS5tYXAocyA9PiBOdW1iZXIocykpO1xuICAgIHRoaXMucyA9IHRvQml0KHMpO1xuICAgIHRoaXMueiA9IHRvQml0KHopO1xuICAgIHRoaXMuYWMgPSB0b0JpdChhYyk7XG4gICAgdGhpcy5wID0gdG9CaXQocCk7XG4gICAgdGhpcy5jeSA9IHRvQml0KGN5KTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCBVaW50OCBmcm9tICcuL1VpbnQ4JztcbmltcG9ydCBVaW50MTYgZnJvbSAnLi9VaW50MTYnO1xuaW1wb3J0IENvbmRpdGlvbkNvZGVzIGZyb20gJy4vQ29uZGl0aW9uQ29kZXMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBCeXRlQXJyYXkgZnJvbSAnLi9CeXRlQXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcHVTdGF0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBhOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGI6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgYzogVWludDggPSBuZXcgVWludDgoKTtcblxuICBkOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIGU6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgaDogVWludDggPSBuZXcgVWludDgoKTtcblxuICBsOiBVaW50OCA9IG5ldyBVaW50OCgpO1xuXG4gIHNwOiBVaW50MTYgPSBuZXcgVWludDE2KCk7XG5cbiAgcGM6IFVpbnQxNiA9IG5ldyBVaW50MTYoKTtcblxuICBtZW1vcnk6IEJ5dGVBcnJheSA9IEJ5dGVBcnJheS5jcmVhdGUoKTtcblxuICBjYzogQ29uZGl0aW9uQ29kZXMgPSBuZXcgQ29uZGl0aW9uQ29kZXMoKTtcblxuICBpbnRFbmFibGU6IFVpbnQ4ID0gbmV3IFVpbnQ4KCk7XG5cbiAgZ2V0IGJjKCk6IFVpbnQxNiB7XG4gICAgcmV0dXJuIHV0aWxzLmNvbmNhdFVpbnQodGhpcy5iLCB0aGlzLmMpO1xuICB9XG5cbiAgc2V0IGJjKGJ5dGVzOiBVaW50MTYpIHtcbiAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoYnl0ZXMpO1xuICAgIHRoaXMuYiA9IGhpZ2g7XG4gICAgdGhpcy5jID0gbG93O1xuICB9XG5cbiAgZ2V0IGRlKCk6IFVpbnQxNiB7XG4gICAgcmV0dXJuIHV0aWxzLmNvbmNhdFVpbnQodGhpcy5kLCB0aGlzLmUpO1xuICB9XG5cbiAgc2V0IGRlKGJ5dGVzOiBVaW50MTYpIHtcbiAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoYnl0ZXMpO1xuICAgIHRoaXMuZCA9IGhpZ2g7XG4gICAgdGhpcy5lID0gbG93O1xuICB9XG5cbiAgZ2V0IGhsKCk6IFVpbnQxNiB7XG4gICAgcmV0dXJuIHV0aWxzLmNvbmNhdFVpbnQodGhpcy5oLCB0aGlzLmwpO1xuICB9XG5cbiAgc2V0IGhsKGJ5dGVzOiBVaW50MTYpIHtcbiAgICBjb25zdCB7IGhpZ2gsIGxvdyB9ID0gdXRpbHMuc3BsaXQoYnl0ZXMpO1xuICAgIHRoaXMuaCA9IGhpZ2g7XG4gICAgdGhpcy5sID0gbG93O1xuICB9XG59XG4iLCJpbXBvcnQgQml0LCB7IHRvQml0IH0gZnJvbSAnLi9CaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVWludCB7XHJcbiAgcHJvdGVjdGVkIG51bTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBtYXg6IG51bWJlcjtcclxuICBwdWJsaWMgY2Fycnk6IEJpdCA9IDA7XHJcbiAgcHVibGljIGF1eENhcnJ5OiBCaXQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtYXg6IG51bWJlciwgbjogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICB0aGlzLm51bSA9IG4gJiB0aGlzLm1heDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm51bS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1plcm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW0gPT09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgYWRkKG46IFVpbnQpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3Qgc3ViKG46IFVpbnQpOiBVaW50O1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogVWludDtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGdldCBoaWdoT3JkZXJCaXQoKTogQml0O1xyXG5cclxuICBwdWJsaWMgZ2V0IGxvd09yZGVyQml0KCk6IEJpdCB7XHJcbiAgICByZXR1cm4gdG9CaXQodGhpcy5udW0gJiAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCByb3RhdGVMZWZ0KCk6IFVpbnQ7XHJcblxyXG4gIHB1YmxpYyBpbmNyKG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWwgPSAodGhpcy5udW0gKyBuKSAmIHRoaXMubWF4O1xyXG4gICAgdGhpcy5udW0gPSB2YWw7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlY3IobjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm51bSAtIG4pICYgdGhpcy5tYXg7XHJcbiAgICB0aGlzLm51bSA9IHZhbDtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhleCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnVtLnRvU3RyaW5nKDE2KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGVja0NhcnJ5KHZhbDogbnVtYmVyKTogeyBjYXJyeTogQml0OyBhdXhDYXJyeTogQml0IH0ge1xyXG4gICAgY29uc3QgY2FycnkgPSB2YWwgPCAwIHx8IHZhbCA+IHRoaXMubWF4ID8gMSA6IDA7XHJcbiAgICBjb25zdCBhdXhDYXJyeSA9IHZhbCA8IDAgfHwgdmFsID4gdGhpcy5tYXggLyAyID8gMSA6IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FycnksXHJcbiAgICAgIGF1eENhcnJ5LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IFVpbnQgZnJvbSAnLi9VaW50JztcclxuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpbnQxNiBleHRlbmRzIFVpbnQge1xyXG4gIGNvbnN0cnVjdG9yKG4/OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKDB4ZmZmZiwgbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKG46IFVpbnQxNiB8IG51bWJlcik6IFVpbnQxNiB7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLm51bSArIG4udmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQxNih2YWwgJiB0aGlzLm1heCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YihuOiBVaW50MTYgfCBudW1iZXIpOiBVaW50MTYge1xyXG4gICAgbGV0IHZhbDtcclxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gLSBuLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50MTYodmFsICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcclxuICAgIHJldC5jYXJyeSA9IGNhcnJ5O1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gYXV4Q2Fycnk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGlnaE9yZGVyQml0KCk6IEJpdCB7XHJcbiAgICByZXR1cm4gdG9CaXQodGhpcy5udW0gPj4gMTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZUxlZnQoKTogVWludDE2IHtcclxuICAgIHJldHVybiBuZXcgVWludDE2KCh0aGlzLm51bSA8PCAxKSAmIDB4ZmZmZik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogVWludDE2IHtcclxuICAgIHJldHVybiBuZXcgVWludDE2KHRoaXMubnVtKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQGZsb3dcclxuaW1wb3J0IFVpbnQgZnJvbSAnLi9VaW50JztcclxuaW1wb3J0IEJpdCwgeyB0b0JpdCB9IGZyb20gJy4vQml0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpbnQ4IGV4dGVuZHMgVWludCB7XHJcbiAgY29uc3RydWN0b3Iobj86IG51bWJlcikge1xyXG4gICAgc3VwZXIoMHhmZiwgbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKG46IFVpbnQ4IHwgbnVtYmVyKTogVWludDgge1xyXG4gICAgbGV0IHZhbDtcclxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gKyBuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy5udW0gKyBuLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IG5ldyBVaW50OCh2YWwgJiB0aGlzLm1heCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyeSwgYXV4Q2FycnkgfSA9IHRoaXMuY2hlY2tDYXJyeSh2YWwpO1xyXG4gICAgcmV0LmNhcnJ5ID0gY2Fycnk7XHJcbiAgICByZXQuYXV4Q2FycnkgPSBhdXhDYXJyeTtcclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1YihuOiBVaW50OCB8IG51bWJlcik6IFVpbnQ4IHtcclxuICAgIGxldCB2YWw7XHJcbiAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIC0gbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnVtIC0gbi52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDgodmFsICYgdGhpcy5tYXgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2FycnksIGF1eENhcnJ5IH0gPSB0aGlzLmNoZWNrQ2FycnkodmFsKTtcclxuICAgIHJldC5jYXJyeSA9IGNhcnJ5O1xyXG4gICAgcmV0LmF1eENhcnJ5ID0gYXV4Q2Fycnk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGlnaE9yZGVyQml0KCk6IEJpdCB7XHJcbiAgICByZXR1cm4gdG9CaXQodGhpcy5udW0gPj4gNyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlTGVmdCgpOiBVaW50OCB7XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4KCh0aGlzLm51bSA8PCAxKSAmIDB4ZmYpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFVpbnQ4IHtcclxuICAgIHJldHVybiBuZXcgVWludDgodGhpcy5udW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVWludDggZnJvbSAnLi4vbW9kZWxzL1VpbnQ4JztcbmltcG9ydCBVaW50MTYgZnJvbSAnLi4vbW9kZWxzL1VpbnQxNic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgc3RhdGljIGNvbmNhdFVpbnQgPSAobW9zdDogVWludDgsIGxlYXN0OiBVaW50OCk6IFVpbnQxNiA9PlxuICAgIG5ldyBVaW50MTYoKG1vc3QudmFsKCkgPDwgOCkgfCBsZWFzdC52YWwoKSk7XG5cbiAgc3RhdGljIGNvbmNhdCA9IChtb3N0OiBudW1iZXIsIGxlYXN0OiBudW1iZXIpOiBudW1iZXIgPT4gKG1vc3QgPDwgOCkgfCBsZWFzdDtcblxuICBzdGF0aWMgc3BsaXQgPSAobjogVWludDE2KSA9PiB7XG4gICAgY29uc3QgaGlnaCA9IG4udmFsKCkgPj4gODtcbiAgICBjb25zdCBsb3cgPSBuLnZhbCgpICYgMHhmZjtcbiAgICByZXR1cm4ge1xuICAgICAgaGlnaDogbmV3IFVpbnQ4KGhpZ2gpLFxuICAgICAgbG93OiBuZXcgVWludDgobG93KSxcbiAgICB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gJy4vcGFpbnRlci9wYWludGVyJztcbmltcG9ydCBFbXVsYXRvciBmcm9tICcuL2VtdWxhdG9yL2VtdWxhdG9yJztcbmltcG9ydCB7IE1lZGlhdG9yIH0gZnJvbSAnLi9tZWRpYXRvci9NZWRpYXRvcic7XG5cbmNsYXNzIE1haW4ge1xuICBlbXVsYXRvcjogRW11bGF0b3I7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcbiAgICB0aGlzLmVtdWxhdG9yID0gbmV3IEVtdWxhdG9yKHsgbWVkaWF0b3IsIGRlYnVnOiB0cnVlIH0pO1xuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihtZWRpYXRvcik7XG5cbiAgICBtZWRpYXRvci5yZWdpc3Rlck91dCh0aGlzLmVtdWxhdG9yKTtcbiAgICBtZWRpYXRvci5yZWdpc3RlckluKHBhaW50ZXIpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5lbXVsYXRvci5pbml0KCk7XG4gIH1cbn1cblxubmV3IE1haW4oKS5zdGFydCgpO1xuIiwiaW1wb3J0IHsgSUNvbGxlYWd1ZSB9IGZyb20gJy4vLi4vY29tbW9uL2ludGVyZmFjZXMvSUNvbGxlYWd1ZSc7XHJcbmltcG9ydCB7IElNZWRpYXRvciB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lNZWRpYXRvcic7XHJcbmltcG9ydCBCaXQgZnJvbSAnLi4vZW11bGF0b3IvbW9kZWxzL0JpdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWF0b3IgaW1wbGVtZW50cyBJTWVkaWF0b3Ige1xyXG4gIGluOiBJQ29sbGVhZ3VlIHwgdW5kZWZpbmVkO1xyXG4gIG91dDogSUNvbGxlYWd1ZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcmVnaXN0ZXJJbihjb2xsZWFndWU6IElDb2xsZWFndWUpOiB2b2lkIHtcclxuICAgIHRoaXMuaW4gPSBjb2xsZWFndWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck91dChjb2xsZWFndWU6IElDb2xsZWFndWUpOiB2b2lkIHtcclxuICAgIHRoaXMub3V0ID0gY29sbGVhZ3VlO1xyXG4gIH1cclxuXHJcbiAgc2VuZE91dChwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBiaXQ6IEJpdCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmluKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGluYCBpcyBub3QgaW5pdGlhbGl6ZWQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuaW4ucmVjZWl2ZShwb3J0LCB2YWwsIGJpdCk7XHJcbiAgfVxyXG5cclxuICBzZW5kSW4ocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlciwgYml0OiBCaXQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vdXQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgb3V0YCBpcyBub3QgaW5pdGlhbGl6ZWQnKTtcclxuICAgIH1cclxuICAgIHRoaXMub3V0LnJlY2VpdmUocG9ydCwgdmFsLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2NyZWVuKGFkZHI6IG51bWJlciwgdmFsOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5pbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpbmAgaXMgbm90IGluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluLnVwZGF0ZVNjcmVlbihhZGRyLCB2YWwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJTWVkaWF0b3IgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lNZWRpYXRvcic7XHJcbmltcG9ydCB7IElDb2xsZWFndWUgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lDb2xsZWFndWUnO1xyXG5pbXBvcnQgQml0IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9CaXQnO1xyXG5pbXBvcnQgVWludDE2IGZyb20gJy4uL2VtdWxhdG9yL21vZGVscy9VaW50MTYnO1xyXG5pbXBvcnQgVWludDggZnJvbSAnLi4vZW11bGF0b3IvbW9kZWxzL1VpbnQ4JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL2VtdWxhdG9yL3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWludGVyIGltcGxlbWVudHMgSUNvbGxlYWd1ZSB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuICBwdWJsaWMgbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICBwcml2YXRlIGV2ZW50czogRXZlbnRzO1xyXG4gIHByaXZhdGUgc2hpZnRSZWdpc3RlcjogVWludDE2ID0gbmV3IFVpbnQxNigpO1xyXG4gIHByaXZhdGUgc2hpZnRPZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcclxuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyh0aGlzLnNlbmQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmV2ZW50cy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBzZW5kKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIsIGJpdD86IEJpdCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZWRpYXRvci5zZW5kSW4ocG9ydCwgdmFsLCBiaXQpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZShwb3J0OiBudW1iZXIsIHZhbDogbnVtYmVyLCBiaXQ/OiBCaXQpOiB2b2lkIHtcclxuICAgIHRoaXMud3JpdGUocG9ydCwgdmFsKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcmVlbihhZGRyOiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBiYXNlID0gYWRkciAtIDB4MjQwMDtcclxuICAgIGNvbnN0IHkgPSB+KCgoYmFzZSAmIDB4MWYpICogOCkgJiAweGZmKSAmIDB4ZmY7XHJcbiAgICBjb25zdCB4ID0gYmFzZSA+PiA1O1xyXG5cclxuICAgIGNvbnN0IGJpbiA9IHZhbC50b1N0cmluZygyKS5wYWRTdGFydCg4LCAnMCcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFpbnQoeCwgeSArIGksIE51bWJlcihiaW4uY2hhckF0KGkpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhaW50KHg6IG51bWJlciwgeTogbnVtYmVyLCBvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIC8vIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBvbiA/ICd3aGl0ZScgOiAnYmxhY2snO1xyXG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCAqIDMsIHkgKiAzLCAzLCAzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgd3JpdGUgPSAocG9ydDogbnVtYmVyLCB2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHBvcnQgPT09IDYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChwb3J0KSB7XHJcbiAgICAgIGNhc2UgMjogLy8gc2hpZnQgcmVnaXN0ZXIgcmVzdWx0IG9mZnNldCAoYml0cyAwLDEsMilcclxuICAgICAgICAvLyBpZiAodmFsID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAodmFsID09PSAxKSB7XHJcbiAgICAgICAgLy8gICBvZmZzZXQgPSAyO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAodmFsID09PSAyKSB7XHJcbiAgICAgICAgLy8gICBvZmZzZXQgPSA3O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zaGlmdE9mZnNldCA9IHZhbCAmIDB4NztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzogLy9zb3VuZCByZWxhdGVkXHJcbiAgICAgICAgdGhpcy51bmltcGxlbWVudGVkSW5zdHJ1Y3Rpb24ocG9ydCwgdmFsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0OiAvLyBmaWxsIHNoaWZ0IHJlZ2lzdGVyXHJcbiAgICAgICAgY29uc3QgeyBoaWdoLCBsb3cgfSA9IHV0aWxzLnNwbGl0KHRoaXMuc2hpZnRSZWdpc3Rlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpZnRSZWdpc3RlciA9IG5ldyBVaW50MTYoKHZhbCA8PCA4KSB8IGhpZ2gudmFsKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBzaGlmdGVkID0gbmV3IFVpbnQ4KFxyXG4gICAgICAgICAgKHRoaXMuc2hpZnRSZWdpc3Rlci52YWwoKSA8PCB0aGlzLnNoaWZ0T2Zmc2V0KSA+PiA4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kKDMsIHNoaWZ0ZWQudmFsKCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IC8vIHNvdW5kIHJlbGF0ZWRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDY6IC8vIGRlYnVnIHBvcnRcclxuICAgICAgICB0aGlzLnVuaW1wbGVtZW50ZWRJbnN0cnVjdGlvbihwb3J0LCB2YWwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdW5pbXBsZW1lbnRlZEluc3RydWN0aW9uID0gKHBvcnQ6IG51bWJlciwgdmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBVbmltcGxlbWVudGVkIGNvZGU6IHBvcnQgJHtwb3J0fSB3aXRoIHZhbHVlICR7dmFsfWApO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IGFkZCBpbnB1dFxyXG5jbGFzcyBFdmVudHMge1xyXG4gIHByaXZhdGUgb25LZXlQcmVzcyhwb3J0OiBudW1iZXIsIGJpdDogbnVtYmVyLCB2YWw6IEJpdCkge31cclxuXHJcbiAgY29uc3RydWN0b3Iob25LZXlQcmVzczogYW55KSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MgPSBvbktleVByZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB3aW5kb3cub25rZXlkb3duID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygncHJlc3NlZCAnLCBrZXkpO1xyXG5cclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIDE2OiB7XHJcbiAgICAgICAgICAvLyBzaGlmdCAoY3JlZGl0KVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDEsIDAsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMzc6IHtcclxuICAgICAgICAgIC8vIGtleSBsZWZ0IChsZWZ0KVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDAsIDYsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMzk6IHtcclxuICAgICAgICAgIC8vIGtleSByaWdodCAocmlnaHQpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMCwgNSwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzMjoge1xyXG4gICAgICAgICAgLy8gc3BhY2UgKGZpcmUpXHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoMCwgNCwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSA0OToge1xyXG4gICAgICAgICAgLy8gMSAoZmlyc3QgcGxheWVyIHN0YXJ0KVxyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzKDEsIDIsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==