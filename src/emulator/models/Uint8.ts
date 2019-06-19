// @flow
import Uint from './Uint';

export default class Uint8 extends Uint {
  constructor(n?: number) {
    super(0xff, n);
  }

  public add(n: Uint8 | number): Uint8 {
    let val;
    if (typeof n === 'number') {
      val = this.num + n;
    } else {
      val = this.num + n.val();
    }

    const ret = new Uint8(val & this.max);

    const { carry, auxCarry } = this.checkCarry(val);
    ret.carry = carry;
    ret.auxCarry = auxCarry;

    return ret;
  }

  public sub(n: Uint8 | number): Uint8 {
    let val;
    if (typeof n === 'number') {
      val = this.num - n;
    } else {
      val = this.num - n.val();
    }

    const ret = new Uint8(val & this.max);

    const { carry, auxCarry } = this.checkCarry(val);
    ret.carry = carry;
    ret.auxCarry = auxCarry;

    return ret;
  }
}
