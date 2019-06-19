import { IColleague } from './IColleague';

export interface IMediator {
  in: IColleague | undefined;
  out: IColleague | undefined;

  registerIn(colleague: IColleague): void;
  registerOut(colleague: IColleague): void;
  sendOut(port: number, val: number, isRam: boolean): void;
  sendIn(port: number, val: number, isRam: boolean): void;
}
