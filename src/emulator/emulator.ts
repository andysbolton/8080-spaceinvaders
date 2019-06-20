// @flow
import { IMediator } from './../common/interfaces/IMediator';
import { IColleague } from './../common/interfaces/IColleague';
import Uint8 from './models/Uint8';
import Uint from './models/Uint';
import CpuState from './models/CpuState';
import utils from './utils/utils';
import Bit, { toBit } from './models/Bit';
import { bit } from './utils/bit';
import Uint16 from './models/Uint16';

// const fs = require('fs');

// prettier-ignore
const cycles8080 = [
	4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4, //0x00..0x0f
	4, 10, 7, 5, 5, 5, 7, 4, 4, 10, 7, 5, 5, 5, 7, 4, //0x10..0x1f
	4, 10, 16, 5, 5, 5, 7, 4, 4, 10, 16, 5, 5, 5, 7, 4, //etc
	4, 10, 13, 5, 10, 10, 10, 4, 4, 10, 13, 5, 5, 5, 7, 4,

	5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5, //0x40..0x4f
	5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
	5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5,
	7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 5,

	4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, //0x80..8x4f
	4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
	4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,
	4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4,

	11, 10, 10, 10, 17, 11, 7, 11, 11, 10, 10, 10, 10, 17, 7, 11, //0xc0..0xcf
	11, 10, 10, 10, 17, 11, 7, 11, 11, 10, 10, 10, 10, 17, 7, 11,
	11, 10, 10, 18, 17, 11, 7, 11, 11, 5, 10, 5, 17, 17, 7, 11,
	11, 10, 10, 4, 17, 11, 7, 11, 11, 5, 10, 4, 17, 17, 7, 11,
];

export class Emulator implements IColleague {
  debug: boolean;
  state: CpuState;
  out: Buffer;
  mediator: IMediator;
  instructionNumber: number = 0;
  lastInterrupt: number = 0;

  constructor({
    mediator,
    debug,
    web,
  }: {
    mediator: IMediator;
    web: boolean;
    debug?: boolean;
  }) {
    this.state = new CpuState();

    const useWeb = !!web;
    const useDebug = !!debug;

    if (!useWeb) {
      // const rom = fs.readFileSync('invaders');
      // const ram = Buffer.alloc(0x2000);
      // this.state.memory.set([...rom, ...ram]);
    } else {
    }

    this.out = Buffer.alloc(0x0100);
    this.mediator = mediator;
    this.debug = useDebug;
  }

  send(port: number, val: number, isRam: boolean = false) {
    this.mediator.sendOut(port, val, isRam);
  }

  receive(port: number, val: number, isRam: boolean = false) {}

  private byteAt = (index: number): Uint8 => {
    const { state } = this;
    return state.memory[state.pc.val() + index];
  };

  init() {
    const ram = new Uint8Array(0x2000);

    fetch('invaders').then(res => {
      res.arrayBuffer().then(buf => {
        const view = new Uint8Array(buf);
        const romBytes = [...view].map(Number);
        const ramBytes = [...ram].map(Number);
        this.state.memory.set([...romBytes, ...ramBytes]);

        this.run();
      });
    });
  }

  private run = async () => {
    const { state } = this;
    while (state.pc.val() > -1) {
      // alert(this.instructionNumber);
      if (this.instructionNumber % 1000 === 0) {
        await new Promise(resolve => setTimeout(resolve, 1));
      }
      // if (new Date().getTime() - this.lastInterrupt > 1.0 / 60.0) {
      //   //1/60 second has elapsed
      //   //only do an interrupt if they are enabled
      //   if (this.state.intEnable) {
      //     this.generateInterrupt(2); //interrupt 2

      //     //Save the time we did this
      //     this.lastInterrupt = new Date().getTime();
      //   }
      // }

      const cycles = this.readNext();
      // setTimeout(this.readNext, 1000);
    }
  };

  private log = (counter: number, opcode: number): void => {
    const { state } = this;
    console.log(
      `at ${counter} (0x${counter.toString(16)}), instruction ${
        this.instructionNumber
      }, command 0x${opcode.toString(16)}`
    );
    this.logState(state);
  };

  private logState(state: CpuState) {
    const { cc } = state;

    console.log(`
    {
      a: ${state.a.hex}
      bc: ${state.bc.hex}
      de: ${state.de.hex}
      hl: ${state.hl.hex}
      pc: ${state.pc.hex}
      sp: ${state.sp.hex}
      cc: {
        z: ${cc.z}
        s: ${cc.s}
        p: ${cc.p}
        cy: ${cc.cy}
        ac: ${cc.ac}
      }
    }`);
  }

  private push(high: number, low: number) {
    const { state } = this;
    state[state.sp.sub(1).val()] = high;
    state[state.sp.sub(2).val()] = low;
    state.sp.incr(2);
  }

  private generateInterrupt(interruptNum: number) {
    const { state } = this;
    //perform "PUSH PC"
    this.push((state.pc.val() & 0xff00) >> 8, state.pc.val() & 0xff);

    //Set the PC to the low memory vector.
    //This is identical to an "RST interrupt_num" instruction.
  }

  private readNext = (): number => {
    const { state } = this;
    const opcode = state.memory[state.pc.val()].val();

    // if (this.debug && this.instructionNumber >= 37350 - 2) {
    //   this.log(state.pc.val(), opcode);
    // }

    if (this.instructionNumber === 40000) {
      debugger;
    }

    switch (opcode) {
      case 0x00: {
        // NOP
        state.pc.incr(1);
        break;
      }
      case 0x01:
        // LXI B, D16
        state.b = this.byteAt(2);
        state.c = this.byteAt(1);
        state.pc.incr(3);
        break;
      case 0x02: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x03: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x04: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x05: {
        // DCR B
        state.b.decr(1);
        this.setFlags(state.b);
        state.pc.incr(1);
        break;
      }
      case 0x06: {
        // MVI B, D8
        state.b = this.byteAt(1);
        state.pc.incr(2);
        break;
      }
      case 0x07: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x08: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x09: {
        // DAD B
        // const res = this.concatUint(this.state.b, this.state.c);
        const val = state.hl.add(state.bc);
        state.hl = val;
        this.setCarryBit(val.carry);
        state.pc.incr(1);
        break;
      }
      case 0x0a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x0b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x0c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x0d: {
        // DCR C
        state.c.decr(1);
        this.setFlags(state.c);
        state.pc.incr(1);
        break;
      }
      case 0x0e: {
        // MVI C, D8
        state.c = this.byteAt(1);
        state.pc.incr(2);
        break;
      }
      case 0x0f: {
        // RRC
        this.rotate(state.a);
        state.pc.incr(1);
        break;
      }
      case 0x10: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x11: {
        // LXI D, D16
        state.de = utils.concatUint(this.byteAt(2), this.byteAt(1));
        state.pc.incr(3);
        break;
      }
      case 0x12: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x13: {
        // INX D
        // const bytes = this.concatUint(state.d, state.e);
        const val = state.de.add(1);
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
        this.setFlags(state.d);
        state.pc.incr(1);
        break;
      }
      case 0x15: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x16: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x17: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x18: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x19: {
        // DAD D
        // const res = this.concatUint(this.state.d, this.state.e);
        const val = state.hl.add(state.de);
        state.hl = val;
        this.setCarryBit(val.carry);
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
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x1c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x1d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x1e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x1f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x20: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x21: {
        // LXI H, D16
        state.hl = utils.concatUint(this.byteAt(2), this.byteAt(1));
        state.pc.incr(3);
        break;
      }
      case 0x22: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x23: {
        // INX H
        const val = state.hl.add(1);
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
        this.setFlags(state.h);
        state.pc.incr(1);
        break;
      }
      case 0x25: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x26: {
        // MVI H, D8
        state.h = this.byteAt(1);
        state.pc.incr(2);
        break;
      }
      case 0x27: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x28: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x29: {
        // DAD H
        const val = state.hl.add(state.hl);
        state.hl = val;
        this.setCarryBit(val.carry);
        state.pc.incr(1);
        break;
      }
      case 0x2a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x2b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x2c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x2d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x2e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x2f: {
        // CMA
        state.a = new Uint8(~state.a.val());
        state.pc.incr(1);
        break;
      }
      case 0x30: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x31: {
        // LXI SP, D16
        state.sp = utils.concatUint(this.byteAt(2), this.byteAt(1));
        state.pc.incr(3);
        break;
      }
      case 0x32: {
        // STA adr
        const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
        // state.memory[addr.val()] = state.a;
        this.updateRam(addr.val(), state.a);
        state.pc.incr(3);
        break;
      }
      case 0x33: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x34: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x35: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x36: {
        // MVI M, D8
        this.updateRam(state.hl.val(), this.byteAt(1));
        state.pc.incr(2);
        break;
      }
      case 0x37: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x38: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x39: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x3a: {
        // LDA adr
        const adr = utils.concatUint(this.byteAt(2), this.byteAt(1));
        state.a = state.memory[adr.val()];
        state.pc.incr(3);
        break;
      }
      case 0x3b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x3c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x3d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x3e: {
        // MVI A, D8
        state.a = this.byteAt(1);
        state.pc.incr(2);
        break;
      }
      case 0x3f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x40: {
        this.unimplementedInstruction(opcode);
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
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x45: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x46: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x47: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x48: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x49: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x4f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x50: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x51: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x52: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x53: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x54: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x55: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x56: {
        // MOV D, M
        this.movMem('d', 'm');
        break;
      }
      case 0x57: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x58: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x59: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x5a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x5b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x5c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x5d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x5e: {
        // MOV E, M
        this.movMem('e', 'm');
        break;
      }
      case 0x5f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x60: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x61: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x62: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x63: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x64: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x65: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x66: {
        // MOV H, M
        this.movMem('h', 'm');
        break;
      }
      case 0x67: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x68: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x69: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x6f: {
        // MOV L, A
        this.mov('l', 'a');
        break;
      }
      case 0x70: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x71: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x72: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x73: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x74: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x75: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x76: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x77: {
        // MOV M, A
        this.movMem('m', 'a');
        break;
      }
      case 0x78: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x79: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x7a: {
        // MOV A, D
        this.mov('a', 'd');
        break;
      }
      case 0x7b: {
        // 	MOV A, E
        this.mov('a', 'e');
        break;
      }
      case 0x7c: {
        // MOV A, H
        this.mov('a', 'h');
        break;
      }
      case 0x7d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x7e: {
        // MOV A, M
        this.movMem('a', 'm');
        break;
      }
      case 0x7f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x80: {
        // ADD B
        const val = state.a.add(state.b);
        this.setFlags(val, true);
        state.a = val;
        break;
      }
      case 0x81: {
        // ADD C
        const val = state.a.add(state.c);
        this.setFlags(val, true);
        state.a = val;
        break;
      }
      case 0x82: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x83: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x84: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x85: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x86: {
        // ADD M
        // const offset = (state.h.val() << 8) | state.l.val();
        const val = state.a.add(state.memory[state.hl.val()]);
        this.setFlags(val, true);
        state.a = val;
        break;
      }
      case 0x87: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x88: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x89: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x8f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x90: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x91: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x92: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x93: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x94: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x95: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x96: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x97: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x98: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x99: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9a: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9b: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9c: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9d: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9e: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x9f: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa1: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa2: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa3: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa4: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa5: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa6: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa7: {
        // ANA A
        const and = state.a.val() & state.a.val();
        state.a = new Uint8(and);
        this.setFlags(state.a, true);
        state.pc.incr(1);
        break;
      }
      case 0xa8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xa9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xaa: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xab: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xac: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xad: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xae: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xaf: {
        // XRA A
        const xor = toBit(!!state.a.val() != !!state.a.val());
        state.a = new Uint8(xor);
        this.setFlags(state.a, true);
        state.pc.incr(1);
        break;
      }
      case 0xb0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb1: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb2: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb3: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb4: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb5: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb6: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xb9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xba: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xbb: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xbc: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xbd: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xbe: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xbf: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xc0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xc1: {
        // POP B
        const low = state.memory[state.sp.val()];
        const high = state.memory[state.sp.incr(1)];
        state.bc = utils.concatUint(high, low);
        state.sp.incr(1);
        state.pc.incr(1);
        break;
      }
      case 0xc2: {
        // JNZ address
        if (state.cc.z === 0) {
          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xc3: {
        // JMP address
        state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        break;
      }
      case 0xc4: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xc5: {
        // PUSH B
        // state.memory[state.sp.decr(1)] = state.b;
        // state.memory[state.sp.decr(1)] = state.c;
        this.updateRam(state.sp.decr(1), state.b);
        this.updateRam(state.sp.decr(1), state.c);
        state.pc.incr(1);
        break;
      }
      case 0xc6: {
        // ADI byte
        // TODO: BUG HERE (?) try to pick up here
        const val = state.a.add(this.byteAt(1));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(2);
        break;
      }
      case 0xc7: {
        // RST
        state.pc = new Uint16(0);
        state.pc.incr(1);
        break;
      }
      case 0xc8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xc9: {
        // RET
        // const { val } = state.sp.add(1);
        const low = state.memory[state.sp.val()];
        const high = state.memory[state.sp.incr(1)];

        state.pc = utils.concatUint(high, low);
        state.sp.incr(1);
        break;
      }
      case 0xca: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xcb: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xcc: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xcd: {
        // CALL address
        const val = state.pc.add(new Uint8(3));
        const { high, low } = utils.split(val);

        // state.memory[state.sp.decr(1)] = high;
        // state.memory[state.sp.decr(1)] = low;
        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);

        state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        break;
      }
      case 0xce: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xcf: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd1: {
        // POP D
        const low = state.memory[state.sp.val()];
        const high = state.memory[state.sp.incr(1)];
        state.de = utils.concatUint(high, low);
        state.sp.incr(1);
        state.pc.incr(1);
        break;
      }
      case 0xd2: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd3: {
        // OUT D8
        // this.out[this.byteAt(1).val()] = state.a.val();
        console.log(
          this.instructionNumber +
            ' ' +
            this.byteAt(1).val() +
            ' ' +
            state.a.val()
        );
        this.send(this.byteAt(1).val(), state.a.val());
        state.pc.incr(2);
        break;
      }
      case 0xd4: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd5: {
        // PUSH D
        this.updateRam(state.sp.decr(1), state.d);
        this.updateRam(state.sp.decr(1), state.e);
        state.pc.incr(1);
        break;
      }
      case 0xd6: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xda: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xdb: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xdc: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xdd: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xde: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xdf: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe1: {
        // POP H
        const low = state.memory[state.sp.val()];
        const high = state.memory[state.sp.incr(1)];
        state.hl = utils.concatUint(high, low);
        state.sp.incr(1);
        state.pc.incr(1);
        break;
      }
      case 0xe2: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe3: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe4: {
        // CPO
        // TODO: need else?
        this.unimplementedInstruction(opcode);
        if (state.cc.p === 0) {
          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        }
        break;
      }
      case 0xe5: {
        // PUSH H
        // state.memory[state.sp.decr(1)] = state.h;
        // state.memory[state.sp.decr(1)] = state.l;
        this.updateRam(state.sp.decr(1), state.h);
        this.updateRam(state.sp.decr(1), state.l);

        state.pc.incr(1);
        break;
      }
      case 0xe6: {
        // ANI D8
        const and = state.a.val() & this.byteAt(1).val();
        state.a = new Uint8(and);
        this.setFlags(state.a, true);
        state.pc.incr(2);
        break;
      }
      case 0xe7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xea: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xeb: {
        // XCHG
        const h = state.h;
        const l = state.l;
        state.h = state.d;
        state.l = state.e;
        state.d = h;
        state.e = l;
        state.pc.incr(1);
        break;
      }
      case 0xec: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xed: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xee: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xef: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf0: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf1: {
        // POP PSW
        const psw = state.memory[state.sp.val() + 1];

        state.cc.setPsw(psw);

        state.sp.incr(2);
        state.pc.incr(1);
        break;
      }
      case 0xf2: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf3: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf4: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf5: {
        // PUSH PSW
        // state.memory[state.sp.decr(1)] = state.a;
        // state.memory[state.sp.decr(1)] = state.cc.getPsw();
        this.updateRam(state.sp.decr(1), state.a);
        this.updateRam(state.sp.decr(1), state.cc.getPsw());

        state.pc.incr(1);
        break;
      }
      case 0xf6: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf8: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xfa: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xfb: {
        // EI
        state.intEnable = new Uint8(1);
        state.pc.incr(1);
        break;
      }
      case 0xfc: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xfd: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xfe: {
        // CPI D8
        const val = state.a.sub(this.byteAt(1));
        this.setFlags(val, true);
        state.pc.incr(2);
        break;
      }
      case 0xff: {
        // RST 7
        break;
      }
      default: {
        this.unimplementedInstruction(-1);
      }
    }

    this.instructionNumber++;
    return cycles8080[opcode];
  };

  updateRam(location: number, value: Uint) {
    const { state } = this;

    state.memory[location] = value;

    if (location >= 0x2400 && location <= 0x3fff) {
      // video ram
      console.log(location, value.val());
      this.send(location, value.val(), true);
    }
  }

  private setFlags = (n: Uint, carry?: boolean): void => {
    const { state } = this;
    state.cc.z = toBit((n.val() & 0xff) === 0);
    state.cc.s = toBit((n.val() & 0x80) !== 0);
    state.cc.ac = n.auxCarry;
    state.cc.p = this.parity(n.val());

    if (carry) {
      this.setCarryBit(n.carry);
    }
  };

  private setCarryBit = (n: Bit) => (this.state.cc.cy = n);

  private parity = (n: number): Bit => {
    return toBit(n % 2 === 1 ? 0 : 1);
    // let calc = n & 0xff;
    // let parity = 0;
    // while (calc) {
    //   parity = parity === 0 ? 1 : 0;
    //   calc &= calc - 1;
    // }
    // return bit(parity);
  };

  private mov = (srcKey: string, destKey: string): void => {
    if (srcKey === 'm' || destKey === 'm') {
      throw new Error('src and dest cannot be a memory location');
    }

    const { state } = this;

    state[srcKey] = state[destKey];

    state.pc.incr(1);
  };

  private movMem = (srcKey: string, destKey: string): void => {
    if (srcKey !== 'm' && destKey !== 'm') {
      throw new Error('must specify a memory location');
    }

    const { state } = this;

    if (srcKey === 'm') {
      // state.memory[state.hl.val()] = state[destKey];
      this.updateRam(state.hl.val(), state[destKey]);
    } else {
      // state[srcKey] = state.memory[state.hl.val()];
      this.updateRam(state[srcKey], state.memory[state.hl.val()]);
    }

    state.pc.incr(1);
  };

  private rotate = (accum: Uint8) => {
    const binary = accum.val().toString(2);

    this.setCarryBit(toBit(Number(binary[0])));

    const transform = binary.slice(2) + binary.slice(0, 1);

    accum = new Uint8(parseInt(transform, 2));
  };

  private unimplementedInstruction = (opcode: number) => {
    const { state } = this;
    throw new Error(
      `Unimplemented code at instruction ${
        this.instructionNumber
      } at for opcode ${opcode.toString(16)} at offset ${state.pc.val()}`
    );
  };
}

// const app = new Emulator({
//   debug: true,
// });

// try {
//   app.run();
// } catch (error) {
//   console.log(app.instructionNumber);
//   console.log(error);
// }
export default Emulator;
