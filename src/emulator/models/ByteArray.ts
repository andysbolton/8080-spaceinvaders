import Uint8 from './Uint8';

export default class ByteArray extends Array {
  [key: number]: Uint8;

  private max: number = 0;

  private constructor() {
    super();
  }

  static create(): ByteArray {
    return Object.create(ByteArray.prototype);
  }

  public alloc(n: number) {
    this.max = n;
    this.fill(new Uint8(), n);
  }

  public set(n: Array<number>) {
    n.forEach((val, indx) => {
      this[indx] = new Uint8(val);
    });
  }
}
