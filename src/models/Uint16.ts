// @flow
import Uint from './Uint';
import Ret from './Ret';

export default class Uint16 extends Uint {
  constructor(n?: number) {
    super(0xffff, n);
  }

  public add(n: Uint16 | number): Ret {
    let val;
    if (typeof n === 'number') {
      val = this.num + n;
    } else {
      val = this.num + n.val();
    }

    return {
      val: new Uint16(val & this.max),
      carry: this.checkCarry(val),
    };
  }

  public sub(n: Uint16 | number): Ret {
    let val;
    if (typeof n === 'number') {
      val = this.num - n;
    } else {
      val = this.num - n.val();
    }

    return {
      val: new Uint16(val & this.max),
      carry: this.checkCarry(val),
    };
  }
}
