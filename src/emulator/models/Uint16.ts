// @flow
import Uint from './Uint';
import Bit, { toBit } from './Bit';

export default class Uint16 extends Uint {
  constructor(n?: number) {
    super(0xffff, n);
  }

  public add(n: Uint16 | number): Uint16 {
    let val;
    if (typeof n === 'number') {
      val = this.num + n;
    } else {
      val = this.num + n.val();
    }

    const ret = new Uint16(val & this.max);

    const { carry, auxCarry } = this.checkCarry(val);
    ret.carry = carry;
    ret.auxCarry = auxCarry;

    return ret;
  }

  public sub(n: Uint16 | number): Uint16 {
    let val;
    if (typeof n === 'number') {
      val = this.num - n;
    } else {
      val = this.num - n.val();
    }

    const ret = new Uint16(val & this.max);

    const { carry, auxCarry } = this.checkCarry(val);
    ret.carry = carry;
    ret.auxCarry = auxCarry;

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
