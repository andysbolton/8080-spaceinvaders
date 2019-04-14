import Ret from './Ret';

export default abstract class Uint {
  protected num: number;
  protected max: number;

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

  public abstract add(n: Uint): Ret;

  public abstract sub(n: Uint): Ret;

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

  protected checkCarry(val: number): number {
    return val < 0 || val > this.max ? 1 : 0;
  }
}
