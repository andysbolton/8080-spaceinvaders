import { IMediator } from './IMediator';

export interface IColleague {
  mediator: IMediator;

  send(port: number, val: number, isRam: boolean): void;
  receive(port: number, val: number, isRam: boolean): void;
}
