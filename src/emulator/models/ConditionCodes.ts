// @flow
import Uint8 from './Uint8';
import Bit, { toBit } from './Bit';

export default class ConditionCodes {
  z: Bit = 0;

  s: Bit = 0;

  p: Bit = 0;

  cy: Bit = 0;

  ac: Bit = 0;

  pad: Bit = 0;

  getPsw(): Uint8 {
    const val = this.s + this.z + '0' + this.ac + '0' + this.p + '1' + this.cy;
    return new Uint8(parseInt(val, 2));
  }

  setPsw(n: Uint8) {
    const binary = n
      .val()
      .toString(2)
      .padStart(8, '0');
    const [s, z, , ac, , p, , cy] = binary.split('').map(s => Number(s));
    this.s = toBit(s);
    this.z = toBit(z);
    this.ac = toBit(ac);
    this.p = toBit(p);
    this.cy = toBit(cy);
  }
}
