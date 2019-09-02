import Bit, { toBit } from './Bit';

export default abstract class Uint {
  protected num: number;
  protected max: number;
  public carry: Bit = 0;
  public auxCarry: Bit = 0;

  constructor(max: number, n: number = 0) {
    this.max = max;
    this.num = n & this.max;
  }

  public toString() {
    return this.num.toString();
  }

  public val(): number {
    return this.num;
  }

  public get isZero() {
    return this.num === 0;
  }

  public abstract add(n: Uint | number): Uint;

  public abstract sub(n: Uint | number): Uint;

  public abstract clone(): Uint;

  public abstract get highOrderBit(): Bit;

  public get lowOrderBit(): Bit {
    return toBit(this.num & 1);
  }

  public incr(n: number): number {
    const val = (this.num + n) & this.max;
    this.num = val;
    return val;
  }

  public decr(n: number): number {
    const val = (this.num - n) & this.max;
    this.num = val;
    return val;
  }

  public get hex(): string {
    return this.num.toString(16);
  }

  protected getCarry(val: number): Bit {
    const carry = val < 0 || val > this.max ? 1 : 0;

    return carry;
  }

  protected getAuxCarry(num: number, value: number, type: string): Bit {
    if (type === 'add') {
      return toBit((((num & 0xf) + (value & 0xf)) & 0x10) === 0x10);
    } else if (type === 'sub') {
      return toBit(!((num & 0xf) - (value & 0xf) < 0));
    } else if (type === 'and') {
      return toBit(((num | value) & 0x08) !== 0);
    }
    throw new Error('`type` must be "add", "sub", or "and"');
  }
}
