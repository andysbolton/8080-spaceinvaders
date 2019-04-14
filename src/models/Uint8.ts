// @flow
import Uint from './Uint';
import Ret from './Ret';

export default class Uint8 extends Uint {
  constructor(n?: number) {
    super(0xff, n);
  }

  public add(n: Uint8 | number): Ret {
    let val;
    if (typeof n === 'number') {
      val = this.num + n;
    } else {
      val = this.num + n.val();
    }

    return {
      val: new Uint8(val & this.max),
      carry: this.checkCarry(val),
    };
  }

  public sub(n: Uint8 | number): Ret {
    let val;
    if (typeof n === 'number') {
      val = this.num - n;
    } else {
      val = this.num - n.val();
    }

    return {
      val: new Uint8(val & this.max),
      carry: this.checkCarry(val),
    };
  }
}
