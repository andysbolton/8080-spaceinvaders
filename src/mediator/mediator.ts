import { IColleague } from './../common/interfaces/IColleague';
import { IMediator } from '../common/interfaces/IMediator';

export class Mediator implements IMediator {
  in: IColleague | undefined;
  out: IColleague | undefined;

  registerIn(colleague: IColleague): void {
    this.in = colleague;
  }

  registerOut(colleague: IColleague): void {
    this.out = colleague;
  }

  sendOut(port: number, val: number, isRam: boolean): void {
    if (!this.in) {
      throw new Error('`in` is not initialized');
    }
    this.in.receive(port, val, isRam);
  }

  sendIn(port: number, val: number, isRam: boolean): void {
    if (!this.out) {
      throw new Error('`out` is not initialized');
    }
    this.out.receive(port, val, isRam);
  }
}
