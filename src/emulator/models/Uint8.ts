import Uint from './Uint';
import Bit, { toBit } from './Bit';

export default class Uint8 extends Uint {
  constructor(n?: number) {
    super(0xff, n);
  }

  public add(n: Uint8 | number): Uint8 {
    const val = typeof n === 'number' ? n : n.val();
    const res = this.num + val;

    const ret = new Uint8(res);

    ret.carry = this.getCarry(res);
    ret.auxCarry = this.getAuxCarry(this.num, val, 'add');

    return ret;
  }

  public sub(n: Uint8 | number): Uint8 {
    const val = typeof n === 'number' ? n : n.val();
    const res = this.num - val;

    const ret = new Uint8(res);

    ret.carry = this.getCarry(res);
    ret.auxCarry = this.getAuxCarry(this.num, val, 'sub');

    return ret;
  }

  public and(n: Uint8 | number): Uint8 {
    const val = typeof n === 'number' ? n : n.val();
    const res = this.num & val;

    const ret = new Uint8(res);

    ret.carry = this.getCarry(res);
    ret.auxCarry = this.getAuxCarry(this.num, val, 'and');

    return ret;
  }

  public get highOrderBit(): Bit {
    return toBit(this.num >> 7);
  }

  public rotateLeft(): Uint8 {
    return new Uint8((this.num << 1) & 0xff);
  }

  public clone(): Uint8 {
    return new Uint8(this.num);
  }
}
