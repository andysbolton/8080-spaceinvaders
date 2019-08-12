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

  public abstract add(n: Uint): Uint;

  public abstract sub(n: Uint): Uint;

  public abstract clone(): Uint;

  public abstract get highOrderBit(): Bit;

  public get lowOrderBit(): Bit {
    return toBit(this.num & 1);
  }

  public abstract rotateLeft(): Uint;

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

  protected checkCarry(val: number): { carry: Bit; auxCarry: Bit } {
    const carry = val < 0 || val > this.max ? 1 : 0;
    const auxCarry = val < 0 || val > this.max / 2 ? 1 : 0;

    return {
      carry,
      auxCarry,
    };
  }
}
