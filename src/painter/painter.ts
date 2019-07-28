import { IMediator } from './../common/interfaces/IMediator';
import { IColleague } from './../common/interfaces/IColleague';
import Bit from '../emulator/models/Bit';

export class Painter implements IColleague {
  private canvas: HTMLCanvasElement | undefined;
  private context: CanvasRenderingContext2D | null;
  public mediator: IMediator;
  // private memory: ByteArray = ByteArray.create();
  // private _painterCount: number = 0;
  // private _x: number = 0x0;
  private events: Events;

  constructor(mediator: IMediator) {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.context = this.canvas.getContext && this.canvas.getContext('2d');
    this.mediator = mediator;
    this.events = new Events(this.send.bind(this));
    this.events.init();
  }

  send(port: number, pos: number, bit: Bit): void {
    this.mediator.sendIn(port, pos, bit);
  }

  receive(port: number, pos: number, bit: Bit): void {
    this.write(port, pos, bit);
  }

  updateScreen(addr: number, val: number) {
    const base = addr - 0x2400;
    const y = ~(((base & 0x1f) * 8) & 0xff) & 0xff;
    const x = base >> 5;

    const bin = val.toString(2).padStart(8, '0');

    for (let i = 0; i < bin.length; i++) {
      this.paint(x, y + i, Number(bin.charAt(i)));
    }
  }

  private paint(x: number, y: number, on: number) {
    if (this.context) {
      // this.context.clearRect(x, y, 1, 1);
      this.context.fillStyle = on ? 'white' : 'black';
      this.context.fillRect(x * 3, y * 3, 3, 3);
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

  // private onKeyPress(port: number, pos: number, val: Bit) {
  //   this.send(port, pos, val);
  // }

  private write(port: number, pos: number, bit: Bit) {
    switch (port) {
      case 2: // shift register result offset (bits 0,1,2)
        console.log('yep');
        // this.unimplementedInstruction(port, val);
        break;
      case 3: //sound related
        this.unimplementedInstruction(port, pos);
        break;
      case 4: // fill shift register
        this.unimplementedInstruction(port, pos);
        break;
      case 5: // sound related
        this.unimplementedInstruction(port, pos);
        break;
      case 6: // debug port
        this.unimplementedInstruction(port, pos);
        break;
      default:
        break;
    }
  }

  private unimplementedInstruction = (port: number, val: number) => {
    console.log(`Unimplemented code: port ${port} with value ${val}`);
  };
}

// TODO: add input
class Events {
  private onKeyPress(port: number, bit: number, val: Bit) {}

  constructor(onKeyPress: any) {
    this.onKeyPress = onKeyPress;
  }

  public init() {
    window.onkeydown = e => {
      const key = e.keyCode ? e.keyCode : e.which;

      switch (key) {
        case 16: {
          // shift
          this.onKeyPress(1, 0, 1);
        }
      }
    };
  }
}
