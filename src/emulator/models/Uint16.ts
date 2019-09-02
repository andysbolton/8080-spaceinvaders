import Uint from './Uint';
import Bit, { toBit } from './Bit';

export default class Uint16 extends Uint {
  constructor(n?: number) {
    super(0xffff, n);
  }

  public add(n: Uint16 | number): Uint16 {
    const val = typeof n === 'number' ? n : n.val();
    const res = this.num + val;

    const ret = new Uint16(res & this.max);

    ret.carry = this.getCarry(res);
    ret.auxCarry = this.getAuxCarry(this.num, res, 'add');

    return ret;
  }

  public sub(n: Uint16 | number): Uint16 {
    const val = typeof n === 'number' ? n : n.val();
    const res = this.num - val;

    const ret = new Uint16(res & this.max);

    ret.carry = this.getCarry(res);
    ret.auxCarry = this.getAuxCarry(this.num, val, 'sub');

    return ret;
  }

  public get highOrderBit(): Bit {
    return toBit(this.num >> 15);
  }

  public rotateLeft(): Uint16 {
    return new Uint16((this.num << 1) & 0xffff);
  }

  public clone(): Uint16 {
    return new Uint16(this.num);
  }
}
