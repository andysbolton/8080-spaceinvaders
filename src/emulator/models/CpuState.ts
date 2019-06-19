// @flow
import Uint8 from './Uint8';
import Uint16 from './Uint16';
import ConditionCodes from './ConditionCodes';
import utils from '../utils/utils';
import ByteArray from './ByteArray';

export default class CpuState {
  [key: string]: any;

  a: Uint8 = new Uint8();

  b: Uint8 = new Uint8();

  c: Uint8 = new Uint8();

  d: Uint8 = new Uint8();

  e: Uint8 = new Uint8();

  h: Uint8 = new Uint8();

  l: Uint8 = new Uint8();

  sp: Uint16 = new Uint16();

  pc: Uint16 = new Uint16();

  memory: ByteArray = ByteArray.create();

  cc: ConditionCodes = new ConditionCodes();

  intEnable: Uint8 = new Uint8();

  get bc(): Uint16 {
    return utils.concatUint(this.b, this.c);
  }

  set bc(bytes: Uint16) {
    const { high, low } = utils.split(bytes);
    this.b = high;
    this.c = low;
  }

  get de(): Uint16 {
    return utils.concatUint(this.d, this.e);
  }

  set de(bytes: Uint16) {
    const { high, low } = utils.split(bytes);
    this.d = high;
    this.e = low;
  }

  get hl(): Uint16 {
    return utils.concatUint(this.h, this.l);
  }

  set hl(bytes: Uint16) {
    const { high, low } = utils.split(bytes);
    this.h = high;
    this.l = low;
  }
}
