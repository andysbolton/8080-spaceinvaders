import { IMediator } from './../common/interfaces/IMediator';
import { IColleague } from './../common/interfaces/IColleague';
import ByteArray from '../emulator/models/ByteArray';
import { write } from 'fs';
import utils from '../emulator/utils/utils';
import Uint16 from '../emulator/models/Uint16';
import Bit from '../emulator/models/Bit';

export class Painter implements IColleague {
  canvas: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | null;
  mediator: IMediator;
  memory: ByteArray = ByteArray.create();
  private _painterCount: number = 0;
  private _x: number = 0x0;

  constructor(mediator: IMediator) {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.context = this.canvas.getContext && this.canvas.getContext('2d');
    this.mediator = mediator;
  }

  get painterCount() {
    if (this._painterCount++ > 0x20) {
      this._painterCount = 0;
      this._x++;
    }

    return this._x;
  }

  send(port: number, val: number, isRam: boolean): void {}

  receive(port: number, val: number, isRam: boolean): void {
    if (port >= 0x2400) {
      // const { high, low } = utils.split(new Uint16(port));
      // this.paint(high.val(), low.val(), val);
      let base = port - 0x2400;
      let y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
      let x = base >> 5;

      const bin = val.toString(2).padStart(8, '0');

      for (let i = 0; i < bin.length; i++) {
        this.paint(x, y + i, Number(bin.charAt(i)));
      }
    } else {
      this.write(port, val);
    }
  }

  private paint(x: number, y: number, isOn: number) {
    if (this.context) {
      this.context.clearRect(x, y, 1, 1);
      this.context.fillStyle = isOn ? 'white' : 'black';
      this.context.fillRect(x, y, 1, 1);
    }
  }

  //   receive(port: number, val: number, isRam: boolean): void {
  //   if (port >= 0x2400) {
  //     // const { high, low } = utils.split(new Uint16(port));
  //     // this.paint(high.val(), low.val(), val);
  //     let base = port - 0x2400;
  //     let y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
  //     let x = base >> 5;

  //     const sprite = val.toString(2).padEnd(8, '0');
  //     console.log(sprite);

  //     for (let i = 0; i < sprite.length; i++) {
  //       this.paint(x, y + i, toBit(sprite.charAt(i)));
  //     }
  //   } else {
  //     this.write(port, val);
  //   }
  // }

  // private paint(x: number, y: number, on: Bit) {
  //   if (this.context) {
  //     this.context.clearRect(x, y, 1, 1);
  //     this.context.fillStyle = on ? 'white' : 'black';
  //     this.context.fillRect(x, y, 1, 1);
  //   }
  //}

  private write(port: number, val: number) {
    switch (port) {
      case 2: // shift register result offset (bits 0,1,2)
        console.log('yep');
        // this.unimplementedInstruction(port, val);
        break;
      case 3: //sound related
        this.unimplementedInstruction(port, val);
        break;
      case 4: // fill shift register
        this.unimplementedInstruction(port, val);
        break;
      case 5: // sound related
        this.unimplementedInstruction(port, val);
        break;
      case 6: // debug port
        this.unimplementedInstruction(port, val);
        break;
      default:
        break;
    }
  }

  private unimplementedInstruction = (port: number, val: number) => {
    console.log(`Unimplemented code: port ${port} with value ${val}`);
  };
}
