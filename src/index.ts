import { Painter } from './painter/painter';
import { Emulator } from './emulator/emulator';
import { Mediator } from './mediator/Mediator';

class Main {
  emulator: Emulator;

  constructor() {
    const mediator = new Mediator();
    this.emulator = new Emulator({ mediator, web: true, debug: true });
    const painter = new Painter(mediator);

    mediator.registerOut(this.emulator);
    mediator.registerIn(painter);
  }

  start() {
    this.emulator.init();
  }
}

new Main().start();
