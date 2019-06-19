"use strict";
var __read = (this && this.__read) || function (o, n) {
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var Uint8_1 = __importDefault(require("./models/Uint8"));
var CpuState_1 = __importDefault(require("./models/CpuState"));
var utils_1 = __importDefault(require("./utils/utils"));
var Bit_1 = require("./models/Bit");
var fs = require('fs');
var Emulator = /** @class */ (function () {
    function Emulator(_a) {
        var debug = _a.debug;
        var _this = this;
        this.logStack = [];
        this.instructionNumber = 0;
        this.byteAt = function (index) {
            var state = _this.state;
            return state.memory[state.pc.val() + index];
        };
        this.run = function () {
            var state = _this.state;
            while (state.pc.val() > -1) {
                _this.readNext();
            }
        };
        this.log = function (counter, opcode) {
            var state = _this.state;
            console.log("at " + counter + " (0x" + counter.toString(16) + "), instruction " + _this.instructionNumber + ", command 0x" + opcode.toString(16));
            _this.logState(state);
        };
        this.readNext = function () {
            var state = _this.state;
            var opcode = state.memory[state.pc.val()].val();
            // if (this.debug && this.instructionNumber >= 42432 - 10) {
            //   this.log(state.pc.val(), opcode);
            // }
            // if (this.instructionNumber === 42432) {
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
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x08: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x09: {
                    // DAD B
                    // const res = this.concat(this.state.b, this.state.c);
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
                    state.de = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x12: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x13: {
                    // INX D
                    // const bytes = this.concat(state.d, state.e);
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
                    // const res = this.concat(this.state.d, this.state.e);
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
                    state.hl = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
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
                    state.a = new Uint8_1.default(~state.a.val());
                    state.pc.incr(1);
                    break;
                }
                case 0x30: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x31: {
                    // LXI SP, D16
                    state.sp = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    state.pc.incr(3);
                    break;
                }
                case 0x32: {
                    // STA adr
                    var address = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    state.memory[address.val()] = state.a;
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
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x36: {
                    // MVI M, D8
                    // const addr = this.concat(this.state.h, this.state.l);
                    state.memory[state.hl.val()] = _this.byteAt(1);
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
                    var adr = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
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
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0x3e: {
                    // MVI A, D8
                    state.a = _this.byteAt(1);
                    state.pc.incr(2);
                    break;
                }
                case 0x3f: {
                    _this.unimplementedInstruction(opcode);
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
                    _this.unimplementedInstruction(opcode);
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
                    _this.unimplementedInstruction(opcode);
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
                    state.a = new Uint8_1.default(and);
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
                    var xor = Bit_1.toBit(!!state.a.val() != !!state.a.val());
                    state.a = new Uint8_1.default(xor);
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
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc1: {
                    // POP B
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.bc = utils_1.default.concat(high, low);
                    state.sp.incr(1);
                    state.pc.incr(1);
                    break;
                }
                case 0xc2: {
                    // JNZ address
                    if (state.cc.z === 0) {
                        state.pc = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    }
                    else {
                        state.pc.incr(3);
                    }
                    break;
                }
                case 0xc3: {
                    // JMP address
                    state.pc = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    break;
                }
                case 0xc4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc5: {
                    // PUSH B
                    state.memory[state.sp.decr(1)] = state.b;
                    state.memory[state.sp.decr(1)] = state.c;
                    state.pc.incr(1);
                    break;
                }
                case 0xc6: {
                    // ADI byte
                    // TODO: BUG HERE (?) try to pick up here
                    var val = state.a.add(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.a = val;
                    state.pc.incr(2);
                    break;
                }
                case 0xc7: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc8: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xc9: {
                    // RET
                    // const { val } = state.sp.add(1);
                    var low = state.memory[state.sp.val()];
                    var high = state.memory[state.sp.incr(1)];
                    state.pc = utils_1.default.concat(high, low);
                    state.sp.incr(1);
                    break;
                }
                case 0xca: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcb: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcc: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xcd: {
                    // CALL address
                    var val = state.pc.add(new Uint8_1.default(3));
                    var _a = utils_1.default.split(val), high = _a.high, low = _a.low;
                    state.memory[state.sp.decr(1)] = high;
                    state.memory[state.sp.decr(1)] = low;
                    state.pc = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
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
                    state.de = utils_1.default.concat(high, low);
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
                    console.log(_this.byteAt(1).val());
                    _this.out[_this.byteAt(1).val()] = state.a.val();
                    state.pc.incr(2);
                    break;
                }
                case 0xd4: {
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xd5: {
                    // PUSH D
                    state.memory[state.sp.decr(1)] = state.d;
                    state.memory[state.sp.decr(1)] = state.e;
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
                    _this.unimplementedInstruction(opcode);
                    break;
                }
                case 0xdb: {
                    _this.unimplementedInstruction(opcode);
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
                    state.hl = utils_1.default.concat(high, low);
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
                        state.pc = utils_1.default.concat(_this.byteAt(2), _this.byteAt(1));
                    }
                    break;
                }
                case 0xe5: {
                    // PUSH H
                    state.memory[state.sp.decr(1)] = state.h;
                    state.memory[state.sp.decr(1)] = state.l;
                    state.pc.incr(1);
                    break;
                }
                case 0xe6: {
                    // ANI D8
                    var and = state.a.val() & _this.byteAt(1).val();
                    state.a = new Uint8_1.default(and);
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
                    _this.unimplementedInstruction(opcode);
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
                    state.memory[state.sp.decr(1)] = state.a;
                    state.memory[state.sp.decr(1)] = state.cc.getPsw();
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
                    state.intEnable = new Uint8_1.default(1);
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
                    // TODO: still need this?
                    // const val = utils.subUnsigned(state.a, this.byteAt(1));
                    var val = state.a.sub(_this.byteAt(1));
                    _this.setFlags(val, true);
                    state.pc.incr(2);
                    break;
                }
                case 0xff: {
                    // RST 7
                    break;
                }
                default:
                    _this.unimplementedInstruction(-1);
            }
            _this.instructionNumber++;
        };
        this.setFlags = function (n, carry) {
            var state = _this.state;
            state.cc.z = Bit_1.toBit((n.val() & 0xff) === 0);
            state.cc.s = Bit_1.toBit((n.val() & 0x80) !== 0);
            state.cc.ac = n.auxCarry;
            state.cc.p = _this.parity(n.val());
            if (carry) {
                _this.setCarryBit(n.carry);
            }
        };
        this.setCarryBit = function (n) { return (_this.state.cc.cy = n); };
        this.parity = function (n) {
            return Bit_1.toBit(n % 2 === 1 ? 0 : 1);
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
                state.memory[state.hl.val()] = state[destKey];
            }
            else {
                state[srcKey] = state.memory[state.hl.val()];
            }
            state.pc.incr(1);
        };
        this.rotate = function (accum) {
            var binary = accum.val().toString(2);
            _this.setCarryBit(Bit_1.toBit(Number(binary[0])));
            var transform = binary.slice(2) + binary.slice(0, 1);
            accum = new Uint8_1.default(parseInt(transform, 2));
        };
        this.unimplementedInstruction = function (opcode) {
            var state = _this.state;
            throw new Error("Unimplemented code at instruction " + _this.instructionNumber + " at for opcode " + opcode.toString(16) + " at offset " + state.pc.val());
        };
        this.state = new CpuState_1.default();
        var rom = fs.readFileSync('invaders');
        var ram = Buffer.alloc(0x2000);
        this.state.memory.set(__spread(rom, ram));
        this.out = Buffer.alloc(0x0100);
        this.debug = !!debug;
    }
    Emulator.prototype.logState = function (state) {
        var cc = state.cc;
        console.log("\n    {\n      a: " + state.a.hex + "\n      bc: " + state.bc.hex + "\n      de: " + state.de.hex + "\n      hl: " + state.hl.hex + "\n      pc: " + state.pc.hex + "\n      sp: " + state.sp.hex + "\n      cc: {\n        z: " + cc.z + "\n        s: " + cc.s + "\n        p: " + cc.p + "\n        cy: " + cc.cy + "\n        ac: " + cc.ac + "\n      }\n    }");
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
module.exports = Emulator;
//# sourceMappingURL=emulator.js.map