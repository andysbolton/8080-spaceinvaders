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
import ByteArray from './models/ByteArray';

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

// CPU running at 2mhz, 2 interrupts running at 60mhz
const cyclesUntilInterrupt: number = Math.ceil(2000000 / 60 / 2);

export class Emulator implements IColleague {
  debug: boolean;
  state: CpuState;
  // out: Buffer;
  in: ByteArray;
  mediator: IMediator;
  instructionNumber: number = 0;
  lastInterrupt: number = 1;
  cycles: number = 0;

  constructor({
    mediator,
    debug,
  }: {
    mediator: IMediator;
    web: boolean;
    debug?: boolean;
  }) {
    this.state = new CpuState();
    this.state.memory.alloc(0x10000);
    // this.state.pc = new Uint16(0x100);

    const useDebug = !!debug;

    this.mediator = mediator;
    this.debug = useDebug;

    this.in = ByteArray.create();
    this.in.alloc(8);
  }

  send(port: number, pos: number, bit?: Bit) {
    this.mediator.sendOut(port, pos, bit);
  }

  receive(port: number, val: number, bit?: Bit) {
    let newVal = val;
    if (bit !== undefined) {
      newVal = this.modifyBit(this.in[port].val(), val, bit as Bit);
    }
    this.in.splice(port, 1, new Uint8(newVal));
  }

  private modifyBit(number: number, pos: number, b: Bit) {
    const mask = 1 << pos;
    return (number & ~mask) | ((b << pos) & mask);
  }

  updateScreen(addr: number, val: number) {
    this.mediator.updateScreen(addr, val);
  }

  private byteAt = (index: number): Uint8 => {
    const { state } = this;
    return state.memory[state.pc.val() + index];
  };

  init() {
    // const ram = new Uint8Array(0x2000);

    fetch('invaders.rom').then(res => {
      res.arrayBuffer().then(buf => {
        const view = new Uint8Array(buf);
        const romBytes = [...view].map(Number);
        // const ramBytes = [...ram].map(Number);
        this.state.memory.set([...romBytes]); //  ...ramBytes

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

        this.run();
      });
    });
  }

  private myDate = new Date();
  private lastSecond = 0;
  private countie = 0;
  private lastTimer = 0;
  private nextInterrupt = 16000;

  private run = async () => {
    const { state } = this;
    while (state.pc.val() > -1) {
      if (this.instructionNumber % 1000 === 0) {
        await new Promise(resolve => setTimeout(resolve, 5));
      }

      this.cycles += this.readNext();

      // let seconds = new Date().getSeconds();
      // if (seconds !== this.lastSecond) {
      //   console.log(
      //     'at',
      //     this.lastSecond,
      //     'ran',
      //     this.countie,
      //     'times, expecting 120'
      //   );
      //   this.lastSecond = seconds;
      //   this.countie = 0;
      // }
      const now = new Date().getTime();

      if (this.lastTimer === 0) {
        this.lastTimer = now;
        this.nextInterrupt = this.lastTimer + 16000;
        this.lastInterrupt = 2;
      }

      if (this.state.intEnable.val() === 1 && now > this.nextInterrupt) {
        if (this.lastInterrupt === 2) {
          this.generateInterrupt(1);
          this.lastInterrupt = 1;
        } else {
          this.generateInterrupt(2);
          this.lastInterrupt = 2;
        }
        this.nextInterrupt = now + 8000;
      }

      const sinceLast = now - this.lastTimer;
      const cyclesToCatchUp = 2 * sinceLast;
      let cycles = 0;

      while (cyclesToCatchUp > cycles) {
        const opcode = state.memory[state.pc.val()].val();

        if (opcode === 0xdb) {
          state.a = this.in[this.byteAt(1).val()];
          state.pc.incr(2);
          cycles += 3;
        } else if (opcode == 0xd3) {
          this.send(this.byteAt(1).val(), state.a.val()); // TODO: Is this always supposed to be 1?
          state.pc.incr(2);
          cycles += 3;
        } else {
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
    console.log('cycles: ', this.cycles);
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

  private generateInterrupt(interruptNum: number) {
    const { state } = this;
    //perform "PUSH PC"
    const { high, low } = utils.split(state.pc);
    this.updateRam(state.sp.decr(1), high);
    this.updateRam(state.sp.decr(1), low);

    //Set the PC to the low memory vector.
    //This is identical to an "RST interrupt_num" instruction.
    state.pc = new Uint16(8 * interruptNum);
  }

  private test = new Array<string>();

  private readNext = (): number => {
    const { state } = this;
    const opcode = state.memory[state.pc.val()].val();

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
    if (this.instructionNumber === 2365219 - 10) {
      debugger;
    }

    if (this.instructionNumber >= 2313474) {
      this.test.push(`${this.instructionNumber} ${state.de} ${state.a}`);
    }

    switch (opcode) {
      case 0x00: {
        // NOP
        state.pc.incr(1);
        break;
      }
      case 0x01:
        // LXI B, D16
        state.bc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        state.pc.incr(3);
        break;
      case 0x02: {
        // STAX B
        this.updateRam(state.bc.val(), state.a);
        state.pc.incr(1);
        break;
      }
      case 0x03: {
        // INX B
        const val = state.bc.add(1);
        state.bc = val;
        state.pc.incr(1);
        break;
      }
      case 0x04: {
        // INR B
        state.b.incr(1);
        this.setFlags(state.b);
        state.pc.incr(1);
        break;
      }
      case 0x05: {
        // DCR B
        const val = state.b.sub(1);
        this.setFlags(val, true);
        state.b = val;
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

        this.setCarryBit(state.a.highOrderBit);
        const a = ((state.a.val() & 0x80) >> 7) | (state.a.val() << 1);
        state.a = new Uint8(a);
        state.pc.incr(1);
        break;
      }
      case 0x08: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x09: {
        // DAD B
        const val = state.hl.add(state.bc);
        state.hl = val;
        this.setCarryBit(val.carry);
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
        this.setFlags(state.c);
        state.pc.incr(1);
        break;
      }
      case 0x0d: {
        // DCR C
        const val = state.c.sub(1);
        this.setFlags(val, true);
        state.c = val;
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
        const lob = state.a.lowOrderBit;
        this.setCarryBit(lob);
        const rotated = (lob << 7) | (state.a.val() >> 1);
        state.a = new Uint8(rotated);
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
        // STAX D
        this.updateRam(state.de.val(), state.a);
        state.pc.incr(1);
        break;
      }
      case 0x13: {
        // INX D
        const val = state.de.add(1);
        state.de = val;
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
        // DCR D
        const val = state.d.sub(1);
        this.setFlags(val, true);
        state.d = val;
        state.pc.incr(1);
        break;
      }
      case 0x16: {
        // MVI D, D8
        state.d = this.byteAt(1);
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
        const carry = state.cc.cy;
        this.setCarryBit(state.a.highOrderBit);
        const a = carry | (state.a.val() << 1);
        state.a = new Uint8(a);
        state.pc.incr(1);
        break;
      }
      case 0x18: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x19: {
        // DAD D
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
        // DCX D
        state.de = state.de.sub(1);
        state.pc.incr(1);
        break;
      }
      case 0x1c: {
        // INR E
        state.e.incr(1);
        this.setFlags(state.e);
        state.pc.incr(1);
        break;
      }
      case 0x1d: {
        // DCR E
        const val = state.e.sub(1);
        this.setFlags(val, true);
        state.e = val;
        state.pc.incr(1);
        break;
      }
      case 0x1e: {
        // MVI E, D8
        state.e = this.byteAt(1);
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
        const carry = state.cc.cy;
        state.cc.cy = state.a.lowOrderBit;
        const a = (carry << 7) | (state.a.val() >> 1);
        state.a = new Uint8(a);
        state.pc.incr(1);
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
        // SHLD addr
        const location = utils.concat(
          this.byteAt(2).val(),
          this.byteAt(1).val()
        );
        this.updateRam(location, state.l);
        this.updateRam(location + 1, state.h);
        state.pc.incr(3);
        break;
      }
      case 0x23: {
        // INX H
        const val = state.hl.add(1);
        state.hl = val;
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
        //	DCR H
        const val = state.h.sub(1);
        this.setFlags(val, true);
        state.h = val;
        state.pc.incr(1);
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
        // LHLD addr
        const location = utils.concat(
          this.byteAt(2).val(),
          this.byteAt(1).val()
        );
        state.l = state.memory[location];
        state.h = state.memory[location + 1];
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
        this.setFlags(state.l);
        state.pc.incr(1);
        break;
      }
      case 0x2d: {
        // DCR L
        const val = state.l.sub(1);
        this.setFlags(val, true);
        state.l = val;
        state.pc.incr(1);
        break;
      }
      case 0x2e: {
        // MVI L, D8
        state.l = this.byteAt(1);
        state.pc.incr(2);
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
        // STA addr
        const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
        this.updateRam(addr.val(), state.a);
        state.pc.incr(3);
        break;
      }
      case 0x33: {
        // INX SP
        const val = state.sp.add(1);
        state.sp = val;
        state.pc.incr(1);
        break;
      }
      case 0x34: {
        // INR M
        const val = state.memory[state.hl.val()].add(1);
        this.updateRam(state.hl.val(), val);
        this.setFlags(val, true);
        state.pc.incr(1);
        break;
      }
      case 0x35: {
        // DCR M
        const val = state.memory[state.hl.val()].sub(1);
        this.updateRam(state.hl.val(), val);
        this.setFlags(val, true);
        state.pc.incr(1);
        break;
      }
      case 0x36: {
        // MVI M, D8
        this.updateRam(state.hl.val(), this.byteAt(1));
        state.pc.incr(2);
        break;
      }
      case 0x37: {
        // STC
        this.setCarryBit(1);
        state.pc.incr(1);
        break;
      }
      case 0x38: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x39: {
        // DAD SP
        const val = state.hl.add(state.sp);
        state.hl = val;
        this.setCarryBit(val.carry);
        state.pc.incr(1);
        break;
      }
      case 0x3a: {
        // LDA addr
        const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
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
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0x3d: {
        // DCR A
        const val = state.a.sub(1);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x3e: {
        // MVI A, D8
        state.a = this.byteAt(1);
        state.pc.incr(2);
        break;
      }
      case 0x3f: {
        // CMC
        const val = state.cc.cy === 0 ? 1 : 0;
        this.setCarryBit(val);
        state.pc.incr(1);
        break;
      }
      case 0x40: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0x41:
        // MOV B, C
        this.mov('b', 'c');
        break;
      case 0x42:
        // MOV B, D
        this.mov('b', 'd');
        break;
      case 0x43:
        // MOV B, E
        this.mov('b', 'e');
        break;
      case 0x44: {
        // MOV B, H
        this.mov('b', 'h');
        break;
      }
      case 0x45: {
        // MOV B, L
        this.mov('b', 'l');
        break;
      }
      case 0x46: {
        // MOV B, M
        this.movMem('b', 'm');
        break;
      }
      case 0x47: {
        // MOV B, A
        this.mov('b', 'a');
        break;
      }
      case 0x48: {
        // MOV C, B
        this.mov('c', 'b');
        break;
      }
      case 0x49: {
        // MOV C, C
        this.mov('c', 'c');
        break;
      }
      case 0x4a: {
        // 	MOV C, D
        this.mov('c', 'd');
        break;
      }
      case 0x4b: {
        // 	MOV C, E
        this.mov('c', 'e');
        break;
      }
      case 0x4c: {
        // MOV C, H
        this.mov('c', 'h');
        break;
      }
      case 0x4d: {
        // MOV C, L
        this.mov('c', 'l');
        break;
      }
      case 0x4e: {
        // MOV C, M
        this.movMem('c', 'm');
        break;
      }
      case 0x4f: {
        // MOV C, A
        this.mov('c', 'a');
        break;
      }
      case 0x50: {
        // MOV D, B
        this.mov('d', 'b');
        break;
      }
      case 0x51: {
        // MOV D, C
        this.mov('d', 'c');
        break;
      }
      case 0x52: {
        //	MOV D, D
        this.mov('d', 'd');
        break;
      }
      case 0x53: {
        // MOV D, E
        this.mov('d', 'e');
        break;
      }
      case 0x54: {
        // MOV D, H
        this.mov('d', 'h');
        break;
      }
      case 0x55: {
        // MOV D, L
        this.mov('d', 'l');
        break;
      }
      case 0x56: {
        // MOV D, M
        this.movMem('d', 'm');
        break;
      }
      case 0x57: {
        // MOV D, A
        this.mov('d', 'a');
        break;
      }
      case 0x58: {
        // MOV E, B
        this.mov('e', 'b');
        break;
      }
      case 0x59: {
        // MOV E, C
        this.mov('e', 'c');
        break;
      }
      case 0x5a: {
        // MOV E, D
        this.mov('e', 'd');
        break;
      }
      case 0x5b: {
        // MOV E, E
        this.mov('e', 'e');
        break;
      }
      case 0x5c: {
        // MOV E, H
        this.mov('e', 'h');
        break;
      }
      case 0x5d: {
        // MOV E, L
        this.mov('e', 'l');
        break;
      }
      case 0x5e: {
        // MOV E, M
        this.movMem('e', 'm');
        break;
      }
      case 0x5f: {
        // MOV E, A
        this.mov('e', 'a');
        break;
      }
      case 0x60: {
        // MOV H, B
        this.mov('h', 'b');
        break;
      }
      case 0x61: {
        // MOV H, C
        this.mov('h', 'c');
        break;
      }
      case 0x62: {
        // MOV H, D
        this.mov('h', 'd');
        break;
      }
      case 0x63: {
        // MOV H, E
        this.mov('h', 'e');
        break;
      }
      case 0x64: {
        // MOV H, H
        this.mov('h', 'h');
        break;
      }
      case 0x65: {
        // MOV H, L
        this.mov('h', 'l');
        break;
      }
      case 0x66: {
        // MOV H, M
        this.movMem('h', 'm');
        break;
      }
      case 0x67: {
        // MOV H, A
        this.mov('h', 'a');
        break;
      }
      case 0x68: {
        // MOV L, B
        this.mov('l', 'b');
        break;
      }
      case 0x69: {
        // MOV L, C
        this.mov('l', 'c');
        break;
      }
      case 0x6a: {
        // MOV L, D
        this.mov('l', 'd');
        break;
      }
      case 0x6b: {
        // MOV L, E
        this.mov('l', 'e');
        break;
      }
      case 0x6c: {
        // MOV L, H
        this.mov('l', 'h');
        break;
      }
      case 0x6d: {
        // MOV L, L
        this.mov('l', 'l');
        break;
      }
      case 0x6e: {
        // MOV L, M
        this.movMem('l', 'm');
        break;
      }
      case 0x6f: {
        // MOV L, A
        this.mov('l', 'a');
        break;
      }
      case 0x70: {
        // MOV M, B
        this.movMem('m', 'b');
        break;
      }
      case 0x71: {
        // MOV M, C
        this.movMem('m', 'c');
        break;
      }
      case 0x72: {
        // MOV M, D
        this.movMem('m', 'd');
        break;
      }
      case 0x73: {
        // MOV M, E
        this.movMem('m', 'e');
        break;
      }
      case 0x74: {
        // MOV M, H
        this.movMem('m', 'h');
        break;
      }
      case 0x75: {
        // MOV M, L
        this.movMem('m', 'l');
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
        // MOV A, B
        this.mov('a', 'b');
        break;
      }
      case 0x79: {
        // 	MOV A, C
        this.mov('a', 'c');
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
        // MOV A, L
        this.mov('a', 'l');
        break;
      }
      case 0x7e: {
        // MOV A, M
        this.movMem('a', 'm');
        break;
      }
      case 0x7f: {
        // MOV A, A
        this.mov('a', 'a');
        break;
      }
      case 0x80: {
        // ADD B
        const val = state.a.add(state.b);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x81: {
        // ADD C
        const val = state.a.add(state.c);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x82: {
        // ADD D
        const val = state.a.add(state.d);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x83: {
        // ADD E
        const val = state.a.add(state.e);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x84: {
        // ADD H
        const val = state.a.add(state.h);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x85: {
        // ADD L
        const val = state.a.add(state.l);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x86: {
        // ADD M
        const val = state.a.add(state.memory[state.hl.val()]);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x87: {
        // ADD A
        const val = state.a.add(state.a);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x88: {
        // ADC B
        const val = state.a.add(state.b).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x89: {
        // ADC C
        const val = state.a.add(state.c).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8a: {
        //	ADC D
        const val = state.a.add(state.d).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8b: {
        //	ADC E
        const val = state.a.add(state.e).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8c: {
        //	ADC H
        const val = state.a.add(state.h).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8d: {
        //	ADC L
        const val = state.a.add(state.l).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8e: {
        //	ADC M
        const val = state.a.add(state.memory[state.hl.val()]).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x8f: {
        //	ADC A
        const val = state.a.add(state.a).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x90: {
        // SUB B
        const val = state.a.sub(state.b);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x91: {
        // SUB C
        const val = state.a.sub(state.c);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x92: {
        // SUB D
        const val = state.a.sub(state.d);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x93: {
        // SUB E
        const val = state.a.sub(state.e);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x94: {
        // SUB H
        const val = state.a.sub(state.h);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x95: {
        // SUB L
        const val = state.a.sub(state.l);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x96: {
        // SUB M
        const val = state.a.sub(state.memory[state.hl.val()]);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x97: {
        // SUB A
        const val = state.a.sub(state.a);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x98: {
        // SBB B
        const val = state.a.sub(state.b.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x99: {
        // SBB C
        const val = state.a.sub(state.c.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9a: {
        // SBB D
        const val = state.a.sub(state.d.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9b: {
        // SBB E
        const val = state.a.sub(state.e.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9c: {
        // SBB H
        const val = state.a.sub(state.h.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9d: {
        // SBB L
        const val = state.a.sub(state.l.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9e: {
        // SBB M
        const val = state.a.sub(state.memory[state.hl.val()].add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0x9f: {
        // SBB A
        const val = state.a.sub(state.a.add(state.cc.cy));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(1);
        break;
      }
      case 0xa0: {
        // ANA B
        const and = state.a.val() & state.b.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa1: {
        // ANA C
        const and = state.a.val() & state.c.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa2: {
        // ANA D
        const and = state.a.val() & state.d.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa3: {
        // ANA E
        const and = state.a.val() & state.e.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa4: {
        // ANA H
        const and = state.a.val() & state.h.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa5: {
        // ANA L
        const and = state.a.val() & state.l.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa6: {
        // ANA M
        const and = state.a.val() & state.memory[state.hl.val()].val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa7: {
        // ANA A
        const and = state.a.val() & state.a.val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa8: {
        // XRA B
        const xor = state.a.val() ^ state.b.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xa9: {
        // XRA C
        const xor = state.a.val() ^ state.c.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xaa: {
        // XRA D
        const xor = state.a.val() ^ state.d.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xab: {
        // XRA E
        const xor = state.a.val() ^ state.e.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xac: {
        // XRA H
        const xor = state.a.val() ^ state.h.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xad: {
        // XRA L
        const xor = state.a.val() ^ state.l.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xae: {
        // XRA M
        const xor = state.a.val() ^ state.memory[state.hl.val()].val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xaf: {
        // XRA A
        const xor = state.a.val() ^ state.a.val();
        state.a = new Uint8(xor);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb0: {
        // ORA B
        const val = state.a.val() | state.b.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb1: {
        // ORA C
        const val = state.a.val() | state.c.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb2: {
        // ORA D
        const val = state.a.val() | state.d.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb3: {
        // ORA E
        const val = state.a.val() | state.e.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb4: {
        // ORA H
        const val = state.a.val() | state.h.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb5: {
        // ORA H
        const val = state.a.val() | state.l.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb6: {
        // ORA M
        const val = state.a.val() | state.memory[state.hl.val()].val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb7: {
        // ORA A
        const val = state.a.val() | state.a.val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(1);
        break;
      }
      case 0xb8: {
        // CMP B
        const comp = state.a.sub(state.b);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xb9: {
        // CMP C
        const comp = state.a.sub(state.c);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xba: {
        // CMP D
        const comp = state.a.sub(state.d);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xbb: {
        // CMP E
        const comp = state.a.sub(state.e);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xbc: {
        // CMP H
        const comp = state.a.sub(state.h);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xbd: {
        // CMP L
        const comp = state.a.sub(state.l);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xbe: {
        // CMP M
        const comp = state.a.sub(state.memory[state.hl.val()]);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xbf: {
        // CMP A
        const comp = state.a.sub(state.a);
        this.setFlags(comp, true);
        state.pc.incr(1);
        break;
      }
      case 0xc0: {
        // RNZ
        if (state.cc.z === 0) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
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
        // CNZ addr
        if (state.cc.z === 0) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }

        break;
      }
      case 0xc5: {
        // PUSH B
        this.updateRam(state.sp.decr(1), state.b);
        this.updateRam(state.sp.decr(1), state.c);
        state.pc.incr(1);
        break;
      }
      case 0xc6: {
        // ADI byte
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
        // RZ
        if (state.cc.z === 1) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
        break;
      }
      case 0xc9: {
        // RET
        const low = state.memory[state.sp.val()];
        const high = state.memory[state.sp.incr(1)];

        state.pc = utils.concatUint(high, low);
        state.sp.incr(1);
        break;
      }
      case 0xca: {
        // JZ addr
        if (state.cc.z === 1) {
          const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
          state.pc = addr;
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xcb: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xcc: {
        // CZ addr
        if (state.cc.z === 1) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
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

        const val = state.pc.add(new Uint8(3));
        const { high, low } = utils.split(val);

        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);

        state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        break;
      }
      case 0xce: {
        // ACI D8
        const val = state.a.add(this.byteAt(1)).add(state.cc.cy);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(2);
        break;
      }
      case 0xcf: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xd0: {
        // RNC
        if (state.cc.cy === 0) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
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
        // 	JNC address
        if (state.cc.cy === 0) {
          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xd3: {
        // OUT D8
        if (this.byteAt(1).val() === 2) {
          console.log(this.test.join('\n'));
          console.log(this.test.length);
          this.test = new Array<string>();
        }
        this.send(this.byteAt(1).val(), state.a.val()); // TODO: Is this always supposed to be 1?
        state.pc.incr(2);
        break;
      }
      case 0xd4: {
        // CNC addr
        if (state.cc.cy === 0) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
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
        // SUI D8
        const val = state.a.sub(this.byteAt(1));
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(2);
        break;
      }
      case 0xd7: {
        // RST 2
        const { high, low } = utils.split(state.pc.add(2));

        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);

        state.pc = new Uint8(0x10);
        break;
      }
      case 0xd8: {
        // RC
        if (state.cc.cy === 1) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
        break;
      }
      case 0xd9: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xda: {
        // JC addr
        if (state.cc.cy === 1) {
          const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
          state.pc = addr;
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xdb: {
        // IN D8
        state.a = this.in[this.byteAt(1).val()];
        state.pc.incr(2);
        break;
      }
      case 0xdc: {
        // CC addr
        if (state.cc.cy === 1) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xdd: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xde: {
        // SBI D8
        const byteWithCarry = this.byteAt(1).add(state.cc.cy);
        const val = state.a.sub(byteWithCarry);
        this.setFlags(val, true);
        state.a = val;
        state.pc.incr(2);
        break;
      }
      case 0xdf: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe0: {
        // RPO
        if (state.cc.p === 0) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
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
        // JPO addr
        if (state.cc.p === 0) {
          const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
          state.pc = addr;
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xe3: {
        // XTHL
        const l = state.l.clone();
        const h = state.h.clone();
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
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xe5: {
        // PUSH H
        this.updateRam(state.sp.decr(1), state.h);
        this.updateRam(state.sp.decr(1), state.l);

        state.pc.incr(1);
        break;
      }
      case 0xe6: {
        // ANI D8
        const and = state.a.val() & this.byteAt(1).val();
        state.a = new Uint8(and);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(2);
        break;
      }
      case 0xe7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xe8: {
        // RPE
        if (state.cc.p === 1) {
          this.ret();
        } else {
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
          const addr = utils.concatUint(this.byteAt(2), this.byteAt(1));
          state.pc = addr;
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xeb: {
        // XCHG
        const h = state.h.clone();
        const l = state.l.clone();
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
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xed: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xee: {
        // XRI D8
        const val = new Uint8(state.a.val() ^ this.byteAt(1).val());
        this.setCarryBit(0);
        this.setFlags(val);
        state.a = val;
        state.pc.incr(2);
        break;
      }
      case 0xef: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf0: {
        // RP
        if (state.cc.s === 0) {
          this.ret();
        } else {
          state.pc.incr(1);
        }
        break;
      }
      case 0xf1: {
        // POP PSW
        const low = state.memory[state.sp.val()].val();
        const high = state.memory[state.sp.incr(1)];
        state.a = high;
        state.cc.s = toBit((low >> 7) & 1);
        state.cc.z = toBit((low >> 6) & 1);
        state.cc.ac = toBit((low >> 4) & 1);
        state.cc.p = toBit((low >> 2) & 1);
        state.cc.cy = toBit(low & 1);
        state.sp.incr(1);
        state.pc.incr(1);
        break;
      }
      case 0xf2: {
        // JP addr
        if (state.cc.s === 0) {
          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xf3: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf4: {
        // CP addr
        if (state.cc.s === 0) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xf5: {
        // PUSH PSW
        this.updateRam(state.sp.decr(1), state.a);
        this.updateRam(state.sp.decr(1), state.cc.getPsw());

        state.pc.incr(1);
        break;
      }
      case 0xf6: {
        // ORI D8
        const val = state.a.val() | this.byteAt(1).val();
        state.a = new Uint8(val);
        this.setCarryBit(0);
        this.setFlags(state.a);
        state.pc.incr(2);
        break;
      }
      case 0xf7: {
        this.unimplementedInstruction(opcode);
        break;
      }
      case 0xf8: {
        // RM
        if (state.cc.s === 1) {
          this.ret();
        } else {
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
          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
        break;
      }
      case 0xfb: {
        // EI
        state.intEnable = new Uint8(1);
        state.pc.incr(1);
        break;
      }
      case 0xfc: {
        // CM addr
        if (state.cc.s === 1) {
          const val = state.pc.add(new Uint8(3));
          const { high, low } = utils.split(val);

          this.updateRam(state.sp.decr(1), high);
          this.updateRam(state.sp.decr(1), low);

          state.pc = utils.concatUint(this.byteAt(2), this.byteAt(1));
        } else {
          state.pc.incr(3);
        }
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
        // TODO: is this wrong?
        this.unimplementedInstruction(opcode);
        const { high, low } = utils.split(state.pc.add(2));

        this.updateRam(state.sp.decr(1), high);
        this.updateRam(state.sp.decr(1), low);

        state.pc = new Uint8(0x38);
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

    state.memory.splice(location, 1, value.clone());

    if (location >= 0x2400 && location <= 0x3fff) {
      // video ram
      this.updateScreen(location, value.val());
    }
  }

  private setFlags = (n: Uint, carry?: boolean): void => {
    const { state } = this;
    state.cc.z = toBit((n.val() & 0xff) === 0);
    state.cc.s = toBit((n.val() & 0x80) === 0x80);
    state.cc.ac = n.auxCarry;
    state.cc.p = this.parity(n.val());

    if (carry) {
      this.setCarryBit(n.carry);
    }
  };

  private setCarryBit = (n: Bit) => (this.state.cc.cy = n);

  private parity = (n: number): Bit => {
    const size = 8;
    let parity = 0;
    let calc = n;
    for (let i = 0; i < size; i++) {
      if (calc & 0x1) {
        parity++;
      }
      calc = calc >> 1;
    }
    return toBit(!(parity % 2));
  };

  private mov = (srcKey: string, destKey: string): void => {
    if (srcKey === 'm' || destKey === 'm') {
      throw new Error('src and dest cannot be a memory location');
    }

    const { state } = this;

    state[srcKey] = state[destKey].clone();

    state.pc.incr(1);
  };

  private movMem = (srcKey: string, destKey: string): void => {
    if (srcKey !== 'm' && destKey !== 'm') {
      throw new Error('must specify a memory location');
    }

    const { state } = this;

    if (srcKey === 'm') {
      this.updateRam(state.hl.val(), state[destKey]);
    } else {
      state[srcKey] = state.memory[state.hl.val()].clone();
    }

    state.pc.incr(1);
  };

  private ret = () => {
    const { state } = this;
    const low = state.memory[state.sp.val()];
    const high = state.memory[state.sp.incr(1)];

    state.pc = utils.concatUint(high, low);
    state.sp.incr(1);
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
