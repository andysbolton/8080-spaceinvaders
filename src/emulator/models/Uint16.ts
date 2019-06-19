// @flow
import Uint from './Uint';

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
}
