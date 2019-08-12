import { IColleague } from './IColleague';
import Bit from '../../emulator/models/Bit';

export interface IMediator {
  in: IColleague | undefined;
  out: IColleague | undefined;

  registerIn(colleague: IColleague): void;
  registerOut(colleague: IColleague): void;
  sendOut(port: number, pos: number, bit?: Bit): void;
  sendIn(port: number, pos: number, bit?: Bit): void;
  updateScreen(addr: number, val: number): void;
}
