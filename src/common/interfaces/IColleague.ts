import { IMediator } from './IMediator';
import Bit from '../../emulator/models/Bit';

export interface IColleague {
  mediator: IMediator;

  send(port: number, pos: number, val: Bit): void;
  receive(port: number, pos: number, val: Bit): void;
  updateScreen(addr: number, val: number): void;
}
