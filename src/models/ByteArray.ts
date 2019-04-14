import Uint8 from "./Uint8";

export default class ByteArray extends Array {
  private max: number = 0;

  private constructor() {
    super();
  }

  static create(): ByteArray {
    return Object.create(ByteArray.prototype);
  }

  [key: number]: Uint8;

  public alloc(n: number) {
    this.max = n;
    this.fill(new Uint8(), n);
  }

  public set(n: Array<number>) {
    n.forEach((val, indx) => {
      this[indx] = new Uint8(val);
    })
  }
}
