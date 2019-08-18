import Emulator from '../emulator/emulator';
import { Mediator } from '../mediator/Mediator';
import Uint16 from '../emulator/models/Uint16';
import Uint8 from '../emulator/models/Uint8';
import fs from 'fs';

describe('8080 Tests', () => {
  it.each([
    // ['8080PRE.COM', 7817],
    ['TST8080.COM', 4924],
    // ['8080EXM.COM', 23803381171],
    // ['CPUTEST.COM', 255653383],
  ])('should run test file %s with %i cyles', async (file, cycles) => {
    const mediator = new Mediator();
    const emulator = new Emulator({ mediator: mediator, test: true });

    const rom = fs.readFileSync('./src/test/' + file);

    emulator.state.memory.set([...rom], 0x100);

    emulator.state.pc = new Uint16(0x100);
    // inject "out 1,a" at 0x0000 (signal to stop the test)
    emulator.state.memory[0x0000] = new Uint8(0xd3);
    emulator.state.memory[0x0001] = new Uint8(0x00);

    // inject "in a,0" at 0x0005 (signal to output some characters)
    emulator.state.memory[0x0005] = new Uint8(0xdb);
    emulator.state.memory[0x0006] = new Uint8(0x00);
    emulator.state.memory[0x0007] = new Uint8(0xc9);

    const actualCycles = await emulator.run();

    expect(actualCycles).toEqual(cycles);
  });
});
