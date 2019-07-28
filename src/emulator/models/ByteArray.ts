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
    for (let i = 0; i < n; i++) {
      this.push(new Uint8());
    }
  }

  public set(n: Array<number>) {
    n.forEach(val => {
      this.push(new Uint8(val));
    });
  }
}
